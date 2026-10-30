import { builds } from "./automations-en";

// English content. The `Content` type is derived from this file; `fr.ts` must match it exactly.
export const en = {
  htmlLang: "en",
  meta: {
    title: "Nadji & Cherbane | AI and full-stack duo",
    description:
      "Portfolio of Fares Nadji (AI / ML engineer) and Akram Cherbane (full-stack & AI developer): medical image segmentation, AI agents and automation, and ERP platforms for construction and fuel distribution.",
    ogDescription: "Two engineers, one whole system: the models, and the software around them.",
  },
  nav: {
    aria: "Primary",
    duo: "The duo",
    together: "Together",
    fares: "Fares",
    akram: "Akram",
    practice: "Practice",
    contact: "Contact us",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    switchLabel: "FR",
    switchAria: "Voir le site en français",
    switchHref: "/",
  },
  hero: {
    eyebrow: "Fares Nadji & Akram Cherbane",
    headA: "Two engineers. ",
    headAccent: "One whole system.",
    sub: "Fares builds the intelligence: models, computer vision and AI agents. Akram builds the software around it: web, mobile and back office. Together we take a product from the first dataset to production.",
    ctaWork: "See our work",
    ctaContact: "Contact us",
    frameLabel: "ConstraOps, company back office",
    frameAlt:
      "ConstraOps dashboard with open contracts, unpaid invoices, site progress with budget rings and a map of active sites",
    phoneAlt: "ConstraOps field app home with the site of the day, progress, team and machines",
    byAkram: "Built by Akram",
    byFares: "Workflow by Fares",
    flowTitle: "n8n, live run",
    flowRunning: "Running",
  },
  tech: { aria: "Technologies we work with" },
  duo: {
    title: "Two halves of one team",
    sub: "Same institute, same graduating year, complementary sides of the stack. We built ConstraOps together, and each of us has shipped our own work.",
    nowLabel: "Now",
    eduLabel: "Education",
    focusLabel: "Focus",
    people: {
      fares: {
        role: "AI / ML engineer",
        bio: "I build the parts of a system that learn: deep learning models for medical imaging, LLM agents and RAG pipelines, and the automations that take repetitive work off people.",
        now: "AI Automation Specialist at Window2theWorld LTD, and freelance automation and web projects.",
        edu: "Bachelor's in Computer Science, option Artificial Intelligence and Autonomous Embedded Systems, Numidia Institute of Technology, 2025.",
        focus: ["PyTorch", "LLMs", "RAG pipelines", "Computer vision", "MLOps", "Automation"],
      },
      akram: {
        role: "Full-stack & AI developer",
        bio: "I design, build and deploy the whole application: ERP, CRM, HR, finance and stock software, web and mobile, from the first schema to production.",
        now: "Freelance full-stack and AI developer since October 2025.",
        edu: "Bachelor's in Computer Science, option Artificial Intelligence and Embedded Systems, Numidia Institute of Technology, 2025.",
        focus: ["Flutter", "Python", "Node.js", "NestJS", "PostgreSQL", "Docker"],
        certs: "IBM certifications, 2026",
      },
    },
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  work: {
    togetherTitle: "Built together",
    togetherSub: "The product we co-founded: Akram built the platform, Fares shaped the product and owns its AI side.",
    faresTitle: "Fares Nadji",
    faresSub: "AI / ML: medical image segmentation, an AI support agent, automation and security.",
    akramTitle: "Akram Cherbane",
    akramSub: "Full-stack: a fuel-distribution ERP, a fitness app and a face recognition access system.",
    more: "In progress",
    valueLabel: "Added value",
    creditsLabel: "Who did what",
    code: "Code on GitHub",
  },
  cops: {
    intro:
      "An ERP for Algerian construction companies, from tender preparation to site tracking and equipment management. Three products share one API: the company back office, a supplier marketplace and an offline-capable Flutter field app. Built as the label prototype for the national Projet Innovant application.",
    credits: [
      { who: "Akram", what: "Built the platform: the API, the company back office, the supplier marketplace and the Flutter field app." },
      { who: "Fares", what: "Co-founded it: shaped the product and owns its AI side, starting with OCR-assisted data entry." },
    ],
    value:
      "Built to cut the days of manual work behind a tender dossier: data is entered once and reused from one tender to the next, documents are read by OCR instead of retyped, official documents such as the G50 are generated from the data, and management gets one view of sites, staff, machines and money.",
    tabsAria: "ConstraOps web screens",
    frameLabel: "Company back office, demo data",
    shots: [
      {
        id: "dashboard",
        label: "Dashboard",
        alt: "ConstraOps dashboard with open contracts, unpaid invoices, site progress with budget rings and a map of active sites",
        note: "The dashboard: open contracts and risks, progress and budget used on every site, and a map of active sites.",
      },
      {
        id: "tenders",
        label: "Tenders",
        alt: "ConstraOps tender pipeline with nine tenders, win rate and status filters",
        note: "The tender pipeline: status, deadline, estimate and win rate for every call for tenders.",
      },
      {
        id: "wizard",
        label: "Tender wizard",
        alt: "ConstraOps five-step tender wizard on the specification step",
        note: "A five-step wizard takes a tender from the specification to the generated offer, and turns a won bid into a site.",
      },
      {
        id: "staff",
        label: "Staff",
        alt: "ConstraOps staff list with contract type, site, base salary and document status",
        note: "Staff with contract, site assignment and document status, flagging expired CNAS cards and medical visits.",
      },
      {
        id: "equipment",
        label: "Equipment",
        alt: "ConstraOps equipment fleet with availability and urgent maintenance alert",
        note: "Equipment management: the fleet by type and status, with breakdowns and an alert for maintenance due within seven days.",
      },
      {
        id: "planning",
        label: "Fleet planning",
        alt: "ConstraOps monthly Gantt chart assigning machines to sites with operational, maintenance and breakdown status",
        note: "A monthly Gantt view that assigns every machine to a site and colours it by status.",
      },
      {
        id: "fleet",
        label: "Fleet indicators",
        alt: "ConstraOps fleet dashboard with availability rate against target, urgent maintenance and documents to renew",
        note: "Availability against the 80% target, urgent maintenance by days overdue, and documents about to expire.",
      },
      {
        id: "machine",
        label: "Machine file",
        alt: "ConstraOps machine file for a bulldozer with hours, consumption, operating cost, utilisation and six tabs",
        note: "One file per machine: hours, consumption, cost per hour, utilisation, history, maintenance, documents and logbook.",
      },
    ],
    ocrTitle: "OCR-assisted data entry",
    ocrText:
      "Documents are read instead of retyped. In an employee file, an ID card, CV, diploma, CNAS card or bank details are read one at a time and the fields are filled in. In a tender, a blank bill of quantities (PDF, Excel or image) is imported and its lines, with designation, unit and quantity, land in the editable DQE for pricing.",
    ocrNote:
      "In this prototype the extraction runs on sample data. Reading real documents with an OCR engine is on the roadmap.",
    ocrCaptions: {
      employee: "Employee file: fields read from an ID card.",
      dqe: "Tender: lines imported from a blank bill of quantities.",
    },
    ocrAlts: {
      employee:
        "ConstraOps new employee form after an ID card was read, with first name, last name and wilaya filled in",
      dqe: "ConstraOps bill of quantities editor with eight lines imported by OCR, showing designation, unit and quantity",
    },
    fieldTitle: "Field app",
    fieldText:
      "A Flutter companion for the site foreman: the day's tasks, attendance, incidents, requests for materials or machines, and the site's equipment list. An offline queue syncs when the signal returns.",
    phoneAlts: {
      home: "ConstraOps field app home with the site of the day, progress, team and machines",
      site: "ConstraOps field app site page with progress, team, equipment and stock",
      equipment: "ConstraOps field app equipment list grouped by breakdown, maintenance and operational",
    },
    complianceTitle: "Algerian compliance and languages",
    complianceText:
      "Official G50 tax forms filled in from the data, with VAT and TAP declarations alongside. The interface is in French and Arabic is used on the official documents, as the requirements specification sets out.",
    equipTitle: "Equipment management",
    equipText:
      "The machine fleet with status, a Gantt planning of assignments, availability against a target, preventive and corrective maintenance, documents to renew, and a file per machine with history and costs.",
    statLabel: "data models, every one isolated per organisation",
    accessTitle: "Roles and permissions",
    accessP1:
      "12 built-in roles and 46 permissions across three workspaces: the company back office, a client portal and the supplier marketplace. A user's access is their role's defaults plus any permissions granted to them individually, and admins can define custom roles.",
    accessP2:
      "The API has guards for roles, the subscription plan and licensed modules, and an audit log records who did what, when, from which IP, with the values before and after.",
    groupCompany: "Company",
    groupClient: "Client portal",
    groupSupplier: "Supplier",
    rolesCompany: [
      "Super admin",
      "Admin",
      "Director",
      "Project manager",
      "Site manager",
      "Accountant",
      "HR",
      "Design office",
    ],
    rolesClient: ["External client"],
    rolesSupplier: ["Supplier", "Supplier admin", "Supplier super admin"],
    footnote: "Deployed on a VPS behind Traefik. The source is in a private repository.",
  },
  trg: {
    intro:
      "An ERP and CRM for an Algerian fuel-distribution company. Dispatchers plan deliveries, tank levels are reconciled, the equipment fleet and its expiring documents are tracked, the cash book and safety incidents are logged, and drivers report problems from a Flutter app. The interface comes in French, English and Arabic.",
    value:
      "One system for the whole operation: the owner sees on one screen which trucks are rolling, which deliveries are at risk and which customers owe money, while fuel stock, fleet documents, cash and safety incidents are kept in the same place.",
    tabsAria: "TRG web screens",
    frameLabel: "Back office, seeded demo data",
    shots: [
      {
        id: "dashboard",
        label: "Dashboard",
        alt: "TRG dashboard with quick actions, trucks on the road, deliveries today, service rate, monthly revenue and a live map",
        note: "The dashboard: quick actions, trucks on the road, service rate, monthly revenue, a live map and the deliveries at risk.",
      },
      {
        id: "deliveries",
        label: "Deliveries",
        alt: "TRG deliveries list with status tabs, product, truck, driver and quantity",
        note: "Deliveries by status, with the customer, product, truck, driver and quantity for each mission.",
      },
      {
        id: "fuel",
        label: "Fuel tanks",
        alt: "TRG fuel tanks screen with three tanks, fill levels and last refill dates",
        note: "Fuel tanks: live levels, capacity and the last refill for each tank.",
      },
      {
        id: "equipment",
        label: "Equipment",
        alt: "TRG equipment fleet with tractor units and trailers, upcoming services and expiring documents",
        note: "Equipment management: tractor units and trailers, services coming up and documents about to expire.",
      },
      {
        id: "vehicle",
        label: "Vehicle file",
        alt: "TRG vehicle file with status, mileage, next service, cumulative costs, documents and maintenance plan",
        note: "One file per vehicle: status, mileage against the service interval, cumulative costs, documents and the maintenance plan.",
      },
      {
        id: "parts",
        label: "Parts stock",
        alt: "TRG internal stock screen listing parts and tools with quantities and reorder thresholds",
        note: "Workshop stock: parts and tools with quantities and reorder thresholds.",
      },
      {
        id: "safety",
        label: "Safety",
        alt: "TRG safety screen with incident counts, severity breakdown and the incident log",
        note: "Safety: incidents by severity, training completed and the incident log.",
      },
      {
        id: "cash",
        label: "Cash book",
        alt: "TRG cash book with cash balance, money in and out over 30 days and a form for a new movement",
        note: "Cash book: balance, money in and out, and a form for every movement.",
      },
      {
        id: "arabic",
        label: "Arabic",
        alt: "TRG dashboard in Arabic with a right-to-left layout and the menu on the right",
        note: "The same dashboard in Arabic, laid out right to left with the menu on the right.",
      },
    ],
    driverTitle: "Driver app",
    driverText: "Missions, maintenance alerts and a one-tap problem report that notifies the HSE manager.",
    phoneAlts: {
      incident: "TRG driver app sheet for reporting a breakdown, delay, accident or leak",
      notifications: "TRG driver app inbox with maintenance and document expiry alerts",
    },
    langTitle: "Three languages",
    langText:
      "French, English and Arabic, with a right-to-left layout, in the web app as well as the driver app.",
    equipTitle: "Equipment management",
    equipText:
      "Tractor units and trailers with documents and expiry alerts, a maintenance plan and costs per vehicle, and workshop stock of parts and tools with reorder thresholds.",
    statLabel: "roles, one permission matrix shared by the API and the web app",
    accessTitle: "Roles and permissions",
    accessP1:
      "Seven roles share one permission matrix, written once in a shared package. The API enforces it, and the web app uses the same rules to hide actions a user cannot take. Drivers only touch their own deliveries.",
    accessP2:
      "Admins can save role presets, a base role plus extra permissions, and apply them when creating a user. Admin screens cover users, roles and the audit log, and a database trigger records changes.",
    roles: [
      { role: "Admin", can: "Everything" },
      { role: "Boss", can: "Read-only across the whole platform" },
      { role: "Dispatcher", can: "Plans and edits deliveries" },
      { role: "Accountant", can: "Invoices, payments and clients" },
      { role: "Driver", can: "Own deliveries, safety checklists, incident reports" },
      { role: "HSE officer", can: "Incidents and safety checklists" },
      { role: "Mechanic", can: "Maintenance, parts and stock movements" },
    ],
    footnote: "Demo build running on seeded data. The source is in a private repository.",
  },
  gym: {
    title: "weGym",
    lead: "A personal project: a self-hosted gym, nutrition and recovery tracker you install on your own server, and use as an app on your phone.",
    body: "Built on openGym by Duarte Santos (AGPL-3.0). My additions are nutrition and meal prep, recovery tracking, goal rings on the home screen, a shared recipe feed and a guided tour of the whole app.",
    value:
      "Your training and nutrition data stays on your own server: no account on someone else's platform, no subscription and no ads, yet it installs on the phone like a normal app, works offline and syncs across devices.",
    phoneAlts: {
      plan: "weGym weekly plan screen",
      workout: "weGym guided workout with set tracking and rest timer",
      stats: "weGym stats screen with heatmap, charts and personal records",
    },
  },
  attendify: {
    tag: "Bachelor's thesis, Numidia Institute of Technology, 2024-2025",
    lead: "Access control that recognises faces in real time, built with Chakib Younsi. YOLOv8 finds the face, a convolutional network of our own identifies it, and everything runs on the local machine, so no raw biometric data leaves the device.",
    body: "Administrators register people, assign rooms and access levels, configure the camera stream and receive alerts from a desktop dashboard.",
    facts: [
      { value: "<2s", label: "per recognition cycle" },
      { value: "87%", label: "validation accuracy, preliminary tests" },
      { value: "6", label: "layers in the custom convolutional backbone" },
    ],
    value:
      "Fast, privacy-preserving access control: faces are recognised on the local machine in under two seconds, so no raw biometric data leaves the device, and one dashboard manages people, rooms and alerts.",
    frameLabel: "Attendify, admin dashboard",
    roomsAlt: "Attendify rooms dashboard listing monitored rooms with an add room tile",
    addAlt: "Attendify form for registering a new person with role and access level",
  },
  mamba: {
    tag: "Bachelor's dissertation, Numidia Institute of Technology, 2024-2025, with Nemdil Amira and Benziada Moncef",
    lead: "An AI model for cardiologists that outlines the left ventricle on echocardiography frames. That outline is what the ejection fraction is computed from, one of the key measures for detecting heart disease.",
    body: "We first replicated five reference architectures from their papers on the CAMUS dataset: UNet, DeepLabV3, nnU-Net, GUDU and TransUNet. Then we replaced TransUNet's Transformer encoder with Mamba state-space layers, a new architecture that keeps the accuracy at a fraction of the cost.",
    value:
      "Segmentation light enough for the ultrasound machine or a mobile device rather than a GPU server: 94% smaller and almost twice as fast as TransUNet, with an ejection fraction within 1.4 points.",
    highlights: [
      { value: "-94%", label: "model size" },
      { value: "1.8×", label: "faster per frame" },
    ],
    tableTitle: "TransUNet against Mamba-TransUNet",
    colMetric: "Measure",
    rows: [
      { metric: "Model size", before: "2.37 GB", after: "131 MB" },
      { metric: "Inference per frame", before: "0.336 s", after: "0.186 s" },
      { metric: "Training time", before: "14 h", after: "10 h" },
      { metric: "Dice score", before: "0.951", after: "0.935" },
      { metric: "Ejection fraction", before: "56.8%", after: "55.4%" },
    ],
    archLabel: "Architecture: CNN encoder, 8 Mamba layers, upsampling decoder",
    archAlt:
      "Mamba-TransUNet architecture: an echocardiography frame goes through a CNN encoder, eight Mamba layers, then a decoder with skip connections that outputs the left ventricle mask",
  },
  support: {
    title: "Customer-support AI agent",
    tag: "Window2theWorld LTD, AI Automation Specialist",
    text: "My most impactful build in my current role: an AI agent working alongside the customer-support team.",
    stat: "-66%",
    statLabel: "ticket handling time",
  },
  ddos: {
    title: "AI DDoS mitigation",
    tag: "Internship, Ministry of Finance, Algeria. Built in one month",
    text: "A syslog server receives FortiGate traffic logs, turns each connection into features (duration, bytes sent and received, port) and scores it with an Isolation Forest anomaly model. A traffic simulator replays normal traffic and DDoS bursts to test it.",
  },
  automations: {
    title: "Workflow automations",
    tag: "Freelance, Make.com then n8n",
    text: "33 production automations that take repetitive work off people, from the first lead to the paid invoice. Each one ran on Make.com first and was rebuilt on n8n in 2026, with Claude doing the reading and the writing. Eight of them are below, drawn from their real node graphs.",
    results: [
      { value: "$80k+", label: "saved across three software companies, with support automation and AI agents" },
      { value: "15 h", label: "saved every week at each of those three companies" },
      { value: "12 h", label: "saved every week for an SEO agency, with automated reporting" },
    ],
    listAria: "Choose an automation",
    outcomeLabel: "What it produces",
    scrollHint: "Scroll the graph sideways",
    categories: {
      "lead-gen": "Lead generation",
      onboarding: "Client onboarding",
      sales: "Sales",
      content: "Content",
      ops: "Operations",
    },
    families: { trigger: "Trigger", ai: "Model", data: "Data", out: "Send", logic: "Logic", http: "API" },
    edgeLabels: {
      true: "yes",
      false: "no",
      Hourly: "Hourly",
      "Fixed price": "Fixed price",
      Project: "Project",
      Salaried: "Salaried",
      "Long-form": "Long-form",
    },
    builds,
  },
  more: {
    crm: {
      title: "Production and distribution CRM",
      text: "In progress, by Akram. Starting from the PostgreSQL infrastructure.",
    },
  },
  practice: {
    title: "How we build",
    sub: "Habits that show up in the projects above.",
    items: [
      {
        title: "Start from the data",
        body: "Schemas are designed first, in Prisma and PostgreSQL. In ConstraOps every business row belongs to an organisation, so one deployment can serve many companies without their data ever mixing.",
      },
      {
        title: "Reproduce before you improve",
        body: "Mamba-TransUNet started by rebuilding five published architectures on one dataset and matching their reported scores. Only then did we change the design, so every gain is measured against a baseline we trust.",
      },
      {
        title: "Give each user their own app",
        body: "ConstraOps serves the company back office, the supplier marketplace and the site worker's phone as three separate products on one API, instead of one interface with half the buttons hidden.",
      },
      {
        title: "Enforce access where the data lives",
        body: "Hiding a button is not security. ConstraOps puts role, plan and module guards in the API, and TRG writes one role-based permission matrix that the API enforces and the web app reuses.",
      },
      {
        title: "Automate the repetitive part",
        body: "If a person copies the same data between the same tools every day, it becomes a workflow: invoices, hiring, onboarding and support tickets are handled by automations and agents, and people keep the decisions.",
      },
      {
        title: "Ship it, and keep notes",
        body: "Docker Compose, a reverse proxy, backups and a deployment log. ConstraOps runs on a VPS, the steps to rebuild it are written down, and the requirements came first in a written SRS.",
      },
    ],
  },
  contact: {
    heading: "Have a system that needs building?",
    text: "Tell us what your company runs on today and what is slowing it down. Write to one of us, or to both.",
    ctaFares: "Email Fares",
    ctaAkram: "Contact Akram",
    linkedin: "Fares on LinkedIn",
  },
  footer: { copyright: "© 2026 Fares Nadji & Akram Cherbane", top: "Back to top" },
};

export type Content = typeof en;
