#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "yaml"

MICROSITE_ROOT = File.expand_path("..", __dir__)
REPO_ROOT = File.expand_path("..", MICROSITE_ROOT)
FRAMEWORKS_ROOT = File.join(REPO_ROOT, ["c", "a", "i", "r", "n"].join, "frameworks")
AIUC_ROOT = File.join(FRAMEWORKS_ROOT, "aiuc-1")
OUTFILE = File.join(MICROSITE_ROOT, "assets", "js", "02-data.js")
OUTFILE_REQUIREMENTS = File.join(MICROSITE_ROOT, "assets", "js", "02a-data-requirements.js")
OUTFILE_CROSSWALKS = File.join(MICROSITE_ROOT, "assets", "js", "02b-data-crosswalks.js")
OUTFILE_RECOMMENDATIONS = File.join(MICROSITE_ROOT, "assets", "js", "02c-data-recommendations.js")
CHECK_ONLY = ARGV.include?("--check")

TARGET_META = {
  "eu-ai-act" => { title: "EU AI Act", publisher: "European Union", category: "regulation", geo: "EU" },
  "nist-ai-rmf" => { title: "NIST AI RMF", publisher: "NIST", category: "standard", geo: "US (advisory)" },
  "iso-42001" => { title: "ISO/IEC 42001", publisher: "ISO", category: "standard", geo: "International" },
  "csa-aicm" => { title: "CSA AI Controls Matrix", publisher: "Cloud Security Alliance", category: "standard", geo: "International" },
  "ibm-ai-risk-atlas" => { title: "IBM AI Risk Atlas", publisher: "IBM Research", category: "threat-model", geo: "International" },
  "cisco-ai-security-safety-framework" => { title: "Cisco AI Security & Safety Framework", publisher: "Cisco", category: "threat-model", geo: "International" },
  "owasp-llm-top10" => { title: "OWASP LLM Top 10", publisher: "OWASP", category: "threat-model", geo: "International" },
  "owasp-aivss" => { title: "OWASP AIVSS", publisher: "OWASP", category: "threat-model", geo: "International" },
  "mitre-atlas" => { title: "MITRE ATLAS", publisher: "MITRE", category: "threat-model", geo: "International" },
  "hipaa" => { title: "HIPAA", publisher: "US Department of HHS", category: "regulation", geo: "US (federal)" },
  "fcra" => { title: "FCRA", publisher: "US FTC / CFPB", category: "regulation", geo: "US (federal)" },
  "fha" => { title: "Fair Housing Act", publisher: "US HUD", category: "regulation", geo: "US (federal)" },
  "ftc-ai" => { title: "FTC AI Guidance", publisher: "US FTC", category: "regulation", geo: "US (federal)" },
  "nyc-ll-144" => { title: "NYC Local Law 144", publisher: "NYC DCWP", category: "regulation", geo: "US-NYC" },
  "california-sb-53" => { title: "California SB 53", publisher: "California (state)", category: "regulation", geo: "US-California" },
  "colorado-ai-act" => { title: "Colorado AI Act", publisher: "Colorado (state)", category: "regulation", geo: "US-Colorado" },
  "oecd-principles" => { title: "OECD AI Principles", publisher: "OECD", category: "standard", geo: "International" }
}.freeze

def load_yaml(path)
  YAML.load_file(path)
end

def compact_multiline(value)
  value.to_s.split(/\s+/).join(" ").strip
end

def titleize_slug(slug)
  slug.split("-").map(&:capitalize).join(" ")
end

def js_const(name, value)
  "const #{name} = #{JSON.pretty_generate(value)};\n"
end

framework = load_yaml(File.join(AIUC_ROOT, "framework.yaml"))
principles = framework.fetch("organizing_units").sort_by { |unit| unit.fetch("order") }.map do |unit|
  {
    code: unit.fetch("code"),
    name: unit.fetch("name"),
    desc: compact_multiline(unit.fetch("description"))
  }
end

requirements_by_id = {}
requirement_records = []
Dir[File.join(AIUC_ROOT, "principles", "*.yaml")].sort.each do |path|
  load_yaml(path).fetch("requirements").each do |requirement|
    requirement_records << requirement
    next unless requirement.fetch("status", "active") == "active"

    requirements_by_id[requirement.fetch("id")] = requirement.fetch("title")
  end
end

universal = requirement_records
  .select do |requirement|
    requirement.fetch("status", "active") == "active" &&
      requirement["mandatory"] == true &&
      Array(requirement["capabilities"]).include?("universal")
  end
  .map { |requirement| requirement.fetch("id") }
  .sort

derivation_rules = load_yaml(File.join(AIUC_ROOT, "scoping", "derivation.yaml")).fetch("rules")
modality_activations = {}
automation_activations = []
external_activations = []

derivation_rules.each do |rule|
  activated = Array(rule["activates_requirements"])
  case rule.fetch("id")
  when "r-external-facing"
    external_activations = activated
  when "r-automation"
    automation_activations = activated
  when /\Ar-(.+)-modality\z/
    modality_activations[Regexp.last_match(1)] = activated
  end
end

questions = load_yaml(File.join(AIUC_ROOT, "scoping", "questionnaire.yaml"))
  .fetch("parts")
  .flat_map { |part| part.fetch("questions") }
  .to_h { |question| [question.fetch("id"), question] }

recommendation_rules = load_yaml(File.join(FRAMEWORKS_ROOT, "recommendations.yaml")).fetch("rules").map do |rule|
  {
    id: rule.fetch("id"),
    why: rule.fetch("description"),
    when: rule.fetch("when"),
    recommends: Array(rule.fetch("recommends"))
  }
end

crosswalks = []
principle_distribution = {}
crosswalk_sources = {}
framework_meta = {}

Dir[File.join(AIUC_ROOT, "crosswalks", "*.yaml")].sort.each do |path|
  source = load_yaml(path)
  slug = source.fetch("target_framework")
  mappings = Array(source["mappings"])
  active_mappings = mappings.select { |mapping| requirements_by_id.key?(mapping.fetch("source")) }
  unique_sources = active_mappings.map { |mapping| mapping.fetch("source") }.uniq.sort
  distribution = principles.to_h { |principle| [principle[:code], 0] }

  unique_sources.each do |requirement_id|
    principle_code = requirement_id[0]
    distribution[principle_code] += 1 if distribution.key?(principle_code)
  end

  meta = TARGET_META.fetch(slug, {
    title: titleize_slug(slug),
    publisher: source.fetch("publisher", "AIUC"),
    category: "standard",
    geo: "International"
  })

  crosswalks << {
    slug: slug,
    title: meta.fetch(:title),
    publisher: meta.fetch(:publisher),
    counts: {
      unique: unique_sources.length,
      total: active_mappings.length
    },
    blurb: compact_multiline(source.fetch("description")),
    samples: active_mappings.first(12).map { |mapping| [mapping.fetch("source"), mapping.fetch("target")] }
  }
  principle_distribution[slug] = distribution
  crosswalk_sources[slug] = unique_sources
  framework_meta[slug] = {
    category: meta.fetch(:category),
    geo: meta.fetch(:geo),
    sourceUrl: source.fetch("source_url")
  }
end

preferred_order = TARGET_META.keys
crosswalks.sort_by! { |crosswalk| [preferred_order.index(crosswalk.fetch(:slug)) || preferred_order.length, crosswalk.fetch(:title)] }

modalities = Array(questions.fetch("q_input_modalities").fetch("options")).map do |option|
  { id: option, label: option.capitalize }
end
jurisdictions = Array(questions.fetch("q_jurisdictions").fetch("options"))
  .reject { |option| option == "Other" }
  .map { |option| { id: option, label: option.start_with?("US-") ? option.sub("US-", "US — ") : option } }
audience = Array(questions.fetch("q_audience").fetch("options"))
data_categories = Array(questions.fetch("q_data_categories").fetch("options"))
  .reject { |option| option == "none of the above" }

generated = +"\"use strict\";\n\n"
generated << "/* ============================================================\n"
generated << "   DATA — generated from source framework YAML\n"
generated << "   Run `ruby scripts/generate-data.rb` after framework changes.\n"
generated << "   ============================================================ */\n\n"
generated << js_const("PRINCIPLES", principles)
generated << "\n"
generated << js_const("REQUIREMENTS", requirements_by_id.sort.to_h)
generated << "\n"
generated << js_const("UNIVERSAL", universal)
generated << "\n"
generated << js_const("MODALITY_ACTIVATIONS", modality_activations)
generated << "\n"
generated << js_const("AUTOMATION_ACTIVATIONS", automation_activations)
generated << js_const("EXTERNAL_ACTIVATIONS", external_activations)
generated << "\n"
generated << js_const("RECOMMENDATION_RULES", recommendation_rules)
generated << "\n"
generated << js_const("CROSSWALKS", crosswalks)
generated << "\n"
generated << "const CROSSWALKS_BY_SLUG = Object.fromEntries(CROSSWALKS.map(c => [c.slug, c]));\n\n"
generated << js_const("PRINCIPLE_DISTRIBUTION", principle_distribution.sort.to_h)
generated << "\n"
generated << js_const("CROSSWALK_SOURCES", crosswalk_sources.sort.to_h)
generated << "\n"
generated << js_const("FRAMEWORK_META", framework_meta.sort.to_h)
generated << "\n"
generated << js_const("MODALITIES", modalities)
generated << "\n"
generated << js_const("JURISDICTIONS", jurisdictions)
generated << "\n"
generated << js_const("AUDIENCE", audience)
generated << "\n"
generated << js_const("DATA_CATEGORIES", data_categories)

# ---------------------------------------------------------------
# 02a-data-requirements.js — full requirement detail by id
# ---------------------------------------------------------------
requirements_detail = {}
Dir[File.join(AIUC_ROOT, "principles", "*.yaml")].sort.each do |path|
  load_yaml(path).fetch("requirements").each do |requirement|
    next unless requirement.fetch("status", "active") == "active"

    sub_controls = Array(requirement["sub_controls"]).map do |sub|
      record = {
        id: sub.fetch("id"),
        title: sub.fetch("title"),
        application: sub.fetch("application"),
        mandatory: sub.fetch("mandatory"),
        severity: sub.fetch("severity"),
        guidance: compact_multiline(sub.fetch("guidance"))
      }
      record[:should_include] = Array(sub["should_include"]) if sub.key?("should_include")
      record
    end

    requirements_detail[requirement.fetch("id")] = {
      description: compact_multiline(requirement.fetch("description")),
      capabilities: Array(requirement["capabilities"]),
      frequency: requirement["frequency"],
      mandatory: requirement.fetch("mandatory", false),
      sub_controls: sub_controls
    }
  end
end

requirements_generated = +"\"use strict\";\n\n"
requirements_generated << "/* ============================================================\n"
requirements_generated << "   REQUIREMENTS DETAIL — generated from source framework YAML\n"
requirements_generated << "   Run `ruby scripts/generate-data.rb` after framework changes.\n"
requirements_generated << "   ============================================================ */\n\n"
requirements_generated << js_const("REQUIREMENTS_DETAIL", requirements_detail.sort.to_h)

# ---------------------------------------------------------------
# 02b-data-crosswalks.js — full crosswalk detail with all mappings
# ---------------------------------------------------------------
crosswalk_details = {}
Dir[File.join(AIUC_ROOT, "crosswalks", "*.yaml")].sort.each do |path|
  source = load_yaml(path)
  slug = source.fetch("target_framework")

  mappings = Array(source["mappings"]).map do |mapping|
    record = {
      source: mapping.fetch("source"),
      target: mapping.fetch("target"),
      relationship: mapping.fetch("relationship"),
      confidence: mapping.fetch("confidence"),
      notes: compact_multiline(mapping.fetch("notes", ""))
    }
    record[:target_title] = mapping["target_title"] if mapping.key?("target_title")
    record
  end

  meta = TARGET_META.fetch(slug, {
    title: titleize_slug(slug),
    publisher: source.fetch("publisher", "AIUC"),
    category: "standard",
    geo: "International"
  })

  detail = {
    description: compact_multiline(source.fetch("description")),
    target_version: source.fetch("target_version", nil).to_s,
    target_framework_name: source.fetch("target_framework_name", meta.fetch(:title)),
    publisher: source.fetch("publisher", meta.fetch(:publisher)),
    source_url: source.fetch("source_url"),
    last_updated: source.fetch("last_updated", nil).to_s,
    mappings: mappings
  }

  crosswalk_details[slug] = detail
end

crosswalks_generated = +"\"use strict\";\n\n"
crosswalks_generated << "/* ============================================================\n"
crosswalks_generated << "   CROSSWALK DETAILS — generated from source framework YAML\n"
crosswalks_generated << "   Run `ruby scripts/generate-data.rb` after framework changes.\n"
crosswalks_generated << "   ============================================================ */\n\n"
crosswalks_generated << js_const("CROSSWALK_DETAILS", crosswalk_details.sort.to_h)

# ---------------------------------------------------------------
# 02c-data-recommendations.js — recommendation rules verbatim
# ---------------------------------------------------------------
recommendation_rules_full = load_yaml(File.join(FRAMEWORKS_ROOT, "recommendations.yaml")).fetch("rules").map do |rule|
  {
    id: rule.fetch("id"),
    description: rule.fetch("description"),
    when: rule.fetch("when"),
    recommends: Array(rule.fetch("recommends"))
  }
end

recommendations_generated = +"\"use strict\";\n\n"
recommendations_generated << "/* ============================================================\n"
recommendations_generated << "   RECOMMENDATION RULES — generated from source framework YAML\n"
recommendations_generated << "   Run `ruby scripts/generate-data.rb` after framework changes.\n"
recommendations_generated << "   ============================================================ */\n\n"
recommendations_generated << js_const("RECOMMENDATION_RULES_DETAIL", recommendation_rules_full)

OUTPUTS = [
  [OUTFILE, generated],
  [OUTFILE_REQUIREMENTS, requirements_generated],
  [OUTFILE_CROSSWALKS, crosswalks_generated],
  [OUTFILE_RECOMMENDATIONS, recommendations_generated]
].freeze

if CHECK_ONLY
  out_of_parity = OUTPUTS.reject do |path, contents|
    File.exist?(path) && File.read(path, encoding: "UTF-8") == contents
  end

  if out_of_parity.empty?
    puts "Microsite data is in parity with source framework data."
  else
    out_of_parity.each do |path, _|
      warn "Out of parity: #{File.basename(path)}"
    end
    warn "Run `ruby scripts/generate-data.rb`."
    exit 1
  end
else
  OUTPUTS.each { |path, contents| File.write(path, contents) }
end
