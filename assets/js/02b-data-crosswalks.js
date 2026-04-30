"use strict";

/* ============================================================
   CROSSWALK DETAILS — generated from source framework YAML
   Run `ruby scripts/generate-data.rb` after framework changes.
   ============================================================ */

const CROSSWALK_DETAILS = {
  "california-sb-53": {
    "description": "AIUC-1 maps to California's Transparency in Frontier AI Act (SB 53). The Act imposes transparency, reporting, and critical-safety-incident-reporting duties on large frontier-model developers. Companies certifying under AIUC-1 are typically not in scope as developers, but the controls map to the Act's obligations where they overlap.",
    "target_version": "2024",
    "target_framework_name": "California Transparency in Frontier AI Act (SB 53)",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/california-sb-53",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "C001",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "C002",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "C012",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "E008",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "E012",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "E013",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "E017",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "F001",
        "target": 22757.12,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency & Reporting Obligations"
      },
      {
        "source": "E002",
        "target": 22757.13,
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Critical Safety Incident Reporting"
      }
    ]
  },
  "cisco-ai-security-safety-framework": {
    "description": "AIUC-1 maps to Cisco's AI Security & Safety Framework, which catalogs attacker objectives against AI systems across 19 top-level categories with 150+ subtechniques. AIUC-1 controls — particularly across B (Security), C (Safety), and D (Reliability) — mitigate the attacker objectives. Cisco is a technical contributor to AIUC-1, so the mapping is dense and high-confidence.",
    "target_version": "1.0",
    "target_framework_name": "Cisco AI Security & Safety Framework",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/cisco-ai-security-safety-framework",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "B001",
        "target": "AITech-1.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Direct Prompt Injection"
      },
      {
        "source": "B002",
        "target": "AITech-1.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Direct Prompt Injection"
      },
      {
        "source": "C004",
        "target": "AITech-1.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Direct Prompt Injection"
      },
      {
        "source": "B001",
        "target": "AITech-1.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Indirect Prompt Injection"
      },
      {
        "source": "B002",
        "target": "AITech-1.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Indirect Prompt Injection"
      },
      {
        "source": "B005",
        "target": "AITech-1.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Indirect Prompt Injection"
      },
      {
        "source": "E009",
        "target": "AITech-1.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Indirect Prompt Injection"
      },
      {
        "source": "B001",
        "target": "AITech-1.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Goal Manipulation"
      },
      {
        "source": "B006",
        "target": "AITech-1.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Goal Manipulation"
      },
      {
        "source": "B008",
        "target": "AITech-1.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Goal Manipulation"
      },
      {
        "source": "D003",
        "target": "AITech-1.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Goal Manipulation"
      },
      {
        "source": "D004",
        "target": "AITech-1.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Goal Manipulation"
      },
      {
        "source": "B001",
        "target": "AITech-1.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Multi-Modal Injection"
      },
      {
        "source": "B002",
        "target": "AITech-1.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Multi-Modal Injection"
      },
      {
        "source": "B004",
        "target": "AITech-1.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Multi-Modal Injection"
      },
      {
        "source": "C006",
        "target": "AITech-1.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Multi-Modal Injection"
      },
      {
        "source": "B001",
        "target": "AITech-2.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Jailbreak"
      },
      {
        "source": "B002",
        "target": "AITech-2.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Jailbreak"
      },
      {
        "source": "C003",
        "target": "AITech-2.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Jailbreak"
      },
      {
        "source": "C004",
        "target": "AITech-2.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Jailbreak"
      },
      {
        "source": "C005",
        "target": "AITech-2.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Jailbreak"
      },
      {
        "source": "A003",
        "target": "AITech-3.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Masquerading/Obfuscation"
      },
      {
        "source": "B001",
        "target": "AITech-3.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Masquerading/Obfuscation"
      },
      {
        "source": "B002",
        "target": "AITech-3.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Masquerading/Obfuscation"
      },
      {
        "source": "B006",
        "target": "AITech-3.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Masquerading/Obfuscation"
      },
      {
        "source": "E009",
        "target": "AITech-3.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Masquerading/Obfuscation"
      },
      {
        "source": "B001",
        "target": "AITech-4.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Agent Injection"
      },
      {
        "source": "B006",
        "target": "AITech-4.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Agent Injection"
      },
      {
        "source": "E006",
        "target": "AITech-4.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Agent Injection"
      },
      {
        "source": "E009",
        "target": "AITech-4.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Agent Injection"
      },
      {
        "source": "A003",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "B001",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "B006",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "B009",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "C003",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "D001",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "D002",
        "target": "AITech-4.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Context Boundary Attacks"
      },
      {
        "source": "B001",
        "target": "AITech-4.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Protocol Manipulation"
      },
      {
        "source": "B002",
        "target": "AITech-4.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Protocol Manipulation"
      },
      {
        "source": "C006",
        "target": "AITech-4.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Protocol Manipulation"
      },
      {
        "source": "B001",
        "target": "AITech-5.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Memory System Persistence"
      },
      {
        "source": "B002",
        "target": "AITech-5.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Memory System Persistence"
      },
      {
        "source": "B001",
        "target": "AITech-5.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Configuration Persistence"
      },
      {
        "source": "B002",
        "target": "AITech-5.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Configuration Persistence"
      },
      {
        "source": "B006",
        "target": "AITech-5.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Configuration Persistence"
      },
      {
        "source": "B008",
        "target": "AITech-6.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data Poisoning"
      },
      {
        "source": "B008",
        "target": "AITech-7.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Reasoning Corruption"
      },
      {
        "source": "D003",
        "target": "AITech-7.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Reasoning Corruption"
      },
      {
        "source": "D004",
        "target": "AITech-7.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Reasoning Corruption"
      },
      {
        "source": "B001",
        "target": "AITech-7.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Memory System Corruption"
      },
      {
        "source": "B002",
        "target": "AITech-7.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Memory System Corruption"
      },
      {
        "source": "B006",
        "target": "AITech-7.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Memory System Corruption"
      },
      {
        "source": "D004",
        "target": "AITech-7.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Memory System Corruption"
      },
      {
        "source": "E009",
        "target": "AITech-7.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Source Abuse"
      },
      {
        "source": "B001",
        "target": "AITech-7.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Token Manipulation"
      },
      {
        "source": "B002",
        "target": "AITech-7.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Token Manipulation"
      },
      {
        "source": "B005",
        "target": "AITech-7.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Token Manipulation"
      },
      {
        "source": "A004",
        "target": "AITech-8.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Membership Inference"
      },
      {
        "source": "A006",
        "target": "AITech-8.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Membership Inference"
      },
      {
        "source": "B009",
        "target": "AITech-8.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Membership Inference"
      },
      {
        "source": "A004",
        "target": "AITech-8.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Exfiltration/Exposure"
      },
      {
        "source": "A005",
        "target": "AITech-8.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Exfiltration/Exposure"
      },
      {
        "source": "A006",
        "target": "AITech-8.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Exfiltration/Exposure"
      },
      {
        "source": "A007",
        "target": "AITech-8.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Exfiltration/Exposure"
      },
      {
        "source": "B004",
        "target": "AITech-8.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Exfiltration/Exposure"
      },
      {
        "source": "B009",
        "target": "AITech-8.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Exfiltration/Exposure"
      },
      {
        "source": "A004",
        "target": "AITech-8.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Information Disclosure"
      },
      {
        "source": "A006",
        "target": "AITech-8.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Information Disclosure"
      },
      {
        "source": "B009",
        "target": "AITech-8.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Information Disclosure"
      },
      {
        "source": "A004",
        "target": "AITech-8.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Prompt/Meta Extraction"
      },
      {
        "source": "A007",
        "target": "AITech-8.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Prompt/Meta Extraction"
      },
      {
        "source": "B009",
        "target": "AITech-8.4",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Prompt/Meta Extraction"
      },
      {
        "source": "B001",
        "target": "AITech-9.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model/Agentic System Manipulation"
      },
      {
        "source": "B002",
        "target": "AITech-9.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model/Agentic System Manipulation"
      },
      {
        "source": "E009",
        "target": "AITech-9.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model/Agentic System Manipulation"
      },
      {
        "source": "B001",
        "target": "AITech-9.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Detection Evasion"
      },
      {
        "source": "B002",
        "target": "AITech-9.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Detection Evasion"
      },
      {
        "source": "E006",
        "target": "AITech-9.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Dependency/Plugin Compromise"
      },
      {
        "source": "E009",
        "target": "AITech-9.3",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Dependency/Plugin Compromise"
      },
      {
        "source": "B004",
        "target": "AITech-10.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Extraction"
      },
      {
        "source": "B008",
        "target": "AITech-10.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Extraction"
      },
      {
        "source": "A005",
        "target": "AITech-10.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Inversion"
      },
      {
        "source": "B003",
        "target": "AITech-10.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Inversion"
      },
      {
        "source": "B004",
        "target": "AITech-10.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Inversion"
      },
      {
        "source": "B009",
        "target": "AITech-10.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Inversion"
      },
      {
        "source": "B008",
        "target": "AITech-11.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Environment-Aware Evasion"
      },
      {
        "source": "B001",
        "target": "AITech-11.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model-Selective Evasion"
      },
      {
        "source": "B002",
        "target": "AITech-11.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model-Selective Evasion"
      },
      {
        "source": "B005",
        "target": "AITech-11.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model-Selective Evasion"
      },
      {
        "source": "E015",
        "target": "AITech-11.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Model-Selective Evasion"
      },
      {
        "source": "D003",
        "target": "AITech-12.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Tool Exploitation"
      },
      {
        "source": "D004",
        "target": "AITech-12.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Tool Exploitation"
      },
      {
        "source": "E009",
        "target": "AITech-12.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Tool Exploitation"
      },
      {
        "source": "A004",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "A005",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "A006",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "B001",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "B004",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "B009",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "C003",
        "target": "AITech-12.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Insecure Output Handling"
      },
      {
        "source": "B004",
        "target": "AITech-13.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Disruption of Availability"
      },
      {
        "source": "E010",
        "target": "AITech-13.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Disruption of Availability"
      },
      {
        "source": "B004",
        "target": "AITech-13.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Cost Harvesting/Repurposing"
      },
      {
        "source": "B007",
        "target": "AITech-14.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Unauthorized Access"
      },
      {
        "source": "B008",
        "target": "AITech-14.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Unauthorized Access"
      },
      {
        "source": "E005",
        "target": "AITech-14.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Unauthorized Access"
      },
      {
        "source": "E009",
        "target": "AITech-14.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Unauthorized Access"
      },
      {
        "source": "A003",
        "target": "AITech-14.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Abuse of Delegated Authority"
      },
      {
        "source": "B006",
        "target": "AITech-14.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Abuse of Delegated Authority"
      },
      {
        "source": "D003",
        "target": "AITech-14.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Abuse of Delegated Authority"
      },
      {
        "source": "A004",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "A007",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C002",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C003",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C004",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C005",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C010",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C011",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "C012",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "D001",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "D002",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "F002",
        "target": "AITech-15.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Harmful Content"
      },
      {
        "source": "B008",
        "target": "AITech-16.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Eavesdropping"
      },
      {
        "source": "E009",
        "target": "AITech-16.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Eavesdropping"
      },
      {
        "source": "E015",
        "target": "AITech-16.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Eavesdropping"
      },
      {
        "source": "B001",
        "target": "AITech-17.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensor Spoofing"
      },
      {
        "source": "B002",
        "target": "AITech-17.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensor Spoofing"
      },
      {
        "source": "F001",
        "target": "AITech-17.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensor Spoofing"
      },
      {
        "source": "E010",
        "target": "AITech-18.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Fraudulent Use"
      },
      {
        "source": "F001",
        "target": "AITech-18.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Fraudulent Use"
      },
      {
        "source": "E010",
        "target": "AITech-18.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Malicious Workflows"
      },
      {
        "source": "E015",
        "target": "AITech-18.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Malicious Workflows"
      },
      {
        "source": "F001",
        "target": "AITech-18.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Malicious Workflows"
      },
      {
        "source": "B001",
        "target": "AITech-19.1",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Cross-Modal Inconsistency Exploits"
      },
      {
        "source": "B001",
        "target": "AITech-19.2",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "",
        "target_title": "Fusion Payload Split"
      }
    ]
  },
  "colorado-ai-act": {
    "description": "AIUC-1 maps to the Colorado Artificial Intelligence Act (SB 24-205, codified at CRS 6-1-1701 et seq., effective February 1, 2026). The Act creates developer and deployer duties around high-risk AI systems making consequential decisions, plus AG enforcement authority. AIUC-1 controls in C (Safety) and E (Accountability) carry most of the mapping; the disclosure and risk management requirements line up with C001/C002/C008 and E016/E017.",
    "target_version": "2024",
    "target_framework_name": "Colorado AI Act (SB 24-205)",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/colorado-ai-act",
    "last_updated": "2026-04-13",
    "mappings": [
      {
        "source": "A001",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "C001",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "C002",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "C003",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "C008",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "E002",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "E017",
        "target": "6-1-1702",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Developer Duties"
      },
      {
        "source": "C001",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "C002",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "C003",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "C008",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "C009",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "C010",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "C012",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "E013",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "E016",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "E017",
        "target": "6-1-1703",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Deployer Duties"
      },
      {
        "source": "E012",
        "target": "6-1-1706",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC page groups §§ 6-1-1706 and 6-1-1707 (enforcement + AG authority).",
        "target_title": "Enforcement & AG Rulemaking Authority"
      }
    ]
  },
  "csa-aicm": {
    "description": "AIUC-1 maps to the Cloud Security Alliance AI Controls Matrix (AICM) — a 243-control framework across 18 domains spanning audit, AI security, BCR, cryptography, governance, IAM, logging, MDS, threat & vulnerability, and more. The AIUC page categorizes each AICM control as No Gap (AIUC fully addresses), Partial Gap, or Full Gap (AIUC out of scope but related). Only controls with at least one AIUC mapping are included here. No-Gap rows use relationship 'addresses'; Partial/Full Gap rows use 'partially_addresses' with confidence 'medium'.",
    "target_version": "1.0",
    "target_framework_name": "CSA AI Controls Matrix (AICM)",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/csa-aicm",
    "last_updated": "2025-09-18",
    "mappings": [
      {
        "source": "E008",
        "target": "A&A-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Audit and Assurance Policy and Procedures"
      },
      {
        "source": "C010",
        "target": "A&A-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Independent Assessments"
      },
      {
        "source": "C012",
        "target": "A&A-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Independent Assessments"
      },
      {
        "source": "E008",
        "target": "A&A-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Independent Assessments"
      },
      {
        "source": "E008",
        "target": "A&A-03",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Risk Based Planning Assessment"
      },
      {
        "source": "E012",
        "target": "A&A-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Requirements Compliance"
      },
      {
        "source": "C001",
        "target": "A&A-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Audit Management Process"
      },
      {
        "source": "E008",
        "target": "A&A-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Audit Management Process"
      },
      {
        "source": "E013",
        "target": "A&A-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Audit Management Process"
      },
      {
        "source": "C001",
        "target": "A&A-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Remediation"
      },
      {
        "source": "E008",
        "target": "A&A-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Remediation"
      },
      {
        "source": "E014",
        "target": "A&A-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Remediation"
      },
      {
        "source": "E004",
        "target": "AIS-01",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application and Interface Security Policy and Procedures"
      },
      {
        "source": "E008",
        "target": "AIS-01",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application and Interface Security Policy and Procedures"
      },
      {
        "source": "E013",
        "target": "AIS-01",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application and Interface Security Policy and Procedures"
      },
      {
        "source": "B008",
        "target": "AIS-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Application Security Baseline Requirements"
      },
      {
        "source": "E008",
        "target": "AIS-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Application Security Baseline Requirements"
      },
      {
        "source": "E013",
        "target": "AIS-03",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Application Security Metrics"
      },
      {
        "source": "C002",
        "target": "AIS-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Secure Application Development Lifecycle"
      },
      {
        "source": "E004",
        "target": "AIS-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Secure Application Development Lifecycle"
      },
      {
        "source": "C002",
        "target": "AIS-05",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application Security Testing"
      },
      {
        "source": "D002",
        "target": "AIS-05",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application Security Testing"
      },
      {
        "source": "D004",
        "target": "AIS-05",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application Security Testing"
      },
      {
        "source": "E005",
        "target": "AIS-05",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Application Security Testing"
      },
      {
        "source": "B008",
        "target": "AIS-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Secure Application Deployment"
      },
      {
        "source": "C002",
        "target": "AIS-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Secure Application Deployment"
      },
      {
        "source": "D003",
        "target": "AIS-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Secure Application Deployment"
      },
      {
        "source": "B001",
        "target": "AIS-07",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Application Vulnerability Remediation"
      },
      {
        "source": "C002",
        "target": "AIS-07",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Application Vulnerability Remediation"
      },
      {
        "source": "C006",
        "target": "AIS-07",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Application Vulnerability Remediation"
      },
      {
        "source": "B001",
        "target": "AIS-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Input Validation"
      },
      {
        "source": "B002",
        "target": "AIS-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Input Validation"
      },
      {
        "source": "B005",
        "target": "AIS-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Input Validation"
      },
      {
        "source": "A007",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "B003",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "B009",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "C003",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "C004",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "C006",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "D001",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "D002",
        "target": "AIS-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Validation"
      },
      {
        "source": "B002",
        "target": "AIS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "API Security"
      },
      {
        "source": "B004",
        "target": "AIS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "API Security"
      },
      {
        "source": "D003",
        "target": "AIS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "API Security"
      },
      {
        "source": "E009",
        "target": "AIS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "API Security"
      },
      {
        "source": "A003",
        "target": "AIS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agents Security Boundaries"
      },
      {
        "source": "B006",
        "target": "AIS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agents Security Boundaries"
      },
      {
        "source": "D003",
        "target": "AIS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agents Security Boundaries"
      },
      {
        "source": "C002",
        "target": "AIS-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Source Code Management"
      },
      {
        "source": "D003",
        "target": "AIS-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "AI Sandboxing"
      },
      {
        "source": "B008",
        "target": "AIS-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "AI Cache Protection"
      },
      {
        "source": "B003",
        "target": "AIS-15",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Prompt Differentiation"
      },
      {
        "source": "B005",
        "target": "AIS-15",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Prompt Differentiation"
      },
      {
        "source": "E008",
        "target": "BCR-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Business Continuity Management Policy and Procedures"
      },
      {
        "source": "C001",
        "target": "BCR-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Risk Assessment and Impact Analysis"
      },
      {
        "source": "E013",
        "target": "BCR-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Risk Assessment and Impact Analysis"
      },
      {
        "source": "E001",
        "target": "BCR-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Disaster Response Plan"
      },
      {
        "source": "E002",
        "target": "BCR-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Disaster Response Plan"
      },
      {
        "source": "E003",
        "target": "BCR-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Disaster Response Plan"
      },
      {
        "source": "E001",
        "target": "BCR-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Response Plan Exercise"
      },
      {
        "source": "E002",
        "target": "BCR-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Response Plan Exercise"
      },
      {
        "source": "E003",
        "target": "BCR-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Response Plan Exercise"
      },
      {
        "source": "E004",
        "target": "CCC-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Change Management Policy and Procedures"
      },
      {
        "source": "C002",
        "target": "CCC-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Quality Testing"
      },
      {
        "source": "E013",
        "target": "CCC-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Quality Testing"
      },
      {
        "source": "C001",
        "target": "CCC-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Change Management Technology"
      },
      {
        "source": "E004",
        "target": "CCC-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Change Management Technology"
      },
      {
        "source": "E004",
        "target": "CCC-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Change Agreements"
      },
      {
        "source": "E008",
        "target": "CCC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Change Restoration"
      },
      {
        "source": "B008",
        "target": "CEK-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Encryption and Key Management Policy and Procedures"
      },
      {
        "source": "E004",
        "target": "CEK-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "CEK Roles and Responsibilities"
      },
      {
        "source": "B008",
        "target": "CEK-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Encryption"
      },
      {
        "source": "B008",
        "target": "CEK-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Encryption Algorithm"
      },
      {
        "source": "C001",
        "target": "CEK-07",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Encryption Risk Management"
      },
      {
        "source": "E008",
        "target": "CEK-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Encryption and Key Management Audit"
      },
      {
        "source": "B008",
        "target": "CEK-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Generation"
      },
      {
        "source": "B008",
        "target": "CEK-11",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Purpose"
      },
      {
        "source": "B008",
        "target": "CEK-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Rotation"
      },
      {
        "source": "B008",
        "target": "CEK-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Revocation"
      },
      {
        "source": "B008",
        "target": "CEK-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Destruction"
      },
      {
        "source": "B008",
        "target": "CEK-15",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Activation"
      },
      {
        "source": "B008",
        "target": "CEK-16",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Suspension"
      },
      {
        "source": "B008",
        "target": "CEK-17",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Deactivation"
      },
      {
        "source": "B008",
        "target": "CEK-18",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Archival"
      },
      {
        "source": "B008",
        "target": "CEK-19",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Compromise"
      },
      {
        "source": "B008",
        "target": "CEK-20",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Recovery"
      },
      {
        "source": "B008",
        "target": "CEK-21",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Key Inventory Management"
      },
      {
        "source": "E005",
        "target": "DCS-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Off-Site Equipment Disposal Policy and Procedures"
      },
      {
        "source": "E005",
        "target": "DCS-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Off-Site Transfer Authorization Policy and Procedures"
      },
      {
        "source": "E005",
        "target": "DCS-03",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Secure Area Policy and Procedures"
      },
      {
        "source": "E005",
        "target": "DCS-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Secure Media Transportation Policy and Procedures"
      },
      {
        "source": "E005",
        "target": "DCS-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Assets Classification"
      },
      {
        "source": "E005",
        "target": "DCS-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Assets Cataloguing and Tracking"
      },
      {
        "source": "E005",
        "target": "DCS-07",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Controlled Physical Access Points"
      },
      {
        "source": "E005",
        "target": "DCS-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Equipment Identification"
      },
      {
        "source": "E005",
        "target": "DCS-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Secure Area Authorization"
      },
      {
        "source": "E005",
        "target": "DCS-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Surveillance System"
      },
      {
        "source": "E005",
        "target": "DCS-11",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Adverse Event Response Training"
      },
      {
        "source": "E005",
        "target": "DCS-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Cabling Security"
      },
      {
        "source": "E005",
        "target": "DCS-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Environmental Systems"
      },
      {
        "source": "E005",
        "target": "DCS-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Secure Utilities"
      },
      {
        "source": "E005",
        "target": "DCS-15",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Equipment Location"
      },
      {
        "source": "A004",
        "target": "DSP-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Security and Privacy Policy and Procedures"
      },
      {
        "source": "A004",
        "target": "DSP-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Secure Disposal"
      },
      {
        "source": "A003",
        "target": "DSP-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Protection by Design and Default"
      },
      {
        "source": "A004",
        "target": "DSP-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Protection by Design and Default"
      },
      {
        "source": "B006",
        "target": "DSP-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Protection by Design and Default"
      },
      {
        "source": "B007",
        "target": "DSP-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Protection by Design and Default"
      },
      {
        "source": "B008",
        "target": "DSP-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Protection by Design and Default"
      },
      {
        "source": "A002",
        "target": "DSP-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Privacy by Design and Default"
      },
      {
        "source": "A003",
        "target": "DSP-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Privacy by Design and Default"
      },
      {
        "source": "A004",
        "target": "DSP-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Privacy by Design and Default"
      },
      {
        "source": "B007",
        "target": "DSP-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Privacy by Design and Default"
      },
      {
        "source": "A001",
        "target": "DSP-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Protection Impact Assessment"
      },
      {
        "source": "C001",
        "target": "DSP-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Protection Impact Assessment"
      },
      {
        "source": "E008",
        "target": "DSP-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Protection Impact Assessment"
      },
      {
        "source": "E013",
        "target": "DSP-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Protection Impact Assessment"
      },
      {
        "source": "A004",
        "target": "DSP-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensitive Data Transfer"
      },
      {
        "source": "A006",
        "target": "DSP-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensitive Data Transfer"
      },
      {
        "source": "E012",
        "target": "DSP-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensitive Data Transfer"
      },
      {
        "source": "A001",
        "target": "DSP-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Personal Data Access, Reversal, Rectification and Deletion"
      },
      {
        "source": "A001",
        "target": "DSP-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Limitation of Purpose in Personal Data Processing"
      },
      {
        "source": "A004",
        "target": "DSP-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Limitation of Purpose in Personal Data Processing"
      },
      {
        "source": "A006",
        "target": "DSP-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Limitation of Purpose in Personal Data Processing"
      },
      {
        "source": "A001",
        "target": "DSP-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Personal Data Sub-processing"
      },
      {
        "source": "A006",
        "target": "DSP-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Personal Data Sub-processing"
      },
      {
        "source": "E011",
        "target": "DSP-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Personal Data Sub-processing"
      },
      {
        "source": "A001",
        "target": "DSP-14",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Disclosure of Data Sub-processors"
      },
      {
        "source": "A001",
        "target": "DSP-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Limitation of Production Data Use"
      },
      {
        "source": "A001",
        "target": "DSP-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Retention and Deletion"
      },
      {
        "source": "A002",
        "target": "DSP-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Retention and Deletion"
      },
      {
        "source": "A004",
        "target": "DSP-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Retention and Deletion"
      },
      {
        "source": "A006",
        "target": "DSP-17",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Sensitive Data Protection"
      },
      {
        "source": "E012",
        "target": "DSP-18",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Disclosure Notification"
      },
      {
        "source": "E011",
        "target": "DSP-19",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Data Location"
      },
      {
        "source": "A001",
        "target": "DSP-20",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Provenance and Transparency"
      },
      {
        "source": "E017",
        "target": "DSP-20",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Provenance and Transparency"
      },
      {
        "source": "A003",
        "target": "DSP-22",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Privacy Enhancing Technologies"
      },
      {
        "source": "A005",
        "target": "DSP-22",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Privacy Enhancing Technologies"
      },
      {
        "source": "A001",
        "target": "DSP-23",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Data Integrity Check"
      },
      {
        "source": "C001",
        "target": "GRC-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Risk Management Program"
      },
      {
        "source": "C008",
        "target": "GRC-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Risk Management Program"
      },
      {
        "source": "E013",
        "target": "GRC-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Risk Management Program"
      },
      {
        "source": "F001",
        "target": "GRC-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Risk Management Program"
      },
      {
        "source": "F002",
        "target": "GRC-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Risk Management Program"
      },
      {
        "source": "E008",
        "target": "GRC-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Organizational Policy Reviews"
      },
      {
        "source": "E004",
        "target": "GRC-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Governance Responsibility Model"
      },
      {
        "source": "E012",
        "target": "GRC-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Information System Regulatory Mapping"
      },
      {
        "source": "C003",
        "target": "GRC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Acceptable Use of the AI Service"
      },
      {
        "source": "C004",
        "target": "GRC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Acceptable Use of the AI Service"
      },
      {
        "source": "C005",
        "target": "GRC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Acceptable Use of the AI Service"
      },
      {
        "source": "E010",
        "target": "GRC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Acceptable Use of the AI Service"
      },
      {
        "source": "F001",
        "target": "GRC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Acceptable Use of the AI Service"
      },
      {
        "source": "F002",
        "target": "GRC-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Acceptable Use of the AI Service"
      },
      {
        "source": "E013",
        "target": "GRC-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "AI Impact Assessment"
      },
      {
        "source": "F001",
        "target": "GRC-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "AI Impact Assessment"
      },
      {
        "source": "F002",
        "target": "GRC-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "AI Impact Assessment"
      },
      {
        "source": "C003",
        "target": "GRC-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Bias and Fairness Assessment"
      },
      {
        "source": "C010",
        "target": "GRC-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Bias and Fairness Assessment"
      },
      {
        "source": "F001",
        "target": "GRC-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Ethics Committee"
      },
      {
        "source": "F002",
        "target": "GRC-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Ethics Committee"
      },
      {
        "source": "E017",
        "target": "GRC-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Explainability Requirement"
      },
      {
        "source": "E014",
        "target": "GRC-14",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Explainability Evaluation"
      },
      {
        "source": "E017",
        "target": "GRC-14",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Explainability Evaluation"
      },
      {
        "source": "C007",
        "target": "GRC-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Human supervision"
      },
      {
        "source": "C009",
        "target": "GRC-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Human supervision"
      },
      {
        "source": "E016",
        "target": "GRC-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Human supervision"
      },
      {
        "source": "E012",
        "target": "HRS-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Non-Disclosure Agreements"
      },
      {
        "source": "A006",
        "target": "HRS-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Personal and Sensitive Data Awareness and Training"
      },
      {
        "source": "E013",
        "target": "I&S-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Capacity and Resource Planning"
      },
      {
        "source": "A005",
        "target": "I&S-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Segmentation and Segregation"
      },
      {
        "source": "B007",
        "target": "IAM-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Identity and Access Management Policy and Procedures"
      },
      {
        "source": "B007",
        "target": "IAM-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Strong Password Policy and Procedures"
      },
      {
        "source": "B007",
        "target": "IAM-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Identity Inventory"
      },
      {
        "source": "E008",
        "target": "IAM-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Identity Inventory"
      },
      {
        "source": "B007",
        "target": "IAM-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Separation of Duties"
      },
      {
        "source": "B008",
        "target": "IAM-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Separation of Duties"
      },
      {
        "source": "B007",
        "target": "IAM-05",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Least Privilege"
      },
      {
        "source": "B007",
        "target": "IAM-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "User Access Provisioning"
      },
      {
        "source": "B007",
        "target": "IAM-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "User Access Changes and Revocation"
      },
      {
        "source": "B007",
        "target": "IAM-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "User Access Review"
      },
      {
        "source": "E008",
        "target": "IAM-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "User Access Review"
      },
      {
        "source": "B007",
        "target": "IAM-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Segregation of Privileged Access Roles"
      },
      {
        "source": "B007",
        "target": "IAM-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Management of Privileged Access Roles"
      },
      {
        "source": "B007",
        "target": "IAM-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Uniquely Identifiable Users"
      },
      {
        "source": "B007",
        "target": "IAM-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Strong Authentication"
      },
      {
        "source": "B008",
        "target": "IAM-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Strong Authentication"
      },
      {
        "source": "B007",
        "target": "IAM-15",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Passwords and Secrets Management"
      },
      {
        "source": "B007",
        "target": "IAM-16",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Authorization Mechanisms"
      },
      {
        "source": "A003",
        "target": "IAM-17",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Knowledge Access Control - Need to Know"
      },
      {
        "source": "B007",
        "target": "IAM-17",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Knowledge Access Control - Need to Know"
      },
      {
        "source": "B007",
        "target": "IAM-18",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Output Modification and Special Authorization"
      },
      {
        "source": "A003",
        "target": "IAM-19",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agent Access Restriction"
      },
      {
        "source": "B006",
        "target": "IAM-19",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agent Access Restriction"
      },
      {
        "source": "E015",
        "target": "LOG-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Logging and Monitoring Policy and Procedures"
      },
      {
        "source": "E015",
        "target": "LOG-03",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Security Monitoring and Alerting"
      },
      {
        "source": "B007",
        "target": "LOG-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Audit Logs Access and Accountability"
      },
      {
        "source": "E015",
        "target": "LOG-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Audit Logs Access and Accountability"
      },
      {
        "source": "E009",
        "target": "LOG-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Audit Logs Monitoring and Response"
      },
      {
        "source": "E015",
        "target": "LOG-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Audit Logs Monitoring and Response"
      },
      {
        "source": "E015",
        "target": "LOG-06",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Clock Synchronization"
      },
      {
        "source": "E008",
        "target": "LOG-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Logging Scope"
      },
      {
        "source": "E015",
        "target": "LOG-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Logging Scope"
      },
      {
        "source": "E015",
        "target": "LOG-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Log Records"
      },
      {
        "source": "B007",
        "target": "LOG-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Log Protection"
      },
      {
        "source": "E015",
        "target": "LOG-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Log Protection"
      },
      {
        "source": "E014",
        "target": "LOG-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Encryption Monitoring and Reporting"
      },
      {
        "source": "E015",
        "target": "LOG-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Encryption Monitoring and Reporting"
      },
      {
        "source": "E015",
        "target": "LOG-11",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Transaction / Activity Logging"
      },
      {
        "source": "B007",
        "target": "LOG-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Access Control Logs"
      },
      {
        "source": "E015",
        "target": "LOG-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Access Control Logs"
      },
      {
        "source": "E014",
        "target": "LOG-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Failures and Anomalies Reporting"
      },
      {
        "source": "E015",
        "target": "LOG-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Failures and Anomalies Reporting"
      },
      {
        "source": "B002",
        "target": "LOG-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Input Monitoring"
      },
      {
        "source": "B005",
        "target": "LOG-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Input Monitoring"
      },
      {
        "source": "E015",
        "target": "LOG-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Input Monitoring"
      },
      {
        "source": "C003",
        "target": "LOG-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Monitoring"
      },
      {
        "source": "C004",
        "target": "LOG-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Monitoring"
      },
      {
        "source": "C005",
        "target": "LOG-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Monitoring"
      },
      {
        "source": "E015",
        "target": "LOG-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output Monitoring"
      },
      {
        "source": "B008",
        "target": "MDS-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Training Pipeline Security"
      },
      {
        "source": "B008",
        "target": "MDS-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Model Artifact Scanning"
      },
      {
        "source": "E013",
        "target": "MDS-02",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Model Artifact Scanning"
      },
      {
        "source": "E017",
        "target": "MDS-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Documentation"
      },
      {
        "source": "A003",
        "target": "MDS-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Documentation Requirements"
      },
      {
        "source": "E017",
        "target": "MDS-04",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Documentation Requirements"
      },
      {
        "source": "E017",
        "target": "MDS-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Model Documentation Validation"
      },
      {
        "source": "B001",
        "target": "MDS-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Adversarial Attack Analysis"
      },
      {
        "source": "D002",
        "target": "MDS-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Adversarial Attack Analysis"
      },
      {
        "source": "B001",
        "target": "MDS-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Robustness against Adversarial Attack / Model Hardening"
      },
      {
        "source": "B002",
        "target": "MDS-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Robustness against Adversarial Attack / Model Hardening"
      },
      {
        "source": "D002",
        "target": "MDS-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Robustness against Adversarial Attack / Model Hardening"
      },
      {
        "source": "B008",
        "target": "MDS-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Integrity Checks"
      },
      {
        "source": "B008",
        "target": "MDS-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Model Signing/Ownership Verification"
      },
      {
        "source": "E004",
        "target": "MDS-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Model Signing/Ownership Verification"
      },
      {
        "source": "D001",
        "target": "MDS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Continuous Monitoring"
      },
      {
        "source": "D003",
        "target": "MDS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Continuous Monitoring"
      },
      {
        "source": "E015",
        "target": "MDS-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Continuous Monitoring"
      },
      {
        "source": "C001",
        "target": "MDS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Failure"
      },
      {
        "source": "C008",
        "target": "MDS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Failure"
      },
      {
        "source": "D001",
        "target": "MDS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Failure"
      },
      {
        "source": "D003",
        "target": "MDS-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Model Failure"
      },
      {
        "source": "C001",
        "target": "MDS-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Open Model Risk Assessment"
      },
      {
        "source": "C008",
        "target": "MDS-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Open Model Risk Assessment"
      },
      {
        "source": "E001",
        "target": "SEF-01",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Security Incident Management Policy and Procedures"
      },
      {
        "source": "E013",
        "target": "SEF-01",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Security Incident Management Policy and Procedures"
      },
      {
        "source": "E001",
        "target": "SEF-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Service Management Policy and Procedures"
      },
      {
        "source": "E001",
        "target": "SEF-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Incident Response Plans"
      },
      {
        "source": "E001",
        "target": "SEF-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Incident Response Testing"
      },
      {
        "source": "E001",
        "target": "SEF-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Incident Response Metrics"
      },
      {
        "source": "E014",
        "target": "SEF-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Incident Response Metrics"
      },
      {
        "source": "E015",
        "target": "SEF-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Incident Response Metrics"
      },
      {
        "source": "E001",
        "target": "SEF-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Security Breach Notification"
      },
      {
        "source": "E014",
        "target": "SEF-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Security Breach Notification"
      },
      {
        "source": "E015",
        "target": "SEF-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Security Breach Notification"
      },
      {
        "source": "E001",
        "target": "SEF-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Points of Contact Maintenance"
      },
      {
        "source": "E001",
        "target": "SEF-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Incident Response"
      },
      {
        "source": "E002",
        "target": "SEF-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Incident Response"
      },
      {
        "source": "E003",
        "target": "SEF-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Incident Response"
      },
      {
        "source": "E006",
        "target": "STA-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Supply Chain Risk Management Policies and Procedures"
      },
      {
        "source": "E006",
        "target": "STA-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Supply Chain Inventory"
      },
      {
        "source": "E006",
        "target": "STA-09",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Supply Chain Risk Management"
      },
      {
        "source": "A002",
        "target": "STA-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Primary Service and Contractual Agreement"
      },
      {
        "source": "C005",
        "target": "STA-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Primary Service and Contractual Agreement"
      },
      {
        "source": "E006",
        "target": "STA-10",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Primary Service and Contractual Agreement"
      },
      {
        "source": "E006",
        "target": "STA-11",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Supply Chain Agreement Review"
      },
      {
        "source": "E006",
        "target": "STA-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Supply Chain Compliance Assessment"
      },
      {
        "source": "E006",
        "target": "STA-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Supply Chain Service Agreement Compliance"
      },
      {
        "source": "E006",
        "target": "STA-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Supply Chain Governance Review"
      },
      {
        "source": "E006",
        "target": "STA-15",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Supply Chain Data Security Assessment"
      },
      {
        "source": "E017",
        "target": "STA-16",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Service Bill of Material (BOM)"
      },
      {
        "source": "B001",
        "target": "TVM-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Threat and Vulnerability Management Policy and Procedures"
      },
      {
        "source": "B002",
        "target": "TVM-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Threat and Vulnerability Management Policy and Procedures"
      },
      {
        "source": "E013",
        "target": "TVM-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Threat and Vulnerability Management Policy and Procedures"
      },
      {
        "source": "B002",
        "target": "TVM-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Malware and Malicious Instructions Protection Policy and Procedure"
      },
      {
        "source": "C006",
        "target": "TVM-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Malware and Malicious Instructions Protection Policy and Procedure"
      },
      {
        "source": "E013",
        "target": "TVM-02",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Malware and Malicious Instructions Protection Policy and Procedure"
      },
      {
        "source": "B001",
        "target": "TVM-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Vulnerability Remediation Schedule"
      },
      {
        "source": "C008",
        "target": "TVM-03",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Vulnerability Remediation Schedule"
      },
      {
        "source": "B002",
        "target": "TVM-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Detection Updates"
      },
      {
        "source": "B001",
        "target": "TVM-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "External Library Vulnerabilities"
      },
      {
        "source": "C002",
        "target": "TVM-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "External Library Vulnerabilities"
      },
      {
        "source": "E009",
        "target": "TVM-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "External Library Vulnerabilities"
      },
      {
        "source": "B001",
        "target": "TVM-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Penetration Testing"
      },
      {
        "source": "B004",
        "target": "TVM-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Penetration Testing"
      },
      {
        "source": "C010",
        "target": "TVM-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Penetration Testing"
      },
      {
        "source": "C012",
        "target": "TVM-06",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Penetration Testing"
      },
      {
        "source": "B001",
        "target": "TVM-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Vulnerability Remediation Schedule"
      },
      {
        "source": "C008",
        "target": "TVM-07",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Vulnerability Remediation Schedule"
      },
      {
        "source": "B001",
        "target": "TVM-08",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Vulnerability Prioritization"
      },
      {
        "source": "E014",
        "target": "TVM-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Vulnerability Management Reporting"
      },
      {
        "source": "E014",
        "target": "TVM-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Vulnerability Management Metrics"
      },
      {
        "source": "C003",
        "target": "TVM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Guardrails"
      },
      {
        "source": "C004",
        "target": "TVM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Guardrails"
      },
      {
        "source": "C005",
        "target": "TVM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Guardrails"
      },
      {
        "source": "D003",
        "target": "TVM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Guardrails"
      },
      {
        "source": "F001",
        "target": "TVM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Guardrails"
      },
      {
        "source": "F002",
        "target": "TVM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Guardrails"
      },
      {
        "source": "B001",
        "target": "TVM-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Threat Analysis and Modeling"
      },
      {
        "source": "D003",
        "target": "TVM-12",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Threat Analysis and Modeling"
      },
      {
        "source": "B001",
        "target": "TVM-13",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Threat Response"
      },
      {
        "source": "B004",
        "target": "UEM-01",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Endpoint Devices Policy and Procedures"
      },
      {
        "source": "E011",
        "target": "UEM-04",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Endpoint Inventory"
      },
      {
        "source": "B004",
        "target": "UEM-05",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Endpoint Management"
      },
      {
        "source": "A004",
        "target": "UEM-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Storage Encryption"
      },
      {
        "source": "A005",
        "target": "UEM-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Storage Encryption"
      },
      {
        "source": "A006",
        "target": "UEM-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Storage Encryption"
      },
      {
        "source": "B008",
        "target": "UEM-08",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Storage Encryption"
      },
      {
        "source": "B002",
        "target": "UEM-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Anti-Malware Detection and Prevention"
      },
      {
        "source": "B004",
        "target": "UEM-09",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Anti-Malware Detection and Prevention"
      },
      {
        "source": "B004",
        "target": "UEM-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Software Firewall"
      },
      {
        "source": "B004",
        "target": "UEM-11",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC out of scope but contributes to this AICM control area.",
        "target_title": "Data Loss Prevention"
      },
      {
        "source": "B004",
        "target": "UEM-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Third-Party Endpoint Security Posture"
      },
      {
        "source": "E009",
        "target": "UEM-14",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Third-Party Endpoint Security Posture"
      }
    ]
  },
  "eu-ai-act": {
    "description": "AIUC-1 operationalizes EU AI Act provider obligations. The crosswalk enables compliance for minimal- and limited-risk systems, supports high-risk system compliance when specific controls are met, and provides documentation usable for the conformity assessment required under Annex VI. Mappings target the most directly relevant Article(s) per AIUC-1 Requirement; broader Articles like 13 (transparency) and 72 (post-market monitoring) recur across multiple Requirements.",
    "target_version": "2024/1689",
    "target_framework_name": "EU AI Act",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/eu-ai-act",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "A001",
        "target": "Article-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Input data policies support technical-documentation requirements"
      },
      {
        "source": "A004",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "IP and trade-secret protection aligns with post-market monitoring"
      },
      {
        "source": "A006",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "PII leakage prevention is part of monitoring obligations"
      },
      {
        "source": "B002",
        "target": "Article-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Adversarial input detection supports accuracy, robustness, and cybersecurity"
      },
      {
        "source": "B002",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Adversarial input detection feeds post-market monitoring"
      },
      {
        "source": "B004",
        "target": "Article-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Endpoint scraping prevention addresses cybersecurity / unauthorized exploitation"
      },
      {
        "source": "B008",
        "target": "Article-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Deployment environment protection ensures security throughout lifecycle"
      },
      {
        "source": "C001",
        "target": "Article-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy is the foundation for the continuous risk-management process"
      },
      {
        "source": "C002",
        "target": "Article-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Pre-deployment testing supports risk identification and assessment"
      },
      {
        "source": "C002",
        "target": "Article-27",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Pre-deployment testing supports fundamental rights impact assessment for HRAI"
      },
      {
        "source": "C003",
        "target": "Article-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful output prevention is risk mitigation throughout the lifecycle"
      },
      {
        "source": "C004",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Out-of-scope output prevention contributes to post-market monitoring"
      },
      {
        "source": "C005",
        "target": "Article-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Customer-defined high-risk output management addresses organization-specific risk"
      },
      {
        "source": "C006",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Output vulnerability prevention supports ongoing system monitoring"
      },
      {
        "source": "C008",
        "target": "Article-72",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk-category monitoring enables continuous compliance assessment"
      },
      {
        "source": "C009",
        "target": "Article-14",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Real-time feedback enables effective human oversight"
      },
      {
        "source": "C010",
        "target": "Article-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party harmful-output testing validates risk management effectiveness"
      },
      {
        "source": "D003",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Restricting unsafe tool calls contributes to post-market monitoring"
      },
      {
        "source": "E001",
        "target": "Article-20",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach failure plan addresses corrective actions"
      },
      {
        "source": "E001",
        "target": "Article-73",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach failure plan supports serious-incident reporting"
      },
      {
        "source": "E002",
        "target": "Article-20",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful output failure plan supports incident response"
      },
      {
        "source": "E002",
        "target": "Article-73",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful output failure plan supports authority notification"
      },
      {
        "source": "E003",
        "target": "Article-20",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Hallucination failure plan enables rapid response"
      },
      {
        "source": "E003",
        "target": "Article-73",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Hallucination failure plan supports incident reporting"
      },
      {
        "source": "E004",
        "target": "Article-17",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability assignment establishes responsibility within QMS"
      },
      {
        "source": "E004",
        "target": "Article-18",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability assignment supports document-keeping obligations"
      },
      {
        "source": "E006",
        "target": "Article-23",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Vendor due diligence ensures importer-side compliance checks"
      },
      {
        "source": "E006",
        "target": "Article-24",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Vendor due diligence ensures distributor-side compliance checks"
      },
      {
        "source": "E007",
        "target": "Article-18",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Change approvals (retired into E004) support document-keeping"
      },
      {
        "source": "E008",
        "target": "Article-43",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal process review supports conformity-assessment procedures"
      },
      {
        "source": "E009",
        "target": "Article-72",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Third-party access monitoring is part of post-market monitoring"
      },
      {
        "source": "E011",
        "target": "Article-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Processing-locations records document deployment environments"
      },
      {
        "source": "E012",
        "target": "Article-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance documents provider obligations"
      },
      {
        "source": "E012",
        "target": "Article-18",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance supports record-keeping obligations"
      },
      {
        "source": "E012",
        "target": "Article-21",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance documents cooperation with authorities"
      },
      {
        "source": "E012",
        "target": "Article-22",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance documents authorized representative obligations"
      },
      {
        "source": "E012",
        "target": "Article-25",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance addresses provider obligations along the value chain"
      },
      {
        "source": "E012",
        "target": "Article-43",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance supports conformity-assessment procedures"
      },
      {
        "source": "E012",
        "target": "Article-44",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance supports certificate requirements"
      },
      {
        "source": "E012",
        "target": "Article-47",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance supports EU declaration of conformity"
      },
      {
        "source": "E012",
        "target": "Article-49",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance supports registration obligations"
      },
      {
        "source": "E013",
        "target": "Article-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses risk management requirements"
      },
      {
        "source": "E013",
        "target": "Article-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses data and data governance"
      },
      {
        "source": "E013",
        "target": "Article-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses technical documentation"
      },
      {
        "source": "E013",
        "target": "Article-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses record-keeping"
      },
      {
        "source": "E013",
        "target": "Article-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses transparency and information provision"
      },
      {
        "source": "E013",
        "target": "Article-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses provider obligations"
      },
      {
        "source": "E013",
        "target": "Article-17",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS itself is mandated by Article 17"
      },
      {
        "source": "E013",
        "target": "Article-18",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses document-keeping"
      },
      {
        "source": "E013",
        "target": "Article-19",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS addresses automatically generated logs"
      },
      {
        "source": "E013",
        "target": "Article-26",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports deployer obligations"
      },
      {
        "source": "E013",
        "target": "Article-43",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports conformity-assessment procedures"
      },
      {
        "source": "E013",
        "target": "Article-72",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports post-market monitoring"
      },
      {
        "source": "E013",
        "target": "Article-73",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports serious-incident reporting"
      },
      {
        "source": "E014",
        "target": "Article-11",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reports (retired into E017) contributed to technical documentation"
      },
      {
        "source": "E015",
        "target": "Article-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Activity logging enables automatic record-keeping"
      },
      {
        "source": "E015",
        "target": "Article-19",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Activity logging supports automatically generated logs requirement"
      },
      {
        "source": "E016",
        "target": "Article-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AI disclosure mechanisms inform deployers about system capabilities"
      },
      {
        "source": "E016",
        "target": "Article-50",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AI disclosure mechanisms address transparency obligations to natural persons"
      },
      {
        "source": "E017",
        "target": "Article-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System transparency policy documents technical capabilities and limitations"
      }
    ]
  },
  "fcra": {
    "description": "AIUC-1 maps to the Fair Credit Reporting Act (FCRA), the US statute that governs consumer-reporting agencies and adverse-action decisions including AI-assisted decisions about credit, employment, insurance, and housing. Mappings focus on AIUC-1 controls in Principle C (Safety, including bias) and Principle E (Accountability/disclosure). Confidence is high where the AIUC control directly satisfies the FCRA obligation; medium where the AIUC control is broader and FCRA narrower (or vice versa).",
    "target_version": "15 USC §1681 et seq.",
    "target_framework_name": "Fair Credit Reporting Act",
    "publisher": "platform-authored",
    "source_url": "https://www.law.cornell.edu/uscode/text/15/chapter-41/subchapter-III",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "E016",
        "target": "15 USC §1681m",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "FCRA mandates adverse-action notice when a consumer report is used to deny credit/employment; AIUC-1 E016 covers AI-interaction disclosure including automated decisions.",
        "target_title": "Adverse action notice"
      },
      {
        "source": "E004",
        "target": "15 USC §1681m",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Adverse-action notice requires assigned accountability for issuing it.",
        "target_title": "Adverse action notice"
      },
      {
        "source": "D001",
        "target": "15 USC §1681e(b)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 hallucination prevention supports FCRA's reasonable-procedures-for-accuracy standard.",
        "target_title": "Accuracy of consumer reports"
      },
      {
        "source": "C002",
        "target": "15 USC §1681e(b)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Pre-deployment testing supports FCRA's procedural-accuracy standard.",
        "target_title": "Accuracy of consumer reports"
      },
      {
        "source": "C014",
        "target": "15 USC §1681e(b)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Bias evaluation contributes to procedural accuracy where AI scoring affects consumer reports.",
        "target_title": "Accuracy of consumer reports"
      },
      {
        "source": "A001",
        "target": "15 USC §1681g",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 input data policy aligns with FCRA's \"what's in your file\" disclosure regime.",
        "target_title": "Disclosure to consumers"
      },
      {
        "source": "E016",
        "target": "15 USC §1681g",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Disclosure to consumers"
      },
      {
        "source": "C009",
        "target": "15 USC §1681i",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 real-time feedback and intervention supports the dispute-resolution and reinvestigation requirement.",
        "target_title": "Procedure in case of disputed accuracy"
      },
      {
        "source": "E015",
        "target": "15 USC §1681e(a)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Audit logging supports FCRA's \"reasonable procedures\" requirement to demonstrate compliance.",
        "target_title": "Compliance procedures"
      }
    ]
  },
  "fha": {
    "description": "AIUC-1 maps to the Fair Housing Act and HUD's disparate-impact rule (24 CFR §100.500), which prohibits practices — including AI-assisted decisions about housing, lending, and rentals — that have a discriminatory effect on protected classes regardless of intent. Mappings focus on AIUC-1 controls in Principle C (bias evaluation, harmful outputs, third-party testing).",
    "target_version": "24 CFR §100.500",
    "target_framework_name": "Fair Housing Act / HUD Disparate Impact Rule",
    "publisher": "platform-authored",
    "source_url": "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100/subpart-G",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "C003",
        "target": "24 CFR §100.500(a)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 harmful-outputs prevention covers discriminatory outputs; FHA disparate-impact is narrower (housing-specific).",
        "target_title": "Discriminatory effect prohibited"
      },
      {
        "source": "C014",
        "target": "24 CFR §100.500(a)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 bias evaluation directly supports detecting practices with discriminatory effect.",
        "target_title": "Discriminatory effect prohibited"
      },
      {
        "source": "C010",
        "target": "24 CFR §100.500(c)(1)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Third-party testing for harmful outputs provides documentary evidence in burden-shifting analysis.",
        "target_title": "Burden of proof — substantial, legitimate, nondiscriminatory interest"
      },
      {
        "source": "C012",
        "target": "24 CFR §100.500(c)(1)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Third-party testing for customer-defined risk supports the legitimate-interest burden.",
        "target_title": "Burden of proof — substantial, legitimate, nondiscriminatory interest"
      },
      {
        "source": "C001",
        "target": "24 CFR §100.500(c)(2)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 risk taxonomy contributes to identifying less-discriminatory alternatives.",
        "target_title": "Burden of proof — less discriminatory alternative"
      },
      {
        "source": "E004",
        "target": "24 CFR §100.500(d)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Assigned accountability supports the records FHA defendants must produce on discriminatory-effect challenges.",
        "target_title": "Recordkeeping (procedural support for the rule)"
      },
      {
        "source": "E015",
        "target": "24 CFR §100.500(d)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 audit logging directly produces the records needed for FHA disparate-impact defense.",
        "target_title": "Recordkeeping"
      }
    ]
  },
  "ftc-ai": {
    "description": "AIUC-1 maps to the FTC's published guidance on AI fairness, accountability, and truthfulness — including the 2021 \"Aiming for truth, fairness, and equity\" guidance, the 2023 \"Keep your AI claims in check\" guidance, and the FTC's enforcement positions under Section 5 of the FTC Act (unfair or deceptive acts/practices). Mappings cover AIUC-1 controls in Principle C (Safety/bias) and Principle E (Accountability/disclosure).",
    "target_version": "2021 - 2024",
    "target_framework_name": "FTC AI Guidance",
    "publisher": "platform-authored",
    "source_url": "https://www.ftc.gov/business-guidance/blog/2021/04/aiming-truth-fairness-equity-your-companys-use-ai",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "E016",
        "target": "FTC AI Guidance § Truth",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 disclosure mechanisms operationalize FTC's \"don't mislead consumers about AI\" standard.",
        "target_title": "Truth in AI claims"
      },
      {
        "source": "C003",
        "target": "FTC AI Guidance § Truth",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 harmful-outputs prevention covers deceptive outputs that would draw FTC §5 deception scrutiny.",
        "target_title": "Truth in AI claims (deception/distressed outputs)"
      },
      {
        "source": "C014",
        "target": "FTC AI Guidance § Fairness",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 bias evaluation directly addresses FTC's fairness standard.",
        "target_title": "Fairness — discriminatory outcomes"
      },
      {
        "source": "C010",
        "target": "FTC AI Guidance § Fairness",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party testing for harmful outputs provides the independent fairness check FTC has cited as best practice.",
        "target_title": "Fairness — independent testing for harmful outputs"
      },
      {
        "source": "A005",
        "target": "FTC AI Guidance § Watch your data",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 cross-customer data exposure controls reduce one source of biased training data.",
        "target_title": "Watch out for biased data"
      },
      {
        "source": "A006",
        "target": "FTC AI Guidance § Watch your data",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Watch out for biased data"
      },
      {
        "source": "E004",
        "target": "FTC AI Guidance § Accountability",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 assigned accountability is the same construct FTC has emphasized.",
        "target_title": "Accountability — assigned ownership"
      },
      {
        "source": "E015",
        "target": "FTC AI Guidance § Accountability",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Audit logs are the substrate FTC investigations rely on.",
        "target_title": "Accountability — records"
      },
      {
        "source": "C011",
        "target": "FTC AI Guidance § Independent oversight",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Independent third-party testing"
      },
      {
        "source": "C012",
        "target": "FTC AI Guidance § Independent oversight",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Independent third-party testing"
      },
      {
        "source": "E017",
        "target": "FTC AI Guidance § Transparency",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 system transparency policy aligns with FTC's \"be transparent about how you use AI\" guidance.",
        "target_title": "System transparency policy"
      },
      {
        "source": "C002",
        "target": "FTC AI Guidance § Test and validate",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Pre-deployment testing"
      }
    ]
  },
  "hipaa": {
    "description": "AIUC-1 maps to HIPAA's Privacy Rule (45 CFR §164.500–534) and Security Rule (45 CFR §164.302–318). Mappings are platform-authored from the codified text of the rules, focused on AIUC-1 controls in Principle A (Data & Privacy), Principle B (Security), and Principle E (Accountability). Healthcare deployments of AI systems handling PHI are the primary audience. Confidence is high where the AIUC control directly satisfies the HIPAA requirement; medium where the relationship is partial.",
    "target_version": "45 CFR Part 164",
    "target_framework_name": "HIPAA Privacy & Security Rules",
    "publisher": "platform-authored",
    "source_url": "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "A003",
        "target": "45 CFR §164.502(b)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Both require limiting data access/use to the minimum necessary for the task.",
        "target_title": "Minimum necessary"
      },
      {
        "source": "A001",
        "target": "45 CFR §164.502(a)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 input data policy parallels HIPAA's permitted-uses framework; HIPAA is narrower (PHI specifically).",
        "target_title": "Uses and disclosures permitted"
      },
      {
        "source": "A002",
        "target": "45 CFR §164.502(a)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 output data policy covers what AIUC outputs may be used for; aligns with HIPAA's downstream-use restrictions.",
        "target_title": "Uses and disclosures permitted"
      },
      {
        "source": "A001",
        "target": "45 CFR §164.508",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 consent capture aligns with HIPAA's authorization-for-non-permitted-use requirement.",
        "target_title": "Authorization required"
      },
      {
        "source": "A006",
        "target": "45 CFR §164.514(b)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1's PII leakage prevention overlaps with HIPAA's de-identification (Safe Harbor / Expert Determination).",
        "target_title": "De-identification standard"
      },
      {
        "source": "A001",
        "target": "45 CFR §164.524",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 includes data subject right processes; HIPAA right-of-access is narrower but in the same family.",
        "target_title": "Access of individuals to PHI"
      },
      {
        "source": "A001",
        "target": "45 CFR §164.526",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 data subject right processes typically include correction; HIPAA mandates an amendment process.",
        "target_title": "Amendment of PHI"
      },
      {
        "source": "A006",
        "target": "45 CFR §164.530(c)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "HIPAA requires reasonable safeguards against improper use/disclosure of PHI; AIUC-1 A006 implements PII safeguards.",
        "target_title": "Safeguards (Privacy Rule)"
      },
      {
        "source": "E001",
        "target": "45 CFR §164.308(a)(1)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Both require a documented risk-management program with assigned ownership.",
        "target_title": "Security management process"
      },
      {
        "source": "E008",
        "target": "45 CFR §164.308(a)(1)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 internal process review supports the periodic security evaluation HIPAA mandates.",
        "target_title": "Security management process"
      },
      {
        "source": "B007",
        "target": "45 CFR §164.308(a)(3)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "User access controls and authorization are core to both.",
        "target_title": "Workforce security"
      },
      {
        "source": "E010",
        "target": "45 CFR §164.308(a)(5)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 acceptable use policy + training aligns with HIPAA's awareness/training standard.",
        "target_title": "Security awareness and training"
      },
      {
        "source": "E001",
        "target": "45 CFR §164.308(a)(6)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 failure plan for security breaches directly maps to HIPAA's incident-response standard.",
        "target_title": "Security incident procedures"
      },
      {
        "source": "E001",
        "target": "45 CFR §164.308(a)(7)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 covers incident response; HIPAA's contingency plan is broader (data backup, disaster recovery, emergency mode).",
        "target_title": "Contingency plan"
      },
      {
        "source": "B008",
        "target": "45 CFR §164.310",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 deployment environment controls cover hosting security; HIPAA physical safeguards are broader (facility access).",
        "target_title": "Physical safeguards"
      },
      {
        "source": "B007",
        "target": "45 CFR §164.312(a)(1)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Access control (Technical safeguards)"
      },
      {
        "source": "B008",
        "target": "45 CFR §164.312(a)(1)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Access control (Technical safeguards)"
      },
      {
        "source": "E015",
        "target": "45 CFR §164.312(b)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 logging directly satisfies HIPAA's audit-trail requirement.",
        "target_title": "Audit controls"
      },
      {
        "source": "B008",
        "target": "45 CFR §164.312(c)",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 model integrity controls support HIPAA's integrity standard (ePHI tampering detection).",
        "target_title": "Integrity"
      },
      {
        "source": "B007",
        "target": "45 CFR §164.312(d)",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Person or entity authentication"
      },
      {
        "source": "E006",
        "target": "45 CFR §164.314",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 vendor due diligence parallels HIPAA's BAA-and-due-diligence regime.",
        "target_title": "Business associate contracts"
      },
      {
        "source": "E012",
        "target": "45 CFR §164.316",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Policies, procedures, and documentation"
      },
      {
        "source": "E001",
        "target": "45 CFR §164.404",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 failure plan for security breaches includes notification procedures.",
        "target_title": "Notification to individuals (Breach Notification Rule)"
      },
      {
        "source": "E001",
        "target": "45 CFR §164.410",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 incident response includes vendor notification expectations.",
        "target_title": "Notification by a business associate"
      },
      {
        "source": "E006",
        "target": "45 CFR §164.410",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Notification by a business associate"
      }
    ]
  },
  "ibm-ai-risk-atlas": {
    "description": "AIUC-1 maps to IBM's AI Risk Atlas — a catalog of 99 numbered risks across five domains (Agentic AI, Training Data, Inference, Output, Non-Technical). IBM Research is a technical contributor to AIUC-1, so the mapping is dense and high-confidence. 25 of the 99 IBM rows have no AIUC-1 mapping (mostly societal-impact risks like environmental cost, jobs displacement, cultural diversity) — those are intentionally not represented in this crosswalk.",
    "target_version": "2024",
    "target_framework_name": "IBM AI Risk Atlas",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/ibm-ai-risk-atlas",
    "last_updated": "2026-03-11",
    "mappings": [
      {
        "source": "E015",
        "target": "IBM-1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Unexplainable and untraceable actions"
      },
      {
        "source": "A003",
        "target": "IBM-2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Sharing IP/PI/confidential information with user"
      },
      {
        "source": "A003",
        "target": "IBM-3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Sharing IP/PI/confidential information with tools"
      },
      {
        "source": "E009",
        "target": "IBM-3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Sharing IP/PI/confidential information with tools"
      },
      {
        "source": "C007",
        "target": "IBM-4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Over- or under-reliance on AI agents"
      },
      {
        "source": "C009",
        "target": "IBM-4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Over- or under-reliance on AI agents"
      },
      {
        "source": "B006",
        "target": "IBM-5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Misaligned actions"
      },
      {
        "source": "D003",
        "target": "IBM-5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Misaligned actions"
      },
      {
        "source": "D004",
        "target": "IBM-5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Misaligned actions"
      },
      {
        "source": "E009",
        "target": "IBM-6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Attack on AI agents' external resources"
      },
      {
        "source": "B006",
        "target": "IBM-7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Unauthorized use"
      },
      {
        "source": "B007",
        "target": "IBM-7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Unauthorized use"
      },
      {
        "source": "B008",
        "target": "IBM-7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Unauthorized use"
      },
      {
        "source": "D003",
        "target": "IBM-7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Unauthorized use"
      },
      {
        "source": "E009",
        "target": "IBM-7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Unauthorized use"
      },
      {
        "source": "B006",
        "target": "IBM-8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Exploit trust mismatch"
      },
      {
        "source": "B007",
        "target": "IBM-8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Exploit trust mismatch"
      },
      {
        "source": "D003",
        "target": "IBM-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Function calling hallucination"
      },
      {
        "source": "D004",
        "target": "IBM-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Function calling hallucination"
      },
      {
        "source": "E003",
        "target": "IBM-9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Function calling hallucination"
      },
      {
        "source": "D003",
        "target": "IBM-10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Redundant actions"
      },
      {
        "source": "C002",
        "target": "IBM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Incomplete AI agent evaluation"
      },
      {
        "source": "D004",
        "target": "IBM-11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Incomplete AI agent evaluation"
      },
      {
        "source": "E001",
        "target": "IBM-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Mitigation and maintenance"
      },
      {
        "source": "E002",
        "target": "IBM-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Mitigation and maintenance"
      },
      {
        "source": "E013",
        "target": "IBM-12",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Mitigation and maintenance"
      },
      {
        "source": "E015",
        "target": "IBM-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Lack of AI agent transparency"
      },
      {
        "source": "E017",
        "target": "IBM-13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Lack of AI agent transparency"
      },
      {
        "source": "E015",
        "target": "IBM-14",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Reproducibility"
      },
      {
        "source": "E004",
        "target": "IBM-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Accountability of AI agent actions"
      },
      {
        "source": "E015",
        "target": "IBM-15",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - Accountability of AI agent actions"
      },
      {
        "source": "E006",
        "target": "IBM-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - AI agent compliance"
      },
      {
        "source": "E012",
        "target": "IBM-16",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - AI agent compliance"
      },
      {
        "source": "C009",
        "target": "IBM-20",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Agentic AI - AI agents' impact on human agency"
      },
      {
        "source": "B008",
        "target": "IBM-29",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data poisoning"
      },
      {
        "source": "A005",
        "target": "IBM-30",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Personal information in data"
      },
      {
        "source": "A006",
        "target": "IBM-30",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Personal information in data"
      },
      {
        "source": "A005",
        "target": "IBM-31",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Reidentification"
      },
      {
        "source": "A001",
        "target": "IBM-32",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data privacy rights alignment"
      },
      {
        "source": "A002",
        "target": "IBM-32",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data privacy rights alignment"
      },
      {
        "source": "E012",
        "target": "IBM-32",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data privacy rights alignment"
      },
      {
        "source": "E006",
        "target": "IBM-34",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Uncertain data provenance"
      },
      {
        "source": "A001",
        "target": "IBM-35",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data acquisition restrictions"
      },
      {
        "source": "A003",
        "target": "IBM-35",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data acquisition restrictions"
      },
      {
        "source": "E011",
        "target": "IBM-35",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data acquisition restrictions"
      },
      {
        "source": "A001",
        "target": "IBM-36",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data usage restrictions"
      },
      {
        "source": "E005",
        "target": "IBM-36",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data usage restrictions"
      },
      {
        "source": "E012",
        "target": "IBM-36",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data usage restrictions"
      },
      {
        "source": "E005",
        "target": "IBM-37",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data transfer restrictions"
      },
      {
        "source": "E011",
        "target": "IBM-37",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data transfer restrictions"
      },
      {
        "source": "A005",
        "target": "IBM-38",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Confidential information in data"
      },
      {
        "source": "A007",
        "target": "IBM-39",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data usage rights restrictions"
      },
      {
        "source": "E006",
        "target": "IBM-39",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Training Data - Data usage rights restrictions"
      },
      {
        "source": "D001",
        "target": "IBM-40",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Poor model accuracy"
      },
      {
        "source": "D002",
        "target": "IBM-40",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Poor model accuracy"
      },
      {
        "source": "B001",
        "target": "IBM-41",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Evasion attack"
      },
      {
        "source": "B002",
        "target": "IBM-41",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Evasion attack"
      },
      {
        "source": "B003",
        "target": "IBM-42",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Extraction attack"
      },
      {
        "source": "B004",
        "target": "IBM-42",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Extraction attack"
      },
      {
        "source": "B001",
        "target": "IBM-43",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Jailbreaking"
      },
      {
        "source": "B002",
        "target": "IBM-43",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Jailbreaking"
      },
      {
        "source": "A007",
        "target": "IBM-44",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - IP information in prompt"
      },
      {
        "source": "A006",
        "target": "IBM-45",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Confidential data in prompt"
      },
      {
        "source": "B001",
        "target": "IBM-46",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Prompt injection attack"
      },
      {
        "source": "B002",
        "target": "IBM-46",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Prompt injection attack"
      },
      {
        "source": "B003",
        "target": "IBM-47",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Prompt leaking"
      },
      {
        "source": "B004",
        "target": "IBM-47",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Prompt leaking"
      },
      {
        "source": "B009",
        "target": "IBM-47",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Prompt leaking"
      },
      {
        "source": "B002",
        "target": "IBM-49",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Context overload attack"
      },
      {
        "source": "B001",
        "target": "IBM-50",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Direct instructions attack"
      },
      {
        "source": "B005",
        "target": "IBM-50",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Direct instructions attack"
      },
      {
        "source": "B001",
        "target": "IBM-52",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Indirect instructions attack"
      },
      {
        "source": "B002",
        "target": "IBM-52",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Indirect instructions attack"
      },
      {
        "source": "B002",
        "target": "IBM-53",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Social hacking attack"
      },
      {
        "source": "B005",
        "target": "IBM-53",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Social hacking attack"
      },
      {
        "source": "F001",
        "target": "IBM-53",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Social hacking attack"
      },
      {
        "source": "A003",
        "target": "IBM-55",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Personal information in prompt"
      },
      {
        "source": "A006",
        "target": "IBM-55",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Personal information in prompt"
      },
      {
        "source": "B004",
        "target": "IBM-56",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Attribute inference attack"
      },
      {
        "source": "A005",
        "target": "IBM-57",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Membership inference attack"
      },
      {
        "source": "B004",
        "target": "IBM-57",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Inference - Membership inference attack"
      },
      {
        "source": "C003",
        "target": "IBM-58",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Decision bias"
      },
      {
        "source": "C010",
        "target": "IBM-58",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Decision bias"
      },
      {
        "source": "C003",
        "target": "IBM-59",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Output bias"
      },
      {
        "source": "C010",
        "target": "IBM-59",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Output bias"
      },
      {
        "source": "C003",
        "target": "IBM-60",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful output"
      },
      {
        "source": "C005",
        "target": "IBM-60",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful output"
      },
      {
        "source": "C010",
        "target": "IBM-60",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful output"
      },
      {
        "source": "E002",
        "target": "IBM-60",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful output"
      },
      {
        "source": "F002",
        "target": "IBM-60",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful output"
      },
      {
        "source": "C005",
        "target": "IBM-61",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful code generation"
      },
      {
        "source": "C006",
        "target": "IBM-61",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful code generation"
      },
      {
        "source": "F001",
        "target": "IBM-61",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Harmful code generation"
      },
      {
        "source": "C003",
        "target": "IBM-62",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Toxic output"
      },
      {
        "source": "C010",
        "target": "IBM-62",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Toxic output"
      },
      {
        "source": "D001",
        "target": "IBM-63",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Incomplete advice"
      },
      {
        "source": "C007",
        "target": "IBM-64",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Over- or under-reliance"
      },
      {
        "source": "C009",
        "target": "IBM-64",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Over- or under-reliance"
      },
      {
        "source": "F001",
        "target": "IBM-65",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Dangerous use"
      },
      {
        "source": "F002",
        "target": "IBM-65",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Dangerous use"
      },
      {
        "source": "C003",
        "target": "IBM-66",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Spreading disinformation"
      },
      {
        "source": "F001",
        "target": "IBM-66",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Spreading disinformation"
      },
      {
        "source": "C001",
        "target": "IBM-67",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Nonconsensual use"
      },
      {
        "source": "F001",
        "target": "IBM-67",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Nonconsensual use"
      },
      {
        "source": "C001",
        "target": "IBM-69",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Improper usage"
      },
      {
        "source": "C004",
        "target": "IBM-69",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Improper usage"
      },
      {
        "source": "C011",
        "target": "IBM-69",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Improper usage"
      },
      {
        "source": "E016",
        "target": "IBM-70",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Non-disclosure"
      },
      {
        "source": "D001",
        "target": "IBM-71",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Hallucination"
      },
      {
        "source": "D002",
        "target": "IBM-71",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Hallucination"
      },
      {
        "source": "E003",
        "target": "IBM-71",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Hallucination"
      },
      {
        "source": "A005",
        "target": "IBM-72",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Exposing personal information"
      },
      {
        "source": "A006",
        "target": "IBM-72",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Exposing personal information"
      },
      {
        "source": "A007",
        "target": "IBM-73",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Copyright infringement"
      },
      {
        "source": "A005",
        "target": "IBM-74",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Revealing confidential information"
      },
      {
        "source": "B009",
        "target": "IBM-74",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Revealing confidential information"
      },
      {
        "source": "D001",
        "target": "IBM-76",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Output - Unreliable source attribution"
      },
      {
        "source": "A001",
        "target": "IBM-79",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of data transparency"
      },
      {
        "source": "E017",
        "target": "IBM-79",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of data transparency"
      },
      {
        "source": "E017",
        "target": "IBM-80",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of model transparency"
      },
      {
        "source": "E017",
        "target": "IBM-81",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of system transparency"
      },
      {
        "source": "C001",
        "target": "IBM-83",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incomplete usage definition"
      },
      {
        "source": "C011",
        "target": "IBM-83",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incomplete usage definition"
      },
      {
        "source": "C001",
        "target": "IBM-84",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Unrepresentative risk testing"
      },
      {
        "source": "C002",
        "target": "IBM-84",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Unrepresentative risk testing"
      },
      {
        "source": "C010",
        "target": "IBM-84",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Unrepresentative risk testing"
      },
      {
        "source": "C012",
        "target": "IBM-84",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Unrepresentative risk testing"
      },
      {
        "source": "C001",
        "target": "IBM-85",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incorrect risk testing"
      },
      {
        "source": "C002",
        "target": "IBM-85",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incorrect risk testing"
      },
      {
        "source": "C008",
        "target": "IBM-85",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incorrect risk testing"
      },
      {
        "source": "C012",
        "target": "IBM-85",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incorrect risk testing"
      },
      {
        "source": "E008",
        "target": "IBM-85",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incorrect risk testing"
      },
      {
        "source": "E013",
        "target": "IBM-85",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Incorrect risk testing"
      },
      {
        "source": "C001",
        "target": "IBM-86",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of testing diversity"
      },
      {
        "source": "C002",
        "target": "IBM-86",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of testing diversity"
      },
      {
        "source": "C012",
        "target": "IBM-86",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Lack of testing diversity"
      },
      {
        "source": "A007",
        "target": "IBM-88",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Model usage rights restrictions"
      },
      {
        "source": "E006",
        "target": "IBM-88",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Model usage rights restrictions"
      },
      {
        "source": "E001",
        "target": "IBM-89",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Legal accountability"
      },
      {
        "source": "E002",
        "target": "IBM-89",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Legal accountability"
      },
      {
        "source": "E003",
        "target": "IBM-89",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Legal accountability"
      },
      {
        "source": "E004",
        "target": "IBM-89",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Legal accountability"
      },
      {
        "source": "E012",
        "target": "IBM-89",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Legal accountability"
      },
      {
        "source": "A002",
        "target": "IBM-90",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Generated content ownership and IP"
      },
      {
        "source": "A007",
        "target": "IBM-90",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Non-Technical - Generated content ownership and IP"
      }
    ]
  },
  "iso-42001": {
    "description": "AIUC-1 incorporates the majority of controls from ISO/IEC 42001 while translating ISO's management-system approach into concrete, auditable requirements. AIUC-1 extends ISO 42001 with third-party testing for hallucinations and jailbreak attempts, plus AI-specific failure plans and deployment-environment security requirements. Mappings frequently span multiple ISO clauses because AIUC-1 Requirements are scoped narrower than ISO management-system clauses.",
    "target_version": "2023",
    "target_framework_name": "ISO/IEC 42001",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/iso-42001",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "A001",
        "target": "A.7.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Input data policy aligns with ISO data resources control"
      },
      {
        "source": "A001",
        "target": "A.7.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Input data policy supports data preparation control"
      },
      {
        "source": "A007",
        "target": "A.7.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Prevent IP violations via data provenance"
      },
      {
        "source": "C001",
        "target": "4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy informs organizational context"
      },
      {
        "source": "C001",
        "target": "6.1.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy underlies AI risk management planning"
      },
      {
        "source": "C001",
        "target": "6.1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy supports risk assessment"
      },
      {
        "source": "C001",
        "target": "6.1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy supports risk treatment"
      },
      {
        "source": "C001",
        "target": "8.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy used in operational risk assessment"
      },
      {
        "source": "C001",
        "target": "8.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy used in operational risk treatment"
      },
      {
        "source": "C001",
        "target": "A.5.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy aligns to AI policy"
      },
      {
        "source": "C001",
        "target": "A.5.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy supports AI roles and responsibilities"
      },
      {
        "source": "C001",
        "target": "A.5.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy supports management commitment"
      },
      {
        "source": "C001",
        "target": "A.5.5",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Risk taxonomy partially covers societal impact assessment"
      },
      {
        "source": "C002",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Pre-deployment testing aligns with AI system verification"
      },
      {
        "source": "C002",
        "target": "A.6.2.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Pre-deployment testing aligns with AI system validation"
      },
      {
        "source": "C007",
        "target": "A.6.1.2",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Flagging high-risk outputs partially covers responsible AI objectives"
      },
      {
        "source": "C007",
        "target": "A.9.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Flagging supports impact assessment processes"
      },
      {
        "source": "C007",
        "target": "A.9.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Flagging supports impact assessment documentation"
      },
      {
        "source": "C008",
        "target": "6.1.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring informs AI risk management planning"
      },
      {
        "source": "C008",
        "target": "6.1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring supports ongoing risk assessment"
      },
      {
        "source": "C008",
        "target": "6.1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring supports risk treatment review"
      },
      {
        "source": "C008",
        "target": "8.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring is operational risk assessment"
      },
      {
        "source": "C008",
        "target": "8.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring drives operational risk treatment"
      },
      {
        "source": "C008",
        "target": "9.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring is performance evaluation"
      },
      {
        "source": "C008",
        "target": "A.5.4",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Risk monitoring aligns with management commitment to oversight"
      },
      {
        "source": "C008",
        "target": "A.6.2.6",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Risk monitoring partially covers AI system operation control"
      },
      {
        "source": "C008",
        "target": "A.9.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk monitoring informs impact assessment processes"
      },
      {
        "source": "C008",
        "target": "A.9.4",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Risk monitoring supports impact-on-individuals assessment"
      },
      {
        "source": "C009",
        "target": "A.8.3",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Real-time feedback partially covers external stakeholder communication"
      },
      {
        "source": "C010",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party harmful-output testing supports AI system verification"
      },
      {
        "source": "C011",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party out-of-scope testing supports AI system verification"
      },
      {
        "source": "C012",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party customer-defined-risk testing supports AI system verification"
      },
      {
        "source": "D002",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party hallucination testing supports AI system verification"
      },
      {
        "source": "D004",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party tool-call testing supports AI system verification"
      },
      {
        "source": "E001",
        "target": "A.8.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach failure plan addresses AI system incidents"
      },
      {
        "source": "E001",
        "target": "A.8.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach failure plan supports incident-related communication"
      },
      {
        "source": "E002",
        "target": "A.8.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful-output failure plan addresses AI system incidents"
      },
      {
        "source": "E002",
        "target": "A.8.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful-output failure plan supports incident-related communication"
      },
      {
        "source": "E003",
        "target": "A.8.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Hallucination failure plan addresses AI system incidents"
      },
      {
        "source": "E004",
        "target": "5.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability assignment aligns with leadership commitment"
      },
      {
        "source": "E004",
        "target": "5.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability assignment defines roles and responsibilities"
      },
      {
        "source": "E004",
        "target": "A.3.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability for AI system roles"
      },
      {
        "source": "E004",
        "target": "A.4.6",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Accountability partially addresses competence/human resources"
      },
      {
        "source": "E004",
        "target": "A.6.2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability anchors AI system development objectives"
      },
      {
        "source": "E004",
        "target": "A.10.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability supports allocation of responsibilities"
      },
      {
        "source": "E006",
        "target": "A.10.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Vendor due diligence aligns with supplier requirements"
      },
      {
        "source": "E007",
        "target": "6.3",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Change approvals (retired into E004) align with planned-change clauses"
      },
      {
        "source": "E007",
        "target": "A.6.2.2",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Change approvals (retired) support AI development objectives"
      },
      {
        "source": "E007",
        "target": "A.6.2.4",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Change approvals (retired) support verification"
      },
      {
        "source": "E008",
        "target": "6.3",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Internal review partially covers planning of changes"
      },
      {
        "source": "E008",
        "target": "7.5.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal review supports document creation/update"
      },
      {
        "source": "E008",
        "target": "9.2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal review aligns with internal audit programme"
      },
      {
        "source": "E008",
        "target": "9.2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal review supports internal audit conduct"
      },
      {
        "source": "E008",
        "target": "9.3.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal review feeds management review"
      },
      {
        "source": "E008",
        "target": "9.3.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal review provides management review inputs"
      },
      {
        "source": "E008",
        "target": "9.3.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal review captures management review outputs"
      },
      {
        "source": "E008",
        "target": "A.2.4",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Internal review supports management review of AI policy"
      },
      {
        "source": "E008",
        "target": "A.2.3",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Internal review aligns with AI policy alignment"
      },
      {
        "source": "E008",
        "target": "A.3.3",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Internal review partially supports AI reporting concerns"
      },
      {
        "source": "E010",
        "target": "4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use policy supports scope of AI management system"
      },
      {
        "source": "E010",
        "target": "5.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use policy aligns with AI policy"
      },
      {
        "source": "E010",
        "target": "A.2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use is part of AI policy documentation"
      },
      {
        "source": "E010",
        "target": "A.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use covered in management review of AI policy"
      },
      {
        "source": "E010",
        "target": "A.9.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use supports impact assessment for users"
      },
      {
        "source": "E010",
        "target": "A.9.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use documents impact assessment for users"
      },
      {
        "source": "E010",
        "target": "A.9.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Acceptable use addresses impact on individuals"
      },
      {
        "source": "E011",
        "target": "A.7.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Processing locations support data provenance"
      },
      {
        "source": "E012",
        "target": "10.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance documentation drives nonconformity/CA process"
      },
      {
        "source": "E012",
        "target": "A.2.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance maps to AI policy alignment"
      },
      {
        "source": "E012",
        "target": "A.8.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance supports incident-related communication"
      },
      {
        "source": "E013",
        "target": "4.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS aligns with AI management system requirements"
      },
      {
        "source": "E013",
        "target": "6.1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports AI objectives planning"
      },
      {
        "source": "E013",
        "target": "7.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports resource planning"
      },
      {
        "source": "E013",
        "target": "7.5.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports documented information requirements"
      },
      {
        "source": "E013",
        "target": "8.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS aligns with operational planning and control"
      },
      {
        "source": "E013",
        "target": "9.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports performance evaluation"
      },
      {
        "source": "E013",
        "target": "10.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS drives continual improvement"
      },
      {
        "source": "E013",
        "target": "10.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS handles nonconformity and corrective action"
      },
      {
        "source": "E013",
        "target": "A.5.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS implements AI policy"
      },
      {
        "source": "E013",
        "target": "A.5.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports AI roles and responsibilities"
      },
      {
        "source": "E013",
        "target": "A.6.2.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS aligns with AI system documentation"
      },
      {
        "source": "E013",
        "target": "A.6.2.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "QMS supports AI system management"
      },
      {
        "source": "E014",
        "target": "7.4",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reports (retired into E017) partially address communication"
      },
      {
        "source": "E014",
        "target": "A.6.2.7",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reports (retired into E017) partially address AI system management"
      },
      {
        "source": "E014",
        "target": "A.8.2",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reports (retired into E017) partially address external communication"
      },
      {
        "source": "E014",
        "target": "A.8.5",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reports (retired into E017) partially address incident-related communication"
      },
      {
        "source": "E015",
        "target": "A.6.2.8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Activity logging aligns with AI system event log"
      },
      {
        "source": "E016",
        "target": "A.8.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AI disclosure addresses external user communication"
      },
      {
        "source": "E017",
        "target": "4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy supports scope determination"
      },
      {
        "source": "E017",
        "target": "5.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy aligns with AI policy"
      },
      {
        "source": "E017",
        "target": "A.2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy is part of AI policy documentation"
      },
      {
        "source": "E017",
        "target": "A.2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy supports management review"
      },
      {
        "source": "E017",
        "target": "A.4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy documents data resources"
      },
      {
        "source": "E017",
        "target": "A.4.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy documents tooling resources"
      },
      {
        "source": "E017",
        "target": "A.4.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy documents system and computing resources"
      },
      {
        "source": "E017",
        "target": "A.6.2.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency policy aligns with AI system documentation"
      },
      {
        "source": "F001",
        "target": "A.5.5",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Cyber misuse prevention narrower than ISO societal impact scope"
      },
      {
        "source": "F002",
        "target": "A.5.5",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "CBRN catastrophic misuse prevention narrower than ISO societal impact scope"
      }
    ]
  },
  "mitre-atlas": {
    "description": "AIUC-1 integrates the MITRE ATLAS knowledge base, which is a technical contributor to AIUC-1. The crosswalk maps AIUC-1 Requirements to ATLAS Mitigations (AML.M####). AIUC-1 incorporates these mitigations while extending beyond ML security alone to address safety and reliability.",
    "target_version": "2024",
    "target_framework_name": "MITRE ATLAS",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/mitre-atlas",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "B003",
        "target": "AML.M0000",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Limit public release of model and architecture details"
      },
      {
        "source": "B003",
        "target": "AML.M0001",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Limit disclosure of project artifacts including data and model checkpoints"
      },
      {
        "source": "B009",
        "target": "AML.M0002",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Reduce output fidelity to prevent extraction attacks"
      },
      {
        "source": "B001",
        "target": "AML.M0003",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Adversarial testing exercises model hardening (adversarial training, distillation)"
      },
      {
        "source": "B002",
        "target": "AML.M0003",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Detection of adversarial inputs against hardened models"
      },
      {
        "source": "B004",
        "target": "AML.M0003",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Endpoint scraping prevention reinforced by model robustness"
      },
      {
        "source": "B001",
        "target": "AML.M0004",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Query rate limiting validated by adversarial robustness testing"
      },
      {
        "source": "B004",
        "target": "AML.M0004",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Restrict query volume to prevent endpoint scraping"
      },
      {
        "source": "D003",
        "target": "AML.M0004",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Rate limiting applied to autonomous tool calls"
      },
      {
        "source": "B007",
        "target": "AML.M0005",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Enforce user access privileges to production models"
      },
      {
        "source": "B008",
        "target": "AML.M0005",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Protect deployment environment with access controls"
      },
      {
        "source": "B008",
        "target": "AML.M0012",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Encrypt sensitive model data at rest"
      },
      {
        "source": "E004",
        "target": "AML.M0013",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Code signing verifies artifact integrity (E004.2)"
      },
      {
        "source": "B002",
        "target": "AML.M0015",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Detect and block adversarial inputs"
      },
      {
        "source": "B005",
        "target": "AML.M0015",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Real-time input filtering blocks atypical queries"
      },
      {
        "source": "C002",
        "target": "AML.M0016",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Pre-deployment vulnerability scanning of models (C002.3)"
      },
      {
        "source": "E005",
        "target": "AML.M0017",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Document cloud vs on-premise deployment decisions"
      },
      {
        "source": "B007",
        "target": "AML.M0019",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Authentication for production model access"
      },
      {
        "source": "B008",
        "target": "AML.M0019",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Monitor production queries for policy compliance"
      },
      {
        "source": "A004",
        "target": "AML.M0020",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Guardrails prevent IP and trade-secret leakage"
      },
      {
        "source": "A006",
        "target": "AML.M0020",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Guardrails prevent PII leakage"
      },
      {
        "source": "A007",
        "target": "AML.M0020",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Guardrails prevent IP violations"
      },
      {
        "source": "C006",
        "target": "AML.M0020",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Guardrails prevent output vulnerabilities"
      },
      {
        "source": "C007",
        "target": "AML.M0020",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Flag high-risk outputs through guardrails"
      },
      {
        "source": "B002",
        "target": "AML.M0021",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Guidelines aid adversarial input detection"
      },
      {
        "source": "B005",
        "target": "AML.M0021",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Input guidelines support real-time filtering"
      },
      {
        "source": "E017",
        "target": "AML.M0023",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AI Bill of Materials documents system transparency"
      },
      {
        "source": "B002",
        "target": "AML.M0024",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Telemetry logging enables threat detection"
      },
      {
        "source": "D003",
        "target": "AML.M0024",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Logging monitors unsafe tool-call execution"
      },
      {
        "source": "E009",
        "target": "AML.M0024",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Telemetry detects third-party access patterns"
      },
      {
        "source": "E015",
        "target": "AML.M0024",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AI activity logging for monitoring and incident response"
      },
      {
        "source": "E017",
        "target": "AML.M0025",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Dataset provenance documentation supports transparency"
      }
    ]
  },
  "nist-ai-rmf": {
    "description": "AIUC-1 operationalizes the NIST AI Risk Management Framework by translating the Govern, Map, Measure, and Manage functions into specific, auditable controls with implementation guidance. The crosswalk shows how each AIUC-1 Requirement contributes to one or more NIST sub-categories. Coverage is particularly dense across MEASURE 2.x (TEVV documentation) and MANAGE 1.x (risk treatment).",
    "target_version": "1.0",
    "target_framework_name": "NIST AI RMF",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/nist-ai-rmf",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "E012",
        "target": "GOVERN-1.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Legal and regulatory requirements involving AI documented"
      },
      {
        "source": "E010",
        "target": "GOVERN-1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Trustworthy AI characteristics integrated into policies"
      },
      {
        "source": "E017",
        "target": "GOVERN-1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System transparency policy documentation"
      },
      {
        "source": "C001",
        "target": "GOVERN-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk management processes via taxonomy definition"
      },
      {
        "source": "E013",
        "target": "GOVERN-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Quality management system implementation"
      },
      {
        "source": "C001",
        "target": "GOVERN-1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk management governance and prioritization"
      },
      {
        "source": "E013",
        "target": "GOVERN-1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Quality management system supports governance"
      },
      {
        "source": "B002",
        "target": "GOVERN-1.5",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Ongoing monitoring via adversarial detection"
      },
      {
        "source": "C008",
        "target": "GOVERN-1.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk category monitoring for review"
      },
      {
        "source": "E009",
        "target": "GOVERN-1.5",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Third-party access monitoring"
      },
      {
        "source": "E011",
        "target": "GOVERN-1.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Processing locations inventory"
      },
      {
        "source": "E017",
        "target": "GOVERN-1.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System transparency policy for inventory"
      },
      {
        "source": "E008",
        "target": "GOVERN-1.7",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Internal process review for decommissioning"
      },
      {
        "source": "E012",
        "target": "GOVERN-1.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance documentation"
      },
      {
        "source": "E004",
        "target": "GOVERN-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Accountability assignment for roles"
      },
      {
        "source": "E007",
        "target": "GOVERN-2.1",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "System change approval documentation (retired into E004)"
      },
      {
        "source": "E004",
        "target": "GOVERN-2.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Executive accountability assignment"
      },
      {
        "source": "E007",
        "target": "GOVERN-2.3",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Change approval documentation (retired into E004)"
      },
      {
        "source": "C007",
        "target": "GOVERN-3.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "High-risk outputs flagged for human review"
      },
      {
        "source": "C009",
        "target": "GOVERN-3.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Real-time feedback and intervention"
      },
      {
        "source": "C001",
        "target": "GOVERN-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk documentation via taxonomy"
      },
      {
        "source": "B001",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party adversarial robustness testing"
      },
      {
        "source": "C002",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Pre-deployment testing practices"
      },
      {
        "source": "C010",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party harmful output testing"
      },
      {
        "source": "C011",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party out-of-scope output testing"
      },
      {
        "source": "C012",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party customer-defined risk testing"
      },
      {
        "source": "D002",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party hallucination testing"
      },
      {
        "source": "D004",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party tool call testing"
      },
      {
        "source": "E001",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach failure plan"
      },
      {
        "source": "E002",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful output failure plan"
      },
      {
        "source": "E003",
        "target": "GOVERN-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Hallucination failure plan"
      },
      {
        "source": "E008",
        "target": "GOVERN-5.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "External feedback collection and integration"
      },
      {
        "source": "E008",
        "target": "GOVERN-5.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Feedback incorporation into design"
      },
      {
        "source": "A007",
        "target": "GOVERN-6.1",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "IP violation prevention for third-party risks"
      },
      {
        "source": "C001",
        "target": "GOVERN-6.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk taxonomy for third-party entities"
      },
      {
        "source": "D003",
        "target": "GOVERN-6.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Unsafe tool call restrictions"
      },
      {
        "source": "D004",
        "target": "GOVERN-6.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party tool call testing"
      },
      {
        "source": "E012",
        "target": "MAP-1.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Regulatory compliance documentation"
      },
      {
        "source": "E010",
        "target": "MAP-1.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System requirements via acceptable use policy"
      },
      {
        "source": "E014",
        "target": "MAP-1.6",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "System requirements via transparency reporting (retired into E017)"
      },
      {
        "source": "E017",
        "target": "MAP-1.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System requirements via transparency policy"
      },
      {
        "source": "A003",
        "target": "MAP-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Task definition with data access limits"
      },
      {
        "source": "B006",
        "target": "MAP-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Task method definition with access controls"
      },
      {
        "source": "C004",
        "target": "MAP-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Knowledge limits documentation"
      },
      {
        "source": "C011",
        "target": "MAP-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Out-of-scope output testing"
      },
      {
        "source": "E016",
        "target": "MAP-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AI disclosure mechanisms"
      },
      {
        "source": "E010",
        "target": "MAP-3.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Application scope via acceptable use policy"
      },
      {
        "source": "C004",
        "target": "MAP-3.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Operator proficiency requirements"
      },
      {
        "source": "E010",
        "target": "MAP-3.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Proficiency via acceptable use policy"
      },
      {
        "source": "E016",
        "target": "MAP-3.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Proficiency via disclosure mechanisms"
      },
      {
        "source": "C007",
        "target": "MAP-3.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Human oversight via flagging high-risk outputs"
      },
      {
        "source": "C009",
        "target": "MAP-3.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Human oversight via feedback mechanisms"
      },
      {
        "source": "E004",
        "target": "MAP-3.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Human oversight via accountability"
      },
      {
        "source": "E007",
        "target": "MAP-3.5",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Human oversight via change approvals (retired into E004)"
      },
      {
        "source": "A007",
        "target": "MAP-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Legal risk mapping for IP infringement"
      },
      {
        "source": "E012",
        "target": "MAP-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Legal risk mapping via compliance documentation"
      },
      {
        "source": "C002",
        "target": "MAP-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Internal risk controls via pre-deployment testing"
      },
      {
        "source": "E005",
        "target": "MAP-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Data storage security documentation"
      },
      {
        "source": "E006",
        "target": "MAP-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Vendor due diligence for risk controls"
      },
      {
        "source": "C001",
        "target": "MAP-5.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Impact assessment via risk taxonomy"
      },
      {
        "source": "E014",
        "target": "MAP-5.2",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Stakeholder engagement via transparency reports (retired into E017)"
      },
      {
        "source": "C002",
        "target": "MANAGE-1.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Pre-deployment testing for purpose achievement"
      },
      {
        "source": "E007",
        "target": "MANAGE-1.1",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "System change approvals (retired into E004)"
      },
      {
        "source": "C001",
        "target": "MANAGE-1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk prioritization via taxonomy"
      },
      {
        "source": "C001",
        "target": "MANAGE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk response planning and taxonomy"
      },
      {
        "source": "E001",
        "target": "MANAGE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach response plan"
      },
      {
        "source": "E002",
        "target": "MANAGE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful output response plan"
      },
      {
        "source": "E003",
        "target": "MANAGE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Hallucination response plan"
      },
      {
        "source": "C001",
        "target": "MANAGE-1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Residual risk documentation"
      },
      {
        "source": "C005",
        "target": "MANAGE-1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Customer-defined high-risk output prevention"
      },
      {
        "source": "C010",
        "target": "MANAGE-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Sustained value via harmful output testing"
      },
      {
        "source": "C011",
        "target": "MANAGE-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Sustained value via out-of-scope testing"
      },
      {
        "source": "C012",
        "target": "MANAGE-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Sustained value via customer-defined risk testing"
      },
      {
        "source": "D002",
        "target": "MANAGE-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Sustained value via hallucination testing"
      },
      {
        "source": "D004",
        "target": "MANAGE-2.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Sustained value via tool call testing"
      },
      {
        "source": "C008",
        "target": "MANAGE-3.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party resource monitoring"
      },
      {
        "source": "C008",
        "target": "MANAGE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Post-deployment monitoring plan"
      },
      {
        "source": "E009",
        "target": "MANAGE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Third-party access monitoring"
      },
      {
        "source": "E008",
        "target": "MANAGE-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Continual improvement integration"
      },
      {
        "source": "E014",
        "target": "MANAGE-4.2",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reporting (retired into E017)"
      },
      {
        "source": "E001",
        "target": "MANAGE-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security breach incident communication"
      },
      {
        "source": "E002",
        "target": "MANAGE-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Harmful output incident communication"
      },
      {
        "source": "E003",
        "target": "MANAGE-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Hallucination incident communication"
      },
      {
        "source": "E014",
        "target": "MANAGE-4.3",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reporting (retired into E017)"
      },
      {
        "source": "C001",
        "target": "MEASURE-1.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Risk metrics selection via taxonomy"
      },
      {
        "source": "E008",
        "target": "MEASURE-1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Metric appropriateness through process review"
      },
      {
        "source": "C010",
        "target": "MEASURE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Independent assessment via harmful output testing"
      },
      {
        "source": "C011",
        "target": "MEASURE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Independent assessment via out-of-scope testing"
      },
      {
        "source": "C012",
        "target": "MEASURE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Independent assessment via customer-defined risk testing"
      },
      {
        "source": "D002",
        "target": "MEASURE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Independent assessment via hallucination testing"
      },
      {
        "source": "D004",
        "target": "MEASURE-1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Independent assessment via tool call testing"
      },
      {
        "source": "B001",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation for adversarial robustness"
      },
      {
        "source": "C002",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation via pre-deployment testing"
      },
      {
        "source": "C010",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation for harmful outputs"
      },
      {
        "source": "C011",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation for out-of-scope outputs"
      },
      {
        "source": "C012",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation for customer-defined risk"
      },
      {
        "source": "D002",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation for hallucinations"
      },
      {
        "source": "D004",
        "target": "MEASURE-2.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV documentation for tool calls"
      },
      {
        "source": "C002",
        "target": "MEASURE-2.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Performance demonstration via pre-deployment testing"
      },
      {
        "source": "B002",
        "target": "MEASURE-2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Production monitoring for functionality"
      },
      {
        "source": "C008",
        "target": "MEASURE-2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Production monitoring for behavior"
      },
      {
        "source": "E010",
        "target": "MEASURE-2.4",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Production monitoring via acceptable use policy"
      },
      {
        "source": "E015",
        "target": "MEASURE-2.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Activity logging for production monitoring"
      },
      {
        "source": "C002",
        "target": "MEASURE-2.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Validity and reliability demonstration"
      },
      {
        "source": "D001",
        "target": "MEASURE-2.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Reliability via hallucination prevention"
      },
      {
        "source": "D002",
        "target": "MEASURE-2.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Reliability via hallucination testing"
      },
      {
        "source": "B001",
        "target": "MEASURE-2.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Safety evaluation for adversarial robustness"
      },
      {
        "source": "C010",
        "target": "MEASURE-2.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Safety evaluation for harmful outputs"
      },
      {
        "source": "C011",
        "target": "MEASURE-2.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Safety evaluation for out-of-scope outputs"
      },
      {
        "source": "C012",
        "target": "MEASURE-2.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Safety evaluation for customer-defined risk"
      },
      {
        "source": "D004",
        "target": "MEASURE-2.6",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Safety evaluation for tool calls"
      },
      {
        "source": "B001",
        "target": "MEASURE-2.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security and resilience via robustness testing"
      },
      {
        "source": "B002",
        "target": "MEASURE-2.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security resilience via adversarial detection"
      },
      {
        "source": "B004",
        "target": "MEASURE-2.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security resilience via endpoint scraping prevention"
      },
      {
        "source": "B005",
        "target": "MEASURE-2.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Security resilience via input filtering"
      },
      {
        "source": "F001",
        "target": "MEASURE-2.7",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Resilience via cyber misuse prevention"
      },
      {
        "source": "E004",
        "target": "MEASURE-2.8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Transparency and accountability assignment"
      },
      {
        "source": "E007",
        "target": "MEASURE-2.8",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Accountability via change approvals (retired into E004)"
      },
      {
        "source": "E014",
        "target": "MEASURE-2.8",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Transparency reporting (retired into E017)"
      },
      {
        "source": "E015",
        "target": "MEASURE-2.8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System activity logging"
      },
      {
        "source": "E016",
        "target": "MEASURE-2.8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Disclosure mechanisms"
      },
      {
        "source": "E017",
        "target": "MEASURE-2.8",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "System transparency policy"
      },
      {
        "source": "E014",
        "target": "MEASURE-2.9",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Model explanation via reporting (retired into E017)"
      },
      {
        "source": "E017",
        "target": "MEASURE-2.9",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Model explanation via transparency policy"
      },
      {
        "source": "A001",
        "target": "MEASURE-2.10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Privacy risk assessment via input data policy"
      },
      {
        "source": "A005",
        "target": "MEASURE-2.10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Privacy risk assessment for cross-customer exposure"
      },
      {
        "source": "A006",
        "target": "MEASURE-2.10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Privacy risk assessment for PII leakage"
      },
      {
        "source": "B009",
        "target": "MEASURE-2.10",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Privacy risk assessment via output limits"
      },
      {
        "source": "C001",
        "target": "MEASURE-2.10",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Privacy risk assessment via risk taxonomy"
      },
      {
        "source": "C001",
        "target": "MEASURE-2.11",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "Fairness and bias evaluation via taxonomy"
      },
      {
        "source": "C003",
        "target": "MEASURE-2.11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Fairness and bias via harmful output prevention"
      },
      {
        "source": "C010",
        "target": "MEASURE-2.11",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Fairness and bias testing"
      },
      {
        "source": "E008",
        "target": "MEASURE-2.13",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "TEVV effectiveness evaluation"
      },
      {
        "source": "B002",
        "target": "MEASURE-3.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Emergent risk tracking via adversarial detection"
      },
      {
        "source": "C001",
        "target": "MEASURE-3.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Emergent risk tracking via taxonomy"
      },
      {
        "source": "C009",
        "target": "MEASURE-3.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "User feedback systems for impacted communities"
      },
      {
        "source": "C010",
        "target": "MEASURE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Context-specific measurement for harmful outputs"
      },
      {
        "source": "C011",
        "target": "MEASURE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Context-specific measurement for out-of-scope"
      },
      {
        "source": "C012",
        "target": "MEASURE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Context-specific measurement for customer risk"
      },
      {
        "source": "D002",
        "target": "MEASURE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Context-specific measurement for hallucinations"
      },
      {
        "source": "D004",
        "target": "MEASURE-4.1",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Context-specific measurement for tool calls"
      },
      {
        "source": "C010",
        "target": "MEASURE-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Trustworthiness validation via harmful output testing"
      },
      {
        "source": "C011",
        "target": "MEASURE-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Trustworthiness validation via out-of-scope testing"
      },
      {
        "source": "C012",
        "target": "MEASURE-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Trustworthiness validation via customer-risk testing"
      },
      {
        "source": "D002",
        "target": "MEASURE-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Trustworthiness validation via hallucination testing"
      },
      {
        "source": "D004",
        "target": "MEASURE-4.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Trustworthiness validation via tool call testing"
      },
      {
        "source": "E014",
        "target": "MEASURE-4.2",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "Trustworthiness validation via reporting (retired into E017)"
      },
      {
        "source": "C002",
        "target": "MEASURE-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Performance tracking via pre-deployment testing"
      },
      {
        "source": "C008",
        "target": "MEASURE-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Performance tracking via risk monitoring"
      },
      {
        "source": "E007",
        "target": "MEASURE-4.3",
        "relationship": "addresses",
        "confidence": "medium",
        "notes": "Performance tracking via change approvals (retired into E004)"
      },
      {
        "source": "E017",
        "target": "MEASURE-4.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "Performance tracking via transparency policy"
      }
    ]
  },
  "nyc-ll-144": {
    "description": "AIUC-1 maps to NYC Local Law 144 (effective July 5, 2023) which regulates Automated Employment Decision Tools (AEDTs). The law mandates annual independent bias audits, public posting of audit results, and notice to candidates and employees. AIUC-1 controls in C (Safety/bias) and E (Accountability) carry the bulk of the mapping.",
    "target_version": "2023",
    "target_framework_name": "NYC Local Law 144",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/nyc-ll-144",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "C010",
        "target": "5-301",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Conduct Bias Audit"
      },
      {
        "source": "A001",
        "target": "5-302",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Manage Audit Data"
      },
      {
        "source": "C010",
        "target": "5-302",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Manage Audit Data"
      },
      {
        "source": "E017",
        "target": "5-303",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Publish Audit Results"
      },
      {
        "source": "A001",
        "target": "5-304",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Provide Notice"
      },
      {
        "source": "E016",
        "target": "5-304",
        "relationship": "partially_addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Provide Notice"
      }
    ]
  },
  "oecd-principles": {
    "description": "AIUC-1 maps to the OECD AI Principles, the values-based framework adopted by 47+ countries. The Principles are organized as 5 values-based principles (1.1 inclusive growth; 1.2 human-centred values & fairness; 1.3 transparency & explainability; 1.4 robustness, security & safety; 1.5 accountability) plus 5 recommendations to policymakers. Mappings focus on the values-based principles since those are where individual organizations implementing AI carry the operational burden.",
    "target_version": "2024 (revised)",
    "target_framework_name": "OECD AI Principles",
    "publisher": "platform-authored",
    "source_url": "https://oecd.ai/en/ai-principles",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "F002",
        "target": "OECD Principle 1.1",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 catastrophic-misuse prevention contributes to OECD's \"do no harm\" framing.",
        "target_title": "Inclusive growth, sustainable development and well-being"
      },
      {
        "source": "F001",
        "target": "OECD Principle 1.1",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "",
        "target_title": "Inclusive growth, sustainable development and well-being"
      },
      {
        "source": "C003",
        "target": "OECD Principle 1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 harmful-outputs prevention directly addresses OECD's fairness/non-discrimination requirement.",
        "target_title": "Human-centred values and fairness"
      },
      {
        "source": "C014",
        "target": "OECD Principle 1.2",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Human-centred values and fairness"
      },
      {
        "source": "C009",
        "target": "OECD Principle 1.2",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 user feedback and intervention supports the human-agency component of OECD 1.2.",
        "target_title": "Human-centred values and fairness"
      },
      {
        "source": "E016",
        "target": "OECD Principle 1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 disclosure mechanisms directly address OECD's transparency principle.",
        "target_title": "Transparency and explainability"
      },
      {
        "source": "E017",
        "target": "OECD Principle 1.3",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Transparency and explainability"
      },
      {
        "source": "E015",
        "target": "OECD Principle 1.3",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 audit logging supports the auditability component of OECD 1.3.",
        "target_title": "Transparency and explainability"
      },
      {
        "source": "B001",
        "target": "OECD Principle 1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 adversarial testing directly addresses OECD's robustness requirement.",
        "target_title": "Robustness, security and safety"
      },
      {
        "source": "B008",
        "target": "OECD Principle 1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Robustness, security and safety"
      },
      {
        "source": "C002",
        "target": "OECD Principle 1.4",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Robustness, security and safety"
      },
      {
        "source": "D001",
        "target": "OECD Principle 1.4",
        "relationship": "partially_addresses",
        "confidence": "medium",
        "notes": "AIUC-1 hallucination prevention contributes to the reliability/robustness component.",
        "target_title": "Robustness, security and safety"
      },
      {
        "source": "E004",
        "target": "OECD Principle 1.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "AIUC-1 assigned accountability is the operational form of OECD 1.5.",
        "target_title": "Accountability"
      },
      {
        "source": "E001",
        "target": "OECD Principle 1.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Accountability"
      },
      {
        "source": "E015",
        "target": "OECD Principle 1.5",
        "relationship": "addresses",
        "confidence": "high",
        "notes": "",
        "target_title": "Accountability"
      }
    ]
  },
  "owasp-aivss": {
    "description": "AIUC-1 maps to the OWASP Agentic AI Vulnerability Scoring System (AIVSS) — a vulnerability-rating framework focused on agentic AI systems. The crosswalk pairs AIUC-1's auditable controls with AIVSS's 10 attacker-relevant risk categories. Coverage is densest across goal/instruction manipulation (B-controls) and supply-chain risk (E005/E006/E009/E013).",
    "target_version": "0.5",
    "target_framework_name": "OWASP AIVSS",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/owasp-aivss",
    "last_updated": "2026-02-26",
    "mappings": [
      {
        "source": "A003",
        "target": "Agent Access Control Violation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B006",
        "target": "Agent Access Control Violation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B001",
        "target": "Agent Cascading Failures",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C012",
        "target": "Agent Cascading Failures",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B001",
        "target": "Agent Goal and Instruction Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B002",
        "target": "Agent Goal and Instruction Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B005",
        "target": "Agent Goal and Instruction Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C003",
        "target": "Agent Goal and Instruction Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C004",
        "target": "Agent Goal and Instruction Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C005",
        "target": "Agent Goal and Instruction Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E016",
        "target": "Agent Identity Impersonation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "F001",
        "target": "Agent Identity Impersonation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B008",
        "target": "Agent Memory and Context Manipulation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B006",
        "target": "Agent Orchestration and Multi-Agent Exploitation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E010",
        "target": "Agent Orchestration and Multi-Agent Exploitation",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E005",
        "target": "Agent Supply Chain and Dependency Risk",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E006",
        "target": "Agent Supply Chain and Dependency Risk",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E009",
        "target": "Agent Supply Chain and Dependency Risk",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E013",
        "target": "Agent Supply Chain and Dependency Risk",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C007",
        "target": "Agent Untraceability",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C008",
        "target": "Agent Untraceability",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "E015",
        "target": "Agent Untraceability",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "B004",
        "target": "Agentic AI Tool Misuse",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "D003",
        "target": "Agentic AI Tool Misuse",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "D004",
        "target": "Agentic AI Tool Misuse",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "A004",
        "target": "Insecure Agent Critical Systems Interaction",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      },
      {
        "source": "C006",
        "target": "Insecure Agent Critical Systems Interaction",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": ""
      }
    ]
  },
  "owasp-llm-top10": {
    "description": "AIUC-1 integrates OWASP's Top 10 for LLM and Generative AI Applications. The certification addresses each OWASP threat through concrete Requirements and Sub-Controls while expanding beyond security to encompass safety, reliability, and accountability dimensions. Mappings flow from AIUC-1 Requirements to the OWASP threat categories they mitigate.",
    "target_version": "2025",
    "target_framework_name": "OWASP LLM Top 10",
    "publisher": "AIUC",
    "source_url": "https://www.aiuc-1.com/crosswalks/owasp-top-10",
    "last_updated": "2026-04-28",
    "mappings": [
      {
        "source": "B001",
        "target": "LLM01",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Adversarial robustness testing covers prompt-injection scenarios"
      },
      {
        "source": "B002",
        "target": "LLM01",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Detection of prompt-injection patterns and jailbreaks"
      },
      {
        "source": "B005",
        "target": "LLM01",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Real-time input filtering blocks injection attempts pre-model"
      },
      {
        "source": "A005",
        "target": "LLM02",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Cross-customer data exposure prevention"
      },
      {
        "source": "A006",
        "target": "LLM02",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "PII leakage prevention"
      },
      {
        "source": "B003",
        "target": "LLM02",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Manage public release of technical details"
      },
      {
        "source": "B004",
        "target": "LLM02",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Prevent endpoint scraping that surfaces sensitive information"
      },
      {
        "source": "B007",
        "target": "LLM02",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "User access controls limit who can elicit sensitive disclosures"
      },
      {
        "source": "B009",
        "target": "LLM02",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Output limitation reduces over-exposure"
      },
      {
        "source": "A004",
        "target": "LLM03",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "IP and trade-secret protection in supply chain"
      },
      {
        "source": "A007",
        "target": "LLM03",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "IP violation prevention covers upstream-model risk"
      },
      {
        "source": "E005",
        "target": "LLM03",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Cloud vs on-prem assessment addresses supply-chain deployment risk"
      },
      {
        "source": "E006",
        "target": "LLM03",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Vendor due diligence is the primary supply-chain control"
      },
      {
        "source": "E009",
        "target": "LLM03",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Third-party access monitoring covers supply-chain access risk"
      },
      {
        "source": "B001",
        "target": "LLM04",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Adversarial robustness testing covers data and model poisoning scenarios"
      },
      {
        "source": "B005",
        "target": "LLM04",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Input filtering reduces poisoning vectors at inference"
      },
      {
        "source": "A004",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "IP protection reduces output-handling exposure"
      },
      {
        "source": "A005",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Cross-customer exposure prevention addresses output handling"
      },
      {
        "source": "A006",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "PII leakage prevention addresses output handling"
      },
      {
        "source": "A007",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "IP violation prevention addresses output handling"
      },
      {
        "source": "B001",
        "target": "LLM05",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Adversarial testing surfaces improper output-handling weaknesses"
      },
      {
        "source": "B004",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Endpoint scraping protection limits output extraction"
      },
      {
        "source": "B009",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Output limitation addresses over-exposure"
      },
      {
        "source": "C003",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Harmful output prevention is core output handling"
      },
      {
        "source": "C004",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Out-of-scope output prevention is core output handling"
      },
      {
        "source": "C005",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Customer-defined high-risk output prevention"
      },
      {
        "source": "C006",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Output vulnerability prevention (sanitization)"
      },
      {
        "source": "D001",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Hallucination prevention is core output handling"
      },
      {
        "source": "E009",
        "target": "LLM05",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Third-party access monitoring identifies output-handling abuse"
      },
      {
        "source": "A003",
        "target": "LLM06",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Limit AI agent data access reduces excessive agency"
      },
      {
        "source": "B007",
        "target": "LLM06",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Access controls bound agent privileges"
      },
      {
        "source": "D003",
        "target": "LLM06",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Restrict unsafe tool calls is core to excessive-agency mitigation"
      },
      {
        "source": "D004",
        "target": "LLM06",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Third-party tool-call testing validates agency boundaries"
      },
      {
        "source": "E009",
        "target": "LLM06",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Monitor third-party access to detect agency-overreach"
      },
      {
        "source": "B003",
        "target": "LLM07",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Manage public release prevents system-prompt leakage"
      },
      {
        "source": "B008",
        "target": "LLM07",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Deployment environment protection guards system prompts"
      },
      {
        "source": "A003",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Limit data access reduces vector/embedding exposure"
      },
      {
        "source": "A004",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "IP protection reduces sensitive embeddings"
      },
      {
        "source": "A005",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Cross-customer exposure prevention applies to shared embedding indexes"
      },
      {
        "source": "A006",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "PII leakage prevention applies at the embedding layer"
      },
      {
        "source": "B001",
        "target": "LLM08",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Adversarial testing covers vector/embedding attacks"
      },
      {
        "source": "B002",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Adversarial input detection covers indirect injection via embeddings"
      },
      {
        "source": "B004",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Endpoint scraping protection covers embedding-extraction attacks"
      },
      {
        "source": "B006",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Prevent unauthorized agent actions covers embedding misuse"
      },
      {
        "source": "B009",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Output limitation reduces embedding-derived disclosures"
      },
      {
        "source": "D003",
        "target": "LLM08",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Tool-call restrictions limit embedding-driven actions"
      },
      {
        "source": "B009",
        "target": "LLM09",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Output limitation reduces misinformation surface"
      },
      {
        "source": "C003",
        "target": "LLM09",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Harmful output prevention covers misinformation categories"
      },
      {
        "source": "D001",
        "target": "LLM09",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Hallucination prevention is the core misinformation mitigation"
      },
      {
        "source": "D002",
        "target": "LLM09",
        "relationship": "tests_for",
        "confidence": "high",
        "notes": "Third-party hallucination testing validates misinformation defenses"
      },
      {
        "source": "A003",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Limit data access curbs unbounded consumption"
      },
      {
        "source": "B002",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Detect adversarial input flags consumption-abuse patterns"
      },
      {
        "source": "B004",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Endpoint scraping prevention addresses unbounded consumption"
      },
      {
        "source": "B005",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Input filtering reduces malicious consumption requests"
      },
      {
        "source": "B006",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Prevent unauthorized agent actions limits runaway consumption"
      },
      {
        "source": "B007",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Access controls cap consumption per principal"
      },
      {
        "source": "D003",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Tool-call rate limits address unbounded consumption"
      },
      {
        "source": "E009",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Third-party access monitoring detects abusive consumption"
      },
      {
        "source": "E010",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "high",
        "notes": "Acceptable use policy with detection bounds usage"
      },
      {
        "source": "E015",
        "target": "LLM10",
        "relationship": "mitigates",
        "confidence": "medium",
        "notes": "Activity logging supports detection of consumption anomalies"
      }
    ]
  }
};
