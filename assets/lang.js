(function () {

    // 1. Thème (sombre par défaut)
  var savedTheme = localStorage.getItem('ncg-theme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;
  }

  // 2. Dictionnaire de traduction Français
  const FR = {
    // --- Navigation générale ---
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.notes': 'Notes',
    'nav.about': 'À propos',

    // --- Page d'accueil : Hero ---
    'hero.label': 'Analyste Fonctionnelle',
    'hero.title': 'Je cartographie les frictions, supprime l\'inutile et conçois des flux qui tiennent.',
    'hero.sub': '3 ans d\'expérience ERP entre les équipes métier et techniques — SAP S/4HANA Public Cloud et Odoo. J\'analyse pourquoi les systèmes sont contournés et je conçois des flux adoptés dès le premier jour.',
    'hero.cta1': 'Voir les projets',
    'hero.cta2': 'Mon parcours',

    // --- Page d'accueil : Statistiques ---
    'stat.years': 'ans ERP',
    'stat.erp': 'écosystèmes',
    'stat.markets': 'marchés',
    'stat.projects': 'projets',

    // --- Page d'accueil : Sections ---
    'section.projects': 'Projets & Études de cas',
    'section.notes.title': 'Notes & Réflexions',
    'section.notes.sub': 'Courts articles sur la conception de processus, les systèmes et la réduction des frictions.',

    // --- Cartes de projets pro (Accueil & Hub) ---
    'card1.label': 'Étude de cas',
    'card1.title': 'O2C sans détour : standardiser SAP SD pour une équipe B2B',
    'card1.desc': 'Cartographier et corriger un processus de commandes défaillant lors d\'une implémentation SAP S/4HANA greenfield.',

    'card5.label': 'Étude de cas',
    'card5.title': 'Odoo : trois outils déconnectés, un flux cohérent',
    'card5.desc': 'Implémentation Ventes, Stocks et Comptabilité pour une PME belge — et résolution du conflit de stock sur-engagé.',

    'card3.label': 'Concept UX',
    'card3.title': 'Google Agenda : repenser le modèle d\'interaction',
    'card3.desc': 'Glisser pour sélectionner, cliquer pour créer — appliquer les standards du bureau à la planification d\'agenda.',

    'card4.label': 'Concept UX',
    'card4.title': 'SNCB : savoir où descendre avant d\'arriver',
    'card4.desc': 'Afficher le quai d\'arrivée et la porte de sortie avant d\'atteindre les gares de correspondance.',

    'card6.label': 'Design pédagogique',
    'card6.title': 'De l\'expert à l\'enseignant : structurer un cours qui tient',
    'card6.desc': 'Transformer un savoir tacite en cours modulaire et scalable avec cartographie des prérequis.',

    // --- Cartes d'articles / Notes (Accueil & Blog) ---
    'soon1.label': 'Concept SAP',
    'soon1.title': 'Available-to-Promise en Order-to-Cash',
    'soon1.desc': 'Pourquoi confirmer une date sans vérifier le stock réel crée des problèmes en cascade.',

    'soon5.label': 'Concept produit',
    'soon5.title': 'Sessions de focus liées à votre calendrier',
    'soon5.desc': 'Un minuteur type Pomodoro qui s\'adapte à vos catégories de vie pour un meilleur équilibre.',

    'soon3.label': 'Analyse de données',
    'soon3.title': 'Données publiques → recommandation',
    'soon3.desc': 'D\'un jeu de données ouvertes à une décision concrète pour un décideur.',

    'soon4.label': 'Teardown UX',
    'soon4.title': 'Critique structurée d\'une appli',
    'soon4.desc': '3 points de friction identifiés, 1 solution argumentée avec métriques d\'impact.',

    // --- Page À propos (About) ---
    'about.label': 'À propos',
    'about.h1': 'Qui je suis',
    'about.intro': 'Analyste fonctionnelle avec 3 ans d\'expérience entre SAP S/4HANA et Odoo. Je fais le pont entre les besoins des équipes métier et la réalité des systèmes techniques — en commençant toujours par écouter où le flux casse.',
    'about.drives.h': 'Ce qui m\'anime',
    'about.drives': 'Je construis pour résoudre, pas pour impressionner. Quand je vois une équipe commerciale contourner un système six fois par jour, ce n\'est pas de l\'incompétence : c\'est le signe que le processus a été mal conçu dès le départ. J\'aime transformer ces frictions invisibles en flux fluides que les équipes choisissent d\'utiliser parce qu\'ils facilitent réellement leur quotidien.',
    'about.three.years': 'Trois ans dans deux mondes ERP différents m\'ont appris une chose : la technologie est rarement le point de blocage. C\'est la conversation. Comprendre le travail réel (et non celui de l\'organigramme), localiser précisément les frottements et démontrer l\'intérêt du standard pour qu\'il devienne plus attractif que les contournements manuels.',
    'about.approach.h': 'Mon approche',
    'about.ap1': 'Fit-to-standard d\'abord — éprouver les besoins face au standard SAP ou Odoo avant d\'envisager un développement spécifique.',
    'about.ap2': 'Cartographie BPMN AS-IS / TO-BE systématique — pour que chacun, profil technique ou métier, partage la même vision.',
    'about.ap3': 'Traduction bidirectionnelle — faire dialoguer le métier et l\'IT sans déperdition de nuance.',
    'about.parcours.h': 'Parcours',
    'about.p1title': 'Analyste fonctionnelle, Odoo — Grand-Rosière, Belgique · 2025–2026',
    'about.p1': 'Implémentations ERP pour PME internationales : cadrage des besoins, gap analysis et configuration (Ventes, Stocks, Comptabilité, Site web). Accompagnement aux migrations et résolution de problèmes fonctionnels par analyse de cause racine.',
    'about.p2title': 'Business Analyst SAP S/4HANA, Deloitte — Bruxelles & Oslo · 2023–2025',
    'about.p2': 'Membre de l\'équipe SD sur une implémentation greenfield SAP S/4HANA Public Cloud pour une scale-up tech norvégienne. Périmètre Order-to-Cash complet, intégrations e-commerce/3PL, migration des données de base, UAT et conduite du changement.',
    'about.skills.h': 'Compétences',
    'about.contact.h': 'Me contacter',
    'about.contact.text': 'Pour échanger sur un projet ou une opportunité : ',
    'about.contact.link': 'mon profil LinkedIn',
    'about.contact.or': ' ou ',

    // --- Projet 1 : Étude de cas SAP O2C ---
    'p1.label': 'Étude de cas',
    'p1.h1': 'O2C sans détour : standardiser SAP SD pour une équipe B2B',
    'p1.sub': 'Cartographier et corriger un processus de commandes défaillant lors d\'une implémentation SAP S/4HANA Public Cloud greenfield.',
    'p1.role': 'Rôle',
    'p1.role.v': 'Business Analyst SAP SD',
    'p1.context': 'Contexte',
    'p1.context.v': 'Scale-up tech, e-commerce hardware',
    'p1.duration': 'Durée',
    'p1.duration.v': '18 mois (Go-live + déploiement)',
    'p1.tools': 'Outils',
    'p1.tools.v': 'SAP S/4HANA Public Cloud, Jira, Confluence, Visio',
    'p1.s1': 'Contexte',
    'p1.s1.body': 'Implémentation greenfield SAP S/4HANA Public Cloud pour une scale-up technologique nordique. L\'équipe Ventes B2B gérait des comptes stratégiques avec commandes sur mesure, remises négociées et délais spécifiques. Parties prenantes : Sales Operations, Customer Success, Finance et consultants Deloitte.',
    'p1.s2': 'Problème',
    'p1.s2.body': 'Les commandes B2B étaient gérées entièrement hors SAP, par emails et tableurs. Aucune commande client (Sales Order) n\'était enregistrée avant expédition. Conséquences : pas de contrôle de crédit, pas de validation des prix, aucune visibilité sur le statut, facturation parfois oubliée et aucune piste d\'audit.',
    'p1.s3': 'Analyse',
    'p1.s3.body': 'Ateliers fit-gap avec Sales Operations et Customer Success. Cartographie AS-IS de la demande client jusqu\'à la livraison. Écarts identifiés : absence de Sales Order systématique, contrôle de crédit manuel ou inexistant, conditions tarifaires appliquées de mémoire.',
    'p1.s4': 'Processus AS-IS',
    'p1.s5': 'Solution proposée',
    'p1.s5.b1': 'Adoption du flux standard SAP O2C : Devis → Commande client → Contrôle de crédit → Livraison → Sortie marchandises → Facturation → Paiement.',
    'p1.s5.b2': 'Configuration des conditions tarifaires (remises B2B par client et produit) directement dans SAP.',
    'p1.s5.b3': 'Mise en place de la gestion des avoirs et notes de débit pour les ajustements post-facturation.',
    'p1.s5.b4': 'Documentation des processus et formation des utilisateurs-clés Sales Operations et Customer Success.',
    'p1.s6': 'Processus TO-BE (Standard SAP)',
    'p1.s7': 'Résultat',
    'p1.s7.body': 'Traçabilité complète de bout en bout dans SAP. Validation automatique des remises via les fiches de prix. Blocage automatique des comptes dépassant leur limite de crédit. Consultation du statut de commande en direct par le Customer Success sans solliciter les commerciaux.',
    'p1.s8': 'Ce que j\'en retiens',
    'p1.s8.body': 'La technique ne représentait qu\'une petite partie de l\'enjeu : le vrai défi était la conduite du changement. Il a fallu écouter les besoins réels derrière les contournements manuels, prouver que le standard apportait visibilité et sérénité, puis accompagner l\'équipe pas à pas jusqu\'à ce que la nouvelle habitude s\'installe.',

    // --- Projet 5 : Étude de cas Odoo ---
    'p5.label': 'Étude de cas',
    'p5.h1': 'Odoo : trois outils déconnectés, un flux cohérent',
    'p5.sub': 'Implémenter Ventes, Stocks et Comptabilité pour une PME belge — et amener l\'équipe commerciale à adopter la réservation de stock automatique.',
    'p5.role': 'Rôle',
    'p5.role.v': 'Analyste fonctionnelle Odoo',
    'p5.context': 'Contexte',
    'p5.context.v': 'PME belge B2B, clients BE/FR/NL',
    'p5.duration': 'Durée',
    'p5.duration.v': '~6 mois (implémentation + hypercare)',
    'p5.tools': 'Outils',
    'p5.tools.v': 'Odoo 17, Jira, Confluence, Excel',
    'p5.s1': 'Contexte',
    'p5.s1.body': 'Entreprise belge d\'une vingtaine de collaborateurs vendant du matériel technique en Belgique, France et Pays-Bas. Avant le projet : QuickBooks pour la compta, un tableur partagé pour le stock et les commandes, un CRM isolé. La réconciliation manuelle permanente était devenue un frein critique à la croissance.',
    'p5.s2': 'Problème',
    'p5.s2.body': 'La liaison ventes-entrepôt était manuelle : le commercial confirmait un devis sur papier, mettait à jour le fichier Excel et envoyait un email. Sans contrôle automatisé, plusieurs commandes pouvaient réserver les mêmes pièces, causant des ruptures découvertes au moment de l\'emballage.',
    'p5.s2.b2': 'La facturation souffrait également : les factures étaient recréées manuellement dans QuickBooks parfois plusieurs jours après livraison, avec des oublis réguliers sur les remises promises.',
    'p5.s3': 'Analyse',
    'p5.s4': 'Processus AS-IS',
    'p5.s5': 'Solution proposée',
    'p5.s5.b1': 'Flux Odoo standardisé : Devis → Bon de commande → Réservation automatique du stock → Bon de livraison → Facturation en un clic → Rapprochement bancaire.',
    'p5.s5.b2': 'Mise en place de règles de réapprovisionnement automatique pour les pièces critiques.',
    'p5.s5.b3': 'Synchronisation bancaire avec règles de lettrage automatique par montant et partenaire.',
    'p5.s5.b4': 'Guides de procédures et formation personnalisée des équipes vente, entrepôt et comptabilité.',
    'p5.s6': 'Processus TO-BE (Standard Odoo)',
    'p5.decision.h': 'Deux décisions expliquées',
    'p5.s7': 'Résultat',
    'p5.s7.body': 'Élimination totale des ruptures imprévues au premier trimestre. Clôture comptable mensuelle passée d\'une journée entière à moins de deux heures. Abandon définitif du fichier Excel en six semaines.',
    'p5.s8': 'Ce que j\'en retiens',
    'p5.s8.body': 'L\'outil n\'était pas le problème : il fallait montrer aux équipes qu\'Odoo supprimait leurs contraintes au lieu d\'en ajouter. Dès lors que les commerciaux ont constaté qu\'ils perdaient moins de temps à gérer des litiges d\'expédition, l\'adoption s\'est faite naturellement.',

    // --- Projet 2 (Antechamber) ---
    'p2.label': 'Concept produit',
    'p2.h1': 'Un calendrier qui dit quel genre de semaine vous vivez',
    'p2.sub': 'La plupart des agendas affichent une grille uniforme. Ce concept impose une structure de couleurs par catégorie de vie pour évaluer son équilibre d\'un seul coup d\'œil.',

    // --- Éléments partagés ---
    'proj.back': '← Retour aux projets',
    'proj.note.anon': 'Les noms et données ont été anonymisés pour respecter la confidentialité commerciale.',
    'proj.note.concept': 'Concept personnel et indépendant. Démarche d\'analyse UX basée sur des sources publiques.',
    'footer.linkedin': 'LinkedIn'
  };

  const savedLang = localStorage.getItem('ncg-lang') || 'en';
  const originals = new Map();

  function apply(lang) {
    localStorage.setItem('ncg-lang', lang);
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';

    // Remplacement des textes simples
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      if (!originals.has(el)) originals.set(el, el.textContent);
      el.textContent = (lang === 'fr' && FR[key]) ? FR[key] : originals.get(el);
    });

    // Remplacement des blocs contenant du HTML (liens, gras, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.dataset.i18nHtml;
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      el.innerHTML = (lang === 'fr' && FR[key]) ? FR[key] : originals.get(el);
    });

    // Mise à jour visuelle du bouton de langue
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.dataset.active = lang;
    });
  }

  function _isDark() {
    var currentTheme = document.documentElement.dataset.theme || 'dark';
    return currentTheme === 'dark';
  }



  function _updateThemeIcons() {
    document.querySelectorAll('.theme-icon').forEach(function (el) {
      el.textContent = _isDark() ? '☀️' : '🌙';
    });
  }

  function setup() {
    // Écouteur pour le changement de langue
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('ncg-lang') || 'en';
        apply(current === 'fr' ? 'en' : 'fr');
      });
    });

    // Écouteur pour le basculement de thème
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var newTheme = _isDark() ? 'light' : 'dark';
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('ncg-theme', newTheme);
        _updateThemeIcons();
      });
    });

    _updateThemeIcons();
    apply(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
