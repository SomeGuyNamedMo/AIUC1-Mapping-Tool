"use strict";

/* ============================================================
   RECOMMENDATION RULES — generated from source framework YAML
   Run `ruby scripts/generate-data.rb` after framework changes.
   ============================================================ */

const RECOMMENDATION_RULES_DETAIL = [
  {
    "id": "eu-jurisdiction",
    "description": "Users in the EU trigger EU AI Act assessment",
    "when": {
      "q_jurisdictions_includes": "EU"
    },
    "recommends": [
      "eu-ai-act"
    ]
  },
  {
    "id": "california-sb-53",
    "description": "California users trigger SB 53 (frontier AI transparency)",
    "when": {
      "q_jurisdictions_includes": "US-California"
    },
    "recommends": [
      "california-sb-53"
    ]
  },
  {
    "id": "colorado-ai-act",
    "description": "Colorado users trigger the Colorado AI Act",
    "when": {
      "q_jurisdictions_includes": "US-Colorado"
    },
    "recommends": [
      "colorado-ai-act"
    ]
  },
  {
    "id": "nyc-employment",
    "description": "NYC users + employment-decision use cases trigger Local Law 144",
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
    "description": "Apps facing children trigger child-safety frameworks",
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
    "description": "Healthcare data or healthcare-patient audience triggers HIPAA",
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
    "description": "Finance audience or financial data triggers FCRA + FTC AI guidance",
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
    "description": "Housing data or housing-related decisions trigger the Fair Housing Act",
    "when": {
      "q_data_categories_includes": "housing decisions"
    },
    "recommends": [
      "fha"
    ]
  }
];
