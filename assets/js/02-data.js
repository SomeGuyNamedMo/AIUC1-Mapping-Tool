"use strict";

/* ============================================================
   DATA — generated from source framework YAML
   Run `ruby scripts/generate-data.rb` after framework changes.
   ============================================================ */

const PRINCIPLES = [
  {
    "code": "A",
    "name": "Data & Privacy",
    "desc": "Protect against data leakage, IP leakage, and training on user data without consent"
  },
  {
    "code": "B",
    "name": "Security",
    "desc": "Protect against adversarial attacks like jailbreaks, prompt injections, and unauthorized tool calls"
  },
  {
    "code": "C",
    "name": "Safety",
    "desc": "Prevent harmful AI outputs and brand risk through testing, monitoring, and safeguards"
  },
  {
    "code": "D",
    "name": "Reliability",
    "desc": "Prevent hallucinations and unreliable tool calls to business systems"
  },
  {
    "code": "E",
    "name": "Accountability",
    "desc": "Assign accountability, enforce oversight, create emergency responses, and vet suppliers"
  },
  {
    "code": "F",
    "name": "Society",
    "desc": "Prevent AI from enabling societal harm through cyberattacks or national security risks"
  }
];

const REQUIREMENTS = {
  "A001": "Establish input data policy",
  "A002": "Establish output data policy",
  "A003": "Limit AI agent data collection",
  "A004": "Protect IP & trade secrets",
  "A005": "Prevent cross-customer data exposure",
  "A006": "Prevent PII leakage",
  "A007": "Prevent IP violations",
  "B001": "Third-party testing of adversarial robustness",
  "B002": "Detect adversarial input",
  "B003": "Manage public release of technical details",
  "B004": "Prevent AI endpoint scraping",
  "B005": "Implement real-time input filtering",
  "B006": "Prevent unauthorized AI agent actions",
  "B007": "Enforce user access privileges to AI systems",
  "B008": "Protect model deployment environment",
  "B009": "Limit output over-exposure",
  "C001": "Define AI risk taxonomy",
  "C002": "Conduct pre-deployment testing",
  "C003": "Prevent harmful outputs",
  "C004": "Prevent out-of-scope outputs",
  "C005": "Prevent customer-defined high risk outputs",
  "C006": "Prevent output vulnerabilities",
  "C007": "Flag high risk outputs",
  "C008": "Monitor AI risk categories",
  "C009": "Enable real-time feedback and intervention",
  "C010": "Third-party testing for harmful outputs",
  "C011": "Third-party testing for out-of-scope outputs",
  "C012": "Third-party testing for customer-defined risk",
  "D001": "Prevent hallucinated outputs",
  "D002": "Third-party testing for hallucinations",
  "D003": "Restrict unsafe tool calls",
  "D004": "Third-party testing of tool calls",
  "E001": "AI failure plan for security breaches",
  "E002": "AI failure plan for harmful outputs",
  "E003": "AI failure plan for hallucinations",
  "E004": "Assign accountability",
  "E005": "Assess cloud vs on-prem processing",
  "E006": "Conduct vendor due diligence",
  "E008": "Review internal processes",
  "E009": "Monitor third-party access",
  "E010": "Establish AI acceptable use policy",
  "E011": "Record processing locations",
  "E012": "Document regulatory compliance",
  "E013": "Implement quality management system",
  "E015": "Log model activity",
  "E016": "Implement AI disclosure mechanisms",
  "E017": "Document system transparency policy",
  "F001": "Prevent AI cyber misuse",
  "F002": "Prevent catastrophic misuse"
};

const UNIVERSAL = [
  "A001",
  "A002",
  "A003",
  "A004",
  "A005",
  "A006",
  "B001",
  "B004",
  "B007",
  "B008",
  "C001",
  "C002",
  "C005",
  "C006",
  "C012",
  "E001",
  "E004",
  "E005",
  "E006",
  "E008",
  "E010",
  "E011",
  "E012",
  "E015",
  "E016"
];

const MODALITY_ACTIVATIONS = {
  "text": [
    "A007",
    "B005",
    "B009",
    "C003",
    "C004",
    "C010",
    "C011",
    "D001",
    "D002",
    "E002",
    "E003",
    "F001",
    "F002"
  ],
  "voice": [
    "A007",
    "B005",
    "B009",
    "C003",
    "C004",
    "C010",
    "C011",
    "D001",
    "D002",
    "E002",
    "E003",
    "F001",
    "F002"
  ],
  "image": [
    "A007",
    "B005",
    "C003",
    "C010",
    "E002",
    "F002"
  ],
  "video": [
    "A007",
    "B005",
    "C003",
    "C010",
    "E002",
    "F002"
  ]
};

const AUTOMATION_ACTIVATIONS = [
  "B006",
  "D003",
  "D004",
  "F001"
];
const EXTERNAL_ACTIVATIONS = [
  "A007"
];

const RECOMMENDATION_RULES = [
  {
    "id": "eu-jurisdiction",
    "why": "Users in the EU trigger EU AI Act assessment",
    "when": {
      "q_jurisdictions_includes": "EU"
    },
    "recommends": [
      "eu-ai-act"
    ]
  },
  {
    "id": "california-sb-53",
    "why": "California users trigger SB 53 (frontier AI transparency)",
    "when": {
      "q_jurisdictions_includes": "US-California"
    },
    "recommends": [
      "california-sb-53"
    ]
  },
  {
    "id": "colorado-ai-act",
    "why": "Colorado users trigger the Colorado AI Act",
    "when": {
      "q_jurisdictions_includes": "US-Colorado"
    },
    "recommends": [
      "colorado-ai-act"
    ]
  },
  {
    "id": "nyc-employment",
    "why": "NYC users + employment-decision use cases trigger Local Law 144",
    "when": {
      "all": [
        {
          "q_jurisdictions_includes": "US-NYC"
        },
        {
          "q_audience_includes": "employees"
        }
      ]
    },
    "recommends": [
      "nyc-ll-144"
    ]
  },
  {
    "id": "children-product",
    "why": "Apps facing children trigger child-safety frameworks",
    "when": {
      "any": [
        {
          "q_audience_includes": "children (under 13)"
        },
        {
          "q_data_categories_includes": "children's data"
        }
      ]
    },
    "recommends": [
      "kidsafe-framework"
    ]
  },
  {
    "id": "healthcare",
    "why": "Healthcare data or healthcare-patient audience triggers HIPAA",
    "when": {
      "any": [
        {
          "q_data_categories_includes": "PHI"
        },
        {
          "q_audience_includes": "healthcare patients"
        }
      ]
    },
    "recommends": [
      "hipaa"
    ]
  },
  {
    "id": "financial-services",
    "why": "Finance audience or financial data triggers FCRA + FTC AI guidance",
    "when": {
      "any": [
        {
          "q_audience_includes": "finance customers"
        },
        {
          "q_data_categories_includes": "financial data"
        }
      ]
    },
    "recommends": [
      "fcra",
      "ftc-ai"
    ]
  },
  {
    "id": "housing-services",
    "why": "Housing data or housing-related decisions trigger the Fair Housing Act",
    "when": {
      "q_data_categories_includes": "housing decisions"
    },
    "recommends": [
      "fha"
    ]
  }
];

const CROSSWALKS = [
  {
    "slug": "eu-ai-act",
    "title": "EU AI Act",
    "publisher": "European Union",
    "counts": {
      "unique": 29,
      "total": 58
    },
    "blurb": "AIUC-1 operationalizes EU AI Act provider obligations. The crosswalk enables compliance for minimal- and limited-risk systems, supports high-risk system compliance when specific controls are met, and provides documentation usable for the conformity assessment required under Annex VI. Mappings target the most directly relevant Article(s) per AIUC-1 Requirement; broader Articles like 13 (transparency) and 72 (post-market monitoring) recur across multiple Requirements.",
    "samples": [
      [
        "A001",
        "Article-11"
      ],
      [
        "A004",
        "Article-72"
      ],
      [
        "A006",
        "Article-72"
      ],
      [
        "B002",
        "Article-15"
      ],
      [
        "B002",
        "Article-72"
      ],
      [
        "B004",
        "Article-15"
      ],
      [
        "B008",
        "Article-15"
      ],
      [
        "C001",
        "Article-9"
      ],
      [
        "C002",
        "Article-9"
      ],
      [
        "C002",
        "Article-27"
      ],
      [
        "C003",
        "Article-9"
      ],
      [
        "C004",
        "Article-72"
      ]
    ]
  },
  {
    "slug": "nist-ai-rmf",
    "title": "NIST AI RMF",
    "publisher": "NIST",
    "counts": {
      "unique": 42,
      "total": 138
    },
    "blurb": "AIUC-1 operationalizes the NIST AI Risk Management Framework by translating the Govern, Map, Measure, and Manage functions into specific, auditable controls with implementation guidance. The crosswalk shows how each AIUC-1 Requirement contributes to one or more NIST sub-categories. Coverage is particularly dense across MEASURE 2.x (TEVV documentation) and MANAGE 1.x (risk treatment).",
    "samples": [
      [
        "E012",
        "GOVERN-1.1"
      ],
      [
        "E010",
        "GOVERN-1.2"
      ],
      [
        "E017",
        "GOVERN-1.2"
      ],
      [
        "C001",
        "GOVERN-1.3"
      ],
      [
        "E013",
        "GOVERN-1.3"
      ],
      [
        "C001",
        "GOVERN-1.4"
      ],
      [
        "E013",
        "GOVERN-1.4"
      ],
      [
        "B002",
        "GOVERN-1.5"
      ],
      [
        "C008",
        "GOVERN-1.5"
      ],
      [
        "E009",
        "GOVERN-1.5"
      ],
      [
        "E011",
        "GOVERN-1.6"
      ],
      [
        "E017",
        "GOVERN-1.6"
      ]
    ]
  },
  {
    "slug": "iso-42001",
    "title": "ISO/IEC 42001",
    "publisher": "ISO",
    "counts": {
      "unique": 27,
      "total": 91
    },
    "blurb": "AIUC-1 incorporates the majority of controls from ISO/IEC 42001 while translating ISO's management-system approach into concrete, auditable requirements. AIUC-1 extends ISO 42001 with third-party testing for hallucinations and jailbreak attempts, plus AI-specific failure plans and deployment-environment security requirements. Mappings frequently span multiple ISO clauses because AIUC-1 Requirements are scoped narrower than ISO management-system clauses.",
    "samples": [
      [
        "A001",
        "A.7.2"
      ],
      [
        "A001",
        "A.7.3"
      ],
      [
        "A007",
        "A.7.5"
      ],
      [
        "C001",
        "4.1"
      ],
      [
        "C001",
        "6.1.1"
      ],
      [
        "C001",
        "6.1.2"
      ],
      [
        "C001",
        "6.1.3"
      ],
      [
        "C001",
        "8.2"
      ],
      [
        "C001",
        "8.3"
      ],
      [
        "C001",
        "A.5.2"
      ],
      [
        "C001",
        "A.5.3"
      ],
      [
        "C001",
        "A.5.4"
      ]
    ]
  },
  {
    "slug": "csa-aicm",
    "title": "CSA AI Controls Matrix",
    "publisher": "Cloud Security Alliance",
    "counts": {
      "unique": 48,
      "total": 306
    },
    "blurb": "AIUC-1 maps to the Cloud Security Alliance AI Controls Matrix (AICM) — a 243-control framework across 18 domains spanning audit, AI security, BCR, cryptography, governance, IAM, logging, MDS, threat & vulnerability, and more. The AIUC page categorizes each AICM control as No Gap (AIUC fully addresses), Partial Gap, or Full Gap (AIUC out of scope but related). Only controls with at least one AIUC mapping are included here. No-Gap rows use relationship 'addresses'; Partial/Full Gap rows use 'partially_addresses' with confidence 'medium'.",
    "samples": [
      [
        "E008",
        "A&A-01"
      ],
      [
        "C010",
        "A&A-02"
      ],
      [
        "C012",
        "A&A-02"
      ],
      [
        "E008",
        "A&A-02"
      ],
      [
        "E008",
        "A&A-03"
      ],
      [
        "E012",
        "A&A-04"
      ],
      [
        "C001",
        "A&A-05"
      ],
      [
        "E008",
        "A&A-05"
      ],
      [
        "E013",
        "A&A-05"
      ],
      [
        "C001",
        "A&A-06"
      ],
      [
        "E008",
        "A&A-06"
      ],
      [
        "E004",
        "AIS-01"
      ]
    ]
  },
  {
    "slug": "ibm-ai-risk-atlas",
    "title": "IBM AI Risk Atlas",
    "publisher": "IBM Research",
    "counts": {
      "unique": 47,
      "total": 145
    },
    "blurb": "AIUC-1 maps to IBM's AI Risk Atlas — a catalog of 99 numbered risks across five domains (Agentic AI, Training Data, Inference, Output, Non-Technical). IBM Research is a technical contributor to AIUC-1, so the mapping is dense and high-confidence. 25 of the 99 IBM rows have no AIUC-1 mapping (mostly societal-impact risks like environmental cost, jobs displacement, cultural diversity) — those are intentionally not represented in this crosswalk.",
    "samples": [
      [
        "E015",
        "IBM-1"
      ],
      [
        "A003",
        "IBM-2"
      ],
      [
        "A003",
        "IBM-3"
      ],
      [
        "E009",
        "IBM-3"
      ],
      [
        "C007",
        "IBM-4"
      ],
      [
        "C009",
        "IBM-4"
      ],
      [
        "B006",
        "IBM-5"
      ],
      [
        "D003",
        "IBM-5"
      ],
      [
        "D004",
        "IBM-5"
      ],
      [
        "E009",
        "IBM-6"
      ],
      [
        "B006",
        "IBM-7"
      ],
      [
        "B007",
        "IBM-7"
      ]
    ]
  },
  {
    "slug": "cisco-ai-security-safety-framework",
    "title": "Cisco AI Security & Safety Framework",
    "publisher": "Cisco",
    "counts": {
      "unique": 33,
      "total": 135
    },
    "blurb": "AIUC-1 maps to Cisco's AI Security & Safety Framework, which catalogs attacker objectives against AI systems across 19 top-level categories with 150+ subtechniques. AIUC-1 controls — particularly across B (Security), C (Safety), and D (Reliability) — mitigate the attacker objectives. Cisco is a technical contributor to AIUC-1, so the mapping is dense and high-confidence.",
    "samples": [
      [
        "B001",
        "AITech-1.1"
      ],
      [
        "B002",
        "AITech-1.1"
      ],
      [
        "C004",
        "AITech-1.1"
      ],
      [
        "B001",
        "AITech-1.2"
      ],
      [
        "B002",
        "AITech-1.2"
      ],
      [
        "B005",
        "AITech-1.2"
      ],
      [
        "E009",
        "AITech-1.2"
      ],
      [
        "B001",
        "AITech-1.3"
      ],
      [
        "B006",
        "AITech-1.3"
      ],
      [
        "B008",
        "AITech-1.3"
      ],
      [
        "D003",
        "AITech-1.3"
      ],
      [
        "D004",
        "AITech-1.3"
      ]
    ]
  },
  {
    "slug": "owasp-llm-top10",
    "title": "OWASP LLM Top 10",
    "publisher": "OWASP",
    "counts": {
      "unique": 27,
      "total": 60
    },
    "blurb": "AIUC-1 integrates OWASP's Top 10 for LLM and Generative AI Applications. The certification addresses each OWASP threat through concrete Requirements and Sub-Controls while expanding beyond security to encompass safety, reliability, and accountability dimensions. Mappings flow from AIUC-1 Requirements to the OWASP threat categories they mitigate.",
    "samples": [
      [
        "B001",
        "LLM01"
      ],
      [
        "B002",
        "LLM01"
      ],
      [
        "B005",
        "LLM01"
      ],
      [
        "A005",
        "LLM02"
      ],
      [
        "A006",
        "LLM02"
      ],
      [
        "B003",
        "LLM02"
      ],
      [
        "B004",
        "LLM02"
      ],
      [
        "B007",
        "LLM02"
      ],
      [
        "B009",
        "LLM02"
      ],
      [
        "A004",
        "LLM03"
      ],
      [
        "A007",
        "LLM03"
      ],
      [
        "E005",
        "LLM03"
      ]
    ]
  },
  {
    "slug": "owasp-aivss",
    "title": "OWASP AIVSS",
    "publisher": "OWASP",
    "counts": {
      "unique": 25,
      "total": 27
    },
    "blurb": "AIUC-1 maps to the OWASP Agentic AI Vulnerability Scoring System (AIVSS) — a vulnerability-rating framework focused on agentic AI systems. The crosswalk pairs AIUC-1's auditable controls with AIVSS's 10 attacker-relevant risk categories. Coverage is densest across goal/instruction manipulation (B-controls) and supply-chain risk (E005/E006/E009/E013).",
    "samples": [
      [
        "A003",
        "Agent Access Control Violation"
      ],
      [
        "B006",
        "Agent Access Control Violation"
      ],
      [
        "B001",
        "Agent Cascading Failures"
      ],
      [
        "C012",
        "Agent Cascading Failures"
      ],
      [
        "B001",
        "Agent Goal and Instruction Manipulation"
      ],
      [
        "B002",
        "Agent Goal and Instruction Manipulation"
      ],
      [
        "B005",
        "Agent Goal and Instruction Manipulation"
      ],
      [
        "C003",
        "Agent Goal and Instruction Manipulation"
      ],
      [
        "C004",
        "Agent Goal and Instruction Manipulation"
      ],
      [
        "C005",
        "Agent Goal and Instruction Manipulation"
      ],
      [
        "E016",
        "Agent Identity Impersonation"
      ],
      [
        "F001",
        "Agent Identity Impersonation"
      ]
    ]
  },
  {
    "slug": "mitre-atlas",
    "title": "MITRE ATLAS",
    "publisher": "MITRE",
    "counts": {
      "unique": 20,
      "total": 32
    },
    "blurb": "AIUC-1 integrates the MITRE ATLAS knowledge base, which is a technical contributor to AIUC-1. The crosswalk maps AIUC-1 Requirements to ATLAS Mitigations (AML.M####). AIUC-1 incorporates these mitigations while extending beyond ML security alone to address safety and reliability.",
    "samples": [
      [
        "B003",
        "AML.M0000"
      ],
      [
        "B003",
        "AML.M0001"
      ],
      [
        "B009",
        "AML.M0002"
      ],
      [
        "B001",
        "AML.M0003"
      ],
      [
        "B002",
        "AML.M0003"
      ],
      [
        "B004",
        "AML.M0003"
      ],
      [
        "B001",
        "AML.M0004"
      ],
      [
        "B004",
        "AML.M0004"
      ],
      [
        "D003",
        "AML.M0004"
      ],
      [
        "B007",
        "AML.M0005"
      ],
      [
        "B008",
        "AML.M0005"
      ],
      [
        "B008",
        "AML.M0012"
      ]
    ]
  },
  {
    "slug": "hipaa",
    "title": "HIPAA",
    "publisher": "US Department of HHS",
    "counts": {
      "unique": 12,
      "total": 25
    },
    "blurb": "AIUC-1 maps to HIPAA's Privacy Rule (45 CFR §164.500–534) and Security Rule (45 CFR §164.302–318). Mappings are platform-authored from the codified text of the rules, focused on AIUC-1 controls in Principle A (Data & Privacy), Principle B (Security), and Principle E (Accountability). Healthcare deployments of AI systems handling PHI are the primary audience. Confidence is high where the AIUC control directly satisfies the HIPAA requirement; medium where the relationship is partial.",
    "samples": [
      [
        "A003",
        "45 CFR §164.502(b)"
      ],
      [
        "A001",
        "45 CFR §164.502(a)"
      ],
      [
        "A002",
        "45 CFR §164.502(a)"
      ],
      [
        "A001",
        "45 CFR §164.508"
      ],
      [
        "A006",
        "45 CFR §164.514(b)"
      ],
      [
        "A001",
        "45 CFR §164.524"
      ],
      [
        "A001",
        "45 CFR §164.526"
      ],
      [
        "A006",
        "45 CFR §164.530(c)"
      ],
      [
        "E001",
        "45 CFR §164.308(a)(1)"
      ],
      [
        "E008",
        "45 CFR §164.308(a)(1)"
      ],
      [
        "B007",
        "45 CFR §164.308(a)(3)"
      ],
      [
        "E010",
        "45 CFR §164.308(a)(5)"
      ]
    ]
  },
  {
    "slug": "fcra",
    "title": "FCRA",
    "publisher": "US FTC / CFPB",
    "counts": {
      "unique": 7,
      "total": 8
    },
    "blurb": "AIUC-1 maps to the Fair Credit Reporting Act (FCRA), the US statute that governs consumer-reporting agencies and adverse-action decisions including AI-assisted decisions about credit, employment, insurance, and housing. Mappings focus on AIUC-1 controls in Principle C (Safety, including bias) and Principle E (Accountability/disclosure). Confidence is high where the AIUC control directly satisfies the FCRA obligation; medium where the AIUC control is broader and FCRA narrower (or vice versa).",
    "samples": [
      [
        "E016",
        "15 USC §1681m"
      ],
      [
        "E004",
        "15 USC §1681m"
      ],
      [
        "D001",
        "15 USC §1681e(b)"
      ],
      [
        "C002",
        "15 USC §1681e(b)"
      ],
      [
        "A001",
        "15 USC §1681g"
      ],
      [
        "E016",
        "15 USC §1681g"
      ],
      [
        "C009",
        "15 USC §1681i"
      ],
      [
        "E015",
        "15 USC §1681e(a)"
      ]
    ]
  },
  {
    "slug": "fha",
    "title": "Fair Housing Act",
    "publisher": "US HUD",
    "counts": {
      "unique": 6,
      "total": 6
    },
    "blurb": "AIUC-1 maps to the Fair Housing Act and HUD's disparate-impact rule (24 CFR §100.500), which prohibits practices — including AI-assisted decisions about housing, lending, and rentals — that have a discriminatory effect on protected classes regardless of intent. Mappings focus on AIUC-1 controls in Principle C (bias evaluation, harmful outputs, third-party testing).",
    "samples": [
      [
        "C003",
        "24 CFR §100.500(a)"
      ],
      [
        "C010",
        "24 CFR §100.500(c)(1)"
      ],
      [
        "C012",
        "24 CFR §100.500(c)(1)"
      ],
      [
        "C001",
        "24 CFR §100.500(c)(2)"
      ],
      [
        "E004",
        "24 CFR §100.500(d)"
      ],
      [
        "E015",
        "24 CFR §100.500(d)"
      ]
    ]
  },
  {
    "slug": "ftc-ai",
    "title": "FTC AI Guidance",
    "publisher": "US FTC",
    "counts": {
      "unique": 11,
      "total": 11
    },
    "blurb": "AIUC-1 maps to the FTC's published guidance on AI fairness, accountability, and truthfulness — including the 2021 \"Aiming for truth, fairness, and equity\" guidance, the 2023 \"Keep your AI claims in check\" guidance, and the FTC's enforcement positions under Section 5 of the FTC Act (unfair or deceptive acts/practices). Mappings cover AIUC-1 controls in Principle C (Safety/bias) and Principle E (Accountability/disclosure).",
    "samples": [
      [
        "E016",
        "FTC AI Guidance § Truth"
      ],
      [
        "C003",
        "FTC AI Guidance § Truth"
      ],
      [
        "C010",
        "FTC AI Guidance § Fairness"
      ],
      [
        "A005",
        "FTC AI Guidance § Watch your data"
      ],
      [
        "A006",
        "FTC AI Guidance § Watch your data"
      ],
      [
        "E004",
        "FTC AI Guidance § Accountability"
      ],
      [
        "E015",
        "FTC AI Guidance § Accountability"
      ],
      [
        "C011",
        "FTC AI Guidance § Independent oversight"
      ],
      [
        "C012",
        "FTC AI Guidance § Independent oversight"
      ],
      [
        "E017",
        "FTC AI Guidance § Transparency"
      ],
      [
        "C002",
        "FTC AI Guidance § Test and validate"
      ]
    ]
  },
  {
    "slug": "nyc-ll-144",
    "title": "NYC Local Law 144",
    "publisher": "NYC DCWP",
    "counts": {
      "unique": 4,
      "total": 6
    },
    "blurb": "AIUC-1 maps to NYC Local Law 144 (effective July 5, 2023) which regulates Automated Employment Decision Tools (AEDTs). The law mandates annual independent bias audits, public posting of audit results, and notice to candidates and employees. AIUC-1 controls in C (Safety/bias) and E (Accountability) carry the bulk of the mapping.",
    "samples": [
      [
        "C010",
        "5-301"
      ],
      [
        "A001",
        "5-302"
      ],
      [
        "C010",
        "5-302"
      ],
      [
        "E017",
        "5-303"
      ],
      [
        "A001",
        "5-304"
      ],
      [
        "E016",
        "5-304"
      ]
    ]
  },
  {
    "slug": "california-sb-53",
    "title": "California SB 53",
    "publisher": "California (state)",
    "counts": {
      "unique": 9,
      "total": 9
    },
    "blurb": "AIUC-1 maps to California's Transparency in Frontier AI Act (SB 53). The Act imposes transparency, reporting, and critical-safety-incident-reporting duties on large frontier-model developers. Companies certifying under AIUC-1 are typically not in scope as developers, but the controls map to the Act's obligations where they overlap.",
    "samples": [
      [
        "C001",
        22757.12
      ],
      [
        "C002",
        22757.12
      ],
      [
        "C012",
        22757.12
      ],
      [
        "E008",
        22757.12
      ],
      [
        "E012",
        22757.12
      ],
      [
        "E013",
        22757.12
      ],
      [
        "E017",
        22757.12
      ],
      [
        "F001",
        22757.12
      ],
      [
        "E002",
        22757.13
      ]
    ]
  },
  {
    "slug": "colorado-ai-act",
    "title": "Colorado AI Act",
    "publisher": "Colorado (state)",
    "counts": {
      "unique": 13,
      "total": 18
    },
    "blurb": "AIUC-1 maps to the Colorado Artificial Intelligence Act (SB 24-205, codified at CRS 6-1-1701 et seq., effective February 1, 2026). The Act creates developer and deployer duties around high-risk AI systems making consequential decisions, plus AG enforcement authority. AIUC-1 controls in C (Safety) and E (Accountability) carry most of the mapping; the disclosure and risk management requirements line up with C001/C002/C008 and E016/E017.",
    "samples": [
      [
        "A001",
        "6-1-1702"
      ],
      [
        "C001",
        "6-1-1702"
      ],
      [
        "C002",
        "6-1-1702"
      ],
      [
        "C003",
        "6-1-1702"
      ],
      [
        "C008",
        "6-1-1702"
      ],
      [
        "E002",
        "6-1-1702"
      ],
      [
        "E017",
        "6-1-1702"
      ],
      [
        "C001",
        "6-1-1703"
      ],
      [
        "C002",
        "6-1-1703"
      ],
      [
        "C003",
        "6-1-1703"
      ],
      [
        "C008",
        "6-1-1703"
      ],
      [
        "C009",
        "6-1-1703"
      ]
    ]
  },
  {
    "slug": "oecd-principles",
    "title": "OECD AI Principles",
    "publisher": "OECD",
    "counts": {
      "unique": 13,
      "total": 14
    },
    "blurb": "AIUC-1 maps to the OECD AI Principles, the values-based framework adopted by 47+ countries. The Principles are organized as 5 values-based principles (1.1 inclusive growth; 1.2 human-centred values & fairness; 1.3 transparency & explainability; 1.4 robustness, security & safety; 1.5 accountability) plus 5 recommendations to policymakers. Mappings focus on the values-based principles since those are where individual organizations implementing AI carry the operational burden.",
    "samples": [
      [
        "F002",
        "OECD Principle 1.1"
      ],
      [
        "F001",
        "OECD Principle 1.1"
      ],
      [
        "C003",
        "OECD Principle 1.2"
      ],
      [
        "C009",
        "OECD Principle 1.2"
      ],
      [
        "E016",
        "OECD Principle 1.3"
      ],
      [
        "E017",
        "OECD Principle 1.3"
      ],
      [
        "E015",
        "OECD Principle 1.3"
      ],
      [
        "B001",
        "OECD Principle 1.4"
      ],
      [
        "B008",
        "OECD Principle 1.4"
      ],
      [
        "C002",
        "OECD Principle 1.4"
      ],
      [
        "D001",
        "OECD Principle 1.4"
      ],
      [
        "E004",
        "OECD Principle 1.5"
      ]
    ]
  }
];

const CROSSWALKS_BY_SLUG = Object.fromEntries(CROSSWALKS.map(c => [c.slug, c]));

const PRINCIPLE_DISTRIBUTION = {
  "california-sb-53": {
    "A": 0,
    "B": 0,
    "C": 3,
    "D": 0,
    "E": 5,
    "F": 1
  },
  "cisco-ai-security-safety-framework": {
    "A": 5,
    "B": 9,
    "C": 8,
    "D": 4,
    "E": 5,
    "F": 2
  },
  "colorado-ai-act": {
    "A": 1,
    "B": 0,
    "C": 7,
    "D": 0,
    "E": 5,
    "F": 0
  },
  "csa-aicm": {
    "A": 7,
    "B": 9,
    "C": 11,
    "D": 4,
    "E": 15,
    "F": 2
  },
  "eu-ai-act": {
    "A": 3,
    "B": 3,
    "C": 9,
    "D": 1,
    "E": 13,
    "F": 0
  },
  "fcra": {
    "A": 1,
    "B": 0,
    "C": 2,
    "D": 1,
    "E": 3,
    "F": 0
  },
  "fha": {
    "A": 0,
    "B": 0,
    "C": 4,
    "D": 0,
    "E": 2,
    "F": 0
  },
  "ftc-ai": {
    "A": 2,
    "B": 0,
    "C": 5,
    "D": 0,
    "E": 4,
    "F": 0
  },
  "hipaa": {
    "A": 4,
    "B": 2,
    "C": 0,
    "D": 0,
    "E": 6,
    "F": 0
  },
  "ibm-ai-risk-atlas": {
    "A": 6,
    "B": 9,
    "C": 12,
    "D": 4,
    "E": 14,
    "F": 2
  },
  "iso-42001": {
    "A": 2,
    "B": 0,
    "C": 8,
    "D": 2,
    "E": 13,
    "F": 2
  },
  "mitre-atlas": {
    "A": 3,
    "B": 8,
    "C": 3,
    "D": 1,
    "E": 5,
    "F": 0
  },
  "nist-ai-rmf": {
    "A": 5,
    "B": 6,
    "C": 11,
    "D": 4,
    "E": 15,
    "F": 1
  },
  "nyc-ll-144": {
    "A": 1,
    "B": 0,
    "C": 1,
    "D": 0,
    "E": 2,
    "F": 0
  },
  "oecd-principles": {
    "A": 0,
    "B": 2,
    "C": 3,
    "D": 1,
    "E": 5,
    "F": 2
  },
  "owasp-aivss": {
    "A": 2,
    "B": 6,
    "C": 7,
    "D": 2,
    "E": 7,
    "F": 1
  },
  "owasp-llm-top10": {
    "A": 5,
    "B": 9,
    "C": 4,
    "D": 4,
    "E": 5,
    "F": 0
  }
};

const CROSSWALK_SOURCES = {
  "california-sb-53": [
    "C001",
    "C002",
    "C012",
    "E002",
    "E008",
    "E012",
    "E013",
    "E017",
    "F001"
  ],
  "cisco-ai-security-safety-framework": [
    "A003",
    "A004",
    "A005",
    "A006",
    "A007",
    "B001",
    "B002",
    "B003",
    "B004",
    "B005",
    "B006",
    "B007",
    "B008",
    "B009",
    "C002",
    "C003",
    "C004",
    "C005",
    "C006",
    "C010",
    "C011",
    "C012",
    "D001",
    "D002",
    "D003",
    "D004",
    "E005",
    "E006",
    "E009",
    "E010",
    "E015",
    "F001",
    "F002"
  ],
  "colorado-ai-act": [
    "A001",
    "C001",
    "C002",
    "C003",
    "C008",
    "C009",
    "C010",
    "C012",
    "E002",
    "E012",
    "E013",
    "E016",
    "E017"
  ],
  "csa-aicm": [
    "A001",
    "A002",
    "A003",
    "A004",
    "A005",
    "A006",
    "A007",
    "B001",
    "B002",
    "B003",
    "B004",
    "B005",
    "B006",
    "B007",
    "B008",
    "B009",
    "C001",
    "C002",
    "C003",
    "C004",
    "C005",
    "C006",
    "C007",
    "C008",
    "C009",
    "C010",
    "C012",
    "D001",
    "D002",
    "D003",
    "D004",
    "E001",
    "E002",
    "E003",
    "E004",
    "E005",
    "E006",
    "E008",
    "E009",
    "E010",
    "E011",
    "E012",
    "E013",
    "E015",
    "E016",
    "E017",
    "F001",
    "F002"
  ],
  "eu-ai-act": [
    "A001",
    "A004",
    "A006",
    "B002",
    "B004",
    "B008",
    "C001",
    "C002",
    "C003",
    "C004",
    "C005",
    "C006",
    "C008",
    "C009",
    "C010",
    "D003",
    "E001",
    "E002",
    "E003",
    "E004",
    "E006",
    "E008",
    "E009",
    "E011",
    "E012",
    "E013",
    "E015",
    "E016",
    "E017"
  ],
  "fcra": [
    "A001",
    "C002",
    "C009",
    "D001",
    "E004",
    "E015",
    "E016"
  ],
  "fha": [
    "C001",
    "C003",
    "C010",
    "C012",
    "E004",
    "E015"
  ],
  "ftc-ai": [
    "A005",
    "A006",
    "C002",
    "C003",
    "C010",
    "C011",
    "C012",
    "E004",
    "E015",
    "E016",
    "E017"
  ],
  "hipaa": [
    "A001",
    "A002",
    "A003",
    "A006",
    "B007",
    "B008",
    "E001",
    "E006",
    "E008",
    "E010",
    "E012",
    "E015"
  ],
  "ibm-ai-risk-atlas": [
    "A001",
    "A002",
    "A003",
    "A005",
    "A006",
    "A007",
    "B001",
    "B002",
    "B003",
    "B004",
    "B005",
    "B006",
    "B007",
    "B008",
    "B009",
    "C001",
    "C002",
    "C003",
    "C004",
    "C005",
    "C006",
    "C007",
    "C008",
    "C009",
    "C010",
    "C011",
    "C012",
    "D001",
    "D002",
    "D003",
    "D004",
    "E001",
    "E002",
    "E003",
    "E004",
    "E005",
    "E006",
    "E008",
    "E009",
    "E011",
    "E012",
    "E013",
    "E015",
    "E016",
    "E017",
    "F001",
    "F002"
  ],
  "iso-42001": [
    "A001",
    "A007",
    "C001",
    "C002",
    "C007",
    "C008",
    "C009",
    "C010",
    "C011",
    "C012",
    "D002",
    "D004",
    "E001",
    "E002",
    "E003",
    "E004",
    "E006",
    "E008",
    "E010",
    "E011",
    "E012",
    "E013",
    "E015",
    "E016",
    "E017",
    "F001",
    "F002"
  ],
  "mitre-atlas": [
    "A004",
    "A006",
    "A007",
    "B001",
    "B002",
    "B003",
    "B004",
    "B005",
    "B007",
    "B008",
    "B009",
    "C002",
    "C006",
    "C007",
    "D003",
    "E004",
    "E005",
    "E009",
    "E015",
    "E017"
  ],
  "nist-ai-rmf": [
    "A001",
    "A003",
    "A005",
    "A006",
    "A007",
    "B001",
    "B002",
    "B004",
    "B005",
    "B006",
    "B009",
    "C001",
    "C002",
    "C003",
    "C004",
    "C005",
    "C007",
    "C008",
    "C009",
    "C010",
    "C011",
    "C012",
    "D001",
    "D002",
    "D003",
    "D004",
    "E001",
    "E002",
    "E003",
    "E004",
    "E005",
    "E006",
    "E008",
    "E009",
    "E010",
    "E011",
    "E012",
    "E013",
    "E015",
    "E016",
    "E017",
    "F001"
  ],
  "nyc-ll-144": [
    "A001",
    "C010",
    "E016",
    "E017"
  ],
  "oecd-principles": [
    "B001",
    "B008",
    "C002",
    "C003",
    "C009",
    "D001",
    "E001",
    "E004",
    "E015",
    "E016",
    "E017",
    "F001",
    "F002"
  ],
  "owasp-aivss": [
    "A003",
    "A004",
    "B001",
    "B002",
    "B004",
    "B005",
    "B006",
    "B008",
    "C003",
    "C004",
    "C005",
    "C006",
    "C007",
    "C008",
    "C012",
    "D003",
    "D004",
    "E005",
    "E006",
    "E009",
    "E010",
    "E013",
    "E015",
    "E016",
    "F001"
  ],
  "owasp-llm-top10": [
    "A003",
    "A004",
    "A005",
    "A006",
    "A007",
    "B001",
    "B002",
    "B003",
    "B004",
    "B005",
    "B006",
    "B007",
    "B008",
    "B009",
    "C003",
    "C004",
    "C005",
    "C006",
    "D001",
    "D002",
    "D003",
    "D004",
    "E005",
    "E006",
    "E009",
    "E010",
    "E015"
  ]
};

const FRAMEWORK_META = {
  "california-sb-53": {
    "category": "regulation",
    "geo": "US-California",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/california-sb-53"
  },
  "cisco-ai-security-safety-framework": {
    "category": "threat-model",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/cisco-ai-security-safety-framework"
  },
  "colorado-ai-act": {
    "category": "regulation",
    "geo": "US-Colorado",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/colorado-ai-act"
  },
  "csa-aicm": {
    "category": "standard",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/csa-aicm"
  },
  "eu-ai-act": {
    "category": "regulation",
    "geo": "EU",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/eu-ai-act"
  },
  "fcra": {
    "category": "regulation",
    "geo": "US (federal)",
    "sourceUrl": "https://www.law.cornell.edu/uscode/text/15/chapter-41/subchapter-III"
  },
  "fha": {
    "category": "regulation",
    "geo": "US (federal)",
    "sourceUrl": "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100/subpart-G"
  },
  "ftc-ai": {
    "category": "regulation",
    "geo": "US (federal)",
    "sourceUrl": "https://www.ftc.gov/business-guidance/blog/2021/04/aiming-truth-fairness-equity-your-companys-use-ai"
  },
  "hipaa": {
    "category": "regulation",
    "geo": "US (federal)",
    "sourceUrl": "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164"
  },
  "ibm-ai-risk-atlas": {
    "category": "threat-model",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/ibm-ai-risk-atlas"
  },
  "iso-42001": {
    "category": "standard",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/iso-42001"
  },
  "mitre-atlas": {
    "category": "threat-model",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/mitre-atlas"
  },
  "nist-ai-rmf": {
    "category": "standard",
    "geo": "US (advisory)",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/nist-ai-rmf"
  },
  "nyc-ll-144": {
    "category": "regulation",
    "geo": "US-NYC",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/nyc-ll-144"
  },
  "oecd-principles": {
    "category": "standard",
    "geo": "International",
    "sourceUrl": "https://oecd.ai/en/ai-principles"
  },
  "owasp-aivss": {
    "category": "threat-model",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/owasp-aivss"
  },
  "owasp-llm-top10": {
    "category": "threat-model",
    "geo": "International",
    "sourceUrl": "https://www.aiuc-1.com/crosswalks/owasp-top-10"
  }
};

const MODALITIES = [
  {
    "id": "text",
    "label": "Text"
  },
  {
    "id": "voice",
    "label": "Voice"
  },
  {
    "id": "image",
    "label": "Image"
  },
  {
    "id": "video",
    "label": "Video"
  },
  {
    "id": "files",
    "label": "Files"
  },
  {
    "id": "code",
    "label": "Code"
  }
];

const JURISDICTIONS = [
  {
    "id": "EU",
    "label": "EU"
  },
  {
    "id": "US",
    "label": "US"
  },
  {
    "id": "US-NYC",
    "label": "US — NYC"
  },
  {
    "id": "US-California",
    "label": "US — California"
  },
  {
    "id": "US-Colorado",
    "label": "US — Colorado"
  },
  {
    "id": "UK",
    "label": "UK"
  },
  {
    "id": "Canada",
    "label": "Canada"
  },
  {
    "id": "Brazil",
    "label": "Brazil"
  },
  {
    "id": "India",
    "label": "India"
  },
  {
    "id": "Japan",
    "label": "Japan"
  },
  {
    "id": "Singapore",
    "label": "Singapore"
  }
];

const AUDIENCE = [
  "general consumers",
  "children (under 13)",
  "employees",
  "healthcare patients",
  "finance customers",
  "students",
  "government users"
];

const DATA_CATEGORIES = [
  "PII",
  "PHI",
  "financial data",
  "biometric",
  "children's data",
  "employment records",
  "education records",
  "housing decisions"
];
