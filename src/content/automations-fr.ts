// Une entrée par workflow, dans le même ordre que src/lib/workflows.ts. `nodes` sont les noms des nœuds, par index.
export const builds = [
  {
    title: "Prospection locale par e-mail",
    tagline: "Récupère les commerces locaux, trouve une adresse vérifiée, écrit l'accroche et prépare le brouillon.",
    outcome: "Une file de brouillons prêts à partir, chacun adressé à une boîte vérifiée et ouvert par une phrase sur ce commerce précis.",
    metrics: ["50+ leads vérifiés par heure", "Aucune liste montée à la main"],
    nodes: ["Chaque matin", "Lancer le scraper Google Maps", "Récupérer les commerces", "A un site web ?", "Trouver l'e-mail vérifié", "E-mail trouvé ?", "Écrire l'accroche", "Créer le brouillon Gmail"],
  },
  {
    title: "Veille de missions Upwork et accroches",
    tagline: "Surveille les nouvelles annonces, les note selon le client idéal et rédige la première phrase.",
    outcome: "Les annonces qualifiées arrivent dans un tableau de bord, séparées entre taux horaire et prix fixe, budget extrait, accroche déjà écrite.",
    metrics: ["10+ heures par semaine récupérées", "Premier sur les nouvelles annonces"],
    nodes: ["Chercher les nouvelles annonces", "Retirer le HTML", "Correspond au client idéal ?", "Extraire le budget", "Horaire ou fixe ?", "Préparer la fiche horaire", "Écrire l'accroche", "Ajouter à Airtable", "Préparer la fiche projet", "Écrire l'accroche", "Ajouter à Airtable"],
  },
  {
    title: "Onboarding client Stripe → ClickUp",
    tagline: "Le paiement passe et tout l'espace de travail du client se crée tout seul.",
    outcome: "Le paiement arrive et le client a son tableau de bord à son nom, ses accès et un e-mail de bienvenue avant que quiconque ouvre son ordinateur.",
    metrics: ["Onboarding 90 % plus rapide", "Zéro erreur de configuration"],
    nodes: ["Paiement réussi", "Récupérer le client", "Dupliquer le tableau de bord", "Le renommer au client", "Envoyer bienvenue et accès"],
  },
  {
    title: "Appel de découverte → proposition commerciale",
    tagline: "Les notes de l'appel deviennent une proposition chiffrée avec jalons, envoyée pour signature.",
    outcome: "Une proposition structurée, livrables cadrés et calendrier de jalons, générée à partir des notes d'appel et envoyée pour signature dans l'heure.",
    metrics: ["Propositions 80 % plus rapides", "Périmètre et prix cohérents"],
    nodes: ["Notes de découverte envoyées", "Envoyer une proposition ?", "Rédiger périmètre et prix", "Générer les jalons", "Créer le document", "Envoyer pour signature"],
  },
  {
    title: "Diffusion multiplateforme",
    tagline: "Un article, cinq plateformes, chaque version écrite selon les règles de sa plateforme.",
    outcome: "Des posts naturels sur Facebook, X, LinkedIn et Instagram, plus l'article long, à partir d'une seule fiche source.",
    metrics: ["Diffusion 10× plus rapide", "Adapté à chaque plateforme"],
    nodes: ["Article marqué prêt", "Écrire chaque version", "Récupérer les médias", "Quelle plateforme ?", "Publier sur la page Facebook", "Publier sur Instagram", "Publier sur LinkedIn", "Envoyer le média", "Publier sur X", "Écrire l'article", "Publier sur Ghost"],
  },
  {
    title: "Usine à contenu YouTube",
    tagline: "Une vidéo, une exécution : plan, script et posts adaptés à cinq plateformes, chacun dans son document.",
    outcome: "Un dossier par vidéo avec le plan, le script et des posts adaptés à Instagram, X, Facebook et LinkedIn.",
    metrics: ["Production de contenu 24 h/24", "5 plateformes par vidéo"],
    nodes: ["Scraper terminé", "Récupérer les données vidéo", "Assembler la transcription", "Construire le plan", "Écrire le script", "Créer le dossier vidéo", "Boucler sur chaque plateforme", "Écrire le post", "L'enregistrer en document", "Noter dans le suivi"],
  },
  {
    title: "Lecture de factures → Google Sheets",
    tagline: "Les factures arrivent, sont lues, vérifiées, puis apparaissent dans les comptes en lignes propres.",
    outcome: "Fournisseur, dates, lignes et totaux extraits, vérifiés, dédoublonnés et écrits dans les comptes automatiquement.",
    metrics: ["5 à 10 heures par semaine gagnées", "99 % d'extraction exacte"],
    nodes: ["La facture arrive", "Prendre la pièce jointe", "Lire la facture", "Chercher un doublon", "Nouvelle facture ?", "Écrire dans les comptes", "Signaler le doublon"],
  },
  {
    title: "Paie des prestataires",
    tagline: "Prestataires à l'heure, au projet ou au forfait, tous facturés en une seule exécution.",
    outcome: "Une exécution lit le suivi, calcule ce que chaque prestataire doit recevoir selon son propre mode de paiement et génère les factures.",
    metrics: ["5 à 25 heures par mois gagnées", "100 % de calculs exacts"],
    nodes: ["Le jour de paie", "Lister les prestataires actifs", "Quel mode de paiement ?", "Récupérer les heures", "Taux × heures", "Total de la période", "Générer la facture", "Récupérer les jalons terminés", "Construire les lignes", "Total de la période", "Générer la facture", "Appliquer le forfait", "Générer la facture"],
  },
];
