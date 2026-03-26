/**
 * ==================== CONFIGURATION DES PROJETS ====================
 * 
 * Ce fichier permet de personnaliser facilement la section Projets de votre portfolio.
 * Modifiez les données ci-dessous selon vos besoins.
 * 
 * CATÉGORIES DISPONIBLES : security | network | development | achievement | business
 * Pour ajouter une catégorie : modifiez aussi les filtres dans index.html
 * et categoryGradients/categoryFAIcons/getCategoryName/getCategoryIcon dans script.js
 */

// Titre et description de la section Projets
const projectsSectionConfig = {
    title: 'Mes Projets',
    subtitle: 'Découvrez mes projets personnels et TP en réseau, sécurité et développement',
    initialCount: 12,  // Nombre de projets affichés au chargement
    loadMoreCount: 3  // Nombre de projets à ajouter quand on clique "Charger plus"
};

// Vos projets - Modifiez, ajoutez ou supprimez selon vos besoins
const projectsData = [
    {
        id: 1,
        title: 'Laboratoire de Virtualisation — Parc de Machines Virtuelles',
        category: 'network',
        icon: '💻',
        image: null,
        year: '2024',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Parc de VMs (VirtualBox/VMware) réutilisable pour tous mes TP réseau & notions de cybersécurité.',
        description: 'Création d’un laboratoire de virtualisation complet : déploiement d’un parc de machines virtuelles (Windows Server 2019, Windows 10, Ubuntu, Kali Linux, Security Onion) et configuration des bases nécessaires pour pratiquer l’administration, le réseau et les notions de cybersécurité. L’objectif n’est pas un “projet applicatif” unique, mais une plateforme réutilisable : selon les besoins, j’adapte les réseaux virtuels (isolé, host-only, accès Internet, interconnexions) pour reproduire des scénarios de TP et d’apprentissage.',
        technologies: ['VirtualBox', 'VMware', 'Windows Server 2019', 'Windows 10', 'Ubuntu', 'Kali Linux', 'Security Onion', 'Active Directory (AD DS)', 'DNS', 'DHCP', 'Réseaux virtuels'],
        role: 'Apprentissage — Administration Systèmes (Lab)',
        duration: '3 mois',
        team: 'Projet solo',
        details: {
            context: 'Base de travail pour mes projets : un environnement stable, modulable et réutilisable pour pratiquer sur Windows/Linux sans dépendre d’une infra physique.',
            objectives: [
                'Installer et organiser un parc de VM (clients, serveurs, machines sécurité)',
                'Configurer les services essentiels sur Windows Server et Ubuntu (selon les TP)',
                'Mettre en place un domaine Active Directory et les services de base (DNS/DHCP)',
                'Configurer des réseaux virtuels adaptés aux scénarios (isolé/host-only/Internet)',
                'Rendre l’environnement réutilisable pour tous mes TP et projets futurs'
            ],
            achievements: [
                'Création d’un parc de VM complet (Windows Server 2019, Windows 10, Ubuntu, Kali, Security Onion)',
                'Réseaux virtuels configurés selon les besoins (connectivité host/internet/isolée)',
                'Domaine Active Directory prêt à être utilisé pour les TP (utilisateurs, intégration machines)',
                'DNS et DHCP configurés pour soutenir les scénarios',
                'Plateforme réutilisée comme socle pour mes autres projets réseau et sécurité'
            ],
            challenges: [
                'Gestion des ressources (RAM/CPU/stockage) avec plusieurs VM',
                'Cohérence des réseaux virtuels et des modes de connexion (host-only / NAT / bridged selon objectif)',
                'Organisation et maintien d’un lab “propre” malgré de nombreux scénarios'
            ],
            results: 'Un lab de virtualisation prêt et réutilisable qui me sert de base pour la majorité de mes TP réseau & notions de cybersécurité.',
            learnings: [
                'Maîtrise approfondie de la virtualisation',
                'Compréhension des architectures réseau',
                'Organisation d’environnements de test réutilisables'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 2,
        title: 'Logiciel de Gestion de Stock',
        category: 'development',
        icon: '💰',
        image: null,
        year: '2023',
        status: 'En cours',
        featured: true,
        shortDescription: 'Gestion stock & ventes (boutique Boo-gie!) avec JSON (localStorage) + graphiques.',
        description: 'Logiciel créé pour mon atelier/boutique de bougies artisanales : gestion des produits, matières premières et emballages, suivi des ventes et des achats, et calculs associés. L’application est entièrement pensée en front-end avec HTML/CSS/JavaScript et utilise Chart.js pour les graphiques. Les données sont stockées localement via `localStorage` au format JSON (export/import), sans base de données côté serveur (donc pas de PHP/MySQL). Projet personnel : encore en évolution et amélioration des calculs/fiabilité.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'JSON (localStorage)', 'Export/Import JSON', 'UI tableaux & graphiques'],
        role: 'Projet personnel — Gestion stock (Web App)',
        duration: '2 mois',
        team: 'Projet personnel',
        details: {
            context: 'Projet personnel pour centraliser la gestion de mon activité : stock, ventes, achats et organisation des produits (sans base de données, en JSON/local).',
            objectives: [
                'Construire une interface de gestion claire (produits, matières premières, emballages)',
                'Permettre le suivi des ventes et achats avec calculs associés',
                'Ajouter des graphiques pour visualiser les performances (ventes/finances)',
                'Gérer la sauvegarde et la restauration des données via export/import JSON (localStorage)',
                'Optimiser la performance et fiabiliser les calculs en cours d’amélioration'
            ],
            achievements: [
                'Interface front-end complète pour gérer stock & ventes',
                'Graphiques (Chart.js) pour visualiser les ventes et les finances',
                'Modèle de données structuré en JSON et persistant via localStorage',
                'Import/Export JSON pour sauvegarde et réutilisation des données',
                'Organisation des sections : produits, matières premières, packaging, achats, ventes'
            ],
            challenges: [
                'Fiabiliser les calculs (coûts, marges, totaux)',
                'Modéliser les données proprement en JSON sans base de données',
                'Optimiser les performances (rendu + recalculs) quand la quantité de données augmente'
            ],
            results: 'Outil fonctionnel pour centraliser la gestion de stock/ventes, avec sauvegarde locale JSON et graphiques. Version améliorée en continu.',
            learnings: ['Modélisation de données en JSON', 'Stockage local (localStorage) et export/import', 'Visualisation via Chart.js', 'Optimisation du rendu et des calculs']
        },
        links: { demo: 'code/index.html', github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 3,
        title: 'Création de Sites Web — HTML/CSS/JS + IA',
        category: 'development',
        icon: '🤖',
        image: null,
        year: '2023',
        status: 'En cours',
        featured: false,
        shortDescription: 'Bibliothèque de sites web avec IA : cours, révision/pratique et boutique.',
        description: 'Création de plusieurs sites web statiques (HTML/CSS/JavaScript) avec assistance IA pour accélérer la production (structure, contenu, variations de design). L’objectif ici est de regrouper mes sites par usage : pages de cours/référence, pages de révision/pratique (TP, résumés), et sites liés à ma boutique (expérience web pour Boo-gie!).',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Outils IA', 'GitHub Pages'],
        role: 'Projet personnel — Développement Frontend',
        duration: 'Continu',
        team: 'Projets personnels',
        details: {
            context: 'Projet personnel : utiliser l’IA comme accélérateur pour créer des sites utiles et bien structurés, puis les regrouper de façon claire par catégories (cours, révision/pratique, boutique).',
            objectives: [
                'Produire rapidement des sites web statiques propres et responsive',
                'Utiliser l’IA comme assistant (itération, mise en page, contenu) sans complexifier le stack',
                'Structurer les liens par catégories (cours, révision/pratique, boutique)',
                'Publier et maintenir les sites (GitHub Pages)'
            ],
            achievements: [
                'Développement de plusieurs pages/sites en HTML/CSS/JS avec assistance IA',
                'Amélioration itérative du design et du contenu',
                'Mise en ligne de sites statiques et regroupement par usage'
            ],
            challenges: ['Maintenir une bonne qualité et cohérence malgré la génération assistée', 'Itérer vite sans accumuler de dette technique'],
            results: 'Maîtrise des outils IA appliqués au développement web.',
            learnings: ['HTML/CSS/JS côté front', 'Utilisation d’outils IA pour accélérer les itérations', 'Publication de sites statiques']
        },
        links: {
            demo: null,
            github: null,
            documentation: null,
            pdf: null,
            photos: [],
            sites: [
                { name: 'Boutique — Bougie', url: 'https://tudertshr.github.io/boo-gie/#home' },
                { name: 'Boutique — BougieSite (site vitrine)', url: 'https://boo-gie.github.io/web/' },

                { name: 'Cours — Vulnérabilités (théorie)', url: 'https://tudertshr.github.io/Vulnerabilites-theorie/#vulnerabilites' },
                { name: 'Cours — Cours', url: 'https://tudertshr.github.io/cours/' },
                { name: 'Cours — Suite sécurité', url: 'https://tudertshr.github.io/suite-securite/' },
                { name: 'Cours — Exam', url: 'https://tudertshr.github.io/exam/' },
                { name: 'Cours — Tendances', url: 'https://tudertshr.github.io/tendances/#introduction' },

                { name: 'Révision/Pratique — TP vulnérabilités', url: 'https://tudertshr.github.io/TP-vulnerabilites/' },
                { name: 'Révision/Pratique — Vulnérabilités (résumé)', url: 'https://tudertshr.github.io/Vul-resume/' },
                { name: 'Révision/Pratique — LINUX-serv', url: 'https://tudertshr.github.io/LINUX-serv/#top' },
                { name: 'Révision/Pratique — Script', url: 'https://tudertshr.github.io/script/' }
            ]
        },
        gallery: []
    },
    {
        id: 14,
        title: 'Boo-gie! — Bougies artisanales',
        category: 'business',
        icon: '🕯️',
        image: null,
        year: '2026',
        status: 'En cours',
        featured: true,
        shortDescription: 'Identité de marque Boo-gie! + site vitrine & commande personnalisée.',
        description: 'J’ai créé Boo-gie! de A à Z : logotype (le “doggo” de la marque), identité visuelle et déclinaisons, puis un site vitrine pour présenter le catalogue et permettre la création sur mesure. La direction artistique repose sur une palette inspirée de la cire et de la lumière (ton chaleureux, douceur et contraste), avec des images produit sélectionnées pour rendre l’univers de la marque immédiat. Le site propose un parcours simple : découverte → personnalisation (parfum, modèle, couleur, message) → panier → finalisation de commande. Les liens Instagram unifient la présence en ligne et renforcent la confiance via avis clients et galerie.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Branding', 'Identité visuelle', 'Canva', 'Instagram'],
        role: 'Projet personnel — Branding & Web',
        duration: '—',
        team: 'Projet personnel',
        details: {
            context: 'Projet personnel visant à transformer une passion (bougies artisanales) en activité avec une présence en ligne cohérente, chaleureuse et soignée.',
            objectives: [
                'Créer le logotype et définir une charte graphique complète (couleurs, typographies, mise en page, style d’icônes)',
                'Décliner l’identité sur le site et sur les supports visuels (images, contenu Instagram, cohérence de ton)',
                'Développer un site vitrine clair : sections “À propos”, catalogue, galerie, avis et contact',
                'Construire un parcours de commande fluide : configurateur (parfum/modèle/couleur/quantité/message) → panier → finalisation',
                'Relier le site aux réseaux sociaux pour centraliser la découverte et les demandes'
            ],
            achievements: [
                'Logotype Boo-gie! et direction artistique unifiés sur toutes les sections du site',
                'Catalogue organisé par catégories + pages de présentation des collections',
                'Création personnalisée via formulaire (parfum, modèle, couleur, quantité, message) avec estimation',
                'Panier et finalisation de commande (choix du mode de réception)',
                'Galerie d’images pour mettre en avant les créations et renforcer l’envie',
                'Mise en ligne via GitHub Pages + intégration des liens vers Instagram'
            ],
            challenges: [
                'Structurer le contenu pour que le parcours de commande reste simple et lisible',
                'Rendre la mise en page responsive, notamment sur mobile (formulaire + panier)',
                'Garder une cohérence entre les images produit, la palette de marque et le ton rédactionnel'
            ],
            results: 'Une vitrine web prête à promouvoir Boo-gie! et à centraliser la découverte des créations, la demande personnalisée et la prise de contact.',
            learnings: [
                'Branding appliqué au web : palette, typographies et composition',
                'UI/UX pour un parcours de commande statique (sans back-end complexe)',
                'Front-end (HTML/CSS/JS) et publication sur GitHub Pages',
                'Création de contenu (logo, identité, supports) avec Canva'
            ]
        },
        links: {
            demo: null,
            github: null,
            documentation: null,
            pdf: null,
            photos: ['img/BOO.png'],
            sites: [
                { name: 'Site Boo-gie', url: 'https://boo-gie.github.io/web/' },
                { name: 'Instagram', url: 'https://www.instagram.com/boo__gies/' }
            ]
        },
        gallery: ['img/BOO1.png','img/BOO2.png','img/BOO3.png','img/BOO4.png','img/BOO5.png','img/BOO6.png','img/BOO7.png']
    },
    {
        id: 4,
        title: 'Mise en place de Sécurité Réseau',
        category: 'security',
        icon: '🛡️',
        image: null,
        year: '2024',
        status: 'Terminé',
        featured: true,
        shortDescription: 'ACL Cisco + règles pfSense (filtrage) + tests via scan Nmap déclenchant une alerte IDS.',
        description: 'Projet académique de sécurisation d’une infrastructure simulée : mise en place d’ACL (standard et étendues) sur routeur Cisco, configuration de règles de filtrage sur pfSense et segmentation du réseau. J’ai validé la posture par des tests contrôlés (scan Nmap depuis une machine Windows vers l’interface pfSense), qui a généré une alerte IDS, confirmant la détection côté périmètre. Le focus est sur le filtrage/contrôle des flux (pas de VPN, pas de NAT dans ce projet).',
        technologies: ['Cisco IOS', 'ACL (standard/étendues)', 'pfSense', 'Firewall', 'Segmentation', 'DHCP', 'Routage', 'Windows 10', 'Nmap', 'IDS/Alerting'],
        role: 'Technicienne Réseau et Sécurité',
        duration: '2 mois',
        team: 'Binôme académique',
        details: {
            context: 'Projet académique : administrer et sécuriser des équipements réseau (routeur/pare-feu) pour contrôler les flux et observer la détection lors de tests.',
            objectives: [
                'Appliquer une politique de filtrage claire (flux autorisés/interdits)',
                'Configurer des ACL Cisco (standard et étendues) selon les besoins',
                'Mettre en place des règles pfSense pour contrôler le trafic',
                'Segmenter le LAN et valider les accès par des tests',
                'Réaliser un test d’attaque contrôlé (scan) et observer l’alerte IDS'
            ],
            achievements: [
                'ACL standard + étendues configurées sur routeur Cisco',
                'Règles de filtrage pfSense appliquées et validées',
                'Segmentation du réseau (zones) et contrôle des communications inter-segments',
                'LAN statique + LAN dynamique (DHCP) mis en place selon les machines',
                'Scan Nmap réalisé sur pfSense (depuis Windows) avec alerte IDS déclenchée'
            ],
            challenges: [
                'Mise en place propre de la VM pfSense et de ses interfaces (adaptateurs, topologie)',
                'Organisation des réseaux (statique vs DHCP) et cohérence d’adressage',
                'Équilibre entre filtrage strict et accessibilité des services',
                'Interprétation de l’alerte IDS (éviter les faux positifs)'
            ],
            results: 'Infrastructure réseau segmentée et sécurisée, avec trafic contrôlé et détection confirmée via un test de scan.',
            learnings: [
                'Principes de sécurité réseau (filtrage, segmentation)',
                'ACL Cisco (standard/étendues) et logique de règles',
                'Configuration pfSense orientée contrôle des flux',
                'Méthodologie de test (scan Nmap) et lecture d’alertes IDS'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: [ 'img/PF1.png','img/PF2.png']
    },
    {
        id: 5,
        title: 'Simulation Réseau — Topologies & Routage (Packet Tracer)',
        category: 'network',
        icon: '🌐',
        image: null,
        year: '2024',
        status: 'Terminé',
        featured: false,
        shortDescription: 'Topologies & routage (LAN/WAN) + VLAN + services (DNS/DHCP) avec WLAN/Wi-Fi.',
        description: 'Conception et simulation de topologies réseau (LAN/WAN) avec Cisco Packet Tracer : VLAN, routage, adressage IP, services (DNS/DHCP) et segmentation. J’ai aussi intégré une partie sans fil (WLAN / Wireless LAN) en ajoutant des équipements Wi-Fi (AP/clients) afin de valider la connectivité et les échanges réseau dans les scénarios.',
        technologies: ['Cisco Packet Tracer', 'Routage', 'VLAN', 'TCP/IP', 'DNS', 'DHCP', 'Switching', 'WLAN', 'Wireless LAN', 'Wi-Fi'],
        role: 'Étudiante en Réseau',
        duration: '4 mois',
        team: 'Projets académiques',
        details: {
            context: 'Projet de simulation réseau dans le cadre de la formation en administration réseau.',
            objectives: ['Maîtriser Cisco Packet Tracer', 'Configurer VLAN + routage et valider par tests', 'Mettre en place des scénarios réalistes (services et segmentation)', 'Intégrer un WLAN/Wi‑Fi (AP + clients) et tester la connectivité'],
            achievements: ['Conception de plusieurs topologies réseau incluant le sans fil', 'Configuration VLAN, routage, switching et services DNS/DHCP', 'Scénarios de tests et validation de connectivité (LAN/WAN + WLAN)'],
            challenges: ['Debugging de configurations (VLAN / routage / Wi-Fi)', 'Cohérence d’adressage et de routage entre réseaux'],
            results: 'Expertise dans la simulation et la configuration réseau.',
            learnings: ['Maîtrise de Cisco Packet Tracer', 'Compréhension approfondie des protocoles réseau']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 6,
        title: 'Olympiades des Métiers  2025 — Infrastructure SoummamTech',
        category: 'achievement',
        icon: '🏅',
        image: null,
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: '1ère place phase Wilaya — Infrastructure réseau complète d\'entreprise déployée en ~5h avec rapport final. Éliminée pour dépassement d\'âge (22 ans).',
        description: 'Dans le cadre des Olympiades des Métiers (phase Wilaya), j\'ai conçu et déployé en environ 5 heures une infrastructure réseau d\'entreprise complète pour la société fictive SoummamTech Solutions. Le travail comprenait la configuration d\'Active Directory (AD DS), DNS, DHCP, la création d\'unités d\'organisation (UO), de groupes de sécurité, d\'utilisateurs, les droits NTFS + partage SMB différenciés, les GPO, et les mesures de sécurité. Un rapport de configuration complet a été produit à la fin de l\'épreuve. Classée 1ère place à la phase Wilaya, mais éliminée pour dépassement d\'âge (22 ans).',
        technologies: ['Windows Server 2019', 'Active Directory (AD DS)', 'DNS', 'DHCP', 'GPO', 'NTFS', 'SMB', 'VMware', 'Windows Defender'],
        role: 'Compétitrice — Administration & Sécurité des Réseaux',
        duration: '~5 heures (épreuve compétition)',
        team: 'Compétition individuelle',
        details: {
            context: 'Épreuve des Olympiades des Métiers, phase Wilaya. Objectif : déployer en temps limité une infrastructure réseau complète pour l\'entreprise fictive SoummamTech Solutions, incluant serveur, clients, services et sécurité, puis remettre un rapport de configuration.',
            objectives: [
                'Déployer le rôle AD DS et promouvoir le serveur en contrôleur de domaine (DOM10.dz)',
                'Configurer DNS (zones directe et inversée) et DHCP (plage 192.168.0.33–192.168.0.63)',
                'Créer les UO : Service Commercial, Service Technique, Direction',
                'Créer les groupes de sécurité et utilisateurs (com1, com2, tech1, tech2)',
                'Configurer les droits NTFS et partages SMB différenciés',
                'Appliquer des GPO et restrictions horaires',
                'Activer les mesures de sécurité (pare-feu, Windows Defender)',
                'Rédiger un rapport de configuration complet'
            ],
            achievements: [
                '1ère place à la phase Wilaya des Olympiades des Métiers',
                'Infrastructure AD DS complète déployée en ~5h',
                'DNS avec zones directe et inversée configurées',
                'DHCP autorisé avec étendue activée',
                'Partage Commercial : accès total pour G_Service_Commercial, lecture/écriture pour G_Service_Technique',
                'Partage Technique : accès total pour G_Service_Technique, aucun accès pour G_Service_Commercial',
                'Restrictions horaires sur les comptes utilisateurs',
                'Rapport de configuration remis à la fin de l\'épreuve'
            ],
            challenges: [
                'Respecter les contraintes de temps strictes (~5 heures)',
                'Gérer simultanément plusieurs services (AD, DNS, DHCP, GPO)',
                'Configurer correctement les droits NTFS + partage SMB',
                'Rédiger un rapport détaillé sous pression'
            ],
            results: '1ère place phase Wilaya. Infrastructure entièrement fonctionnelle livrée avec rapport. Éliminée de la phase suivante en raison du dépassement de la limite d\'âge (22 ans).',
            learnings: [
                'Gestion du stress et des délais en compétition',
                'Déploiement rapide d\'une infrastructure Windows Server',
                'Maîtrise d\'Active Directory, DNS, DHCP et GPO sous pression',
                'Rédaction de rapport technique en temps limité'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: 'doc/RAPPORT-olampiyades-des-métiers.pdf', photos: [] },
        gallery: []
    },
    {
        id: 8,
        title: 'Sécurité en Laboratoire — SIEM, IDS/IPS & Vulnérabilités',
        category: 'security',
        icon: '🔍',
        image: null,
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Analyse SOC en lab : Security Onion (Snort/Sguil/Kibana) + PCAP Wireshark + CVE/CVSS/CWE.',
        description: 'Travaux de laboratoire orientés défense : analyse d’attaques déjà simulées via captures réseau (PCAP) et logs, puis investigation/tri dans Security Onion (Snort → alertes, Sguil/Kibana → recherche et corrélation). En parallèle, analyse de vulnérabilités avec le triptyque CVE (référence), CVSS (score) et CWE (famille) afin de qualifier les failles et comprendre leur impact.',
        technologies: ['Security Onion', 'Snort', 'Sguil', 'Kibana', 'Wireshark (PCAP)', 'Nmap', 'CVE', 'CVSS', 'CWE', 'Kali Linux'],
        role: 'Apprentissage — Analyse Sécurité (Lab)',
        duration: '4 mois',
        team: 'Projet académique',
        details: {
            context: 'Laboratoire de sécurité : comprendre des scénarios d’attaque à partir de traces (réseau + logs) et pratiquer une investigation type SOC.',
            objectives: [
                'Analyser des attaques à partir de captures Wireshark (PCAP) et d’artefacts logs',
                'Détecter/observer les événements via Security Onion (Snort/Sguil/Kibana)',
                'Corréler source/destination, timestamps, payloads et types d’alertes',
                'Qualifier des vulnérabilités : CVE (référence), CVSS (score), CWE (famille)'
            ],
            achievements: [
                'Analyse de traces réseau via Wireshark (lecture des flux, indices, chronologie)',
                'Recherche et corrélation d’événements dans Kibana/Sguil',
                'Observation d’alertes IDS Snort liées aux scénarios simulés',
                'Synthèses de vulnérabilités basées sur CVE/CVSS/CWE (impact, famille, sévérité)'
            ],
            challenges: [
                'Trier le bruit et isoler les événements réellement pertinents',
                'Relier une alerte IDS à des paquets/flux concrets dans les PCAP',
                'Rester rigoureuse sur la qualification (CVE vs CWE vs score CVSS)'
            ],
            results: 'Mini-lab SOC exploité pour analyser des attaques simulées, avec une méthodologie d’investigation et de qualification des vulnérabilités.',
            learnings: [
                'Analyse réseau (PCAP) et lecture de traces',
                'Investigation SOC : recherche, corrélation et timeline',
                'Compréhension et usage de CVE/CVSS/CWE'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['img/SEC1.png','img/SEC2.png','img/SEC3.png','img/SEC4.png','img/SEC5.png','img/SEC6.png','img/SEC7.png','img/SEC8.png','img/SEC9.png','img/SEC10.png','img/SEC11.png','img/SEC12.png','img/SEC13.png','img/SEC14.png']
    },
    {
        id: 13,
        title: 'Simulations d’Attaques — Phishing, Brute Force, SQLi',
        category: 'security',
        icon: '🎯',
        image: null,
        year: '2025',
        status: 'Terminé',
        featured: false,
        shortDescription: 'Lab offensif contrôlé : brute force (wordlist), phishing (Zphisher), analyse SQLi et SMB.',
        description: 'Projet laboratoire (éthique et contrôlé) pour comprendre les étapes d’attaque, observer les indices et l’impact : brute force depuis Kali vers une VM Windows 10 (avec wordlist créée manuellement), tests sur partage SMB, phishing via Zphisher (pages clones type Facebook/Instagram/GitHub) uniquement en environnement perso, et analyse d’une attaque SQLi à partir de traces/captures existantes (logique du “1=1”, énumération tables/colonnes, extraction).',
        technologies: ['Kali Linux', 'Linux', 'Windows 10', 'Brute force', 'Wordlists', 'SMB', 'Phishing', 'Zphisher', 'SQL Injection', 'Analyse de traces'],
        role: 'Apprentissage — Analyse Sécurité (Lab)',
        duration: '—',
        team: 'Projet académique',
        details: {
            context: 'Projet séparé “offensif” en labo, pour apprendre les étapes et les indicateurs, sans intention de nuisance (tests sur VMs/compte perso).',
            objectives: [
                'Réaliser des simulations contrôlées (brute force, phishing, SMB, SQLi) et comprendre le déroulé',
                'Identifier les traces observables côté machine/réseau',
                'Relier chaque scénario à des mesures de mitigation (mots de passe, durcissement, sensibilisation, WAF/validation)'
            ],
            achievements: [
                'Brute force réussi sur une VM Windows 10 depuis Kali (wordlist “maison” incluant le mot de passe)',
                'Tests sur partage SMB depuis/vers Windows 10 en environnement virtuel',
                'Phishing via Zphisher (clones) uniquement en labo avec e-mails de test (auto-envoi) + sensibilisation des proches',
                'Analyse guidée d’une attaque SQLi à partir de traces/captures (du test “1=1” à l’énumération tables/colonnes)'
            ],
            challenges: [
                'Garder un cadre 100% laboratoire/éthique (VMs, comptes de test, aucun déploiement réel)',
                'Rendre les scénarios reproductibles (mêmes prérequis, mêmes étapes)',
                'Bien séparer démonstration pédagogique vs “attaque”'
            ],
            results: 'Compréhension concrète des vecteurs (brute force, phishing, SMB, SQLi) et des traces associées, avec une approche orientée apprentissage + mitigation.',
            learnings: [
                'Méthodologie de simulation en lab (préparation, exécution, observation)',
                'Création de wordlists et compréhension des limites d’un brute force',
                'Bases de sensibilisation phishing et impacts',
                'Lecture d’une SQLi (logique, étapes, extraction) et mesures de prévention'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 9,
        title: 'Haute Disponibilité — Cluster de Serveurs',
        category: 'network',
        icon: '⚡',
        image: null,
        year: '2025',
        status: 'En cours',
        featured: false,
        shortDescription: 'HA en lab : 2 Windows Server + AD + disque “BD” partagé (cluster passif).',
        description: 'J’ai installé deux machines Windows Server : Server 1 et Server 2. J’ai créé Active Directory sur Server 1 (domaine configuré), puis j’ai ajouté Server 2 au domaine pour qu’il fasse partie du même environnement Active Directory. Pour la simulation du stockage, j’ai aussi utilisé une machine Windows 10 : j’y ai créé un disque de données nommé “BD” et je l’ai partagé/attaché aux deux serveurs (montage identique : disque d’abord connecté à Server 1, puis même disque connecté à Server 2). Les deux serveurs reconnaissent le disque, mais la limite principale que j’ai rencontrée est que les deux VM Windows ne peuvent pas écrire en même temps sur le même disque virtuel. J’ai documenté ce comportement avec des captures. Pour tenter d’améliorer la concurrence, j’ai modifié le fichier de configuration `.vmx` du disque (WindowsDisk.vmx) afin d’activer le mode “multiwriter”. Malgré cela, le TP n’est pas 100% efficient : on n’a pas mis en place un cluster actif, mais un cluster plutôt passif. Concrètement : on peut modifier des données des deux côtés, mais pas simultanément. Je laisse l’installation de “HP API” telle qu’elle a été faite (bien configurée).',
        technologies: ['Windows Server', 'Windows 10', 'Active Directory (AD DS)', 'Disque partagé', 'Clustering', 'HA', 'Multiwriter (VMX)', 'WindowsDisk.vmx', 'VMware', 'VirtualBox'],
        role: 'Administratrice Système',
        duration: '2 mois',
        team: 'Projet académique',
        details: {
            context: 'TP de haute disponibilité en environnement virtualisé : 2 nœuds + domaine AD + disque partagé simulé, puis observation des limites de concurrence sur stockage.',
            objectives: [
                'Installer Server 1 et Server 2 (Windows)',
                'Configurer le domaine Active Directory sur Server 1',
                'Joindre Server 2 au domaine',
                'Partager/attacher le disque “BD” aux deux serveurs',
                'Tester et documenter l’accès concurrent en écriture sur le disque virtuel'
            ],
            achievements: [
                'Server 1 avec Active Directory (domaine opérationnel)',
                'Server 2 joint au domaine',
                'Montage disque “BD” attaché aux deux serveurs pour simulation',
                'Documentation claire du comportement “pas d’écriture simultanée” sur Windows',
                'Tentative documentée via `multiwriter` dans WindowsDisk.vmx'
            ],
            challenges: [
                'Concurrence d’écriture sur un même disque virtuel côté Windows',
                'Passage d’un objectif “actif” à une approche passif (modifications possibles, mais pas simultanées)',
                'Cohérence du montage disque (mêmes attaches côté Server 1 et Server 2)'
            ],
            results: 'Montage HA fonctionnel pour la simulation (AD + 2 nœuds + disque BD partagé), avec une limite forte : pas d’écriture simultanée sur le même disque → approche passif. Tentative `multiwriter` (WindowsDisk.vmx) faite et documentée.',
            learnings: [
                'Principes HA/cluster dans un contexte virtualisé',
                'Intégration Active Directory dans une architecture multi-serveurs',
                'Limites des disques partagés en environnement Windows et impact des options VMX (multiwriter)'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['img/HA1.png','img/HA2.png','img/HA3.png','img/HA4.png',]
    },
    {
        id: 10,
        title: 'Infrastructure Windows Server – Nova-Pharm',
        category: 'network',
        icon: '🖥️',
        image: null,
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Déploiement complet d\'une infrastructure d\'entreprise sous Windows Server 2019 : RAID 5, AD, DNS, DHCP, GPO.',
        description: 'Mise en place d\'une infrastructure réseau pour l\'entreprise fictive Nova-Pharm.',
        technologies: ['Windows Server 2019', 'RAID 5', 'Active Directory', 'DNS', 'DHCP', 'GPO', 'VirtualBox', 'HP ProLiant'],
        role: 'Administratrice Système',
        duration: '2 mois',
        team: 'Projet académique individuel',
        details: {
            context: 'L\'entreprise Nova-Pharm souhaitait centraliser son infrastructure informatique.',
            objectives: ['Configurer le RAID 5 matériel', 'Installer Windows Server 2019', 'Promouvoir en contrôleur de domaine'],
            achievements: ['Configuration RAID 5 avec 5 disques SAS', 'Création de 4 OU avec utilisateurs et groupes', 'Mise en œuvre de GPO spécifiques'],
            challenges: ['Coordination entre RAID matériel et installation Windows', 'Application correcte des GPO'],
            results: 'Infrastructure entièrement fonctionnelle et documentée.',
            learnings: ['Maîtrise du RAID matériel', 'Gestion complète d\'Active Directory et des stratégies de groupe']
        },
        links: { demo: null, github: null, documentation: null, pdf: 'doc/infrastructure-entreprise.pdf', photos: [] },
        gallery: []
    },
    {
        id: 11,
        title: 'Installation OpenLDAP & phpLDAPadmin sur Ubuntu',
        category: 'network',
        icon: '📂',
        image: null,
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Déploiement et configuration d\'un serveur OpenLDAP avec interface web phpLDAPadmin sur Ubuntu/Debian.',
        description: 'Mise en place complète d\'un serveur d\'annuaire LDAP sous Ubuntu à l\'aide d\'OpenLDAP (slapd), couplé à l\'interface web phpLDAPadmin pour l\'administration graphique. Le projet couvre la configuration du nom d\'hôte, l\'installation et la reconfiguration du serveur LDAP, la définition du domaine DNS de base, la gestion des mots de passe administrateur, ainsi que l\'intégration avec Apache pour exposer phpLDAPadmin via navigateur.',
        technologies: ['OpenLDAP', 'phpLDAPadmin', 'Ubuntu', 'Debian', 'Apache2', 'LDAP', 'slapd', 'ldap-utils'],
        role: 'Administratrice Système Linux',
        duration: '1 semaine',
        team: 'Projet personnel',
        details: {
            context: 'Projet d\'apprentissage visant à maîtriser la gestion centralisée des utilisateurs via un annuaire LDAP sous Linux.',
            objectives: [
                'Configurer le nom d\'hôte du serveur LDAP',
                'Installer et configurer OpenLDAP (slapd) sur Ubuntu',
                'Reconfigurer le domaine DNS de base avec dpkg-reconfigure',
                'Installer et connecter phpLDAPadmin à OpenLDAP',
                'Configurer Apache pour exposer l\'interface web phpLDAPadmin',
                'Tester la connexion via navigateur avec le compte admin LDAP'
            ],
            achievements: [
                'Serveur OpenLDAP opérationnel avec domaine personnalisé',
                'Interface web phpLDAPadmin accessible via navigateur',
                'Configuration Apache réussie (alias, droits d\'accès)',
                'Authentification admin LDAP fonctionnelle (cn=admin,dc=...)',
                'Documentation des étapes avec captures d\'écran'
            ],
            challenges: [
                'Bonne compréhension de la structure DN (Distinguished Name)',
                'Configuration correcte du fichier ldap.conf (BASE, URI)',
                'Paramétrage du type d\'authentification (cookie → session) dans phpLDAPadmin'
            ],
            results: 'Annuaire LDAP entièrement fonctionnel, administrable via l\'interface web phpLDAPadmin. Maîtrise des commandes slapd et des fichiers de configuration LDAP sous Linux.',
            learnings: [
                'Protocole LDAP et structure des annuaires (DN, OU, DC)',
                'Administration OpenLDAP sous Ubuntu/Debian',
                'Configuration d\'Apache pour une application web',
                'Gestion des paquets et reconfiguration avec dpkg-reconfigure'
            ]
        },
        links: { demo: null, github:'https://tudertshr.github.io/LINUX-serv/#LDHCP', documentation: null, pdf: null, photos: [] },
        gallery: ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png']
    },

    /* Pour ajouter un projet : copiez un bloc ci-dessus, changez l'id et les champs.
       Catégories : security | network | development | achievement | business (Small Business)
       Pour supprimer un projet : supprimez tout le bloc { id: X, ... }, */
];
