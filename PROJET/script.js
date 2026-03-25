/**
 * ==================== CONFIGURATION DES PROJETS ====================
 * 
 * Ce fichier permet de personnaliser facilement la section Projets de votre portfolio.
 * Modifiez les données ci-dessous selon vos besoins.
 * 
 * CATÉGORIES DISPONIBLES : security | network | development | achievement
 * Pour ajouter une catégorie : modifiez aussi les filtres dans index.html
 * et categoryGradients/categoryFAIcons/getCategoryName/getCategoryIcon dans script.js
 */

// Titre et description de la section Projets
const projectsSectionConfig = {
    title: 'Mes Projets',
    subtitle: 'Découvrez mes réalisations en cybersécurité, réseau et développement',
    initialCount: 6,  // Nombre de projets affichés au chargement
    loadMoreCount: 3  // Nombre de projets à ajouter quand on clique "Charger plus"
};

// Vos projets - Modifiez, ajoutez ou supprimez selon vos besoins
const projectsData = [
    {
        id: 1,
        title: 'Serveurs et Virtualisation',
        category: 'network',
        icon: '💻',
        image: 'assets/images/projects/project-1.jpg',
        year: '2024',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Mise en place et configuration de machines virtuelles (Linux, Windows, Pfsense).',
        description: 'Mise en place et configuration complète de machines virtuelles dans un environnement de test. Gestion et configuration de serveurs pour différents usages (DNS, DHCP, Web). Cette expérience a permis de renforcer les compétences en administration système.',
        technologies: ['Linux', 'Windows Server', 'Pfsense', 'VirtualBox', 'VMware', 'Active Directory'],
        role: 'Administratrice Systèmes Junior',
        duration: '3 mois',
        team: 'Projet solo',
        details: {
            context: 'Projet académique visant à maîtriser les environnements virtualisés et la configuration de serveurs.',
            objectives: [
                'Créer un environnement virtualisé complet avec différents systèmes d\'exploitation',
                'Configurer des services réseau essentiels (DNS, DHCP)',
                'Sécuriser l\'environnement avec un firewall (Pfsense)',
                'Documenter l\'architecture et les procédures de configuration'
            ],
            achievements: [
                'Installation et configuration de 5 machines virtuelles (2 Linux, 2 Windows Server, 1 Pfsense)',
                'Mise en place d\'un contrôleur de domaine Active Directory',
                'Configuration de services DNS et DHCP fonctionnels',
                'Création de règles de pare-feu avancées sur Pfsense',
                'Documentation technique complète de l\'architecture'
            ],
            challenges: [
                'Gestion des ressources limitées du système hôte',
                'Configuration réseau entre les machines virtuelles',
                'Résolution de conflits de configuration'
            ],
            results: 'Environnement virtualisé entièrement fonctionnel servant de plateforme de test pour d\'autres projets de sécurité réseau.',
            learnings: [
                'Maîtrise approfondie de la virtualisation',
                'Compréhension des architectures réseau',
                'Gestion de projets techniques'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: [
            'assets/images/projects/project-1-1.jpg',
            'assets/images/projects/project-1-2.jpg',
            'assets/images/projects/project-1-3.jpg',
            'assets/images/projects/project-1-4.jpg'
        ]
    },
    {
        id: 2,
        title: 'Logiciel de Gestion de Stock',
        category: 'development',
        icon: '💰',
        image: 'assets/images/projects/project-2.jpg',
        year: '2023',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Création d\'un logiciel web de gestion des stocks et calcul des coûts.',
        description: 'Création d\'un logiciel web dédié à la gestion des stocks et au calcul des coûts, visant à simplifier l\'inventaire et le suivi des produits. Projet personnel axé sur l\'interface utilisateur et la logique métier.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
        role: 'Développeuse Web Full-Stack',
        duration: '2 mois',
        team: 'Projet personnel',
        details: {
            context: 'Projet personnel répondant à un besoin de gestion d\'inventaire pour petites entreprises.',
            objectives: [
                'Créer une interface intuitive pour la gestion des produits',
                'Implémenter un système de suivi des entrées/sorties',
                'Générer des rapports de stock et de coûts',
                'Assurer la sécurité des données sensibles'
            ],
            achievements: [
                'Conception d\'une interface utilisateur responsive et intuitive',
                'Développement d\'un système CRUD complet pour les produits',
                'Implémentation d\'un module de calcul des coûts et marges',
                'Création de rapports PDF exportables',
                'Mise en place d\'un système d\'authentification sécurisé'
            ],
            challenges: [
                'Optimisation des requêtes SQL pour de grandes quantités de données',
                'Création d\'une interface responsive',
                'Gestion des sessions utilisateurs'
            ],
            results: 'Application web fonctionnelle permettant une gestion efficace des stocks avec réduction du temps de gestion de 40% selon les tests utilisateurs.',
            learnings: [
                'Développement Full-Stack',
                'Design d\'interfaces utilisateur',
                'Optimisation des performances'
            ]
        },
        links: { demo: 'code/logiciel/index.html', github: null, documentation: null, pdf: null, photos: [] },
        gallery: [
            'assets/images/projects/project-2-1.jpg',
            'assets/images/projects/project-2-2.jpg',
            'assets/images/projects/project-2-3.jpg'
        ]
    },
    {
        id: 3,
        title: 'Création de Sites Web (IA)',
        category: 'development',
        icon: '🤖',
        image: 'assets/images/projects/project-3.jpg',
        year: '2023',
        status: 'En cours',
        featured: false,
        shortDescription: 'Développement de sites web avec intégration d\'outils IA.',
        description: 'Projets personnels de conception et de développement de sites web en intégrant des outils basés sur l\'intelligence artificielle pour optimiser le contenu, le design et le SEO.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Outils IA', 'SEO', 'Figma'],
        role: 'Créatrice Digitale & Développeuse Frontend',
        duration: 'Continu',
        team: 'Projets personnels',
        details: {
            context: 'Exploration des possibilités offertes par l\'IA dans le domaine du développement web.',
            objectives: ['Expérimenter avec des outils IA pour la génération de code', 'Optimiser le référencement (SEO)', 'Créer des designs innovants grâce à l\'IA générative'],
            achievements: ['Développement de 3 sites web avec assistance IA', 'Optimisation SEO avancée', 'Benchmark des gains de productivité (réduction de 30%)'],
            challenges: ['Intégration harmonieuse des outils IA', 'Maintien de la qualité du code généré'],
            results: 'Maîtrise des outils IA appliqués au développement web.',
            learnings: ['Utilisation avancée d\'outils IA', 'Optimisation SEO moderne', 'Workflows de développement innovants']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['assets/images/projects/project-3-1.jpg', 'assets/images/projects/project-3-2.jpg']
    },
    {
        id: 4,
        title: 'Mise en place de Sécurité Réseau',
        category: 'security',
        icon: '🛡️',
        image: 'assets/images/projects/project-4.jpg',
        year: '2024',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Configuration d\'ACL et règles de pare-feu pour sécuriser le réseau.',
        description: 'Mise en place de politiques de sécurité réseau, incluant la configuration d\'Access Control Lists (ACL) et de règles de pare-feu pour sécuriser le réseau contre les menaces externes et internes.',
        technologies: ['ACL', 'Firewall', 'Cisco IOS', 'Pfsense', 'IDS/IPS', 'VPN'],
        role: 'Technicienne Réseau et Sécurité',
        duration: '2 mois',
        team: 'Binôme académique',
        details: {
            context: 'Projet académique de sécurité réseau visant à protéger une infrastructure simulée.',
            objectives: ['Comprendre et implémenter les politiques de sécurité réseau', 'Configurer des ACL', 'Définir des règles de pare-feu efficaces'],
            achievements: ['Configuration d\'ACL sur routeurs Cisco', 'Mise en place de règles de pare-feu sur Pfsense', 'Segmentation du réseau en zones de sécurité'],
            challenges: ['Équilibre entre sécurité et accessibilité', 'Gestion des faux positifs'],
            results: 'Infrastructure réseau sécurisée avec trafic contrôlé.',
            learnings: ['Principes de sécurité réseau', 'Configuration avancée de pare-feu', 'Méthodologie de tests de sécurité']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['assets/images/projects/project-4-1.jpg', 'assets/images/projects/project-4-2.jpg', 'assets/images/projects/project-4-3.jpg']
    },
    {
        id: 5,
        title: 'Simulation Réseaux',
        category: 'network',
        icon: '🌐',
        image: 'assets/images/projects/project-5.jpg',
        year: '2024',
        status: 'Terminé',
        featured: false,
        shortDescription: 'Conception de topologies réseau complexes avec Packet Tracer.',
        description: 'Conception et simulation de topologies de réseaux complexes (LAN/WAN) à l\'aide de Cisco Packet Tracer.',
        technologies: ['Cisco Packet Tracer', 'Routeurs Cisco', 'Switches Cisco', 'TCP/IP', 'DNS', 'DHCP', 'VLAN'],
        role: 'Étudiante en Réseau',
        duration: '4 mois',
        team: 'Projets académiques',
        details: {
            context: 'Projet de simulation réseau dans le cadre de la formation en administration réseau.',
            objectives: ['Maîtriser Cisco Packet Tracer', 'Configurer des topologies LAN/WAN complexes'],
            achievements: ['Conception de 5 topologies réseau différentes', 'Configuration avancée de routeurs et switches Cisco'],
            challenges: ['Compréhension des protocoles de routage', 'Debugging de configurations complexes'],
            results: 'Expertise dans la simulation et la configuration réseau.',
            learnings: ['Maîtrise de Cisco Packet Tracer', 'Compréhension approfondie des protocoles réseau']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['assets/images/projects/project-5-1.jpg', 'assets/images/projects/project-5-2.jpg', 'assets/images/projects/project-5-3.jpg', 'assets/images/projects/project-5-4.jpg']
    },
    {
        id: 6,
        title: 'Olympiades des Métiers  2025 — Infrastructure SoummamTech',
        category: 'achievement',
        icon: '🏅',
        image: 'assets/images/projects/project-13.jpg',
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
        id: 7,
        title: 'Infrastructure Windows Server Entreprise',
        category: 'network',
        icon: '🖥️',
        image: 'assets/images/projects/project-7.jpg',
        year: '2024',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Déploiement complet d\'une infrastructure réseau d\'entreprise sous Windows Server.',
        description: 'Déploiement d\'une infrastructure réseau complète d\'entreprise sous Windows Server : Active Directory, DHCP, DNS, IIS, partage de fichiers, GPO.',
        technologies: ['Windows Server', 'Active Directory', 'DHCP', 'DNS', 'IIS', 'GPO', 'VirtualBox'],
        role: 'Administratrice Système',
        duration: '3 mois',
        team: 'Projet académique',
        details: {
            context: 'Projet de déploiement d\'une infrastructure réseau d\'entreprise complète en environnement virtualisé.',
            objectives: ['Déployer un contrôleur de domaine Active Directory', 'Configurer les services DHCP et DNS'],
            achievements: ['Déploiement complet d\'Active Directory', 'Configuration DHCP et DNS', 'Déploiement de stratégies GPO'],
            challenges: ['Synchronisation des services dans l\'environnement virtualisé', 'Résolution des conflits DNS'],
            results: 'Infrastructure d\'entreprise entièrement fonctionnelle et documentée.',
            learnings: ['Administration Windows Server approfondie', 'Gestion des politiques de groupe (GPO)']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 8,
        title: 'Tests de Sécurité en Laboratoire',
        category: 'security',
        icon: '🔍',
        image: 'assets/images/projects/project-8.jpg',
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Simulation d\'attaques (phishing, brute force), analyse de vulnérabilités sur Kali Linux et Security Onion.',
        description: 'Tests de sécurité en laboratoire : simulation d\'attaques, analyse de vulnérabilités (SQL Injection, CVE, CVSS, CWE).',
        technologies: ['Kali Linux', 'Security Onion', 'Snort', 'pfSense', 'Wireshark', 'Nmap', 'Sguil', 'Kibana'],
        role: 'Analyste Sécurité Junior',
        duration: '4 mois',
        team: 'Projet académique',
        details: {
            context: 'Laboratoire de sécurité visant à comprendre les vecteurs d\'attaque et à mettre en place des contre-mesures.',
            objectives: ['Simuler des attaques réelles', 'Analyser des vulnérabilités applicatives', 'Déployer un IDS/IPS'],
            achievements: ['Simulation d\'attaques phishing et brute force', 'Configuration de Snort comme IDS/IPS', 'Monitoring via Sguil et Kibana'],
            challenges: ['Configuration fine de Snort pour minimiser les faux positifs', 'Corrélation des événements dans le SIEM'],
            results: 'Maîtrise des outils offensifs et défensifs de cybersécurité.',
            learnings: ['Techniques offensives et défensives', 'Utilisation des outils SIEM']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 9,
        title: 'Haute Disponibilité — Cluster de Serveurs',
        category: 'network',
        icon: '⚡',
        image: 'assets/images/projects/project-9.jpg',
        year: '2025',
        status: 'Terminé',
        featured: false,
        shortDescription: 'Mise en place d\'un cluster de serveurs virtuels pour assurer la haute disponibilité.',
        description: 'Mise en place d\'un cluster de serveurs virtuels en laboratoire pour assurer la haute disponibilité (HA).',
        technologies: ['VirtualBox', 'VMware', 'Linux', 'Windows Server', 'Clustering', 'HA'],
        role: 'Administratrice Système',
        duration: '2 mois',
        team: 'Projet académique',
        details: {
            context: 'Projet de haute disponibilité visant à garantir la continuité de service.',
            objectives: ['Déployer un cluster de serveurs virtuels', 'Tester les scénarios de basculement automatique'],
            achievements: ['Déploiement d\'un cluster fonctionnel', 'Configuration du basculement automatique (failover)'],
            challenges: ['Synchronisation des données entre les nœuds', 'Tests de charge et de basculement'],
            results: 'Cluster opérationnel avec temps de basculement inférieur à 30 secondes.',
            learnings: ['Principes de haute disponibilité', 'Architecture cluster', 'Plan de reprise d\'activité']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 10,
        title: 'Infrastructure Windows Server – Nova-Pharm',
        category: 'network',
        icon: '🖥️',
        image: 'assets/images/projects/project-10.jpg',
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Déploiement complet d\'une infrastructure d\'entreprise sous Windows Server 2019 : RAID 5, AD, DNS, DHCP, GPO.',
        description: 'Mise en place d\'une infrastructure réseau professionnelle pour l\'entreprise fictive Nova-Pharm.',
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
        links: { demo: null, github: null, documentation: null, pdf: 'assets/documents/windows-server-nova-pharm.pdf', photos: [] },
        gallery: []
    },
    {
        id: 11,
        title: 'Collection de ressources techniques',
        category: 'development',
        icon: '📚',
        image: 'assets/images/projects/project-11.jpg',
        year: '2025',
        status: 'En cours',
        featured: false,
        shortDescription: 'Ensemble de pages web créées pour documenter mes travaux en administration système et sécurité réseau.',
        description: 'Cette collection regroupe plusieurs mini-projets sous forme de sites statiques hébergés sur GitHub Pages.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
        role: 'Créatrice de contenu & développeuse web',
        duration: 'Continu',
        team: 'Projet personnel',
        details: {
            context: 'Création d\'un portfolio de connaissances techniques pour partager mes travaux.',
            objectives: ['Synthétiser mes cours sous forme de sites web', 'Apprendre à publier sur GitHub Pages'],
            achievements: ['Publication de 10 pages thématiques', 'Utilisation de styles modernes et navigation cohérente'],
            challenges: ['Organiser une grande quantité d\'informations', 'Maintenir la cohérence visuelle'],
            results: 'Un ensemble cohérent de ressources consultables en ligne.',
            learnings: ['Maîtrise de GitHub Pages et Git', 'Structuration de contenu technique pour le web']
        },
        links: { demo: 'https://tudertshr.github.io/', github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 12,
        title: 'Installation OpenLDAP & phpLDAPadmin sur Ubuntu',
        category: 'network',
        icon: '📂',
        image: 'assets/images/projects/project-12.jpg',
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
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },

    /* Pour ajouter un projet : copiez un bloc ci-dessus, changez l'id et les champs.
       Catégories : security | network | development | achievement
       Pour supprimer un projet : supprimez tout le bloc { id: X, ... }, */
];
