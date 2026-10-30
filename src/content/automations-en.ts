// One entry per workflow, in the same order as src/lib/workflows.ts. `nodes` are the node names, by index.
export const builds = [
  {
    "title": "Local Business Cold Email Engine",
    "tagline": "Scrapes local businesses, finds a verified inbox, writes the opener, queues the draft.",
    "outcome": "A queue of ready-to-send drafts, each addressed to a verified inbox and opened with a line about that specific business.",
    "metrics": [
      "50+ verified leads/hour",
      "Zero manual list building"
    ],
    "nodes": [
      "Every morning",
      "Run Google Maps scraper",
      "Pull scraped businesses",
      "Has a website?",
      "Find verified email",
      "Email found?",
      "Write the opener",
      "Queue Gmail draft"
    ]
  },
  {
    "title": "Upwork Job Radar & Icebreaker Generator",
    "tagline": "Watches new postings, scores them against your ICP, and drafts the opening line.",
    "outcome": "Qualified postings land in a dashboard, split by hourly vs fixed-price, budget parsed, opener already written.",
    "metrics": [
      "10+ hours/week recovered",
      "First-mover on new posts"
    ],
    "nodes": [
      "Poll for new postings",
      "Strip the HTML",
      "Matches ICP?",
      "Parse the budget",
      "Hourly or fixed?",
      "Shape hourly record",
      "Write the opener",
      "Add to Airtable",
      "Shape project record",
      "Write the opener",
      "Add to Airtable"
    ]
  },
  {
    "title": "Stripe → ClickUp Client Onboarding",
    "tagline": "Payment clears, the client's whole workspace builds itself.",
    "outcome": "Payment lands and the client has a named dashboard, provisioned access and a welcome email before anyone opens a laptop.",
    "metrics": [
      "90% faster onboarding",
      "Zero configuration errors"
    ],
    "nodes": [
      "Payment succeeds",
      "Fetch the customer",
      "Duplicate the dashboard",
      "Rename to the client",
      "Send welcome + access"
    ]
  },
  {
    "title": "Discovery Call → Proposal Generator",
    "tagline": "Notes from the call become a costed proposal with milestones, sent for signature.",
    "outcome": "Structured proposal with scoped deliverables and a milestone timeline, generated from the call notes and sent out for signature the same hour.",
    "metrics": [
      "80% faster proposals",
      "Consistent scope and pricing"
    ],
    "nodes": [
      "Discovery notes submitted",
      "Send a proposal?",
      "Draft scope and pricing",
      "Generate milestones",
      "Create the document",
      "Send for signature"
    ]
  },
  {
    "title": "Multi-Platform Content Syndication",
    "tagline": "One article, five platforms, each version written for that platform's rules.",
    "outcome": "Native-feeling posts on Facebook, X, LinkedIn and Instagram plus the long-form article, from a single source record.",
    "metrics": [
      "10x faster distribution",
      "Platform-native every time"
    ],
    "nodes": [
      "Article marked ready",
      "Write each platform version",
      "Fetch the media",
      "Which platform?",
      "Post to Facebook Page",
      "Post to Instagram",
      "Post to LinkedIn",
      "Upload media",
      "Post to X",
      "Write the article",
      "Publish to Ghost"
    ]
  },
  {
    "title": "YouTube Content Factory",
    "tagline": "One video, one run: outline, script, and native posts for five platforms, each in its own doc.",
    "outcome": "A folder per video containing the outline, the script, and platform-native posts for Instagram, X, Facebook and LinkedIn.",
    "metrics": [
      "24/7 content engine",
      "5 platforms per video"
    ],
    "nodes": [
      "Scraper run finished",
      "Pull video data",
      "Assemble the transcript",
      "Build the outline",
      "Write the script",
      "Create the video folder",
      "Loop each platform",
      "Write the platform post",
      "Save as a doc",
      "Log in the tracker"
    ]
  },
  {
    "title": "Invoice Parser → Google Sheets",
    "tagline": "Invoices land, get read, get validated, and appear in the books as clean rows.",
    "outcome": "Vendor, dates, line items and totals extracted, validated, deduped and written to the books automatically.",
    "metrics": [
      "5-10 hours/week saved",
      "99% extraction accuracy"
    ],
    "nodes": [
      "Invoice arrives",
      "Take the attachment",
      "Read the invoice",
      "Check for a duplicate",
      "New invoice?",
      "Write to the books",
      "Flag as duplicate"
    ]
  },
  {
    "title": "Contractor Payroll Automation",
    "tagline": "Hourly, project-based and salaried contractors, all invoiced from one run.",
    "outcome": "One run reads the tracker, works out what each contractor is owed under their own model, and generates the invoices.",
    "metrics": [
      "5-25 hours/month saved",
      "100% calculation accuracy"
    ],
    "nodes": [
      "On payroll day",
      "List active contractors",
      "Which pay model?",
      "Pull time entries",
      "Rate × hours",
      "Total the period",
      "Generate the invoice",
      "Pull completed milestones",
      "Build line items",
      "Total the period",
      "Generate the invoice",
      "Apply the flat rate",
      "Generate the invoice"
    ]
  },
];
