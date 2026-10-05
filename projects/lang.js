(function () {
  // Apply saved theme immediately to avoid flash
  var _t = localStorage.getItem('ncg-theme');
  if (_t) document.documentElement.dataset.theme = _t;

  const FR = {
    // Navigation
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    // Home — hero
    'hero.label': 'Analyste fonctionnelle',
    'hero.title': 'Je cartographie les frictions, je supprime l\'inutile, et je construis ce qui tient.',
    'hero.sub': '3 ans d\'expérience ERP entre les équipes métier et techniques — SAP S/4HANA Public Cloud et Odoo. Je transforme des processus opérationnels complexes en flux qui fonctionnent du premier coup.',
    'hero.cta1': 'Voir les projets',
    'hero.cta2': 'Me connaître',
    // Home — sections
    'section.projects': 'Projets',
    'section.soon': 'En préparation',
    'section.soon.sub': 'Projets en cours de rédaction.',
    // Home — project cards
    'card1.label': 'Étude de cas',
    'card1.title': 'O2C sans détours : standardiser SAP SD pour une équipe B2B',
    'card1.desc': 'Cartographier et corriger un processus de commandes défaillant lors d\'une implémentation SAP S/4HANA greenfield.',
    'card2.label': 'Concept produit',
    'card2.title': 'Un calendrier qui dit quel genre de semaine vous vivez',
    'card2.desc': 'Imposer une structure de couleurs par catégorie de vie — pour que votre semaine soit lisible d\'un coup d\'œil, sans effort.',
    'card3.label': 'Concept UX',
    'card3.title': 'Sélection multiple dans Google Agenda',
    'card3.desc': 'Déplacer plusieurs événements en une action — parce qu\'un imprévu ne devrait pas prendre 10 minutes à gérer.',
    'card4.label': 'Concept UX',
    'card4.title': 'SNCB : savoir où descendre avant d\'arriver',
    'card4.desc': 'Afficher le quai d\'arrivée et le côté de sortie pour les correspondances — une donnée qui existe, mais reste cachée.',
    // Home — coming soon cards
    'soon1.label': 'Concept SAP',
    'soon1.title': 'Available-to-Promise en O2C',
    'soon1.desc': 'Confirmer une date de livraison sans vérifier le stock disponible crée des problèmes en cascade.',
    'soon2.label': 'Étude de cas',
    'soon2.title': 'Implémentation Odoo pour une PME internationale',
    'soon2.desc': 'Analyse des besoins, gap analysis et configuration — Ventes, Stocks, Comptabilité.',
    'soon5.label': 'Concept produit',
    'soon5.title': 'Sessions de focus liées à votre calendrier',
    'soon5.desc': 'Un minuteur style Pomodoro qui sait dans quelle catégorie de vie vous travaillez — et qui alimente votre bilan de semaine. Module 2 de la suite calendrier.',
    'soon3.label': 'Analyse de données',
    'soon3.title': 'Données publiques → recommandation',
    'soon3.desc': 'Un dataset ouvert, une synthèse structurée, une recommandation pour un décideur.',
    'soon4.label': 'Teardown UX',
    'soon4.title': 'Critique structurée d\'une appli',
    'soon4.desc': '3 frictions identifiées, 1 solution détaillée avec hypothèse et métriques de succès.',
    // Footer
    'footer.linkedin': 'LinkedIn',
    // CTA Section
    'cta.title': 'Parlons',
    'cta.desc': 'Intéressé par une collaboration ou envie de discuter de vos challenges processus ?',
    'cta.email': 'M\'envoyer un email',
    'cta.linkedin': 'Me suivre sur LinkedIn',
    // About
    'about.label': 'À propos',
    'about.h1': 'Qui je suis',
    'about.intro': 'Analyste fonctionnelle avec 3 ans entre SAP S/4HANA et Odoo. Je construis le pont entre ce dont les équipes métier ont besoin et ce que les systèmes techniques peuvent réellement faire — et je commence par écouter où ça casse.',
    'about.drives.h': 'Ce qui m\'anime',
    'about.drives': 'Je construis pour résoudre, pas pour impressionner. Quand je vois une équipe commerciale contourner un système six fois par jour, ce n\'est pas de l\'incompétence — c\'est un signal que le processus était cassé dès le départ. Je pars de là. J\'aime transformer les frictions invisibles en flux qui marchent du premier coup, des flux que les gens choisissent d\'utiliser parce qu\'ils rendent leur travail plus facile, pas plus difficile.',
    'about.three.years': 'Trois ans dans deux mondes ERP différents m\'ont appris une chose : la technologie de l\'implémentation n\'est presque jamais le goulot. C\'est la conversation. Comprendre ce qu\'une équipe fait réellement (vs. ce que l\'organigramme dit), cartographier exactement où un système crée des frictions, et construire un argumentaire pour le standard qui soit assez convaincant pour que les gens le préfèrent à leurs contournements.',
    'about.approach.h': 'Mon approche',
    'about.ap1': 'Fit-to-standard d\'abord — challenger les exigences face au standard SAP ou Odoo avant d\'accepter une exception.',
    'about.ap2': 'BPMN As-Is / To-Be systématique — pour que tout le monde, technique ou non, comprenne le processus.',
    'about.ap3': 'Entre métier et technique — je traduis dans les deux sens, sans perdre la nuance.',
    'about.parcours.h': 'Parcours',
    'about.p1title': 'Analyste fonctionnelle, Odoo — Grand-Rosière, Belgique · 2025–2026',
    'about.p1': 'Implémentations ERP pour PME internationales : analyse des besoins, gap analysis et configuration Ventes, Stocks, Comptabilité et Site web. Accompagnement des migrations de version Odoo et résolution de problèmes fonctionnels complexes.',
    'about.p2title': 'Business Analyst SAP S/4HANA, Deloitte — Bruxelles & Oslo · 2023–2025',
    'about.p2': 'Membre core du workstream SD pour une implémentation greenfield SAP S/4HANA Public Cloud chez un scale-up technologique norvégien. O2C complet, intégrations CRM/e-commerce/3PL/paiement, migration de données master (Business Partners, produits, prix), UAT et change management.',
    'about.skills.h': 'Compétences',
    'about.contact.h': 'Me contacter',
    'about.contact.text': 'Pour échanger sur un projet ou une opportunité : ',
    'about.contact.link': 'mon profil LinkedIn',
    // Project pages — shared
    'proj.back': '← Retour aux projets',
    'proj.note.anon': 'Les noms et données ont été anonymisés pour respecter la confidentialité.',
    'proj.note.concept': 'Concept personnel, non affilié à l\'entreprise citée. Exercice de réflexion UX basé sur des informations publiques.',
    // Project 1 — O2C
    'p1.label': 'Étude de cas',
    'p1.h1': 'O2C sans détours : standardiser SAP SD pour une équipe B2B',
    'p1.sub': 'Cartographier et corriger un processus de commandes défaillant lors d\'une implémentation SAP S/4HANA Public Cloud greenfield.',
    'p1.role': 'Rôle',
    'p1.role.v': 'Business Analyst SAP SD',
    'p1.context': 'Contexte',
    'p1.context.v': 'Scale-up tech, e-commerce hardware',
    'p1.duration': 'Durée',
    'p1.duration.v': '18 mois (Go-live + rollout)',
    'p1.tools': 'Outils',
    'p1.tools.v': 'SAP S/4HANA Public Cloud, Jira, Confluence, Visio',
    'p1.s1': 'Contexte',
    'p1.s1.body': 'Implémentation greenfield SAP S/4HANA Public Cloud pour un scale-up technologique nordique. L\'équipe Ventes B2B gérait des comptes clients stratégiques avec des commandes personnalisées, des remises négociées et des délais spécifiques. Parties prenantes : Sales Operations, Customer Success, Finance et l\'équipe Deloitte.',
    'p1.s2': 'Problème',
    'p1.s2.body': 'Les commandes B2B étaient gérées entièrement hors SAP — par e-mail et tableurs. Aucun Sales Order n\'était créé avant l\'expédition. Conséquences : pas de contrôle de crédit, pas de validation des prix, pas de suivi du statut, facturation parfois oubliée, et aucune traçabilité en cas de litige.',
    'p1.s3': 'Analyse',
    'p1.s3.body': 'Workshops fit-gap avec les équipes Sales Operations et Customer Success. Cartographie du processus AS-IS : de la demande client à la livraison. Identification des écarts clés : absence de Sales Order systématique, contrôle de crédit manuel (ou inexistant), conditions tarifaires appliquées de mémoire.',
    'p1.s4': 'Processus AS-IS',
    'p1.s5': 'Solution proposée',
    'p1.s5.b1': 'Adoption du flux O2C standard SAP : Devis → Commande client → Contrôle de crédit → Livraison → Sortie marchandises → Facturation → Paiement.',
    'p1.s5.b2': 'Configuration des conditions tarifaires (remises B2B par client et par produit) dans SAP.',
    'p1.s5.b3': 'Mise en place de la gestion des avoirs et des notes de débit pour les ajustements post-facturation.',
    'p1.s5.b4': 'Documentation des processus et formation des key-users Sales Operations et Customer Success.',
    'p1.s6': 'Processus TO-BE (SAP standard)',
    'p1.s7': 'Résultat',
    'p1.s7.body': 'Traçabilité complète de chaque commande dans SAP. Les remises B2B sont systématiquement validées par les conditions de prix plutôt que par mémoire. Le contrôle de crédit bloque automatiquement les commandes dépassant les limites définies. L\'équipe Customer Success peut consulter le statut de chaque commande en temps réel sans solliciter Sales.',
    'p1.s8': 'Ce que j\'en retiens',
    'p1.s8.body': 'La résistance au changement était plus forte que les lacunes techniques. L\'enjeu principal était de convaincre une équipe commerciale habituée à ses contournements que le standard SAP leur donnerait plus de visibilité, pas moins de flexibilité. Les workshops fit-gap n\'ont de valeur que si on challenge vraiment les exceptions — et qu\'on sait expliquer pourquoi le standard est préférable.',
    // Project 2 — Planning app
    'p2.label': 'Concept produit',
    'p2.h1': 'Une app de planification qui respecte votre énergie',
    'p2.sub': 'Les calendriers existants traitent toutes les tâches de la même façon. Ce concept repense la semaine autour du type d\'énergie qu\'elle demande.',
    'p2.product': 'Concept',
    'p2.product.v': 'Application mobile originale',
    'p2.type': 'Type',
    'p2.type.v': 'Concept personnel',
    'p2.tools': 'Outils',
    'p2.tools.v': '[Figma / à compléter]',
    // Project 3 — Google Calendar
    'p3.label': 'Concept UX',
    'p3.h1': 'Sélection multiple d\'événements dans Google Agenda',
    'p3.sub': 'Google Agenda force les utilisateurs à déplacer leurs événements un à un — une friction inutile quand un imprévu bouleverse tout un planning.',
    // Project 4 — SNCB
    'p4.label': 'Concept UX',
    'p4.h1': 'SNCB : savoir où descendre avant d\'arriver',
    'p4.sub': 'Un voyageur en correspondance ne sait pas sur quel quai il arrive, ni de quel côté sortir. La donnée existe — elle n\'est juste pas au bon endroit.',
    // Project 5 — Odoo
    'p5.label': 'Étude de cas',
    'p5.h1': 'Odoo : un flux cohérent à la place de trois outils déconnectés',
    'p5.sub': 'Implémenter Ventes, Stocks et Comptabilité pour une PME belge — et convaincre l\'équipe commerciale d\'arrêter de court-circuiter le flux de réservation de stock.',
    'p5.role': 'Rôle',
    'p5.role.v': 'Analyste fonctionnelle Odoo',
    'p5.context': 'Contexte',
    'p5.context.v': 'PME belge, B2B, clients BE/FR/NL',
    'p5.duration': 'Durée',
    'p5.duration.v': '~6 mois (implémentation + hypercare)',
    'p5.tools': 'Outils',
    'p5.tools.v': 'Odoo 17, Jira, Confluence, Excel (migration)',
    'p5.s1': 'Contexte',
    'p5.s1.body': 'PME belge d\'une vingtaine de collaborateurs — vente d\'équipements techniques à des clients B2B en Belgique, France et Pays-Bas. Avant l\'implémentation : QuickBooks pour la comptabilité, un classeur Excel partagé pour le suivi des commandes et des stocks, un outil CRM indépendant pour les données clients. La décision de passer à Odoo est venue d\'un constat simple : le volume de réconciliation manuelle entre les trois outils était devenu insoutenable.',
    'p5.s2': 'Problème',
    'p5.s2.body': 'L\'articulation entre ventes et stock était entièrement manuelle — le commercial confirmait un devis, le marquait dans l\'Excel, envoyait un e-mail à l\'entrepôt pour réserver le stock. Sans contrôle automatique, plusieurs commandes pouvaient engager les mêmes références. L\'entrepôt ne découvrait le conflit qu\'au moment de la préparation.',
    'p5.s2.b2': 'La facturation était le deuxième point de friction : Finance générait les factures manuellement dans QuickBooks à partir du PDF de devis, parfois plusieurs jours après la livraison. Les remises accordées au devis n\'étaient pas toujours répercutées.',
    'p5.s3': 'Analyse',
    'p5.s4': 'Processus AS-IS',
    'p5.s5': 'Solution proposée',
    'p5.s5.b1': 'Flux standard Odoo : Devis → Confirmation → Réservation de stock automatique → Bon de livraison → Validation → Facture générée → Synchronisation bancaire.',
    'p5.s5.b2': 'Configuration des règles de réapprovisionnement et des routes de stock pour les références critiques.',
    'p5.s5.b3': 'Synchronisation bancaire et règles de rapprochement automatique par montant et partenaire.',
    'p5.s5.b4': 'Documentation des processus et formation des key-users (commercial, entrepôt, comptabilité).',
    'p5.s6': 'Processus TO-BE (Odoo standard)',
    'p5.decision.h': 'Deux décisions expliquées',
    'p5.s7': 'Résultat',
    'p5.s7.body': 'Les ruptures de stock à la livraison ont été éliminées dans le premier trimestre. La réconciliation de fin de mois est passée d\'une journée complète à moins de deux heures. L\'équipe commerciale a arrêté d\'utiliser l\'Excel dans les six semaines. Finance a fermé le compte QuickBooks quatre mois après le go-live.',
    'p5.s8': 'Ce que j\'en retiens',
    'p5.s8.body': 'L\'implémentation technique était simple. Le travail difficile était de convaincre des équipes que bien utiliser le système — plutôt que trouver des raccourcis — était la vraie solution. Les contournements de l\'équipe commerciale n\'étaient pas de la négligence : c\'étaient des adaptations à un processus qui n\'avait jamais été bien conçu. Odoo nous a fourni l\'outil ; les ateliers nous ont donné l\'adoption.',
    // Home — card 5
    'card5.label': 'Étude de cas',
    // Home — card 6
    'card6.label': 'Design pédagogique',
    'card6.title': 'De l\'expert à l\'enseignant : structurer un cours qui tient',
    'card6.desc': 'Transformer un corpus de savoir expert en cours structuré et scalable — avec une progression explicite, des points d\'entrée définis et des résultats mesurables.',
    // Project 6 — Course architecture
    'p6.label': 'Design pédagogique',
    'p6.h1': 'De l\'expert à l\'enseignant : structurer un cours qui tient',
    'p6.sub': 'Reconcevoir un cours d\'espagnol débutant à partir d\'un savoir expert vers un contenu structuré et enseignable — avec une progression explicite, des points d\'entrée définis et des résultats mesurables.',
    'card5.title': 'Odoo : trois outils déconnectés, un flux cohérent',
    'card5.desc': 'Implémentation Ventes, Stocks et Comptabilité pour une PME belge — et résoudre le problème de stock sur-engagé.',
    // About — personal statement
    'about.statement': 'Trois ans dans deux écosystèmes ERP très différents — SAP à grande échelle, Odoo en profondeur — ont renforcé une conviction : la partie technique d\'une implémentation est rarement ce qui détermine son succès. Ce qui compte, c\'est la conversation : comprendre ce qu\'une équipe fait réellement (pas ce que la carte de processus dit qu\'elle fait), cartographier là où le système crée des frictions, et défendre le standard assez clairement pour que les gens le choisissent plutôt que leur contournement.',
    // Footer
    'footer.email': 'E-mail',
    'footer.linkedin': 'LinkedIn',
    // About contact
    'about.contact.or': ' ou ',
    // Home — stats strip
    'stat.years': 'ans ERP',
    'stat.erp': 'écosystèmes',
    'stat.markets': 'marchés',
    'stat.projects': 'projets',
  };

  const saved = localStorage.getItem('ncg-lang') || 'en';
  const originals = new Map();

  function apply(lang) {
    localStorage.setItem('ncg-lang', lang);
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      if (!originals.has(el)) originals.set(el, el.textContent);
      el.textContent = (lang === 'fr' && FR[key]) ? FR[key] : originals.get(el);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.dataset.i18nHtml;
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      el.innerHTML = (lang === 'fr' && FR[key]) ? FR[key] : originals.get(el);
    });

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.dataset.active = lang;
    });
  }

  function _isDark() {
    var t = document.documentElement.dataset.theme;
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function _updateThemeIcons() {
    document.querySelectorAll('.theme-icon').forEach(function (el) {
      el.textContent = _isDark() ? '☀️' : '🌙';
    });
  }

  function setupTheme() {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(localStorage.getItem('ncg-lang') === 'fr' ? 'en' : 'fr');
      });
    });

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var newTheme = _isDark() ? 'light' : 'dark';
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('ncg-theme', newTheme);
        _updateThemeIcons();
      });
    });

    _updateThemeIcons();
    apply(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTheme);
  } else {
    setupTheme();
  }
})();
