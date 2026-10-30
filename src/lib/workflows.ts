// Generated from automation-portfolio/src/catalogue.json. Node shape only; the words live in the content files.
export type Family = "trigger" | "ai" | "data" | "out" | "logic" | "http";

export type Workflow = {
  slug: string;
  category: "lead-gen" | "onboarding" | "sales" | "content" | "ops";
  stack: string[];
  cols: number;
  rows: number;
  // [family, column, row], in node order
  nodes: [Family, number, number][];
  // [from, to, branch label]
  edges: ([number, number] | [number, number, string])[];
};

export const workflows: Workflow[] = [
  {
    slug: "restaurant-cold-email",
    category: "lead-gen",
    stack: ["n8n", "Apify Google Maps", "Findymail", "Claude Sonnet 5", "Gmail"],
    cols: 8,
    rows: 1,
    nodes: [["trigger", 0, 0], ["http", 1, 0], ["http", 2, 0], ["logic", 3, 0], ["http", 4, 0], ["logic", 5, 0], ["ai", 6, 0], ["out", 7, 0]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4, "true"], [4, 5], [5, 6, "true"], [6, 7]],
  },
  {
    slug: "upwork-job-radar",
    category: "lead-gen",
    stack: ["n8n", "Apify Upwork scraper", "Claude Sonnet 5", "Airtable"],
    cols: 8,
    rows: 2,
    nodes: [["http", 0, 0], ["logic", 1, 0], ["logic", 2, 0], ["logic", 3, 0], ["logic", 4, 0], ["logic", 5, 0], ["ai", 6, 0], ["data", 7, 0], ["logic", 5, 1], ["ai", 6, 1], ["data", 7, 1]],
    edges: [[0, 1], [1, 2], [2, 3, "true"], [3, 4], [4, 5, "Hourly"], [5, 6], [6, 7], [4, 8, "Fixed price"], [8, 9], [9, 10]],
  },
  {
    slug: "stripe-clickup-onboarding",
    category: "onboarding",
    stack: ["n8n", "Stripe", "ClickUp API", "Gmail"],
    cols: 5,
    rows: 1,
    nodes: [["trigger", 0, 0], ["data", 1, 0], ["data", 2, 0], ["data", 3, 0], ["out", 4, 0]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4]],
  },
  {
    slug: "proposal-generator",
    category: "sales",
    stack: ["n8n", "n8n Form Trigger", "Claude Sonnet 5", "PandaDoc"],
    cols: 6,
    rows: 1,
    nodes: [["trigger", 0, 0], ["logic", 1, 0], ["ai", 2, 0], ["ai", 3, 0], ["http", 4, 0], ["http", 5, 0]],
    edges: [[0, 1], [1, 2, "true"], [2, 3], [3, 4], [4, 5]],
  },
  {
    slug: "content-syndication",
    category: "content",
    stack: ["n8n", "Airtable", "Claude Sonnet 5", "Facebook", "X", "LinkedIn", "Instagram", "Ghost"],
    cols: 6,
    rows: 5,
    nodes: [["data", 0, 0], ["ai", 1, 0], ["http", 2, 0], ["logic", 3, 0], ["out", 4, 0], ["http", 4, 1], ["out", 4, 2], ["out", 4, 3], ["out", 5, 3], ["ai", 4, 4], ["http", 5, 4]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4, "Facebook"], [3, 5, "Instagram"], [3, 6, "LinkedIn"], [3, 7, "X"], [7, 8], [3, 9, "Long-form"], [9, 10]],
  },
  {
    slug: "youtube-content-factory",
    category: "content",
    stack: ["n8n", "Apify YouTube", "Claude Sonnet 5", "Google Drive", "Google Docs"],
    cols: 10,
    rows: 1,
    nodes: [["http", 0, 0], ["http", 1, 0], ["logic", 2, 0], ["ai", 3, 0], ["ai", 4, 0], ["data", 5, 0], ["logic", 6, 0], ["ai", 7, 0], ["data", 8, 0], ["data", 9, 0]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
  {
    slug: "invoice-parser",
    category: "ops",
    stack: ["n8n", "Claude Sonnet 5 vision", "Google Sheets"],
    cols: 6,
    rows: 2,
    nodes: [["trigger", 0, 0], ["logic", 1, 0], ["ai", 2, 0], ["data", 3, 0], ["logic", 4, 0], ["data", 5, 0], ["data", 5, 1]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5, "true"], [4, 6, "false"]],
  },
  {
    slug: "contractor-payroll",
    category: "ops",
    stack: ["n8n", "ClickUp", "Google Docs"],
    cols: 7,
    rows: 3,
    nodes: [["trigger", 0, 0], ["data", 1, 0], ["logic", 2, 0], ["data", 3, 0], ["logic", 4, 0], ["logic", 5, 0], ["data", 6, 0], ["data", 3, 1], ["logic", 4, 1], ["logic", 5, 1], ["data", 6, 1], ["logic", 3, 2], ["data", 4, 2]],
    edges: [[0, 1], [1, 2], [2, 3, "Hourly"], [3, 4], [4, 5], [5, 6], [2, 7, "Project"], [7, 8], [8, 9], [9, 10], [2, 11, "Salaried"], [11, 12]],
  },
];
