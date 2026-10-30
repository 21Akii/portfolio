// Contenu français (langue par défaut). Doit avoir exactement la même forme que `en.ts`.
// Les espaces insécables avant : ; ? ! % sont ajoutées automatiquement dans `index.ts`.
import type { Content } from "./en";
import { builds } from "./automations-fr";

export const fr: Content = {
  htmlLang: "fr",
  meta: {
    title: "Nadji & Cherbane | Duo IA et full-stack",
    description:
      "Portfolio de Fares Nadji (ingénieur IA / ML) et Akram Cherbane (développeur full-stack & IA) : segmentation d'images médicales, agents IA et automatisation, et ERP pour le BTP et la distribution de carburant.",
    ogDescription: "Deux ingénieurs, un système complet : les modèles, et le logiciel autour.",
  },
  nav: {
    aria: "Navigation principale",
    duo: "Le duo",
    together: "Ensemble",
    fares: "Fares",
    akram: "Akram",
    practice: "Méthode",
    contact: "Nous contacter",
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre",
    switchLabel: "EN",
    switchAria: "View the site in English",
    switchHref: "/en/",
  },
  hero: {
    eyebrow: "Fares Nadji & Akram Cherbane",
    headA: "Deux ingénieurs. ",
    headAccent: "Un système complet.",
    sub: "Fares construit l'intelligence : modèles, vision par ordinateur et agents IA. Akram construit le logiciel autour : web, mobile et back-office. Ensemble, nous menons un produit du premier jeu de données jusqu'à la production.",
    ctaWork: "Voir nos projets",
    ctaContact: "Nous contacter",
    frameLabel: "ConstraOps, back-office de l'entreprise",
    frameAlt:
      "Tableau de bord ConstraOps avec les marchés en cours, les factures impayées, l'avancement des chantiers avec anneaux de budget et une carte des chantiers actifs",
    phoneAlt:
      "Accueil de l'application terrain ConstraOps avec le chantier du jour, l'avancement, l'équipe et les engins",
    byAkram: "Construit par Akram",
    byFares: "Workflow de Fares",
    flowTitle: "n8n, en direct",
    flowRunning: "En cours",
  },
  tech: { aria: "Technologies que nous utilisons" },
  duo: {
    title: "Deux moitiés d'une même équipe",
    sub: "Même institut, même promotion, deux côtés complémentaires de la technique. Nous avons construit ConstraOps ensemble, et chacun a livré ses propres projets.",
    nowLabel: "Aujourd'hui",
    eduLabel: "Formation",
    focusLabel: "Spécialités",
    people: {
      fares: {
        role: "Ingénieur IA / ML",
        bio: "Je construis les parties d'un système qui apprennent : des modèles de deep learning pour l'imagerie médicale, des agents LLM et des pipelines RAG, et les automatisations qui libèrent les équipes du travail répétitif.",
        now: "AI Automation Specialist chez Window2theWorld LTD, et projets freelance d'automatisation et de développement web.",
        edu: "Licence en informatique, option Intelligence artificielle et systèmes embarqués autonomes, Numidia Institute of Technology, 2025.",
        focus: ["PyTorch", "LLM", "Pipelines RAG", "Vision par ordinateur", "MLOps", "Automatisation"],
      },
      akram: {
        role: "Développeur full-stack & IA",
        bio: "Je conçois, construis et déploie l'application entière : ERP, CRM, RH, finance et stock, sur le web et le mobile, du premier schéma jusqu'à la production.",
        now: "Développeur full-stack et IA freelance depuis octobre 2025.",
        edu: "Licence en informatique, option Intelligence artificielle et systèmes embarqués, Numidia Institute of Technology, 2025.",
        focus: ["Flutter", "Python", "Node.js", "NestJS", "PostgreSQL", "Docker"],
        certs: "Certifications IBM, 2026",
      },
    },
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  work: {
    togetherTitle: "Construit ensemble",
    togetherSub: "Le produit que nous avons cofondé : Akram a construit la plateforme, Fares a façonné le produit et porte son volet IA.",
    faresTitle: "Fares Nadji",
    faresSub: "IA / ML : segmentation d'images médicales, un agent IA de support client, automatisation et sécurité.",
    akramTitle: "Akram Cherbane",
    akramSub: "Full-stack : un ERP de distribution de carburant, une application de sport et un contrôle d'accès par reconnaissance faciale.",
    more: "En cours",
    valueLabel: "Valeur ajoutée",
    creditsLabel: "Qui a fait quoi",
    code: "Code sur GitHub",
  },
  cops: {
    intro:
      "Un ERP pour les entreprises algériennes du BTP, de la préparation des appels d'offres au suivi des chantiers et à la gestion du matériel. Trois produits partagent la même API : le back-office de l'entreprise, une marketplace fournisseurs et une application terrain Flutter qui fonctionne hors ligne. Réalisé comme prototype pour le dossier de labellisation Projet Innovant.",
    credits: [
      { who: "Akram", what: "A construit la plateforme : l'API, le back-office de l'entreprise, la marketplace fournisseurs et l'application terrain Flutter." },
      { who: "Fares", what: "L'a cofondé : a façonné le produit et porte son volet IA, à commencer par la saisie assistée par OCR." },
    ],
    value:
      "Conçu pour réduire les jours de travail manuel d'un dossier d'appel d'offres : les données sont saisies une fois et réutilisées d'un marché à l'autre, les documents sont lus par OCR au lieu d'être ressaisis, les documents officiels comme la G50 sont générés à partir des données, et la direction dispose d'une vue unique des chantiers, du personnel, du matériel et de l'argent.",
    tabsAria: "Écrans web de ConstraOps",
    frameLabel: "Back-office de l'entreprise, données de démonstration",
    shots: [
      {
        id: "dashboard",
        label: "Tableau de bord",
        alt: "Tableau de bord ConstraOps avec les marchés en cours, les factures impayées, l'avancement des chantiers avec anneaux de budget et une carte des chantiers actifs",
        note: "Le tableau de bord : marchés en cours et risques, avancement et budget consommé de chaque chantier, et carte des chantiers actifs.",
      },
      {
        id: "tenders",
        label: "Appels d'offres",
        alt: "Pipeline d'appels d'offres ConstraOps avec neuf appels d'offres, taux de gain et filtres de statut",
        note: "Le pipeline d'appels d'offres : statut, échéance, estimation et taux de gain de chaque consultation.",
      },
      {
        id: "wizard",
        label: "Assistant d'offre",
        alt: "Assistant d'offre en cinq étapes de ConstraOps, à l'étape du cahier des charges",
        note: "Un assistant en cinq étapes mène un appel d'offres du cahier des charges à l'offre générée, puis transforme un marché gagné en chantier.",
      },
      {
        id: "staff",
        label: "Personnel",
        alt: "Liste du personnel ConstraOps avec contrat, chantier, salaire de base et état des documents",
        note: "Le personnel avec contrat, affectation au chantier et état des documents, qui signale les cartes CNAS et visites médicales expirées.",
      },
      {
        id: "equipment",
        label: "Matériel",
        alt: "Parc de matériel ConstraOps avec disponibilité et alerte de maintenance urgente",
        note: "Gestion du matériel : le parc par type et par état, avec les pannes et une alerte pour les maintenances à faire sous sept jours.",
      },
      {
        id: "planning",
        label: "Planning du parc",
        alt: "Diagramme de Gantt mensuel ConstraOps affectant les engins aux chantiers avec leur état opérationnel, en entretien ou en panne",
        note: "Une vue Gantt mensuelle qui affecte chaque engin à un chantier et le colore selon son état.",
      },
      {
        id: "fleet",
        label: "Indicateurs du parc",
        alt: "Tableau de bord du parc ConstraOps avec taux de disponibilité face à l'objectif, maintenance urgente et documents à renouveler",
        note: "La disponibilité face à l'objectif de 80 %, les maintenances urgentes par nombre de jours de retard et les documents bientôt expirés.",
      },
      {
        id: "machine",
        label: "Fiche engin",
        alt: "Fiche d'un bulldozer dans ConstraOps avec heures, consommation, coût d'exploitation, taux d'utilisation et six onglets",
        note: "Une fiche par engin : heures, consommation, coût horaire, utilisation, historique, maintenance, documents et carnet de bord.",
      },
    ],
    ocrTitle: "Saisie assistée par OCR",
    ocrText:
      "Les documents sont lus au lieu d'être ressaisis. Dans une fiche employé, une carte d'identité, un CV, un diplôme, une carte CNAS ou un RIB sont lus un par un et les champs sont remplis. Dans un appel d'offres, un bordereau vierge (PDF, Excel ou image) est importé et ses lignes, avec désignation, unité et quantité, arrivent dans le DQE modifiable, prêtes à être chiffrées.",
    ocrNote:
      "Dans ce prototype, l'extraction s'exécute sur des données d'exemple. La lecture de vrais documents par un moteur OCR est prévue dans la feuille de route.",
    ocrCaptions: {
      employee: "Fiche employé : champs lus à partir d'une carte d'identité.",
      dqe: "Appel d'offres : lignes importées depuis un bordereau vierge.",
    },
    ocrAlts: {
      employee:
        "Formulaire de nouvel employé de ConstraOps après la lecture d'une carte d'identité, avec prénom, nom et wilaya remplis",
      dqe: "Éditeur de DQE de ConstraOps avec huit lignes importées par OCR, affichant désignation, unité et quantité",
    },
    fieldTitle: "Application terrain",
    fieldText:
      "Un compagnon Flutter pour le chef de chantier : tâches du jour, pointage, incidents, demandes de matériel ou d'engins et liste du matériel du chantier. Une file hors ligne se synchronise au retour du réseau.",
    phoneAlts: {
      home: "Accueil de l'application terrain ConstraOps avec le chantier du jour, l'avancement, l'équipe et les engins",
      site: "Page chantier de l'application terrain ConstraOps avec avancement, équipe, matériel et stock",
      equipment:
        "Liste du matériel dans l'application terrain ConstraOps, groupée par engins en panne, en entretien et opérationnels",
    },
    complianceTitle: "Conformité algérienne et langues",
    complianceText:
      "Formulaires fiscaux G50 officiels remplis à partir des données, avec les déclarations de TVA et de TAP. L'interface est en français et l'arabe est utilisé sur les documents officiels, comme le prévoit le cahier des charges.",
    equipTitle: "Gestion du matériel",
    equipText:
      "Le parc d'engins avec son état, un planning d'affectation en Gantt, la disponibilité face à un objectif, la maintenance préventive et curative, les documents à renouveler et une fiche par engin avec historique et coûts.",
    statLabel: "modèles de données, tous isolés par organisation",
    accessTitle: "Rôles et permissions",
    accessP1:
      "12 rôles intégrés et 46 permissions réparties sur trois espaces : le back-office de l'entreprise, un portail client et la marketplace fournisseurs. Les accès d'un utilisateur sont les droits par défaut de son rôle, plus les permissions qui lui sont accordées individuellement, et les administrateurs peuvent définir des rôles personnalisés.",
    accessP2:
      "L'API dispose de gardes pour les rôles, la formule d'abonnement et les modules sous licence, et un journal d'audit enregistre qui a fait quoi, quand, depuis quelle IP, avec les valeurs avant et après.",
    groupCompany: "Entreprise",
    groupClient: "Portail client",
    groupSupplier: "Fournisseur",
    rolesCompany: [
      "Super admin",
      "Admin",
      "Directeur",
      "Chef de projet",
      "Chef de chantier",
      "Comptable",
      "RH",
      "Bureau d'études",
    ],
    rolesClient: ["Client externe"],
    rolesSupplier: ["Fournisseur", "Admin fournisseur", "Super admin fournisseur"],
    footnote: "Déployé sur un VPS derrière Traefik. Le code source est dans un dépôt privé.",
  },
  trg: {
    intro:
      "Un ERP et CRM pour une entreprise algérienne de distribution de carburant. Les répartiteurs planifient les livraisons, les niveaux de cuves sont rapprochés, le parc de matériel et ses documents bientôt expirés sont suivis, la caisse et les incidents de sécurité sont consignés, et les chauffeurs signalent les problèmes depuis une application Flutter. L'interface existe en français, en anglais et en arabe.",
    value:
      "Un seul système pour toute l'exploitation : le dirigeant voit sur un seul écran quels camions roulent, quelles livraisons sont à risque et quels clients doivent de l'argent, tandis que le stock de carburant, les documents du parc, la caisse et les incidents de sécurité sont tenus au même endroit.",
    tabsAria: "Écrans web de TRG",
    frameLabel: "Back-office, données de démonstration",
    shots: [
      {
        id: "dashboard",
        label: "Tableau de bord",
        alt: "Tableau de bord TRG avec actions rapides, camions en route, livraisons du jour, taux de service, chiffre d'affaires mensuel et carte en temps réel",
        note: "Le tableau de bord : actions rapides, camions en route, taux de service, chiffre d'affaires du mois, carte en temps réel et livraisons à risque.",
      },
      {
        id: "deliveries",
        label: "Livraisons",
        alt: "Liste des livraisons TRG avec onglets de statut, produit, camion, chauffeur et quantité",
        note: "Les livraisons par statut, avec le client, le produit, le camion, le chauffeur et la quantité de chaque mission.",
      },
      {
        id: "fuel",
        label: "Cuves",
        alt: "Écran des cuves de carburant TRG avec trois cuves, leurs niveaux de remplissage et leurs dernières dates de remplissage",
        note: "Cuves de carburant : niveaux en direct, capacité et dernier remplissage de chaque cuve.",
      },
      {
        id: "equipment",
        label: "Matériel",
        alt: "Parc de matériel TRG avec semi-remorques et remorques, révisions à venir et documents bientôt expirés",
        note: "Gestion du matériel : semi-remorques et remorques, révisions à venir et documents bientôt expirés.",
      },
      {
        id: "vehicle",
        label: "Fiche véhicule",
        alt: "Fiche véhicule TRG avec état, kilométrage, prochain entretien, coûts cumulés, documents et plan d'entretien",
        note: "Une fiche par véhicule : état, kilométrage par rapport à l'intervalle d'entretien, coûts cumulés, documents et plan d'entretien.",
      },
      {
        id: "parts",
        label: "Stock pièces",
        alt: "Écran de stock interne TRG listant pièces et outillage avec quantités et seuils de réapprovisionnement",
        note: "Stock d'atelier : pièces et outillage avec quantités et seuils de réapprovisionnement.",
      },
      {
        id: "safety",
        label: "Sécurité",
        alt: "Écran sécurité TRG avec nombre d'incidents, répartition par gravité et journal des incidents",
        note: "Sécurité : incidents par gravité, formations réalisées et journal des incidents.",
      },
      {
        id: "cash",
        label: "Caisse",
        alt: "Livre de caisse TRG avec solde, entrées et sorties sur 30 jours et formulaire de nouveau mouvement",
        note: "Livre de caisse : solde, entrées et sorties, et un formulaire pour chaque mouvement.",
      },
      {
        id: "arabic",
        label: "Arabe",
        alt: "Tableau de bord TRG en arabe, mis en page de droite à gauche avec le menu à droite",
        note: "Le même tableau de bord en arabe, mis en page de droite à gauche avec le menu à droite.",
      },
    ],
    driverTitle: "Application chauffeur",
    driverText:
      "Missions, alertes de maintenance et un signalement de problème en un geste qui prévient le responsable HSE.",
    phoneAlts: {
      incident:
        "Fiche de signalement de l'application chauffeur TRG pour une panne, un retard, un accident ou une fuite",
      notifications: "Boîte de réception de l'application chauffeur TRG avec alertes de maintenance et d'expiration de documents",
    },
    langTitle: "Trois langues",
    langText:
      "Français, anglais et arabe, avec une mise en page de droite à gauche, dans l'application web comme dans l'application chauffeur.",
    equipTitle: "Gestion du matériel",
    equipText:
      "Semi-remorques et remorques avec documents et alertes d'expiration, plan d'entretien et coûts par véhicule, et stock d'atelier de pièces et d'outillage avec seuils de réapprovisionnement.",
    statLabel: "rôles, une seule matrice de permissions partagée par l'API et l'application web",
    accessTitle: "Rôles et permissions",
    accessP1:
      "Sept rôles partagent une seule matrice de permissions, écrite une fois dans un paquet partagé. L'API l'applique, et l'application web reprend les mêmes règles pour masquer les actions qu'un utilisateur ne peut pas faire. Les chauffeurs ne touchent qu'à leurs propres livraisons.",
    accessP2:
      "Les administrateurs peuvent enregistrer des préréglages de rôle, un rôle de base plus des permissions supplémentaires, et les appliquer à la création d'un utilisateur. Les écrans d'administration couvrent les utilisateurs, les rôles et le journal d'audit, et un déclencheur en base enregistre les modifications.",
    roles: [
      { role: "Admin", can: "Tout" },
      { role: "Direction", can: "Lecture seule sur toute la plateforme" },
      { role: "Répartiteur", can: "Planifie et modifie les livraisons" },
      { role: "Comptable", can: "Factures, paiements et clients" },
      { role: "Chauffeur", can: "Ses livraisons, listes de contrôle sécurité, signalements d'incidents" },
      { role: "Responsable HSE", can: "Incidents et listes de contrôle sécurité" },
      { role: "Mécanicien", can: "Maintenance, pièces et mouvements de stock" },
    ],
    footnote: "Version de démonstration sur données fictives. Le code source est dans un dépôt privé.",
  },
  gym: {
    title: "weGym",
    lead: "Un projet personnel : un suivi de sport, de nutrition et de récupération auto-hébergé, qu'on installe sur son propre serveur et qu'on utilise comme une application sur son téléphone.",
    body: "Construit sur openGym de Duarte Santos (AGPL-3.0). Mes ajouts : nutrition et préparation des repas, suivi de la récupération, anneaux d'objectifs sur l'écran d'accueil, un fil de recettes partagées et une visite guidée de toute l'application.",
    value:
      "Vos données d'entraînement et de nutrition restent sur votre propre serveur : pas de compte chez un tiers, pas d'abonnement et pas de publicité, mais une installation sur le téléphone comme une application classique, un fonctionnement hors ligne et une synchronisation entre appareils.",
    phoneAlts: {
      plan: "Écran du planning hebdomadaire de weGym",
      workout: "Séance guidée de weGym avec suivi des séries et minuteur de repos",
      stats: "Écran de statistiques de weGym avec carte de chaleur, graphiques et records personnels",
    },
  },
  attendify: {
    tag: "Mémoire de licence, Numidia Institute of Technology, 2024-2025",
    lead: "Un contrôle d'accès qui reconnaît les visages en temps réel, réalisé avec Chakib Younsi. YOLOv8 détecte le visage, un réseau convolutif conçu par nos soins l'identifie, et tout s'exécute sur la machine locale : aucune donnée biométrique brute ne quitte l'appareil.",
    body: "Les administrateurs enregistrent les personnes, attribuent salles et niveaux d'accès, configurent le flux caméra et reçoivent des alertes depuis un tableau de bord de bureau.",
    facts: [
      { value: "<2 s", label: "par cycle de reconnaissance" },
      { value: "87 %", label: "de précision en validation, tests préliminaires" },
      { value: "6", label: "couches dans le réseau convolutif sur mesure" },
    ],
    value:
      "Un contrôle d'accès rapide et respectueux de la vie privée : les visages sont reconnus sur la machine locale en moins de deux secondes, donc aucune donnée biométrique brute ne quitte l'appareil, et un seul tableau de bord gère les personnes, les salles et les alertes.",
    frameLabel: "Attendify, tableau de bord d'administration",
    roomsAlt: "Tableau de bord des salles d'Attendify listant les salles surveillées avec une tuile d'ajout",
    addAlt: "Formulaire d'Attendify pour enregistrer une nouvelle personne avec son rôle et son niveau d'accès",
  },
  mamba: {
    tag: "Mémoire de licence, Numidia Institute of Technology, 2024-2025, avec Nemdil Amira et Benziada Moncef",
    lead: "Un modèle d'IA pour les cardiologues qui délimite le ventricule gauche sur les images d'échocardiographie. Ce contour sert à calculer la fraction d'éjection, l'une des mesures clés pour détecter une maladie cardiaque.",
    body: "Nous avons d'abord reproduit cinq architectures de référence à partir de leurs articles, sur le jeu de données CAMUS : UNet, DeepLabV3, nnU-Net, GUDU et TransUNet. Puis nous avons remplacé l'encodeur Transformer de TransUNet par des couches à espace d'états Mamba : une nouvelle architecture qui garde la précision pour une fraction du coût.",
    value:
      "Une segmentation assez légère pour tourner sur l'échographe ou un appareil mobile plutôt que sur un serveur GPU : 94 % plus petite et presque deux fois plus rapide que TransUNet, avec une fraction d'éjection à 1,4 point près.",
    highlights: [
      { value: "-94 %", label: "de taille de modèle" },
      { value: "1,8×", label: "plus rapide par image" },
    ],
    tableTitle: "TransUNet face à Mamba-TransUNet",
    colMetric: "Mesure",
    rows: [
      { metric: "Taille du modèle", before: "2,37 Go", after: "131 Mo" },
      { metric: "Inférence par image", before: "0,336 s", after: "0,186 s" },
      { metric: "Durée d'entraînement", before: "14 h", after: "10 h" },
      { metric: "Score Dice", before: "0,951", after: "0,935" },
      { metric: "Fraction d'éjection", before: "56,8 %", after: "55,4 %" },
    ],
    archLabel: "Architecture : encodeur CNN, 8 couches Mamba, décodeur",
    archAlt:
      "Architecture de Mamba-TransUNet : une image d'échocardiographie passe par un encodeur CNN, huit couches Mamba, puis un décodeur avec connexions résiduelles qui produit le masque du ventricule gauche",
  },
  support: {
    title: "Agent IA de support client",
    tag: "Window2theWorld LTD, AI Automation Specialist",
    text: "Mon projet le plus marquant dans mon poste actuel : un agent IA qui travaille aux côtés de l'équipe de support client.",
    stat: "-66 %",
    statLabel: "de temps de traitement par ticket",
  },
  ddos: {
    title: "Atténuation DDoS par IA",
    tag: "Stage, ministère des Finances, Algérie. Réalisé en un mois",
    text: "Un serveur syslog reçoit les journaux de trafic FortiGate, transforme chaque connexion en caractéristiques (durée, octets envoyés et reçus, port) et lui attribue un score avec un modèle de détection d'anomalies Isolation Forest. Un simulateur rejoue du trafic normal et des rafales DDoS pour le tester.",
  },
  automations: {
    title: "Automatisations de processus",
    tag: "Freelance, Make.com puis n8n",
    text: "33 automatisations en production qui retirent le travail répétitif des équipes, du premier prospect à la facture payée. Chacune a d'abord tourné sur Make.com, puis a été reconstruite sur n8n en 2026, avec Claude pour lire et rédiger. En voici huit, dessinées à partir de leurs vrais graphes de nœuds.",
    results: [
      { value: "80 k$+", label: "économisés dans trois éditeurs de logiciels, grâce à l'automatisation du support et aux agents IA" },
      { value: "15 h", label: "gagnées chaque semaine dans chacune de ces trois entreprises" },
      { value: "12 h", label: "gagnées chaque semaine pour une agence SEO, grâce au reporting automatisé" },
    ],
    listAria: "Choisir une automatisation",
    outcomeLabel: "Ce qu'elle produit",
    scrollHint: "Faites défiler le graphe sur le côté",
    categories: {
      "lead-gen": "Prospection",
      onboarding: "Onboarding client",
      sales: "Vente",
      content: "Contenu",
      ops: "Opérations",
    },
    families: { trigger: "Déclencheur", ai: "Modèle", data: "Données", out: "Envoi", logic: "Logique", http: "API" },
    edgeLabels: {
      true: "oui",
      false: "non",
      Hourly: "À l'heure",
      "Fixed price": "Prix fixe",
      Project: "Au projet",
      Salaried: "Forfait",
      "Long-form": "Article long",
    },
    builds,
  },
  more: {
    crm: {
      title: "CRM production et distribution",
      text: "En cours, par Akram. Point de départ : l'infrastructure PostgreSQL.",
    },
  },
  practice: {
    title: "Notre façon de construire",
    sub: "Des habitudes présentes dans les projets ci-dessus.",
    items: [
      {
        title: "Partir des données",
        body: "Les schémas sont conçus en premier, avec Prisma et PostgreSQL. Dans ConstraOps, chaque ligne métier appartient à une organisation : un seul déploiement peut servir plusieurs entreprises sans que leurs données se mélangent.",
      },
      {
        title: "Reproduire avant d'améliorer",
        body: "Mamba-TransUNet a commencé par la reconstruction de cinq architectures publiées sur un même jeu de données, jusqu'à retrouver leurs scores. Ce n'est qu'ensuite que nous avons modifié l'architecture : chaque gain se mesure face à une référence fiable.",
      },
      {
        title: "Une application par utilisateur",
        body: "ConstraOps propose le back-office de l'entreprise, la marketplace fournisseurs et le téléphone du chef de chantier comme trois produits distincts sur une même API, plutôt qu'une seule interface dont la moitié des boutons est masquée.",
      },
      {
        title: "Contrôler l'accès là où sont les données",
        body: "Masquer un bouton n'est pas de la sécurité. ConstraOps place des gardes de rôle, de formule et de module dans l'API, et TRG définit une matrice de permissions par rôle que l'API applique et que l'application web réutilise.",
      },
      {
        title: "Automatiser la partie répétitive",
        body: "Si quelqu'un recopie chaque jour les mêmes données entre les mêmes outils, cela devient un workflow : factures, recrutement, onboarding et tickets de support sont pris en charge par des automatisations et des agents, et les équipes gardent les décisions.",
      },
      {
        title: "Livrer, et garder des notes",
        body: "Docker Compose, un reverse proxy, des sauvegardes et un journal de déploiement. ConstraOps tourne sur un VPS, les étapes pour le reconstruire sont écrites, et le cahier des charges est venu en premier.",
      },
    ],
  },
  contact: {
    heading: "Un système à construire ?",
    text: "Dites-nous sur quoi repose votre entreprise aujourd'hui et ce qui la ralentit. Écrivez à l'un de nous, ou aux deux.",
    ctaFares: "Écrire à Fares",
    ctaAkram: "Contacter Akram",
    linkedin: "Fares sur LinkedIn",
  },
  footer: { copyright: "© 2026 Fares Nadji & Akram Cherbane", top: "Retour en haut" },
};
