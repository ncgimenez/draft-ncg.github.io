(function () {
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
    'card2.title': 'Une app de planification qui respecte votre énergie',
    'card2.desc': 'Quand les outils de calendrier traitent toutes les tâches de la même façon — et pourquoi ça pose problème.',
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
    'soon3.label': 'Analyse de données',
    'soon3.title': 'Données publiques → recommandation',
    'soon3.desc': 'Un dataset ouvert, une synthèse structurée, une recommandation pour un décideur.',
    'soon4.label': 'Teardown UX',
    'soon4.title': 'Critique structurée d\'une appli',
    'soon4.desc': '3 frictions identifiées, 1 solution détaillée avec hypothèse et métriques de succès.',
    // Footer
    'footer.linkedin': 'LinkedIn',
    // About
    'about.label': 'À propos',
    'about.h1': 'Qui je suis',
    'about.intro': 'Analyste fonctionnelle avec 3 ans d\'expérience ERP — SAP S/4HANA Public Cloud et Odoo. Je travaille à l\'interface entre les équipes métier et techniques pour transformer des processus opérationnels en flux qui fonctionnent vraiment. Mon point de départ : comprendre ce qui coince avant de proposer quoi que ce soit.',
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

    document.querySelectorAll('.lang-opt--en, .lang-opt--fr').forEach(function (span) {
      span.style.fontWeight = span.classList.contains('lang-opt--' + lang) ? '700' : '400';
      span.style.color = span.classList.contains('lang-opt--' + lang) ? 'var(--texte)' : 'var(--texte-doux)';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(localStorage.getItem('ncg-lang') === 'fr' ? 'en' : 'fr');
      });
    });
    apply(saved);
  });
})();
