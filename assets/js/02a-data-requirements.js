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
        "guidance": "Implementing technical controls to enforce data retention and deletion policies. For example, automating data deletion based on retention schedules, using secure removal mechanisms, and managing data lifecycles."
      },
      {
        "id": "A001.3",
        "title": "Documentation: Data subject right processes",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting processes for handling end-user data subject rights. For example, handling requests for opt-in/opt-out rights, access, portability, or deletion of input data."
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
        "guidance": "Establishing output ownership and usage rights policies. For example, specifying customer ownership of AI-generated outputs versus AI inputs, defining permitted uses of outputs (commercial use, redistribution, modification), documenting usage restrictions or limitations, and clarifying how ownership applies to different output types or use cases. Disclosing opt-out and deletion procedures for AI outputs. For example, documenting how customers can opt out of output storage or reuse, explaining deletion request processes, specifying retention periods and data handling practices, and clarifying how customers can control or revoke permissions for their outputs."
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
        "guidance": "Configuring data collection limits to reduce data and privacy exposure. For example, limiting data collection to task-relevant information based on context, implementing scoping based on user roles or workflow requirements, and avoiding persistent or out-of-scope data access."
      },
      {
        "id": "A003.2",
        "title": "Config: Alerting system for auth failures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Deploying monitoring mechanisms. Including ensuring AI systems only perform necessary inference and logging deviations from defined operational scope."
      },
      {
        "id": "A003.3",
        "title": "Config: Authorization system integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating with existing authorization systems to align agent access permissions with organizational policies."
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
        "guidance": "Providing user guidance on protecting confidential information. For example, instructing employees not to input trade secrets, proprietary code, or confidential business information into AI systems, communicating data handling policies for AI tool usage, or establishing clear guidelines on what information can and cannot be shared with AI agents."
      },
      {
        "id": "A004.2",
        "title": "Documentation: foundational model IP protections",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Leveraging foundation model provider protections. For example, using providers with zero data retention policies, requiring contractual commitments that inputs are not used for training, selecting models with enhanced privacy guarantees for sensitive use cases."
      },
      {
        "id": "A004.3",
        "title": "Config: IP detection implementation",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing technical controls to detect proprietary information in outputs."
      },
      {
        "id": "A004.4",
        "title": "Config: IP disclosure monitoring",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing output monitoring for high-risk IP scenarios. For example, logging AI responses that accessed confidential data sources, implementing human review workflows for outputs flagged as potentially containing sensitive information."
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
        "guidance": "Establishing explicit consent and disclosure for combined data usage. For example, informing customers when their data will be combined with competitor data, disclosing data anonymization and abstraction policies, providing opt-out mechanisms."
      },
      {
        "id": "A005.2",
        "title": "Config: Customer data isolation controls",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Implementing customer data isolation controls. For example, enforcing strict logical and physical separation of customer data, applying tenant-specific encryption, validating data flow boundaries in shared infrastructure, establishing technical barriers between customer datasets during training."
      },
      {
        "id": "A005.3",
        "title": "Config: Privacy-enhancing controls",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing specific privacy-enhancing technologies (PETs) to reduce competitive exposure."
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
        "guidance": "Implementing safeguards to prevent personal data leakage through AI system outputs and logs. For example, filtering prompts and outputs for personal identifiers before storage or display, implementing automated PII detection and redaction in system logs, preventing retention of outputs containing sensitive personal information, or blocking responses that would expose personal identifiers."
      },
      {
        "id": "A006.2",
        "title": "Config: PII access controls",
        "application": "core",
        "mandatory": true,
        "severity": "critical",
        "guidance": "Requiring authentication and authorization for PII access. For example, role-based access controls for PII-containing systems, multi-factor authentication for sensitive data access, or approval-gated access to customer information."
      },
      {
        "id": "A006.3",
        "title": "Config: DLP system integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating with existing data loss prevention (DLP) systems to monitor and block outputs containing personal data in violation of policy."
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
        "guidance": "Documenting foundation model provider IP protections which may serve as primary infringement safeguards. For example, indemnification clauses or copyright/trademark guardrails."
      },
      {
        "id": "A007.2",
        "title": "Config: IP infringement filtering",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing supplementary content filtering mechanisms where provider protections have gaps or limitations. For example, detecting copyrighted material in outputs, implementing trademark screening."
      },
      {
        "id": "A007.3",
        "title": "Logs: User-facing notices",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing user guidance and guardrails to reduce IP risk. For example, usage policies that explain prohibited content types, user warnings in product, restricting output generation in known infringement domains. Implementing restrictions in AI acceptable use policy."
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
        "guidance": "Establishing a taxonomy for adversarial risks based on industry frameworks (e.g., MITRE ATLAS, OWASP Top 10 for LLMs). Conducting comprehensive adversarial testing at least quarterly. Maintaining secure testing documentation. Establishing improvement processes based on findings."
      },
      {
        "id": "B001.2",
        "title": "Documentation: Security program integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Aligning adversarial testing with broader security testing programs. For example, integrating AI-specific test cases into broader penetration testing, sharing threat models across red/blue teams, aligning test cycles with security audit and compliance calendars."
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
        "guidance": "Establishing detection and alerting. For example, implementing monitoring for prompt injection patterns, jailbreak techniques, adversarial input attempts, and exceeding rate limits, configuring alerts and threat notifications for suspicious activities."
      },
      {
        "id": "B002.2",
        "title": "Logs: Adversarial incident and response",
        "application": "core",
        "mandatory": false,
        "severity": "high",
        "guidance": "Implementing incident logging and response procedures. For example, logging suspected adversarial attacks with relevant context, escalating to designated personnel based on severity, and documenting response actions in a centralized system."
      },
      {
        "id": "B002.3",
        "title": "Documentation: Updates to detection config",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Maintaining detection effectiveness through quarterly reviews. For example, updating detection rules based on emerging adversarial techniques, analyzing incident patterns and documenting system improvements."
      },
      {
        "id": "B002.4",
        "title": "Config: Pre-processing adversarial detection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing adversarial input detection prior to AI model processing where feasible. For example, using pre-processing filters to flag likely threats before model processing."
      },
      {
        "id": "B002.5",
        "title": "Config: AI security alerts",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating adversarial input detection into existing security operations tooling. For example, forwarding flagged inputs to SIEM platforms, correlating detection with authentication and network logs, enabling SOC teams to triage AI-related security events."
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
        "guidance": "Documenting limitations on technical information release. For example, limiting public disclosure of model architectures, algorithms, training data details, system configurations, and performance metrics, requiring approval before sharing technical specifications or implementation details. Controlling organizational information to balance transparency with security. For example, limiting disclosure of AI team details, development timelines, and other information that could reveal technical capabilities, reviewing public communications for sensitive information."
      },
      {
        "id": "B003.2",
        "title": "Documentation: Public disclosure approval records",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing approval processes. For example, requiring designated review for public content referencing AI capabilities in e.g. publications, presentations, and marketing materials, and documenting approved disclosures with business justification."
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
        "guidance": "Implementing systems distinguishing between high-volume legitimate usage and adversarial behavior. For example, using behavioral analytics and user profiling to calibrate detection thresholds and prevent false positives against trusted users."
      },
      {
        "id": "B004.2",
        "title": "Config: Rate limits",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing rate limiting and query restrictions. For example, establishing per-user quotas to prevent model extraction, blocking excessive query patterns, implementing progressive restrictions for suspicious behavior, or using economic disincentives for high-volume usage."
      },
      {
        "id": "B004.3",
        "title": "Report: External pentest of AI endpoints",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Conducting simulated external attack testing of AI endpoints. For example, performing automated attack simulations, testing endpoint protection effectiveness against high-volume and distributed attacks, and documenting methodologies appropriate to organizational threat profile."
      },
      {
        "id": "B004.4",
        "title": "Documentation: Vulnerability remediation",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Maintaining endpoint security through remediation. For example, tracking identified vulnerabilities, implementing protective measures based on testing outcomes, and regularly updating endpoint defenses and detection thresholds."
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
        "guidance": "Integrating automated moderation tools to filter inputs before they reach the foundation model. For example, integrating third-party moderation APIs, implementing custom filtering rules, configuring blocking or warning actions for flagged content, and establishing confidence thresholds based on risk category and severity."
      },
      {
        "id": "B005.2",
        "title": "Documentation: Input moderation approach",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting the moderation logic and rationale. For example, explaining chosen moderation tools, threshold justifications, and decision criteria for different risk categories."
      },
      {
        "id": "B005.3",
        "title": "Demonstration: Warning for blocked inputs",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Providing feedback to users when inputs are blocked."
      },
      {
        "id": "B005.4",
        "title": "Logs: Input filtering",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Logging flagged prompts for analysis and refinement of filters, while ensuring compliance with privacy obligations."
      },
      {
        "id": "B005.5",
        "title": "Documentation: Input filter performance",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Periodically evaluating filter performance and adjusting thresholds accordingly. For example, accuracy, latency, false positives/negatives."
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
        "guidance": "Implementing technical restrictions that limit agent capabilities to authorized scope. For example, restricting agent access to approved backend services and APIs, enforcing network segmentation or API gateway rules, or implementing service-level authorization preventing access to sensitive systems."
      },
      {
        "id": "B006.2",
        "title": "Config: Agent security monitoring and alerting",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Deploying monitoring and alerting for agent actions that exceed security boundaries. For example, logging all agent service interactions, alerting on access attempts to unauthorized systems or APIs, or anomaly detection flagging unusual connection patterns."
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
        "guidance": "Implementing system-level access controls tailored to AI systems. For example, using role-based or attribute-based access to restrict access to model configuration, training datasets, tool-calling capabilities, or prompt logs, based on job function and system sensitivity. Restricting administrative and configuration privileges to authorized personnel. For example, limiting ability to alter system behavior, tools, or models."
      },
      {
        "id": "B007.2",
        "title": "Documentation: Access reviews",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Conducting access reviews and updates at least quarterly. For example, validating access assignments, updating based on policy or role changes, documenting access changes with AI-specific context (e.g. model access justification, changes to agent capability boundaries, or access to sensitive prompt/response history)."
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
        "guidance": "Implementing model access protection. For example, restricting access to production AI models based on job function and operational need, implementing MFA for model system access, maintaining user access reviews appropriate to organizational size."
      },
      {
        "id": "B008.2",
        "title": "Config: API deployment security",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing deployment security controls. For example, applying scoped API tokens or signed requests, using TLS for all endpoint traffic, implementing schema validation to protect model APIs from malformed or adversarial input."
      },
      {
        "id": "B008.3",
        "title": "Config: Model hosting security",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Securing model hosting environments. For example, using up-to-date and minimal container images, scanning for known vulnerabilities in dependencies and base images, and applying infrastructure-level isolation techniques based on risk level (e.g. container namespaces, VM separation, or dedicated GPU access)."
      },
      {
        "id": "B008.4",
        "title": "Config: Model integrity verification",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Verifying model integrity before and during deployment. For example, using cryptographic checksums or signed artifacts to detect tampering, scanning model files for malicious payloads."
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
        "guidance": "Reducing or limiting the number of results shown in outputs to relevant only to balance security and utility. For example, character limits, limits on inference time."
      },
      {
        "id": "B009.2",
        "title": "Demonstration: User output notices",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Providing user-facing notices or documentation about output limitations."
      },
      {
        "id": "B009.3",
        "title": "Config: Output precision controls",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Limiting the fidelity of model outputs in certain use cases. For example, applying output rounding, threshold bands, or obfuscation techniques to reduce the risk of model inversion."
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
        "guidance": "Defining risk categories with severity levels and examples based on industry and deployment context. Aligning risk taxonomy with external frameworks and standards. Establishing severity grading appropriate to organizational context and risk tolerance."
      },
      {
        "id": "C001.2",
        "title": "Documentation: Risk taxonomy reviews",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Maintaining taxonomy currency with documented change management. For example, updating based on emerging threats or incidents."
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
        "guidance": "Conducting pre-deployment testing with documented results and identified issues. Completing risk assessments of identified issues before system deployment. Obtaining approval sign-offs from designated accountable."
      },
      {
        "id": "C002.2",
        "title": "Config: SDLC integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating AI system testing into established software development lifecycle (SDLC) gates. For example, including threat modelling and risk evaluation during design phases, requiring risk evaluation and sign-off at staging or pre-production milestones."
      },
      {
        "id": "C002.3",
        "title": "Documentation: Vulnerability scan results",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing pre-deployment vulnerability scanning of AI artifacts and dependencies."
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
        "guidance": "Implementing content filtering for harmful output types. For example, deploying classifiers and moderation APIs to detect distressed responses, angry tone, offensive content, bias and deception in outputs before delivery."
      },
      {
        "id": "C003.2",
        "title": "Config: Guardrails for high-risk advice",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing guardrails for advice generation. For example, restricting outputs in regulated domains (medical, legal, financial), requiring disclaimers, redirecting to qualified professionals."
      },
      {
        "id": "C003.3",
        "title": "Config: Guardrails for biased outputs",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing bias detection and mitigation controls. For example, fairness testing across demographic groups, debiasing in post-processing."
      },
      {
        "id": "C003.4",
        "title": "Documentation: Filtering performance benchmarks",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Evaluating harm mitigation controls using performance metrics. For example, false-positive rates, harmful-output recall, latency."
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
        "guidance": "Detecting and blocking out-of-scope requests. For example, classifier-based topic detection, refusal templates for prohibited topics."
      },
      {
        "id": "C004.2",
        "title": "Logs: Out-of-scope attempts",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Tracking out-of-scope violations and updating boundaries. For example, logging out-of-scope refusals, periodic review of false-positive trends."
      },
      {
        "id": "C004.3",
        "title": "Demonstration: User guidance on scope",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Providing user guidance on system capabilities and limitations."
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
        "guidance": "Implementing detection and blocking mechanisms aligned with organizational risk taxonomy. For example, custom classifiers, regex/lexicon filters tied to taxonomy categories."
      },
      {
        "id": "C005.2",
        "title": "Documentation: Human review workflows",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing escalation procedures for flagged high-risk content."
      },
      {
        "id": "C005.3",
        "title": "Config: Automated response mechanisms",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing automated real-time interventions."
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
        "guidance": "Establishing output sanitization and validation procedures before presenting content. For example, encoding/escaping for downstream renderers, stripping unsafe URLs and code blocks."
      },
      {
        "id": "C006.2",
        "title": "Demonstration: Warning labels for untrusted content",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Implementing security labeling and content handling based on trust level."
      },
      {
        "id": "C006.3",
        "title": "Config: Adversarial output detection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Detecting advanced output-based attack patterns."
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
        "guidance": "Defining high-risk output criteria drawing on risk taxonomy."
      },
      {
        "id": "C007.2",
        "title": "Config: High-risk detection mechanisms",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing automated detection mechanisms for high-risk outputs. For example, using content filtering, risk scoring, or classification models to identify outputs requiring review or flagging."
      },
      {
        "id": "C007.3",
        "title": "Documentation: Human review workflows",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing human review workflows for flagged high-risk outputs. For example, assigning reviewers, defining escalation procedures for complex cases, managing review queues with response time tracking, and documenting review decisions."
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
        "guidance": "Establishing ongoing monitoring of AI outputs across risk categories. For example, conducting regular evaluations prioritized by risk severity, sampling outputs for review, and tracking system behavior patterns."
      },
      {
        "id": "C008.2",
        "title": "Documentation: Monitoring findings",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Maintaining documentation. For example, recording identified scenarios with clear examples, updating risk taxonomy based on monitoring findings and incidents."
      },
      {
        "id": "C008.4",
        "title": "Config: Security tooling",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Integrating AI output monitoring with existing security tools. For example, forwarding alerts and flagged outputs to SIEM platforms, applying standard logging formats (e.g. JSON, syslog) to support automated threat detection workflows."
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
        "guidance": "Enabling user intervention capabilities. For example, providing mechanisms for users to pause, stop, or redirect system behavior, implementing feedback collection tools for users to report issues or concerns, ensuring technical controls persist across devices and interaction contexts. Ensuring accessibility of feedback and intervention mechanisms. For example, adhering to WCAG 2.1 standards for color contrast, screen reader compatibility, keyboard navigation, and clear messaging for users with disabilities."
      },
      {
        "id": "C009.2",
        "title": "Documentation: User feedback & intervention reviews",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Reviewing user feedback and intervention logs regularly. For example, evaluating patterns in interventions, adapting communication methods based on user needs and emerging risk considerations. Analyzing collected feedback using structured methodologies. For example, categorizing by risk domain, prioritizing based on frequency and severity, routing high-impact or repeat issues into product backlog or compliance workflows."
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
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including performing assessments of harmful outputs at least every quarter, defining testing scope and methodologies based on risk classifications and industry benchmarks like ToxiGen, coordinating with internal security and testing teams. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines."
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
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments of out-of-scope outputs at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines."
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
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments of high-risk areas at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines."
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
        "guidance": "Implementing factual accuracy controls. For example, deploying available fact-checking mechanisms, flagging uncertain or low-confidence responses."
      },
      {
        "id": "D001.2",
        "title": "Demonstration: User-facing citations & source attributions",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing information source validation. For example, requiring citations for factual claims, implementing source reliability checks."
      },
      {
        "id": "D001.3",
        "title": "Demonstration: User-facing uncertainty labels",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Maintaining uncertainty communication. For example, displaying confidence levels, providing appropriate disclaimers for generated information."
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
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines."
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
        "guidance": "Implementing function call validation and authorization. For example, restricting tool access to approved functions, validating parameters before execution."
      },
      {
        "id": "D003.2",
        "title": "Config: Rate limits for tools",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Enforcing rate limits and transaction caps for autonomous tool use."
      },
      {
        "id": "D003.3",
        "title": "Config: Tool call log",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Establishing execution monitoring and logging. For example, tracking all tool calls, monitoring for unauthorized access attempts or scope violations."
      },
      {
        "id": "D003.4",
        "title": "Config: Human-approval workflows",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Requiring human approval for sensitive tool operations. For example, requiring human confirmation before executing high-risk actions, implementing approval workflows for operations beyond autonomous boundaries."
      },
      {
        "id": "D003.5",
        "title": "Documentation: tool call log reviews",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Reviewing patterns of AI tool usage. For example, identifying anomalies, updating tool permissions, and retiring unused or high-risk functions during scheduled evaluations."
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
        "guidance": "Appointing qualified third-party assessors. Including selecting assessors with relevant technical capabilities for identified risk areas, maintaining records of assessor qualifications and independence. Conducting regular testing. Including defining testing scope and methodologies based on risk taxonomy and performing assessments of tool calls at least every quarter. Maintaining documentation. Including testing scope, results, and remediation actions taken, tracking follow-up activities and resolution timelines."
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
        "guidance": "Assigning a breach response lead from existing staff. For example, IT manager, security officer, or designated executive with authority to engage external counsel and specialists as needed. Defining breach notification procedures. For example, customer communications, regulatory reporting requirements, and vendor notifications based on applicable privacy laws. Implementing security remediation measures. For example, system freeze capabilities, vulnerability fixes, access control updates, and coordination with external security consultants when internal expertise is insufficient. Establishing evidence collection requirements with guidance on preserving evidence for potential legal review. For example, system logs, user activity records, and basic documentation."
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
        "guidance": "Implementing customer communication protocols. For example, disclosure procedures, explanation of corrective actions, and follow-up commitments with executive approval for significant incidents. Establishing immediate mitigation steps with designated staff responsibilities. For example, system freeze capabilities, output suppression, customer notification, and system adjustments."
      },
      {
        "id": "E002.2",
        "title": "Documentation: Additional harmful output failure procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining harmful output categories with reference to risk taxonomy. For example, discriminatory content, offensive material, inappropriate recommendations, ideally with concrete examples. Coordinating external support engagement. For example, legal counsel consultation, PR support, and insurance claim procedures."
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
        "guidance": "Establishing compensation assessment procedures. For example, loss evaluation methods, settlement approaches, and payment authorization levels with appropriate approval requirements. Implementing remediation measures. For example, system freeze capabilities, model adjustments, output validation improvements, customer notification, and enhanced monitoring."
      },
      {
        "id": "E003.2",
        "title": "Documentation: Additional hallucination failure procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining hallucination incident types. Coordinating potential external support. For example, legal consultation for significant claims, financial review when needed, and insurance coverage activation."
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
        "guidance": "Defining AI system changes requiring approval including model selection, material changes to the meta prompt, adding / removing guardrails, changes to end-user workflow, other changes that drive material performance impact (for example, +/-10% performance on evals). Assigning an accountable lead as approver for each of these changes. Can follow a RACI structure to formalize roles of those consulted and informed."
      },
      {
        "id": "E004.2",
        "title": "Config: Code signing implementation",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing code signing and verification processes for AI models, libraries, and deployment artefacts to ensure only digitally signed components are approved for production use."
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
        "guidance": "Conducting deployment risk assessments. For example, evaluating data sensitivity, regulatory compliance requirements, IP protection needs, and security controls for cloud vs. on-premises AI processing. Documenting decision criteria and rationale. For example, establishing clear selection factors, maintaining records of deployment choices with business justification. Reviewing deployment decisions when requirements change. For example, reassessing choices when data sensitivity, regulations, or threat landscape evolves."
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
        "guidance": "Defining assessment criteria for foundational or upstream AI models. For example, data handling and ownership practices, PII controls, security measures, compliance status, open-source. Conducting documented assessments. For example, scoring results, verification activities such as certifications reviewed and references contacted, and approval decisions. Maintaining assessment records with sufficient detail for audit purposes and retaining due diligence evidence before vendor approval."
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
        "guidance": "Reviewing decision processes every quarter including AI system changes, foundational model selection, security assessment. Maintaining a centralized repository of decision records and internal review of these records. For example, supporting evidence reviewed, remediation plans. Documenting and tracking remediation of any risks identified."
      },
      {
        "id": "E008.2",
        "title": "Documentation: External feedback integration",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Collecting and implementing external feedback on AI systems. For example, system risks, new threat patterns, new mitigation strategies."
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
        "guidance": "Configuring logging for third-party interactions. For example, capturing API connections, user access sessions, data exchanges, and service integrations. Capturing access metadata. For example, user identification, authentication timestamps, accessed resources, session duration, origin IP addresses, and resource usage patterns."
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
        "guidance": "Defining prohibited AI usage for end-users. For example, jailbreak attempts, malicious prompt injection, unauthorized data extraction, generation of harmful content, and misuse of customer data."
      },
      {
        "id": "E010.2",
        "title": "Config: AUP violation detection",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing detection and monitoring tools. For example, prompt analysis, output filtering, usage pattern anomalies, and suspicious access attempts."
      },
      {
        "id": "E010.3",
        "title": "Demonstration: User notification for AUP breaches",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Implementing user feedback when policy is breached. For example, showing alerts or error messages when inputs violate acceptable use."
      },
      {
        "id": "E010.4",
        "title": "Documentation: Guardrails enforcing acceptable use",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Real-time monitoring, blocking, or alerting capabilities. Maintaining logging and tracking systems. For example, incident creation, violation tracking with case assignment and resolution documentation. Conducting regular effectiveness reviews. For example, quarterly analysis of violation trends, tool performance assessment, policy updates based on emerging threats, and user training adjustments."
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
        "guidance": "Maintaining AI infrastructure location documentation. For example, geographic locations of foundation model processing locations and inference endpoint regions."
      },
      {
        "id": "E011.2",
        "title": "Documentation: Data transfer compliance",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing transfer compliance procedures. For example, assessing data transfer requirements for AI training data and inference processing."
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
        "guidance": "Identifying relevant regulations. For example, data protection laws, sector-specific requirements, emerging AI standards. Documenting compliance procedures and strategies."
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
        "guidance": "Defining quality objectives, metrics, and risk management approach for AI systems. For example, establishing performance targets, safety thresholds, risk assessment methodologies."
      },
      {
        "id": "E013.2",
        "title": "Documentation: Change management procedures",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing change management, approval processes, and documentation standards. For example, defining review and approval requirements for AI system changes."
      },
      {
        "id": "E013.3",
        "title": "Config: Issue tracking and monitoring",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing defect tracking, continuous improvement, and post-market monitoring. For example, maintaining issue tracking systems, conducting root cause analysis."
      },
      {
        "id": "E013.4",
        "title": "Documentation: Data management procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Establishing data management and record-keeping systems. For example, documenting data governance procedures, maintaining technical documentation."
      },
      {
        "id": "E013.5",
        "title": "Documentation: Stakeholder communication procedures",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Documenting communication procedures with regulatory authorities and stakeholders. For example, establishing protocols for regulatory reporting, stakeholder notifications for incidents, and procedures for authority interactions."
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
        "guidance": "Capturing system activity details to support incident investigation and behavior explanation. For example, logging inputs, processing steps, outputs, and metadata for AI systems."
      },
      {
        "id": "E015.2",
        "title": "Config: Log storage",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing log storage with appropriate retention periods, access controls, and data sanitation to support auditing and incident response."
      },
      {
        "id": "E015.3",
        "title": "Config: Log integrity protection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Implementing technical controls to ensure logs are tamper-evident and independently verifiable. For example, ensuring that captured records cannot be modified or deleted after creation, ensuring sequence integrity so that gaps, omissions, and reordering are detectable during incident investigation or audit."
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
        "guidance": "Implementing AI disclosure for text-based interactions. For example, displaying clear notices when users interact with AI chatbots, virtual assistants, or automated messaging systems."
      },
      {
        "id": "E016.2",
        "title": "Demonstration: Voice AI disclosure",
        "application": "core",
        "mandatory": true,
        "severity": "high",
        "guidance": "Implementing AI disclosure for voice-based interactions. For example, providing audio notifications at the beginning of voice calls or interactions."
      },
      {
        "id": "E016.3",
        "title": "Demonstration: Labelling AI-generated content",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Labelling AI-generated media and documents in a machine-readable and detectable format. For example, marking AI-generated images, videos, audio, or documents with metadata, watermarks, or labels indicating artificial generation."
      },
      {
        "id": "E016.4",
        "title": "Demonstration: Automation AI disclosure",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Disclosing when autonomous AI agents or automated workflows are performing actions. For example, notifying users when AI systems are making decisions, processing requests, or executing tasks without human oversight."
      },
      {
        "id": "E016.5",
        "title": "Demonstration: System response to AI inquiry",
        "application": "core",
        "mandatory": true,
        "severity": "medium",
        "guidance": "Establishing reactive disclosure capabilities when users ask if they are interacting with AI."
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
        "guidance": "Establishing a transparency policy defining documentation requirements for major AI systems. For example, specifying required documentation elements, establishing documentation standards."
      },
      {
        "id": "E017.2",
        "title": "Documentation: Model cards and system documentation",
        "application": "core",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Creating transparency documentation for major AI systems. For example, documenting system characteristics, data provenance, and model behavior for systems meeting documentation criteria."
      },
      {
        "id": "E017.3",
        "title": "Documentation: Transparency report sharing policy",
        "application": "supplemental",
        "mandatory": false,
        "severity": "medium",
        "guidance": "Defining policies for sharing transparency documentation with external stakeholders. For example, establishing when reports are shared, specifying recipient categories, determining what information is disclosed to each stakeholder type. Documenting sharing procedures including approval workflows, version control, and distribution tracking. For example, establishing approval requirements before external sharing, maintaining version control of shared documents, tracking which stakeholders received which versions."
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
        "guidance": "Results of testing from foundation model developer on offensive cyber capabilities and mitigations."
      },
      {
        "id": "F001.2",
        "title": "Config: Cyber use detection",
        "application": "supplemental",
        "mandatory": false,
        "severity": "high",
        "guidance": "Implementing malicious use detection and blocking. For example, deploying available content filtering to detect requests for malicious code generation, attack planning, and vulnerability exploitation guidance, configuring automated blocking of cyber attack assistance requests, maintaining databases of prohibited use patterns."
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
        "guidance": "Results of testing from foundation model developer on CBRN capabilities and mitigations."
      },
      {
        "id": "F002.2",
        "title": "Config: Catastrophic misuse monitoring",
        "application": "supplemental",
        "mandatory": false,
        "severity": "high",
        "guidance": "Establishing catastrophic misuse monitoring. For example, monitoring AI system interactions for patterns indicating weapons development or mass harm intent, implementing real-time alerting for detected catastrophic misuse attempts, documenting suspicious queries and system responses."
      }
    ]
  }
};
