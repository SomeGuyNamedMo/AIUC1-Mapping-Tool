"use strict";

/* ============================================================
   REQUIREMENTS DETAIL — generated from source framework YAML
   Run `ruby scripts/generate-data.rb` after framework changes.
   ============================================================ */

const REQUIREMENTS_DETAIL = {
  "A001": {
    "description": "Establish and communicate AI input data policies covering how customer data is used for model training, inference processing, data retention periods, and customer data rights.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A001.1",
        "title": "Documentation: Policy for input data ownership, usage and retention",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Defining and communicating input data usage policies. Including specifying how customer data is used for inference and model training, establishing data retention periods, and documenting customer data rights.",
        "should_include": [
          "A written policy stating whether customer inputs are used for model training",
          "Defined retention periods per data class (e.g., 90 days for prompts, 30 days for metadata)",
          "Customer-facing language describing access, portability, and deletion rights",
          "Named owner / accountable team for the policy with a review cadence"
        ]
      },
      {
        "id": "A001.2",
        "title": "Config: Data retention implementation",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing technical controls to enforce data retention and deletion policies. For example, automating data deletion based on retention schedules, using secure removal mechanisms, and managing data lifecycles.",
        "should_include": [
          "Automated deletion job or scheduled task configured with retention periods per data class",
          "Evidence of a secure deletion mechanism (e.g., crypto-shredding, overwrite verification)",
          "Audit log or lifecycle event trail showing data creation, retention, and deletion events",
          "Configuration records mapping retention periods to the classes defined in the A001.1 policy"
        ]
      },
      {
        "id": "A001.3",
        "title": "Documentation: Data subject right processes",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting processes for handling end-user data subject rights. For example, handling requests for opt-in/opt-out rights, access, portability, or deletion of input data.",
        "should_include": [
          "Step-by-step workflow for receiving and fulfilling access, portability, and deletion requests",
          "Defined SLA or maximum response timeframe for each request type",
          "Named role or team responsible for processing requests with an escalation path",
          "Record of at least one test or live request processed end-to-end through the workflow"
        ]
      }
    ]
  },
  "A002": {
    "description": "Establish AI output ownership, usage, opt-out and deletion policies to customers and communicate these policies.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A002.1",
        "title": "Documentation: Output usage and ownership policy",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing output ownership and usage rights policies. For example, specifying customer ownership of AI-generated outputs versus AI inputs, defining permitted uses of outputs (commercial use, redistribution, modification), documenting usage restrictions or limitations, and clarifying how ownership applies to different output types or use cases. Disclosing opt-out and deletion procedures for AI outputs. For example, documenting how customers can opt out of output storage or reuse, explaining deletion request processes, specifying retention periods and data handling practices, and clarifying how customers can control or revoke permissions for their outputs.",
        "should_include": [
          "Explicit statement of who owns AI-generated outputs (customer vs. provider) by output type",
          "Enumerated permitted and prohibited uses of outputs (commercial use, redistribution, modification)",
          "Documented opt-out and deletion procedures for output storage or reuse",
          "Defined retention periods for AI outputs and the data handling practices that apply"
        ]
      }
    ]
  },
  "A003": {
    "description": "Implement safeguards to limit AI agent data access to task-relevant information based on user roles and context.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A003.1",
        "title": "Config: Data collection scoping",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Configuring data collection limits to reduce data and privacy exposure. For example, limiting data collection to task-relevant information based on context, implementing scoping based on user roles or workflow requirements, and avoiding persistent or out-of-scope data access.",
        "should_include": [
          "Configuration records showing data collection fields are limited to task-relevant scope per context or role",
          "Role-based or context-based scoping rules deployed and documented",
          "Evidence that persistent or out-of-scope data access is blocked (e.g., network policy, API restrictions)",
          "Test or audit result confirming the agent does not collect data beyond the defined scope"
        ]
      },
      {
        "id": "A003.2",
        "title": "Config: Alerting system for auth failures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Deploying monitoring mechanisms. Including ensuring AI systems only perform necessary inference and logging deviations from defined operational scope.",
        "should_include": [
          "Alert rules configured to detect deviations from defined operational scope (e.g., out-of-scope inference calls, excessive data access)",
          "Evidence that alerts route to a named responder or channel with a defined response procedure",
          "Defined threshold or baseline for what constitutes a deviation triggering an alert",
          "Sample alert log or test firing confirming the monitoring is active"
        ]
      },
      {
        "id": "A003.3",
        "title": "Config: Authorization system integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating with existing authorization systems to align agent access permissions with organizational policies.",
        "should_include": [
          "Integration configuration linking agent access permissions to an existing IAM or authorization system",
          "Documented mapping of agent capabilities to organizational roles or permission groups",
          "Test results or access audit confirming permissions propagate correctly from the source system",
          "Defined change process for updating agent permissions when organizational policies change"
        ]
      }
    ]
  },
  "A004": {
    "description": "Implement safeguards or technical controls to prevent AI systems from leaking company intellectual property or confidential information.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A004.1",
        "title": "Documentation: User guidance on confidential information",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Providing user guidance on protecting confidential information. For example, instructing employees not to input trade secrets, proprietary code, or confidential business information into AI systems, communicating data handling policies for AI tool usage, or establishing clear guidelines on what information can and cannot be shared with AI agents.",
        "should_include": [
          "Written guidance listing specific categories of information prohibited from AI input (e.g., trade secrets, source code, client data)",
          "Evidence of distribution to relevant staff (e.g., training records, intranet acknowledgment, onboarding checklist)",
          "Defined consequences or escalation path for policy violations",
          "Named owner and review cadence for keeping the guidance current"
        ]
      },
      {
        "id": "A004.2",
        "title": "Documentation: foundational model IP protections",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Leveraging foundation model provider protections. For example, using providers with zero data retention policies, requiring contractual commitments that inputs are not used for training, selecting models with enhanced privacy guarantees for sensitive use cases.",
        "should_include": [
          "Contract or terms-of-service excerpt confirming zero data retention or no-training commitment from the model provider",
          "Documented assessment of provider privacy guarantees for each sensitive use case in scope",
          "Named providers with their specific IP protection commitments recorded",
          "Review record confirming protections were verified before production deployment"
        ]
      },
      {
        "id": "A004.3",
        "title": "Config: IP detection implementation",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing technical controls to detect proprietary information in outputs.",
        "should_include": [
          "Deployed classifier or pattern-matching filter configured to detect proprietary content in outputs",
          "Documentation of the proprietary content types and patterns in scope for detection",
          "Test results demonstrating detection accuracy against a set of known proprietary samples",
          "Defined action (block, flag, log) triggered when proprietary content is detected in an output"
        ]
      },
      {
        "id": "A004.4",
        "title": "Config: IP disclosure monitoring",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing output monitoring for high-risk IP scenarios. For example, logging AI responses that accessed confidential data sources, implementing human review workflows for outputs flagged as potentially containing sensitive information.",
        "should_include": [
          "Logging configuration capturing AI responses that drew on confidential data sources",
          "Evidence that flagged outputs are routed to a human review queue with defined SLA",
          "Documented criteria for what triggers a review (e.g., data source classification, confidence score)",
          "Records showing at least one flagged output has been reviewed and actioned"
        ]
      }
    ]
  },
  "A005": {
    "description": "Implement safeguards to prevent cross-customer data exposure when combining customer data from multiple sources.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A005.1",
        "title": "Documentation: Consent for combined data usage",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Establishing explicit consent and disclosure for combined data usage. For example, informing customers when their data will be combined with competitor data, disclosing data anonymization and abstraction policies, providing opt-out mechanisms.",
        "should_include": [
          "Customer-facing disclosure explaining when and how their data may be combined with other customer data",
          "Documented opt-out mechanism with evidence it is accessible and functional for customers",
          "Description of anonymization or abstraction techniques applied before any data combination",
          "Consent records or audit trail confirming authorization was obtained before combined processing began"
        ]
      },
      {
        "id": "A005.2",
        "title": "Config: Customer data isolation controls",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Implementing customer data isolation controls. For example, enforcing strict logical and physical separation of customer data, applying tenant-specific encryption, validating data flow boundaries in shared infrastructure, establishing technical barriers between customer datasets during training.",
        "should_include": [
          "Architecture diagram or configuration confirming logical and/or physical separation between customer data stores",
          "Tenant-specific encryption configuration with key management documentation",
          "Data flow validation results (e.g., automated test, penetration test) confirming no cross-tenant data leakage",
          "Evidence that isolation boundaries are enforced in shared infrastructure (e.g., network segmentation, API gateway rules)"
        ]
      },
      {
        "id": "A005.3",
        "title": "Config: Privacy-enhancing controls",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing specific privacy-enhancing technologies (PETs) to reduce competitive exposure.",
        "should_include": [
          "Deployed PET mechanism (e.g., differential privacy, k-anonymity, federated learning) with configuration evidence",
          "Documentation of which data processing scenarios each PET applies to and why",
          "Test results or quantitative analysis demonstrating the PET's effectiveness at reducing exposure",
          "Monitoring evidence confirming PETs are operating as configured in production"
        ]
      }
    ]
  },
  "A006": {
    "description": "Establish safeguards to prevent personal data leakage through AI outputs and logs.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A006.1",
        "title": "Config: PII detection and filtering",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Implementing safeguards to prevent personal data leakage through AI system outputs and logs. For example, filtering prompts and outputs for personal identifiers before storage or display, implementing automated PII detection and redaction in system logs, preventing retention of outputs containing sensitive personal information, or blocking responses that would expose personal identifiers.",
        "should_include": [
          "Deployed PII detection covering inputs, outputs, and system logs with defined PII categories in scope",
          "Automated redaction configuration applied to logs containing personal identifiers",
          "Test results showing detection accuracy including measured false-positive and false-negative rates",
          "Defined blocking or redaction action triggered when PII is detected in an output or log entry"
        ]
      },
      {
        "id": "A006.2",
        "title": "Config: PII access controls",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Requiring authentication and authorization for PII access. For example, role-based access controls for PII-containing systems, multi-factor authentication for sensitive data access, or approval-gated access to customer information.",
        "should_include": [
          "RBAC or ABAC configuration restricting access to PII-containing systems by job function",
          "MFA enforcement documented and verified for access to sensitive data systems",
          "Approval-gated access workflow configuration for customer information with audit trail",
          "Access review records showing periodic validation of PII access assignments"
        ]
      },
      {
        "id": "A006.3",
        "title": "Config: DLP system integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating with existing data loss prevention (DLP) systems to monitor and block outputs containing personal data in violation of policy.",
        "should_include": [
          "Integration configuration linking the AI output pipeline to an existing DLP system",
          "DLP policy rules defining personal data patterns and the conditions that constitute a violation",
          "Evidence that the DLP system blocks or alerts on AI outputs that violate policy",
          "Incident or alert log confirming the integration has been tested or triggered in practice"
        ]
      }
    ]
  },
  "A007": {
    "description": "Implement safeguards and technical controls to prevent AI outputs from violating copyrights, trademarks, or other third-party intellectual property rights.",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "image-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "A007.1",
        "title": "Documentation: Model provider IP infringement protections",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Documenting foundation model provider IP protections which may serve as primary infringement safeguards. For example, indemnification clauses or copyright/trademark guardrails.",
        "should_include": [
          "Contract or terms-of-service excerpt documenting provider indemnification commitments for IP infringement claims",
          "Description of built-in copyright and trademark guardrails provided by the foundation model",
          "Documented scope and known limitations of the provider's IP protections",
          "Review record confirming protections were assessed before the model was deployed"
        ]
      },
      {
        "id": "A007.2",
        "title": "Config: IP infringement filtering",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing supplementary content filtering mechanisms where provider protections have gaps or limitations. For example, detecting copyrighted material in outputs, implementing trademark screening.",
        "should_include": [
          "Deployed content filter or classifier configured to detect copyrighted or trademarked material in outputs",
          "Documented categories of IP in scope for filtering (e.g., copyrighted text passages, registered trademarks)",
          "Test results showing filter performance against a set of known infringing content samples",
          "Configured blocking or flagging action applied when potential infringement is detected"
        ]
      },
      {
        "id": "A007.3",
        "title": "Logs: User-facing notices",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing user guidance and guardrails to reduce IP risk. For example, usage policies that explain prohibited content types, user warnings in product, restricting output generation in known infringement domains. Implementing restrictions in AI acceptable use policy.",
        "should_include": [
          "Acceptable use policy with explicit prohibitions on requesting IP-infringing outputs, accessible to users",
          "In-product warnings or notices shown in IP-sensitive generation contexts",
          "Evidence of restrictions configured for known high-risk output domains",
          "Log or record of AUP acknowledgments collected from users, or in-product notice delivery events"
        ]
      }
    ]
  },
  "B001": {
    "description": "Implement adversarial testing program to validate system resilience against adversarial inputs and prompt injection attempts in line with adversarial threat taxonomy.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "B001.1",
        "title": "Report: adversarial testing results",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Establishing a taxonomy for adversarial risks based on industry frameworks (e.g., MITRE ATLAS, OWASP Top 10 for LLMs). Conducting comprehensive adversarial testing at least quarterly. Maintaining secure testing documentation. Establishing improvement processes based on findings.",
        "should_include": [
          "Third-party or red-team assessment report with adversarial risk coverage mapped to a named framework (e.g., MITRE ATLAS, OWASP LLM Top 10)",
          "Evidence of quarterly testing cadence (dated reports or test records across at least two consecutive cycles)",
          "Documented findings with severity ratings and tracked remediation actions",
          "Access controls applied to test documentation (e.g., restricted distribution, secure storage)"
        ]
      },
      {
        "id": "B001.2",
        "title": "Documentation: Security program integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Aligning adversarial testing with broader security testing programs. For example, integrating AI-specific test cases into broader penetration testing, sharing threat models across red/blue teams, aligning test cycles with security audit and compliance calendars.",
        "should_include": [
          "Evidence of AI-specific test cases incorporated into existing penetration testing or security audit scope",
          "Shared threat model documentation accessible to both red and blue teams",
          "Test schedule showing alignment with security audit and compliance calendar",
          "Record of cross-team coordination on AI adversarial testing (e.g., joint findings review, shared tooling)"
        ]
      }
    ]
  },
  "B002": {
    "description": "Implement monitoring capabilities to detect and respond to adversarial inputs and prompt injection attempts.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "B002.1",
        "title": "Config: Adversarial input detection and alerting",
        "application": "core",
        "mandatory": false,
        "severity": "high",
        "guidance": "Establishing detection and alerting. For example, implementing monitoring for prompt injection patterns, jailbreak techniques, adversarial input attempts, and exceeding rate limits, configuring alerts and threat notifications for suspicious activities.",
        "should_include": [
          "Deployed detection rules covering prompt injection patterns, jailbreak techniques, and rate limit breaches",
          "Alert configuration routing suspicious activity to named security personnel or a SOC channel",
          "Documented confidence thresholds and trigger conditions for each detection rule type",
          "Sample alert log or test firing confirming detection is active in production"
        ]
      },
      {
        "id": "B002.2",
        "title": "Logs: Adversarial incident and response",
        "application": "core",
        "mandatory": false,
        "severity": "high",
        "guidance": "Implementing incident logging and response procedures. For example, logging suspected adversarial attacks with relevant context, escalating to designated personnel based on severity, and documenting response actions in a centralized system.",
        "should_include": [
          "Centralized log store capturing suspected adversarial inputs with timestamp, context metadata, and severity classification",
          "Documented escalation matrix mapping incident severity to designated response personnel",
          "Records of at least one incident logged, escalated, and closed with documented response actions",
          "Defined retention period for adversarial incident logs"
        ]
      },
      {
        "id": "B002.3",
        "title": "Documentation: Updates to detection config",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Maintaining detection effectiveness through quarterly reviews. For example, updating detection rules based on emerging adversarial techniques, analyzing incident patterns and documenting system improvements.",
        "should_include": [
          "Quarterly review records showing detection rules were evaluated and updated",
          "Change log documenting rule additions or modifications with rationale tied to emerging adversarial techniques",
          "Incident pattern analysis used to inform detection improvements",
          "Named owner responsible for the quarterly review process"
        ]
      },
      {
        "id": "B002.4",
        "title": "Config: Pre-processing adversarial detection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing adversarial input detection prior to AI model processing where feasible. For example, using pre-processing filters to flag likely threats before model processing.",
        "should_include": [
          "Pre-processing filter or classifier deployed upstream of the foundation model in the request pipeline",
          "Documentation of adversarial patterns in scope for pre-processing detection",
          "Evidence that flagged inputs are blocked or quarantined before reaching the model",
          "Latency and false-positive measurements for the pre-processing layer"
        ]
      },
      {
        "id": "B002.5",
        "title": "Config: AI security alerts",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating adversarial input detection into existing security operations tooling. For example, forwarding flagged inputs to SIEM platforms, correlating detection with authentication and network logs, enabling SOC teams to triage AI-related security events.",
        "should_include": [
          "SIEM integration configuration forwarding AI adversarial alerts in a standard log format (e.g., JSON, syslog)",
          "Correlation rules linking AI-flagged inputs to authentication and network log events",
          "Evidence that SOC team has visibility into AI security events within their existing tooling",
          "Documented runbook or triage procedure for AI security events surfaced in the SIEM"
        ]
      }
    ]
  },
  "B003": {
    "description": "Implement controls to prevent over-disclosure of technical information about AI systems and organizational details that could enable adversarial targeting.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "B003.1",
        "title": "Documentation: Technical information disclosure guidelines",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting limitations on technical information release. For example, limiting public disclosure of model architectures, algorithms, training data details, system configurations, and performance metrics, requiring approval before sharing technical specifications or implementation details. Controlling organizational information to balance transparency with security. For example, limiting disclosure of AI team details, development timelines, and other information that could reveal technical capabilities, reviewing public communications for sensitive information.",
        "should_include": [
          "Written policy listing categories of technical information restricted from public disclosure (e.g., model architecture, training data details, system configs, performance metrics)",
          "Defined approval requirement and process before sharing technical specifications externally",
          "Guidelines for reviewing public-facing content (blog posts, conference talks, marketing) for inadvertent AI system disclosure",
          "Named owner and review cadence for the disclosure policy"
        ]
      },
      {
        "id": "B003.2",
        "title": "Documentation: Public disclosure approval records",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing approval processes. For example, requiring designated review for public content referencing AI capabilities in e.g. publications, presentations, and marketing materials, and documenting approved disclosures with business justification.",
        "should_include": [
          "Defined approval workflow specifying required reviewers for AI-related public content",
          "Log of approved disclosures with content type, business justification, and approver recorded",
          "Evidence that at least one external publication or presentation went through the approval process",
          "Defined scope clarifying what constitutes public content referencing AI capabilities"
        ]
      }
    ]
  },
  "B004": {
    "description": "Implement safeguards to prevent probing or scraping of external AI endpoints.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "B004.1",
        "title": "Config: Anomalous usage detection",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing systems distinguishing between high-volume legitimate usage and adversarial behavior. For example, using behavioral analytics and user profiling to calibrate detection thresholds and prevent false positives against trusted users.",
        "should_include": [
          "Deployed behavioral analytics or user profiling system with documented detection thresholds per user tier",
          "Evidence that thresholds are calibrated to distinguish high-volume legitimate use from adversarial scraping behavior",
          "Tuning records showing false-positive rates have been assessed against trusted user baselines",
          "Monitoring dashboard or alert log confirming the detection system is active in production"
        ]
      },
      {
        "id": "B004.2",
        "title": "Config: Rate limits",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing rate limiting and query restrictions. For example, establishing per-user quotas to prevent model extraction, blocking excessive query patterns, implementing progressive restrictions for suspicious behavior, or using economic disincentives for high-volume usage.",
        "should_include": [
          "Rate limiting configuration with per-user or per-API-key quotas documented and enforced at the API layer",
          "Progressive restriction or blocking logic configured for users exceeding usage thresholds",
          "Evidence that rate limit enforcement is tested (e.g., rejected over-quota request logs)",
          "Documented rationale for chosen quota values relative to legitimate usage patterns"
        ]
      },
      {
        "id": "B004.3",
        "title": "Report: External pentest of AI endpoints",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Conducting simulated external attack testing of AI endpoints. For example, performing automated attack simulations, testing endpoint protection effectiveness against high-volume and distributed attacks, and documenting methodologies appropriate to organizational threat profile.",
        "should_include": [
          "External penetration test report scoped specifically to AI inference endpoints",
          "Documented methodology covering high-volume query simulation and distributed attack scenarios",
          "Evidence of assessor independence (e.g., third-party firm credentials, statement of independence)",
          "Findings with severity ratings, recommendations, and a remediation tracking reference"
        ]
      },
      {
        "id": "B004.4",
        "title": "Documentation: Vulnerability remediation",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Maintaining endpoint security through remediation. For example, tracking identified vulnerabilities, implementing protective measures based on testing outcomes, and regularly updating endpoint defenses and detection thresholds.",
        "should_include": [
          "Vulnerability tracker or registry showing identified endpoint weaknesses with severity, owner, and status",
          "Remediation records with completion dates linked to specific pentest or scan findings",
          "Updated endpoint defense configurations reflecting remediation actions taken",
          "Evidence that detection thresholds were reviewed and updated based on testing outcomes"
        ]
      }
    ]
  },
  "B005": {
    "description": "Implement real-time input filtering using automated moderation tools.",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "image-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "B005.1",
        "title": "Config: Input filtering",
        "application": "core",
        "mandatory": false,
        "severity": "high",
        "guidance": "Integrating automated moderation tools to filter inputs before they reach the foundation model. For example, integrating third-party moderation APIs, implementing custom filtering rules, configuring blocking or warning actions for flagged content, and establishing confidence thresholds based on risk category and severity.",
        "should_include": [
          "Deployed input filtering configuration integrating a moderation API or custom rule set upstream of the model",
          "Documented confidence thresholds per risk category with justification for chosen values",
          "Configured blocking or warning action applied per risk category when inputs are flagged",
          "Evidence the filter is active in the production request path (e.g., filtered event log or API config)"
        ]
      },
      {
        "id": "B005.2",
        "title": "Documentation: Input moderation approach",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting the moderation logic and rationale. For example, explaining chosen moderation tools, threshold justifications, and decision criteria for different risk categories.",
        "should_include": [
          "Written description of chosen moderation tools with rationale for selection over alternatives",
          "Documented threshold values per risk category and the decision criteria used to set them",
          "Explanation of how each risk category maps to a blocking vs. warning action",
          "Review record showing the approach has been evaluated and updated against real-world traffic patterns"
        ]
      },
      {
        "id": "B005.3",
        "title": "Demonstration: Warning for blocked inputs",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Providing feedback to users when inputs are blocked.",
        "should_include": [
          "Screenshot or recording of the user-facing message displayed when an input is blocked",
          "Evidence the message appears consistently across all interaction surfaces (web, API, mobile)",
          "Message content that informs the user their input was blocked without revealing filter mechanics"
        ]
      },
      {
        "id": "B005.4",
        "title": "Logs: Input filtering",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Logging flagged prompts for analysis and refinement of filters, while ensuring compliance with privacy obligations.",
        "should_include": [
          "Log configuration capturing flagged inputs with timestamp, risk category, confidence score, and action taken",
          "Privacy controls applied to logged prompt content (e.g., hashed, truncated, or redacted per retention policy)",
          "Defined retention period and access controls for filter logs",
          "Evidence that filter logs are reviewed periodically to inform threshold refinement"
        ]
      },
      {
        "id": "B005.5",
        "title": "Documentation: Input filter performance",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Periodically evaluating filter performance and adjusting thresholds accordingly. For example, accuracy, latency, false positives/negatives.",
        "should_include": [
          "Periodic evaluation report covering accuracy, false-positive rate, false-negative rate, and latency for the input filter",
          "Threshold adjustment records tied to performance findings with before/after values",
          "Defined evaluation cadence and named owner for ongoing filter performance review",
          "Baseline or benchmark against which current performance is measured"
        ]
      }
    ]
  },
  "B006": {
    "description": "Implement safeguards to prevent AI agents from performing actions beyond intended scope and authorized privileges.",
    "capabilities": [
      "automation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "B006.1",
        "title": "Config: Agent service access restrictions",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Implementing technical restrictions that limit agent capabilities to authorized scope. For example, restricting agent access to approved backend services and APIs, enforcing network segmentation or API gateway rules, or implementing service-level authorization preventing access to sensitive systems.",
        "should_include": [
          "Allowlist or API gateway configuration documenting approved backend services and APIs the agent can access",
          "Network segmentation or firewall rules enforcing agent scope at the infrastructure layer",
          "Service-level authorization configuration blocking agent requests to systems outside its approved scope",
          "Test results confirming the agent cannot reach services outside its authorized allowlist"
        ]
      },
      {
        "id": "B006.2",
        "title": "Config: Agent security monitoring and alerting",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Deploying monitoring and alerting for agent actions that exceed security boundaries. For example, logging all agent service interactions, alerting on access attempts to unauthorized systems or APIs, or anomaly detection flagging unusual connection patterns.",
        "should_include": [
          "Logging configuration capturing all agent service interactions with timestamp, target service, and action type",
          "Alert rules configured to fire on access attempts to unauthorized systems or APIs",
          "Anomaly detection baseline and thresholds for flagging unusual agent connection or request patterns",
          "Evidence of at least one alert tested or triggered confirming the monitoring is active"
        ]
      }
    ]
  },
  "B007": {
    "description": "Establish and maintain user access controls and admin privileges for AI systems in line with policy.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "B007.1",
        "title": "Config: User access controls",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing system-level access controls tailored to AI systems. For example, using role-based or attribute-based access to restrict access to model configuration, training datasets, tool-calling capabilities, or prompt logs, based on job function and system sensitivity. Restricting administrative and configuration privileges to authorized personnel. For example, limiting ability to alter system behavior, tools, or models.",
        "should_include": [
          "RBAC or ABAC configuration mapping AI system resources (model config, prompt logs, training data, tool-calling capabilities) to defined job function roles",
          "Administrative privilege restrictions documented and enforced, limiting ability to alter system behavior, models, or guardrails",
          "Evidence from an access audit confirming controls are applied consistently across all AI system components",
          "Documented provisioning and de-provisioning process for AI system access"
        ]
      },
      {
        "id": "B007.2",
        "title": "Documentation: Access reviews",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Conducting access reviews and updates at least quarterly. For example, validating access assignments, updating based on policy or role changes, documenting access changes with AI-specific context (e.g. model access justification, changes to agent capability boundaries, or access to sensitive prompt/response history).",
        "should_include": [
          "Quarterly access review records showing user access assignments were validated against current roles",
          "Change log documenting access updates with AI-specific justification (e.g., model access rationale, capability boundary changes)",
          "Evidence that role or policy changes trigger out-of-cycle access reviews",
          "Named owner of the access review process with defined completion criteria"
        ]
      }
    ]
  },
  "B008": {
    "description": "Implement security measures for AI model deployment environments including encryption, access controls and authorization.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "B008.1",
        "title": "Config: Model access controls",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing model access protection. For example, restricting access to production AI models based on job function and operational need, implementing MFA for model system access, maintaining user access reviews appropriate to organizational size.",
        "should_include": [
          "Access control configuration restricting production model access by job function and operational need",
          "MFA enforcement configuration for model system access with verification evidence",
          "User access review records for model system access maintained at appropriate cadence",
          "Evidence that access is provisioned and revoked through a defined and auditable process"
        ]
      },
      {
        "id": "B008.2",
        "title": "Config: API deployment security",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing deployment security controls. For example, applying scoped API tokens or signed requests, using TLS for all endpoint traffic, implementing schema validation to protect model APIs from malformed or adversarial input.",
        "should_include": [
          "Scoped API token or signed request configuration with least-privilege scope documented per integration",
          "TLS configuration enforced across all model API endpoints with certificate management records",
          "Schema validation rules applied to model API inputs with documented allowed schemas",
          "Evidence of security controls tested in practice (e.g., logged rejection of malformed or over-privileged requests)"
        ]
      },
      {
        "id": "B008.3",
        "title": "Config: Model hosting security",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Securing model hosting environments. For example, using up-to-date and minimal container images, scanning for known vulnerabilities in dependencies and base images, and applying infrastructure-level isolation techniques based on risk level (e.g. container namespaces, VM separation, or dedicated GPU access).",
        "should_include": [
          "Container image configuration using minimal, up-to-date base images with a documented update and patching process",
          "Vulnerability scan results for model container dependencies and base images within the defined SLA",
          "Infrastructure isolation configuration (e.g., container namespaces, VM separation, dedicated GPU) with justification for the chosen isolation level",
          "Evidence that scan findings are reviewed and remediated within a defined timeframe"
        ]
      },
      {
        "id": "B008.4",
        "title": "Config: Model integrity verification",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Verifying model integrity before and during deployment. For example, using cryptographic checksums or signed artifacts to detect tampering, scanning model files for malicious payloads.",
        "should_include": [
          "Cryptographic checksum or signed artifact configuration for model files with a verification step in the deployment pipeline",
          "Evidence that model file signatures are verified before each deployment",
          "Malicious payload scan configuration applied to model files prior to deployment",
          "Record of at least one integrity check performed with a documented pass/fail outcome"
        ]
      }
    ]
  },
  "B009": {
    "description": "Implement output limitations and obfuscation techniques to safeguard against information leakage.",
    "capabilities": [
      "text-generation",
      "voice-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "B009.1",
        "title": "Config: Output volume limits",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Reducing or limiting the number of results shown in outputs to relevant only to balance security and utility. For example, character limits, limits on inference time.",
        "should_include": [
          "Configured token or character limits on AI outputs documented per use case or risk level",
          "Inference time or token budget caps enforced at the API or application layer",
          "Evidence that limits are enforced in production (e.g., truncated response log or gateway config)",
          "Documented rationale for chosen limits balancing security against usability requirements"
        ]
      },
      {
        "id": "B009.2",
        "title": "Demonstration: User output notices",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Providing user-facing notices or documentation about output limitations.",
        "should_include": [
          "Screenshot or recording of user-facing notice explaining that output has been limited",
          "Evidence notice is displayed at the point of truncation or limitation, not only in documentation",
          "Notice content that clearly communicates what was limited without revealing exploitable system details"
        ]
      },
      {
        "id": "B009.3",
        "title": "Config: Output precision controls",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Limiting the fidelity of model outputs in certain use cases. For example, applying output rounding, threshold bands, or obfuscation techniques to reduce the risk of model inversion.",
        "should_include": [
          "Configuration applying output rounding, threshold bands, or obfuscation to identified high-sensitivity output types",
          "Documented use cases where precision controls are active and the specific technique applied to each",
          "Test results confirming precision controls reduce model inversion risk without degrading utility below acceptable thresholds",
          "Monitoring evidence confirming precision controls remain applied in production"
        ]
      }
    ]
  },
  "C001": {
    "description": "Establish a risk taxonomy that categorizes risks within harmful, out-of-scope, and hallucinated outputs, tool calls, and other risks based on application-specific usage.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C001.1",
        "title": "Documentation: AI risk taxonomy",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Defining risk categories with severity levels and examples based on industry and deployment context. Aligning risk taxonomy with external frameworks and standards. Establishing severity grading appropriate to organizational context and risk tolerance.",
        "should_include": [
          "Categorized risk register covering harmful outputs, out-of-scope outputs, hallucinations, tool call failures, and other application-specific risks",
          "Severity grading scale (e.g., critical/high/medium/low) with defined criteria and examples for each level",
          "Concrete examples of each risk category drawn from the specific deployment context",
          "Alignment mapping showing how internal categories correspond to at least one external framework (e.g., NIST AI RMF, OWASP LLM Top 10)"
        ]
      },
      {
        "id": "C001.2",
        "title": "Documentation: Risk taxonomy reviews",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Maintaining taxonomy currency with documented change management. For example, updating based on emerging threats or incidents.",
        "should_include": [
          "Quarterly review records showing the taxonomy was assessed and either updated or formally affirmed as current",
          "Change log documenting additions or reclassifications with rationale (e.g., emerging threat, incident trigger)",
          "Evidence that incidents or monitoring findings have been used to update the taxonomy",
          "Named owner responsible for taxonomy maintenance with a defined review cadence"
        ]
      }
    ]
  },
  "C002": {
    "description": "Conduct internal testing of AI systems prior to deployment across risk categories for system changes requiring formal review or approval.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C002.1",
        "title": "Documentation: Pre-deployment test and approval records",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Conducting pre-deployment testing with documented results and identified issues. Completing risk assessments of identified issues before system deployment. Obtaining approval sign-offs from designated accountable.",
        "should_include": [
          "Completed test plan and results covering risk categories from the risk taxonomy for each deployment",
          "Risk assessment of identified issues with severity rating and disposition decision (resolve, accept, defer)",
          "Formal sign-off record from the designated accountable approver before deployment",
          "Tracking log showing all identified issues were resolved or formally accepted with rationale"
        ]
      },
      {
        "id": "C002.2",
        "title": "Config: SDLC integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating AI system testing into established software development lifecycle (SDLC) gates. For example, including threat modelling and risk evaluation during design phases, requiring risk evaluation and sign-off at staging or pre-production milestones.",
        "should_include": [
          "Documentation showing AI risk evaluation gates embedded at design, staging, and pre-production milestones",
          "Threat modelling outputs produced during the design phase for AI system changes",
          "Gate sign-off records confirming risk evaluation was completed at each milestone before proceeding",
          "Evidence that deployment was blocked or delayed due to a failed gate, or a record confirming all gates were passed"
        ]
      },
      {
        "id": "C002.3",
        "title": "Documentation: Vulnerability scan results",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing pre-deployment vulnerability scanning of AI artifacts and dependencies.",
        "should_include": [
          "Scan tool configuration applied to AI model artifacts, dependencies, and deployment packages",
          "Scan results report with identified vulnerabilities, severity ratings, and remediation status",
          "Evidence that scan results were reviewed and accepted before deployment proceeded",
          "Defined policy specifying acceptable vulnerability thresholds for release"
        ]
      }
    ]
  },
  "C003": {
    "description": "Implement safeguards or technical controls to prevent harmful outputs including distressed outputs, angry responses, high-risk advice, offensive content, bias, and deception.",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "image-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C003.1",
        "title": "Config: Harmful output filtering",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing content filtering for harmful output types. For example, deploying classifiers and moderation APIs to detect distressed responses, angry tone, offensive content, bias and deception in outputs before delivery.",
        "should_include": [
          "Deployed classifier or moderation API targeting harmful output categories (distressed content, offensive language, deception, angry tone)",
          "Documented definitions for each harmful output type in scope",
          "Evidence the filter is applied to outputs before delivery in production",
          "Test results showing the filter detects harmful outputs across each defined category"
        ]
      },
      {
        "id": "C003.2",
        "title": "Config: Guardrails for high-risk advice",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing guardrails for advice generation. For example, restricting outputs in regulated domains (medical, legal, financial), requiring disclaimers, redirecting to qualified professionals.",
        "should_include": [
          "Defined list of regulated domains in scope for guardrail enforcement (e.g., medical, legal, financial)",
          "Configured restrictions or disclaimer templates applied when outputs touch regulated domains",
          "Evidence the guardrail fires correctly in tested scenarios (e.g., disclaimer attached, redirection shown)",
          "Redirection or referral mechanism pointing users to qualified professionals where appropriate"
        ]
      },
      {
        "id": "C003.3",
        "title": "Config: Guardrails for biased outputs",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing bias detection and mitigation controls. For example, fairness testing across demographic groups, debiasing in post-processing.",
        "should_include": [
          "Fairness testing results across defined demographic groups (e.g., gender, race, age) for the system's output types",
          "Deployed debiasing or post-processing configuration applied where bias is detected",
          "Documented bias categories and demographic groups in scope for testing",
          "Review cadence for bias monitoring with a named owner"
        ]
      },
      {
        "id": "C003.4",
        "title": "Documentation: Filtering performance benchmarks",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Evaluating harm mitigation controls using performance metrics. For example, false-positive rates, harmful-output recall, latency.",
        "should_include": [
          "Evaluation report covering false-positive rate, harmful-output recall, and latency for harm filters",
          "Defined performance thresholds or acceptable ranges for each metric",
          "Evidence that underperforming controls were adjusted based on benchmark results",
          "Benchmark schedule and named owner for ongoing performance evaluation"
        ]
      }
    ]
  },
  "C004": {
    "description": "Implement safeguards or technical controls to prevent out-of-scope outputs (e.g. political discussion, healthcare advice).",
    "capabilities": [
      "text-generation",
      "voice-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C004.1",
        "title": "Config: out-of-scope guardrails",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Detecting and blocking out-of-scope requests. For example, classifier-based topic detection, refusal templates for prohibited topics.",
        "should_include": [
          "Deployed classifier or topic detection configuration with documented prohibited topic categories",
          "Refusal response templates configured for each out-of-scope topic category",
          "Evidence the guardrail is active in the production request path",
          "Test results confirming on-topic requests pass through and off-topic requests are refused"
        ]
      },
      {
        "id": "C004.2",
        "title": "Logs: Out-of-scope attempts",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Tracking out-of-scope violations and updating boundaries. For example, logging out-of-scope refusals, periodic review of false-positive trends.",
        "should_include": [
          "Log configuration capturing out-of-scope refusals with timestamp, topic category, and session context",
          "Periodic review records analyzing refusal trends and false-positive rates",
          "Evidence that scope boundary definitions have been updated based on log analysis",
          "Defined log retention period and access controls"
        ]
      },
      {
        "id": "C004.3",
        "title": "Demonstration: User guidance on scope",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Providing user guidance on system capabilities and limitations.",
        "should_include": [
          "User-facing documentation or in-product messaging describing what the system can and cannot help with",
          "Evidence guidance is surfaced proactively (e.g., onboarding flow, help text, scope statement in UI)",
          "Evidence guidance is also shown reactively when an out-of-scope request is refused"
        ]
      }
    ]
  },
  "C005": {
    "description": "Implement safeguards or technical controls to prevent additional high risk outputs as defined in risk taxonomy.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C005.1",
        "title": "Config: Risk detection and response",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing detection and blocking mechanisms aligned with organizational risk taxonomy. For example, custom classifiers, regex/lexicon filters tied to taxonomy categories.",
        "should_include": [
          "Custom classifiers or lexicon/regex filters deployed for each customer-defined high-risk category in the taxonomy",
          "Documented mapping of detection rules to specific taxonomy categories",
          "Configured response action (block, flag, redirect) for each detected risk category",
          "Test results confirming detection and correct response for each taxonomy category"
        ]
      },
      {
        "id": "C005.2",
        "title": "Documentation: Human review workflows",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing escalation procedures for flagged high-risk content.",
        "should_include": [
          "Documented escalation procedure for flagged high-risk outputs including reviewer assignment and response SLA",
          "Named role or team responsible for human review with a defined queue management process",
          "Review decision records capturing disposition (approve, reject, escalate) with timestamp",
          "Evidence of at least one completed review record showing the workflow is operational"
        ]
      },
      {
        "id": "C005.3",
        "title": "Config: Automated response mechanisms",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing automated real-time interventions.",
        "should_include": [
          "Configured automated interventions for each high-risk category (e.g., block, suppress, substitute response)",
          "Documented trigger conditions mapping risk scores or categories to automated actions",
          "Evidence that automated responses fire correctly in production (e.g., intervention log entry)",
          "Review record confirming automated responses are periodically evaluated for continued appropriateness"
        ]
      }
    ]
  },
  "C006": {
    "description": "Implement safeguards to prevent security vulnerabilities in outputs from impacting users.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C006.1",
        "title": "Config: Output sanitization",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing output sanitization and validation procedures before presenting content. For example, encoding/escaping for downstream renderers, stripping unsafe URLs and code blocks.",
        "should_include": [
          "Output encoding and escaping configuration applied for downstream renderers (e.g., HTML, Markdown, JSON)",
          "Strip or block rules for unsafe URL patterns and executable or injectable code blocks in outputs",
          "Evidence sanitization is applied before output is delivered to the user in production",
          "Test results showing unsafe content is correctly stripped or escaped across attack scenarios"
        ]
      },
      {
        "id": "C006.2",
        "title": "Demonstration: Warning labels for untrusted content",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Implementing security labeling and content handling based on trust level.",
        "should_include": [
          "Screenshots or recordings showing warning labels applied to outputs classified as untrusted or unverified",
          "Defined criteria for what triggers a warning label (e.g., unverified external source, low-confidence output)",
          "Evidence labels are consistently applied across all interaction surfaces",
          "Label copy that communicates trust level without being alarmist or confusing to users"
        ]
      },
      {
        "id": "C006.3",
        "title": "Config: Adversarial output detection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Detecting advanced output-based attack patterns.",
        "should_include": [
          "Deployed detection mechanism for output-based attack patterns (e.g., prompt exfiltration, instruction injection embedded in outputs)",
          "Documentation of adversarial output patterns in scope for detection",
          "Evidence detection is applied to outputs before delivery in production",
          "Test results confirming detection of at least one known output-based attack pattern"
        ]
      }
    ]
  },
  "C007": {
    "description": "Implement an alerting system that flags high-risk outputs for human review.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "C007.1",
        "title": "Documentation: Definition of high-risk recommendations criteria",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining high-risk output criteria drawing on risk taxonomy.",
        "should_include": [
          "Written definition of high-risk output criteria cross-referenced to the risk taxonomy",
          "Concrete examples of outputs that would and would not meet each high-risk criterion",
          "Version history showing criteria have been updated as the taxonomy evolves",
          "Named owner of the criteria with a defined review cadence"
        ]
      },
      {
        "id": "C007.2",
        "title": "Config: High-risk detection mechanisms",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing automated detection mechanisms for high-risk outputs. For example, using content filtering, risk scoring, or classification models to identify outputs requiring review or flagging.",
        "should_include": [
          "Deployed content filter, risk scorer, or classifier configured to detect outputs meeting high-risk criteria",
          "Documented mapping of each detection mechanism to the specific high-risk criterion it covers",
          "Evidence the mechanism is applied in the production output path",
          "Test results showing the mechanism correctly identifies high-risk outputs and does not flag safe outputs"
        ]
      },
      {
        "id": "C007.3",
        "title": "Documentation: Human review workflows",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing human review workflows for flagged high-risk outputs. For example, assigning reviewers, defining escalation procedures for complex cases, managing review queues with response time tracking, and documenting review decisions.",
        "should_include": [
          "Documented review workflow with assigned reviewer roles, response SLA, and escalation path for complex cases",
          "Queue management process showing how flagged outputs are tracked through to disposition",
          "Review decision records with outcome (approved, rejected, escalated) and timestamp",
          "Evidence the workflow is operational (at least one completed review record)"
        ]
      }
    ]
  },
  "C008": {
    "description": "Implement monitoring of AI systems across risk categories.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "C008.1",
        "title": "Logs: AI risk monitoring",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing ongoing monitoring of AI outputs across risk categories. For example, conducting regular evaluations prioritized by risk severity, sampling outputs for review, and tracking system behavior patterns.",
        "should_include": [
          "Monitoring configuration sampling AI outputs across risk categories with defined sampling rate and frequency",
          "Regular evaluation records prioritized by risk severity (e.g., scheduled review outputs)",
          "Aggregate trend data showing system behavior patterns across risk categories over time",
          "Named owner for monitoring reviews with a defined cadence"
        ]
      },
      {
        "id": "C008.2",
        "title": "Documentation: Monitoring findings",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Maintaining documentation. For example, recording identified scenarios with clear examples, updating risk taxonomy based on monitoring findings and incidents.",
        "should_include": [
          "Findings reports recording identified risk scenarios with concrete output examples",
          "Evidence that monitoring findings have triggered at least one risk taxonomy update",
          "Tracking record showing findings are reviewed, assigned, and resolved within a defined timeframe",
          "Historical findings log maintained for audit and trend analysis"
        ]
      },
      {
        "id": "C008.4",
        "title": "Config: Security tooling",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating AI output monitoring with existing security tools. For example, forwarding alerts and flagged outputs to SIEM platforms, applying standard logging formats (e.g. JSON, syslog) to support automated threat detection workflows.",
        "should_include": [
          "Integration configuration forwarding AI risk monitoring alerts to a SIEM or equivalent security platform",
          "Standard log format applied to AI risk events (e.g., JSON schema with defined fields)",
          "Evidence that security operations can query or receive AI risk alerts within their existing tooling",
          "Documented log schema or event specification used for AI risk monitoring outputs"
        ]
      }
    ]
  },
  "C009": {
    "description": "Implement mechanisms to enable real-time user feedback collection and intervention mechanisms.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "C009.1",
        "title": "Demonstration: User intervention mechanisms",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Enabling user intervention capabilities. For example, providing mechanisms for users to pause, stop, or redirect system behavior, implementing feedback collection tools for users to report issues or concerns, ensuring technical controls persist across devices and interaction contexts. Ensuring accessibility of feedback and intervention mechanisms. For example, adhering to WCAG 2.1 standards for color contrast, screen reader compatibility, keyboard navigation, and clear messaging for users with disabilities.",
        "should_include": [
          "Screenshots or recordings of user-facing controls for pausing, stopping, or redirecting AI system behavior",
          "In-product feedback mechanism allowing users to report issues or concerns, with evidence it is reachable",
          "Evidence controls are accessible and functional across devices and interaction contexts",
          "WCAG 2.1 AA compliance evidence for feedback and intervention UI elements (e.g., contrast ratio, keyboard navigation test)"
        ]
      },
      {
        "id": "C009.2",
        "title": "Documentation: User feedback & intervention reviews",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Reviewing user feedback and intervention logs regularly. For example, evaluating patterns in interventions, adapting communication methods based on user needs and emerging risk considerations. Analyzing collected feedback using structured methodologies. For example, categorizing by risk domain, prioritizing based on frequency and severity, routing high-impact or repeat issues into product backlog or compliance workflows.",
        "should_include": [
          "Documented review process for user feedback and intervention logs with defined cadence",
          "Analysis output categorizing feedback by risk domain and prioritizing by frequency and severity",
          "Evidence that high-impact or repeat issues have been routed to a product backlog or compliance workflow",
          "Named owner of the feedback review process"
        ]
      }
    ]
  },
  "C010": {
    "description": "Appoint expert third parties to evaluate system robustness to harmful outputs including distressed outputs, angry responses, high-risk advice, offensive content, bias, and deception at least every 3 months.",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "image-generation"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C010.1",
        "title": "Report: Harmful output testing",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including performing assessments of harmful outputs at least every quarter, defining testing scope and methodologies based on risk classifications and industry benchmarks like ToxiGen, coordinating with internal security and testing teams. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines.",
        "should_include": [
          "Third-party assessor qualifications and independence record (e.g., firm credentials, statement of independence)",
          "Testing report covering harmful output categories using a documented methodology (e.g., ToxiGen or equivalent benchmark)",
          "Evidence of quarterly testing cadence (dated reports across at least two consecutive cycles)",
          "Remediation tracking record showing findings have been addressed with resolution timelines documented"
        ]
      }
    ]
  },
  "C011": {
    "description": "Appoint expert third parties to evaluate system robustness to out-of-scope outputs at least every 3 months (e.g. political discussion, healthcare advice).",
    "capabilities": [
      "text-generation",
      "voice-generation"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C011.1",
        "title": "Report: Out-of-scope output testing",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments of out-of-scope outputs at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines.",
        "should_include": [
          "Third-party assessor qualifications and independence record",
          "Testing report covering out-of-scope output categories with documented scope, methodology, and test cases",
          "Evidence of quarterly testing cadence",
          "Remediation tracking record showing findings have been addressed with resolution timelines documented"
        ]
      }
    ]
  },
  "C012": {
    "description": "Appoint expert third-parties to evaluate system robustness to additional high-risk outputs as defined in risk taxonomy at least every 3 months.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "C012.1",
        "title": "Report: Third-party evaluation report assessing customer-defined risk",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments of high-risk areas at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines.",
        "should_include": [
          "Third-party assessor qualifications and independence record",
          "Testing report covering customer-defined high-risk categories from the risk taxonomy with documented methodology",
          "Evidence of quarterly testing cadence",
          "Remediation tracking record showing findings have been addressed with resolution timelines documented"
        ]
      }
    ]
  },
  "D001": {
    "description": "Implement safeguards or technical controls to prevent hallucinated outputs.",
    "capabilities": [
      "text-generation",
      "voice-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "D001.1",
        "title": "Config: Groundedness filter",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing factual accuracy controls. For example, deploying available fact-checking mechanisms, flagging uncertain or low-confidence responses.",
        "should_include": [
          "Deployed groundedness or fact-checking mechanism configured to flag uncertain or low-confidence responses before delivery",
          "Documented confidence threshold below which a response is flagged or withheld",
          "Evidence the filter is active in the production output path",
          "Test results showing the filter correctly identifies and flags responses with unverifiable or fabricated claims"
        ]
      },
      {
        "id": "D001.2",
        "title": "Demonstration: User-facing citations & source attributions",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing information source validation. For example, requiring citations for factual claims, implementing source reliability checks.",
        "should_include": [
          "Screenshots or recordings showing citations or source attributions displayed alongside factual claims in outputs",
          "Evidence that source reliability checks are applied before citations are surfaced to users",
          "Defined criteria for what types of claims require a citation",
          "Evidence citations are rendered consistently across all interaction surfaces"
        ]
      },
      {
        "id": "D001.3",
        "title": "Demonstration: User-facing uncertainty labels",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Maintaining uncertainty communication. For example, displaying confidence levels, providing appropriate disclaimers for generated information.",
        "should_include": [
          "Screenshots or recordings showing confidence levels or uncertainty indicators displayed on generated outputs",
          "Defined criteria for when an uncertainty label or disclaimer is shown (e.g., below confidence threshold, speculative content)",
          "Evidence uncertainty labels are applied consistently and not suppressed in production",
          "User-facing copy that communicates uncertainty clearly without undermining trust in reliable outputs"
        ]
      }
    ]
  },
  "D002": {
    "description": "Appoint expert third-parties to evaluate hallucinated outputs at least every 3 months.",
    "capabilities": [
      "text-generation",
      "voice-generation"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "D002.1",
        "title": "Report: Hallucination testing results",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines.",
        "should_include": [
          "Third-party assessor qualifications and independence record",
          "Testing report covering hallucination categories with documented methodology and benchmark dataset (e.g., TruthfulQA or equivalent)",
          "Evidence of quarterly testing cadence (dated reports across at least two consecutive cycles)",
          "Remediation tracking record showing findings have been addressed with resolution timelines documented"
        ]
      }
    ]
  },
  "D003": {
    "description": "Implement safeguards or technical controls to prevent tool calls in AI systems from executing unauthorized actions, accessing restricted information, or making decisions beyond their intended scope.",
    "capabilities": [
      "automation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "D003.1",
        "title": "Config: Tool authorization & validation",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Implementing function call validation and authorization. For example, restricting tool access to approved functions, validating parameters before execution.",
        "should_include": [
          "Allowlist of approved functions the AI system is permitted to call, with unauthorized calls blocked",
          "Parameter validation rules applied before each tool execution, with out-of-range or malformed inputs rejected",
          "Evidence authorization and validation are enforced at the tool invocation layer in production",
          "Test results confirming unauthorized function calls are blocked and invalid parameters are rejected"
        ]
      },
      {
        "id": "D003.2",
        "title": "Config: Rate limits for tools",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Enforcing rate limits and transaction caps for autonomous tool use.",
        "should_include": [
          "Configured per-tool and per-session rate limits and transaction caps for autonomous tool use",
          "Evidence that rate limits are enforced and breaches are blocked or queued",
          "Documented rationale for chosen rate limit values relative to intended use cases",
          "Alert or log entry confirming rate limit enforcement has been tested or triggered"
        ]
      },
      {
        "id": "D003.3",
        "title": "Config: Tool call log",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing execution monitoring and logging. For example, tracking all tool calls, monitoring for unauthorized access attempts or scope violations.",
        "should_include": [
          "Logging configuration capturing all tool calls with timestamp, function name, parameters, and outcome",
          "Monitoring alerts configured to flag unauthorized access attempts or scope violations in tool usage",
          "Defined log retention period and access controls for tool call logs",
          "Evidence logs are actively reviewed or fed into an anomaly detection process"
        ]
      },
      {
        "id": "D003.4",
        "title": "Config: Human-approval workflows",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Requiring human approval for sensitive tool operations. For example, requiring human confirmation before executing high-risk actions, implementing approval workflows for operations beyond autonomous boundaries.",
        "should_include": [
          "Defined list of tool operations classified as high-risk and requiring human confirmation before execution",
          "Approval workflow configuration showing how the system pauses and routes high-risk actions to a named approver",
          "Evidence the approval workflow fires correctly in tested scenarios (e.g., approval request log)",
          "Documented timeout or escalation behavior when an approval is not received within a defined window"
        ]
      },
      {
        "id": "D003.5",
        "title": "Documentation: tool call log reviews",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Reviewing patterns of AI tool usage. For example, identifying anomalies, updating tool permissions, and retiring unused or high-risk functions during scheduled evaluations.",
        "should_include": [
          "Periodic review records showing tool call logs were analyzed for anomalies and usage pattern changes",
          "Evidence that tool permissions have been updated or tools retired based on review findings",
          "Named owner for the review process with a defined cadence",
          "Change log recording tool permission updates with rationale"
        ]
      }
    ]
  },
  "D004": {
    "description": "Appoint expert third-parties to evaluate tool calls in AI systems, including executing unauthorized actions, accessing restricted information, or making decisions beyond their intended scope at least every 3 months.",
    "capabilities": [
      "automation"
    ],
    "frequency": "every-3-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "D004.1",
        "title": "Report: Tool call testing",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments of tool calls at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines.",
        "should_include": [
          "Third-party assessor qualifications and independence record",
          "Testing report covering unauthorized action attempts, restricted information access, and out-of-scope decision scenarios",
          "Evidence of quarterly testing cadence",
          "Remediation tracking record showing findings have been addressed with resolution timelines documented"
        ]
      }
    ]
  },
  "E001": {
    "description": "Document AI failure plan for AI privacy and security breaches assigning accountable owners and establishing notification and remediation with third-party support as needed (e.g. legal, PR, insurers).",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E001.1",
        "title": "Documentation: AI failure plan for security breaches",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Assigning a breach response lead from existing staff. For example, IT manager, security officer, or designated executive with authority to engage external counsel and specialists as needed. Defining breach notification procedures. For example, customer communications, regulatory reporting requirements, and vendor notifications based on applicable privacy laws. Implementing security remediation measures. For example, system freeze capabilities, vulnerability fixes, access control updates, and coordination with external security consultants when internal expertise is insufficient. Establishing evidence collection requirements with guidance on preserving evidence for potential legal review. For example, system logs, user activity records, and basic documentation.",
        "should_include": [
          "Named breach response lead with documented authority to engage external counsel and specialists",
          "Breach notification procedures covering customer communications, regulatory reporting timelines, and vendor notifications per applicable privacy laws",
          "Step-by-step remediation procedure covering system freeze, vulnerability fixes, and access control updates",
          "Evidence collection and preservation guidelines for logs, user activity records, and documentation required for legal review"
        ]
      }
    ]
  },
  "E002": {
    "description": "Document AI failure plan for harmful AI outputs that cause significant customer harm assigning accountable owners and establishing remediation with third-party support as needed (e.g. legal, PR, insurers).",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "image-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E002.1",
        "title": "Documentation: AI failure plan for harmful outputs",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing customer communication protocols. For example, disclosure procedures, explanation of corrective actions, and follow-up commitments with executive approval for significant incidents. Establishing immediate mitigation steps with designated staff responsibilities. For example, system freeze capabilities, output suppression, customer notification, and system adjustments.",
        "should_include": [
          "Customer communication protocol with defined disclosure procedure and executive approval requirement for significant incidents",
          "Named staff assignments for immediate mitigation steps: system freeze, output suppression, customer notification, and system adjustments",
          "Documented escalation path including conditions that trigger each mitigation step",
          "Evidence the plan has been reviewed and distributed to named owners"
        ]
      },
      {
        "id": "E002.2",
        "title": "Documentation: Additional harmful output failure procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining harmful output categories with reference to risk taxonomy. For example, discriminatory content, offensive material, inappropriate recommendations, ideally with concrete examples. Coordinating external support engagement. For example, legal counsel consultation, PR support, and insurance claim procedures.",
        "should_include": [
          "Taxonomy of harmful output categories with concrete examples (e.g., discriminatory content, offensive material, inappropriate recommendations)",
          "External support engagement procedures covering legal counsel consultation, PR support, and insurance claim activation",
          "Named contacts or vendors for each external support type with engagement triggers defined",
          "Review record confirming the supplemental procedures are integrated with the core E002.1 plan"
        ]
      }
    ]
  },
  "E003": {
    "description": "Document AI failure plan for hallucinated AI outputs that cause substantial customer financial loss assigning accountable owners and establishing remediation with third-party support as needed (e.g. legal, PR, insurers).",
    "capabilities": [
      "text-generation",
      "voice-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E003.1",
        "title": "Documentation: AI failure plan for hallucinations",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing compensation assessment procedures. For example, loss evaluation methods, settlement approaches, and payment authorization levels with appropriate approval requirements. Implementing remediation measures. For example, system freeze capabilities, model adjustments, output validation improvements, customer notification, and enhanced monitoring.",
        "should_include": [
          "Compensation assessment procedure with defined loss evaluation methods and settlement authority levels",
          "Named approvers for payment authorization at defined dollar thresholds",
          "Remediation steps covering system freeze, model adjustments, output validation improvements, and enhanced monitoring",
          "Customer notification template and communication procedure for hallucination-caused financial harm"
        ]
      },
      {
        "id": "E003.2",
        "title": "Documentation: Additional hallucination failure procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining hallucination incident types. Coordinating potential external support. For example, legal consultation for significant claims, financial review when needed, and insurance coverage activation.",
        "should_include": [
          "Taxonomy of hallucination incident types with distinguishing criteria",
          "External support engagement procedures covering legal consultation triggers for significant claims, financial review process, and insurance coverage activation steps",
          "Named contacts or vendors for each support category with escalation criteria",
          "Review record confirming supplemental procedures are integrated with the core E003.1 plan"
        ]
      }
    ]
  },
  "E004": {
    "description": "Document which AI system changes across the development & deployment lifecycle require formal review or approval, assign a lead accountable for each, and document their approval with supporting evidence.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E004.1",
        "title": "Documentation: Change approval policy and records",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Defining AI system changes requiring approval including model selection, material changes to the meta prompt, adding / removing guardrails, changes to end-user workflow, other changes that drive material performance impact (for example, +/-10% performance on evals). Assigning an accountable lead as approver for each of these changes. Can follow a RACI structure to formalize roles of those consulted and informed.",
        "should_include": [
          "Written policy listing AI system changes requiring formal review: model selection, material prompt changes, guardrail additions/removals, end-user workflow changes, and changes exceeding defined performance thresholds",
          "Named approver or role assigned to each change category",
          "Change record template or log capturing the change description, approver, date, and supporting evidence",
          "Sample approval records demonstrating the policy has been applied to at least one change"
        ]
      },
      {
        "id": "E004.2",
        "title": "Config: Code signing implementation",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing code signing and verification processes for AI models, libraries, and deployment artefacts to ensure only digitally signed components are approved for production use.",
        "should_include": [
          "Code signing configuration applied to AI models, libraries, and deployment artifacts",
          "Policy stating that only digitally signed components may be approved for production use",
          "Verification process confirming signatures are checked before deployment",
          "Evidence of at least one deployment validated through the code signing process"
        ]
      }
    ]
  },
  "E005": {
    "description": "Establish criteria for selecting cloud provider, and circumstances for on-premises processing considering data sensitivity, regulatory requirements, security controls, and operational needs.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E005.1",
        "title": "Documentation: Deployment decisions",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Conducting deployment risk assessments. For example, evaluating data sensitivity, regulatory compliance requirements, IP protection needs, and security controls for cloud vs. on-premises AI processing. Documenting decision criteria and rationale. For example, establishing clear selection factors, maintaining records of deployment choices with business justification. Reviewing deployment decisions when requirements change. For example, reassessing choices when data sensitivity, regulations, or threat landscape evolves.",
        "should_include": [
          "Documented risk assessment criteria covering data sensitivity, regulatory compliance, IP protection, and security controls for cloud vs. on-premises decisions",
          "Decision record for each major deployment choice with business justification and selected criteria scores",
          "Review procedure defining conditions that trigger reassessment (e.g., regulatory change, data sensitivity reclassification)",
          "Evidence of at least one completed deployment decision documented through the process"
        ]
      }
    ]
  },
  "E006": {
    "description": "Establish AI vendor due diligence processes for foundation and upstream model providers covering data handling, PII controls, security and compliance.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E006.1",
        "title": "Documentation: Vendor due diligence",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Defining assessment criteria for foundational or upstream AI models. For example, data handling and ownership practices, PII controls, security measures, compliance status, open-source. Conducting documented assessments. For example, scoring results, verification activities such as certifications reviewed and references contacted, and approval decisions. Maintaining assessment records with sufficient detail for audit purposes and retaining due diligence evidence before vendor approval.",
        "should_include": [
          "Assessment criteria framework covering data handling, PII controls, security measures, compliance status, and open-source considerations",
          "Completed assessment record for each foundation/upstream model provider including scores, verifications performed (e.g., certifications reviewed, references contacted), and approval decision",
          "Audit-ready evidence package for each approved vendor retained before production use",
          "Named owner and defined cadence for re-assessment of existing vendors"
        ]
      }
    ]
  },
  "E008": {
    "description": "Establish regular internal reviews of key processes and document review records and approvals.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E008.1",
        "title": "Documentation: Internal review",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Reviewing decision processes every quarter including AI system changes, foundational model selection, security assessment. Maintaining a centralized repository of decision records and internal review of these records. For example, supporting evidence reviewed, remediation plans. Documenting and tracking remediation of any risks identified.",
        "should_include": [
          "Quarterly review schedule covering AI system changes, model selection decisions, and security assessments",
          "Centralized repository of decision records with supporting evidence reviewed during each cycle",
          "Remediation tracking log for risks identified during reviews, with assigned owners and resolution timelines",
          "Completed review records for at least two consecutive quarterly cycles"
        ]
      },
      {
        "id": "E008.2",
        "title": "Documentation: External feedback integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Collecting and implementing external feedback on AI systems. For example, system risks, new threat patterns, new mitigation strategies.",
        "should_include": [
          "Process for collecting external feedback on AI systems including defined input channels (e.g., customer reports, researcher disclosures, industry alerts)",
          "Evidence that external feedback is reviewed and assessed against the internal risk taxonomy",
          "Records showing at least one external feedback item processed through the integration procedure",
          "Named owner responsible for monitoring and acting on external feedback"
        ]
      }
    ]
  },
  "E009": {
    "description": "Implement systems to monitor third party access.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "E009.1",
        "title": "Config: Third-party access monitoring",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Configuring logging for third-party interactions. For example, capturing API connections, user access sessions, data exchanges, and service integrations. Capturing access metadata. For example, user identification, authentication timestamps, accessed resources, session duration, origin IP addresses, and resource usage patterns.",
        "should_include": [
          "Logging configuration capturing third-party API connections, user access sessions, data exchanges, and service integrations",
          "Defined metadata fields captured per access event: user identification, authentication timestamp, accessed resource, session duration, origin IP, and resource usage",
          "Evidence that logs are actively retained and accessible for audit or incident review",
          "Monitoring or alerting rule configured to flag anomalous third-party access patterns"
        ]
      }
    ]
  },
  "E010": {
    "description": "Establish and implement an AI acceptable use policy.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E010.1",
        "title": "Documentation: AI acceptable use policy",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Defining prohibited AI usage for end-users. For example, jailbreak attempts, malicious prompt injection, unauthorized data extraction, generation of harmful content, and misuse of customer data.",
        "should_include": [
          "Written AUP listing prohibited end-user behaviors including jailbreak attempts, malicious prompt injection, unauthorized data extraction, harmful content generation, and misuse of customer data",
          "Evidence of AUP distribution to end-users (e.g., in-product acknowledgment, onboarding checklist, training record)",
          "Named owner and defined review cadence for keeping the AUP current",
          "Defined consequences or escalation path for AUP violations"
        ]
      },
      {
        "id": "E010.2",
        "title": "Config: AUP violation detection",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing detection and monitoring tools. For example, prompt analysis, output filtering, usage pattern anomalies, and suspicious access attempts.",
        "should_include": [
          "Detection and monitoring tools configured to flag jailbreak attempts, prompt injection, output policy violations, and suspicious access patterns",
          "Evidence that prompt analysis and output filtering are active in the production path",
          "Alert or incident log confirming at least one detection event has fired or been tested",
          "Defined response procedure triggered when a violation is detected"
        ]
      },
      {
        "id": "E010.3",
        "title": "Demonstration: User notification for AUP breaches",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Implementing user feedback when policy is breached. For example, showing alerts or error messages when inputs violate acceptable use.",
        "should_include": [
          "Screenshots or recordings showing user-facing alerts or error messages displayed when inputs violate acceptable use policy",
          "Evidence that notifications fire consistently across the relevant interaction surfaces",
          "Copy of the notification message confirming it clearly communicates the policy violation without exposing system internals",
          "Test results confirming notification triggers for defined violation categories"
        ]
      },
      {
        "id": "E010.4",
        "title": "Documentation: Guardrails enforcing acceptable use",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Real-time monitoring, blocking, or alerting capabilities. Maintaining logging and tracking systems. For example, incident creation, violation tracking with case assignment and resolution documentation. Conducting regular effectiveness reviews. For example, quarterly analysis of violation trends, tool performance assessment, policy updates based on emerging threats, and user training adjustments.",
        "should_include": [
          "Real-time monitoring, blocking, or alerting configuration with defined trigger conditions",
          "Incident tracking log showing AUP violations are recorded with case assignment and resolution documentation",
          "Quarterly effectiveness review record covering violation trend analysis, tool performance, policy updates, and training adjustments",
          "Named owner for the review process with evidence of at least one completed review cycle"
        ]
      }
    ]
  },
  "E011": {
    "description": "Document AI data processing locations.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E011.1",
        "title": "Documentation: AI processing locations",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Maintaining AI infrastructure location documentation. For example, geographic locations of foundation model processing locations and inference endpoint regions.",
        "should_include": [
          "Documented inventory of AI infrastructure geographic locations including foundation model processing regions and inference endpoint locations",
          "Named owner responsible for maintaining and updating the location record",
          "Review cadence defined for confirming location data remains accurate after infrastructure changes",
          "Evidence the documentation is accessible to compliance and legal teams when needed"
        ]
      },
      {
        "id": "E011.2",
        "title": "Documentation: Data transfer compliance",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing transfer compliance procedures. For example, assessing data transfer requirements for AI training data and inference processing.",
        "should_include": [
          "Assessment of data transfer requirements for AI training data and inference processing against applicable cross-border transfer regulations",
          "Documented transfer mechanisms in use (e.g., SCCs, adequacy decisions, BCRs) with supporting legal basis",
          "Named owner responsible for monitoring regulatory changes that affect transfer compliance",
          "Review record confirming transfer compliance has been assessed for each active processing location"
        ]
      }
    ]
  },
  "E012": {
    "description": "Document applicable AI laws and standards, required data protections, and strategies for compliance.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-6-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E012.1",
        "title": "Documentation: Regulatory compliance reviews",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Identifying relevant regulations. For example, data protection laws, sector-specific requirements, emerging AI standards. Documenting compliance procedures and strategies.",
        "should_include": [
          "Inventory of applicable regulations and standards covering data protection laws, sector-specific requirements, and emerging AI standards",
          "Documented compliance procedures and strategies for each applicable regulation",
          "Evidence of bi-annual review cadence with dated review records",
          "Named compliance owner with escalation path for newly identified regulatory requirements"
        ]
      }
    ]
  },
  "E013": {
    "description": "Establish a quality management system for AI systems proportionate to the size of the organization.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "E013.1",
        "title": "Documentation: Quality objectives and risk management",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining quality objectives, metrics, and risk management approach for AI systems. For example, establishing performance targets, safety thresholds, risk assessment methodologies.",
        "should_include": [
          "Documented quality objectives with defined performance targets and safety thresholds for AI systems in scope",
          "Risk assessment methodology specifying how risks are identified, scored, and prioritized",
          "Named owner responsible for quality management with a defined review cadence",
          "Evidence that objectives and risk assessments have been applied to at least one AI system"
        ]
      },
      {
        "id": "E013.2",
        "title": "Documentation: Change management procedures",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing change management, approval processes, and documentation standards. For example, defining review and approval requirements for AI system changes.",
        "should_include": [
          "Documented change management procedure specifying review and approval requirements for AI system changes",
          "Change record template capturing: change description, risk assessment, approver, date, and supporting evidence",
          "Evidence the procedure has been applied to at least one AI system change",
          "Named owner for the change management process with a defined review cadence"
        ]
      },
      {
        "id": "E013.3",
        "title": "Config: Issue tracking and monitoring",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing defect tracking, continuous improvement, and post-market monitoring. For example, maintaining issue tracking systems, conducting root cause analysis.",
        "should_include": [
          "Issue tracking system configured for AI system defects and quality incidents with defined severity classifications",
          "Root cause analysis procedure applied to significant defects with documented findings",
          "Post-market monitoring configuration capturing performance metrics and anomaly indicators",
          "Records showing issues have been tracked, analyzed, and remediated through the system"
        ]
      },
      {
        "id": "E013.4",
        "title": "Documentation: Data management procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing data management and record-keeping systems. For example, documenting data governance procedures, maintaining technical documentation.",
        "should_include": [
          "Documented data governance procedures covering AI training data, inference inputs, and output data",
          "Technical documentation maintained for major AI systems including data sources, preprocessing steps, and data quality standards",
          "Named data owner with defined responsibilities for record-keeping and data lifecycle management",
          "Evidence that data management procedures are applied consistently across systems in scope"
        ]
      },
      {
        "id": "E013.5",
        "title": "Documentation: Stakeholder communication procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting communication procedures with regulatory authorities and stakeholders. For example, establishing protocols for regulatory reporting, stakeholder notifications for incidents, and procedures for authority interactions.",
        "should_include": [
          "Documented protocols for regulatory reporting covering trigger conditions, required content, and submission timelines",
          "Stakeholder notification procedures for AI incidents including defined recipient categories and communication templates",
          "Named owner responsible for regulatory and stakeholder communications",
          "Evidence that at least one communication (regulatory or stakeholder) has been processed through the documented procedure"
        ]
      }
    ]
  },
  "E015": {
    "description": "Maintain logs of AI system processes, actions, and model outputs where permitted to support incident investigation, auditing, and explanation of AI system behavior.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E015.1",
        "title": "Config: Logging implementation",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Capturing system activity details to support incident investigation and behavior explanation. For example, logging inputs, processing steps, outputs, and metadata for AI systems.",
        "should_include": [
          "Logging configuration capturing AI system inputs, processing steps, outputs, and associated metadata",
          "Defined log fields supporting incident investigation and behavior explanation",
          "Evidence that logging is active in the production path across all AI systems in scope",
          "Test or audit result confirming logs capture sufficient detail to reconstruct AI system behavior for a given interaction"
        ]
      },
      {
        "id": "E015.2",
        "title": "Config: Log storage",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing log storage with appropriate retention periods, access controls, and data sanitation to support auditing and incident response.",
        "should_include": [
          "Log storage configuration with defined retention periods per log type",
          "Access controls documented and enforced on log storage systems",
          "Data sanitation procedures applied to logs containing PII or sensitive information before storage or sharing",
          "Evidence that log storage is sized and monitored to prevent loss due to capacity limits"
        ]
      },
      {
        "id": "E015.3",
        "title": "Config: Log integrity protection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing technical controls to ensure logs are tamper-evident and independently verifiable. For example, ensuring that captured records cannot be modified or deleted after creation, ensuring sequence integrity so that gaps, omissions, and reordering are detectable during incident investigation or audit.",
        "should_include": [
          "Technical control deployed to make logs tamper-evident (e.g., append-only storage, cryptographic hashing, write-once configuration)",
          "Sequence integrity mechanism ensuring gaps, omissions, or reordering are detectable",
          "Evidence that the integrity control is active in the production log pipeline",
          "Test or audit result confirming that attempted log modification or deletion is detected or prevented"
        ]
      }
    ]
  },
  "E016": {
    "description": "Implement clear disclosure mechanisms to inform users when they are interacting with AI systems rather than humans.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "E016.1",
        "title": "Demonstration: Text AI disclosure",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing AI disclosure for text-based interactions. For example, displaying clear notices when users interact with AI chatbots, virtual assistants, or automated messaging systems.",
        "should_include": [
          "Screenshots or recordings showing clear AI disclosure notices displayed when users interact with text-based AI systems",
          "Evidence the disclosure appears at the start of interactions and is not buried or easily missed",
          "Copy of disclosure language confirming it clearly identifies the system as AI-powered",
          "Evidence the disclosure is consistent across all text interaction surfaces"
        ]
      },
      {
        "id": "E016.2",
        "title": "Demonstration: Voice AI disclosure",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing AI disclosure for voice-based interactions. For example, providing audio notifications at the beginning of voice calls or interactions.",
        "should_include": [
          "Recording or transcript showing an audio AI disclosure notification at the beginning of voice calls or voice interactions",
          "Evidence the disclosure fires before any substantive AI-driven exchange",
          "Copy of disclosure script confirming it clearly identifies the interaction as AI-powered",
          "Evidence the voice disclosure is consistent across all voice interaction entry points"
        ]
      },
      {
        "id": "E016.3",
        "title": "Demonstration: Labelling AI-generated content",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Labelling AI-generated media and documents in a machine-readable and detectable format. For example, marking AI-generated images, videos, audio, or documents with metadata, watermarks, or labels indicating artificial generation.",
        "should_include": [
          "Evidence that AI-generated images, videos, audio, and documents are labelled with machine-readable metadata, watermarks, or labels indicating artificial generation",
          "Technical specification or configuration of the labelling mechanism applied",
          "Test results confirming labels are applied consistently and are detectable by standard inspection tools",
          "Named owner responsible for maintaining and updating the labelling implementation"
        ]
      },
      {
        "id": "E016.4",
        "title": "Demonstration: Automation AI disclosure",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Disclosing when autonomous AI agents or automated workflows are performing actions. For example, notifying users when AI systems are making decisions, processing requests, or executing tasks without human oversight.",
        "should_include": [
          "Screenshots or recordings showing user notifications when autonomous AI agents or automated workflows are performing actions or making decisions",
          "Evidence the disclosure appears before or at the point of autonomous action, not after",
          "Copy of notification copy confirming it clearly identifies the action as AI-driven",
          "Evidence the disclosure fires consistently across all automated workflow surfaces"
        ]
      },
      {
        "id": "E016.5",
        "title": "Demonstration: System response to AI inquiry",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Establishing reactive disclosure capabilities when users ask if they are interacting with AI.",
        "should_include": [
          "Screenshots or recordings showing the system clearly acknowledging it is an AI when directly asked by a user",
          "Evidence the response fires consistently regardless of how the question is phrased",
          "Response copy that confirms AI identity without deception or evasion"
        ]
      }
    ]
  },
  "E017": {
    "description": "Establish a system transparency policy and maintain a repository of model cards, datasheets, and interpretability reports for major systems.",
    "capabilities": [
      "universal"
    ],
    "frequency": "every-12-months",
    "mandatory": false,
    "sub_controls": [
      {
        "id": "E017.1",
        "title": "Documentation: Transparency policy",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing a transparency policy defining documentation requirements for major AI systems. For example, specifying required documentation elements, establishing documentation standards.",
        "should_include": [
          "Written transparency policy defining which AI systems require documentation and what elements must be included",
          "Documentation standards specifying required components (e.g., system description, training data provenance, known limitations, intended use)",
          "Named owner and review cadence for the policy",
          "Evidence the policy has been applied to at least one AI system meeting the documentation criteria"
        ]
      },
      {
        "id": "E017.2",
        "title": "Documentation: Model cards and system documentation",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Creating transparency documentation for major AI systems. For example, documenting system characteristics, data provenance, and model behavior for systems meeting documentation criteria.",
        "should_include": [
          "Model card or equivalent documentation for each major AI system covering: system characteristics, intended use, data provenance, performance benchmarks, and known limitations",
          "Evidence documentation is maintained and kept current as systems evolve",
          "Named owner responsible for creating and updating documentation for each system in scope",
          "Repository or index confirming all systems meeting the documentation criteria have a current record"
        ]
      },
      {
        "id": "E017.3",
        "title": "Documentation: Transparency report sharing policy",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining policies for sharing transparency documentation with external stakeholders. For example, establishing when reports are shared, specifying recipient categories, determining what information is disclosed to each stakeholder type. Documenting sharing procedures including approval workflows, version control, and distribution tracking. For example, establishing approval requirements before external sharing, maintaining version control of shared documents, tracking which stakeholders received which versions.",
        "should_include": [
          "Policy defining when transparency documentation is shared externally, specifying recipient categories and what information is disclosed to each",
          "Approval workflow documentation showing required sign-off before external sharing",
          "Version control procedure for shared documents with distribution tracking records",
          "Evidence of at least one external sharing event processed through the documented procedure"
        ]
      }
    ]
  },
  "F001": {
    "description": "Implement or document guardrails to prevent AI-enabled misuse for cyber attacks and exploitation.",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "automation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "F001.1",
        "title": "Documentation: Foundation model cyber capabilities",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Results of testing from foundation model developer on offensive cyber capabilities and mitigations.",
        "should_include": [
          "Published or contractually obtained test results from the foundation model developer covering offensive cyber capabilities (e.g., malicious code generation, attack planning, vulnerability exploitation)",
          "Documented mitigations implemented by the model developer for each identified cyber capability",
          "Named foundation model provider with reference to the specific evaluation report or disclosure",
          "Review record confirming the test results were assessed and accepted before or during production deployment"
        ]
      },
      {
        "id": "F001.2",
        "title": "Config: Cyber use detection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "high",
        "guidance": "Implementing malicious use detection and blocking. For example, deploying available content filtering to detect requests for malicious code generation, attack planning, and vulnerability exploitation guidance, configuring automated blocking of cyber attack assistance requests, maintaining databases of prohibited use patterns.",
        "should_include": [
          "Deployed content filter or classifier configured to detect requests for malicious code generation, attack planning, and vulnerability exploitation guidance",
          "Automated blocking configuration applied to detected cyber attack assistance requests",
          "Documented database or pattern library of prohibited cyber use cases maintained and updated",
          "Test results confirming detection and blocking fires correctly against known malicious request patterns"
        ]
      }
    ]
  },
  "F002": {
    "description": "Implement or document guardrails to prevent AI-enabled catastrophic system misuse (chemical / bio / radio / nuclear).",
    "capabilities": [
      "text-generation",
      "voice-generation",
      "image-generation"
    ],
    "frequency": "every-12-months",
    "mandatory": true,
    "sub_controls": [
      {
        "id": "F002.1",
        "title": "Documentation: Foundation model CBRN capabilities",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Results of testing from foundation model developer on CBRN capabilities and mitigations.",
        "should_include": [
          "Published or contractually obtained test results from the foundation model developer covering CBRN-related capabilities (chemical, biological, radiological, nuclear)",
          "Documented mitigations implemented by the model developer for each identified CBRN capability",
          "Named foundation model provider with reference to the specific CBRN evaluation report or safety disclosure",
          "Review record confirming CBRN test results were assessed before or during production deployment"
        ]
      },
      {
        "id": "F002.2",
        "title": "Config: Catastrophic misuse monitoring",
        "application": "supplemental",
        "mandatory": false,
        "severity": "high",
        "guidance": "Establishing catastrophic misuse monitoring. For example, monitoring AI system interactions for patterns indicating weapons development or mass harm intent, implementing real-time alerting for detected catastrophic misuse attempts, documenting suspicious queries and system responses.",
        "should_include": [
          "Monitoring configuration detecting interaction patterns associated with weapons development or mass harm intent (e.g., CBRN synthesis queries, bioweapon precursor requests)",
          "Real-time alerting configured to fire on detected catastrophic misuse attempts with defined escalation path",
          "Log or database capturing suspicious queries and system responses for review and evidence retention",
          "Evidence that monitoring has been tested and is active in the production interaction path"
        ]
      }
    ]
  }
};
