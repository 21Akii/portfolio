// English content. The `Content` type is derived from this file; `fr.ts` must match it exactly.
export const en = {
  htmlLang: "en",
  meta: {
    title: "Akram Cherbane | Full-stack & AI developer",
    description:
      "Portfolio of Akram Cherbane, a freelance full-stack and AI developer: ERP platforms for construction and fuel distribution, a fitness app, and a face recognition access system.",
    ogDescription: "Business software built end to end: web, mobile, back office and AI.",
  },
  nav: {
    aria: "Primary",
    work: "Work",
    practice: "Practice",
    about: "About",
    contact: "Contact me",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    switchLabel: "FR",
    switchAria: "Voir le site en français",
    switchHref: "/",
  },
  hero: {
    eyebrow: "Akram Cherbane, freelance developer",
    headA: "Business software, built ",
    headAccent: "end to end.",
    sub: "Full-stack and AI engineer building web, mobile and back-office systems for real companies.",
    ctaWork: "See my work",
    ctaContact: "Contact me",
    frameLabel: "ConstraOps, company back office",
    frameAlt:
      "ConstraOps dashboard with open contracts, unpaid invoices, site progress with budget rings and a map of active sites",
    phoneAlt: "ConstraOps field app home with the site of the day, progress, team and machines",
  },
  tech: { aria: "Technologies I work with" },
  work: {
    title: "Selected work",
    sub: "Construction and fuel-distribution platforms, a fitness app, and the AI projects from my degree.",
    more: "More projects",
    valueLabel: "Added value",
  },
  cops: {
    intro:
      "An ERP for Algerian construction companies, from tender preparation to site tracking and equipment management. Three products share one API: the company back office, a supplier marketplace and an offline-capable Flutter field app. Built as the label prototype for the national Projet Innovant application, co-founded with Fares Nadji.",
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
  more: {
    health: {
      tag: "Team project of five, Numidia Institute of Technology",
      p1: "A symptom-based diagnosis chatbot. The Flutter app has sign-in and a chat with separate conversations. The model behind it is a bagged ensemble of random forests over TF-IDF features, which reached 84% accuracy on its test set.",
      p2: "The model was trained and evaluated separately and is described in our paper and requirements specification. In the app's repository the chat is still an interface without the model connected.",
      value:
        "A first orientation for the general public: from a few symptoms, a probable diagnosis, an explanation and, when needed, a pointer to emergency care. It supports a visit to a doctor and does not replace one.",
      alts: {
        login: "HealthMate sign-in screen with email and password fields on a teal gradient",
        chat: "HealthMate chat screen with a message field on a blue gradient",
        drawer: "HealthMate conversation drawer listing separate conversations and a button to start a new one",
      },
    },
    crm: {
      title: "Production and distribution CRM",
      text: "In progress. Starting from the PostgreSQL infrastructure.",
    },
  },
  practice: {
    title: "How I build",
    sub: "Habits that show up in every project above.",
    items: [
      {
        title: "Start from the data",
        body: "Schemas are designed first, in Prisma and PostgreSQL. In ConstraOps every business row belongs to an organisation, so one deployment can serve many companies without their data ever mixing.",
      },
      {
        title: "Give each user their own app",
        body: "ConstraOps serves the company back office, the supplier marketplace and the site worker's phone as three separate products on one API, instead of one interface with half the buttons hidden.",
      },
      {
        title: "Enforce access where the data lives",
        body: "Hiding a button is not security. ConstraOps puts role, plan and module guards in the API, and TRG writes one role-based permission matrix that the API enforces and the web app reuses to show only what a user may do.",
      },
      {
        title: "Work without a signal",
        body: "Site workers are not always online. The ConstraOps field app keeps an offline queue and syncs it when the connection comes back.",
      },
      {
        title: "Write it down before building it",
        body: "Requirements specifications and data-model documents come first. ConstraOps and HealthMate both started from a written SRS, and the ConstraOps data model is documented table by table.",
      },
      {
        title: "Ship it, and keep notes",
        body: "Docker Compose, a reverse proxy, backups and a deployment log. ConstraOps runs on a VPS, and the steps to rebuild it are written down.",
      },
    ],
  },
  about: {
    heading: "I design, build and deploy the whole system.",
    p1: "Since October 2025 I have worked as a freelance full-stack and AI developer, building web and mobile applications and custom management software: ERP, CRM, HR, finance and stock. On the AI side that means RAG systems, model fine-tuning, computer vision and automation.",
    p2: "I work with Flutter, Python, Node.js, NestJS, PostgreSQL and Docker, from the first schema to production. I hold a Bachelor's degree in Computer Science, option Artificial Intelligence and Embedded Systems, from the Numidia Institute of Technology.",
    certs: "IBM certifications, 2026",
  },
  contact: {
    heading: "Have a system that needs building?",
    text: "Tell me what your company runs on today and what is slowing it down.",
    cta: "Contact me",
    github: "GitHub",
  },
  footer: { copyright: "© 2026 Akram Cherbane", top: "Back to top" },
};

export type Content = typeof en;
