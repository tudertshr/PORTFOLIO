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
        title: 'Laboratoire de Virtualisation — Parc de Machines Virtuelles',
        category: 'network',
        icon: '💻',
        image: null,
        year: '2024',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Création d’un lab complet de virtualisation (Windows, Linux, pfSense) pour tester réseau, AD et sécurité.',
        description: 'Conception d’un environnement de laboratoire virtualisé pour déployer et tester plusieurs systèmes (Windows Server/10, Ubuntu, Kali, Security Onion, pfSense) et des services d’entreprise (Active Directory, DNS, DHCP). Objectif : disposer d’une plateforme stable pour pratiquer l’administration, le réseau et la cybersécurité.',
        technologies: ['VirtualBox', 'VMware', 'Windows Server', 'Windows 10', 'Ubuntu', 'Kali Linux', 'Security Onion', 'pfSense', 'Active Directory', 'DNS', 'DHCP'],
        role: 'Administratrice Systèmes Junior',
        duration: '3 mois',
        team: 'Projet solo',
        details: {
            context: 'Projet académique visant à maîtriser les environnements virtualisés et la configuration de serveurs.',
            objectives: [
                'Construire un parc de machines virtuelles représentatif (clients, serveurs, sécurité)',
                'Mettre en place un domaine Active Directory et les services de base (DNS/DHCP)',
                'Segmenter et sécuriser le lab via pfSense (routage, filtrage, NAT)',
                'Documenter l’architecture et les configurations pour réutilisation'
            ],
            achievements: [
                'Déploiement d’un parc de VM (Windows Server/10, Ubuntu, Kali, Security Onion, pfSense)',
                'Mise en place d’un contrôleur de domaine Active Directory',
                'Configuration DNS et DHCP opérationnels',
                'Règles pare-feu, NAT et segmentation réseau sur pfSense',
                'Environnement réutilisable comme base pour d’autres TP/projets'
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
        gallery: []
    },
    {
        id: 2,
        title: 'Logiciel de Gestion de Stock',
        category: 'development',
        icon: '💰',
        image: null,
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
        shortDescription: 'Sites web réalisés en HTML/CSS/JS avec assistance IA (structure, contenu, itérations rapides).',
        description: 'Création de plusieurs sites web statiques avec une approche simple et efficace : HTML, CSS et JavaScript, en s’appuyant sur des outils IA pour accélérer la production et améliorer la qualité (structure, textes, variantes de design).',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Outils IA', 'GitHub Pages'],
        role: 'Créatrice Digitale & Développeuse Frontend',
        duration: 'Continu',
        team: 'Projets personnels',
        details: {
            context: 'Exploration des possibilités offertes par l\'IA dans le domaine du développement web.',
            objectives: [
                'Produire rapidement des sites web statiques propres et responsive',
                'Utiliser l’IA comme assistant (itération, mise en page, contenu) sans complexifier le stack',
                'Publier et maintenir des sites (ex. GitHub Pages)'
            ],
            achievements: [
                'Développement de plusieurs pages/sites en HTML/CSS/JS avec assistance IA',
                'Amélioration itérative du design et du contenu',
                'Mise en ligne de sites statiques'
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
                { name: 'LINUX-serv', url: 'https://tudertshr.github.io/LINUX-serv/#top' },
                { name: 'Boo-gie', url: 'https://tudertshr.github.io/boo-gie/#home' },
                { name: 'Boo-gie (site)', url: 'https://boo-gie.github.io/web/' },
                { name: 'Vulnérabilités — théorie', url: 'https://tudertshr.github.io/Vulnerabilites-theorie/#vulnerabilites' },
                { name: 'TP vulnérabilités', url: 'https://tudertshr.github.io/TP-vulnerabilites/' },
                { name: 'Vulnérabilités — résumé', url: 'https://tudertshr.github.io/Vul-resume/' },
                { name: 'Cours', url: 'https://tudertshr.github.io/cours/' },
                { name: 'Suite sécurité', url: 'https://tudertshr.github.io/suite-securite/' },
                { name: 'Exam', url: 'https://tudertshr.github.io/exam/' },
                { name: 'Tendances', url: 'https://tudertshr.github.io/tendances/#introduction' },
                { name: 'Script', url: 'https://tudertshr.github.io/script/' }
            ]
        },
        gallery: []
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
        shortDescription: 'Mise en place d’ACL, règles pfSense et segmentation pour sécuriser une infrastructure simulée.',
        description: 'Mise en place de politiques de sécurité réseau : ACL (Cisco), règles pfSense (filtrage, NAT), segmentation et contrôle des flux. Le projet est documenté et illustré par des captures de configuration.',
        technologies: ['ACL', 'Cisco IOS', 'pfSense', 'Firewall', 'Routage', 'NAT', 'Segmentation', 'VPN'],
        role: 'Technicienne Réseau et Sécurité',
        duration: '2 mois',
        team: 'Binôme académique',
        details: {
            context: 'Projet académique de sécurité réseau visant à protéger une infrastructure simulée.',
            objectives: [
                'Définir une politique de filtrage (flux autorisés/interdits)',
                'Configurer des ACL et des règles pfSense',
                'Segmenter le réseau et valider l’accès selon les besoins'
            ],
            achievements: [
                'Configuration d’ACL sur routeurs Cisco',
                'Création de règles pfSense (filtrage, NAT) et validation par tests',
                'Segmentation du réseau en zones de sécurité'
            ],
            challenges: ['Équilibre entre sécurité et accessibilité', 'Gestion des faux positifs'],
            results: 'Infrastructure réseau sécurisée avec trafic contrôlé.',
            learnings: ['Principes de sécurité réseau', 'Configuration avancée de pare-feu', 'Méthodologie de tests de sécurité']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
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
        shortDescription: 'Conception et tests de topologies (LAN/WAN), VLAN, routage et services (DNS/DHCP).',
        description: 'Conception et simulation de topologies réseau (LAN/WAN) avec Cisco Packet Tracer : VLAN, routage, adressage IP, et scénarios incluant des services (DNS/DHCP) et de la segmentation.',
        technologies: ['Cisco Packet Tracer', 'Routage', 'VLAN', 'TCP/IP', 'DNS', 'DHCP', 'Switching'],
        role: 'Étudiante en Réseau',
        duration: '4 mois',
        team: 'Projets académiques',
        details: {
            context: 'Projet de simulation réseau dans le cadre de la formation en administration réseau.',
            objectives: ['Maîtriser Cisco Packet Tracer', 'Configurer VLAN + routage et valider par tests', 'Mettre en place des scénarios réalistes (services et segmentation)'],
            achievements: ['Conception de plusieurs topologies réseau', 'Configuration de VLAN, routage et switching', 'Scénarios de tests et validation de connectivité'],
            challenges: ['Debugging de configurations', 'Cohérence d’adressage et de routage'],
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
        shortDescription: 'Mise en place d’outils SOC (Security Onion, Kibana/Sguil) + analyse de vulnérabilités (CVE/CVSS/CWE).',
        description: 'Travaux en laboratoire orientés défense et analyse : déploiement et configuration d’outils de supervision (Security Onion, Snort, Sguil, Kibana), collecte/lecture de logs, et analyse de vulnérabilités (CVE, CVSS, CWE) avec des outils réseau (Wireshark, Nmap).',
        technologies: ['Kali Linux', 'Security Onion', 'Snort', 'pfSense', 'Wireshark', 'Nmap', 'Sguil', 'Kibana'],
        role: 'Analyste Sécurité Junior',
        duration: '4 mois',
        team: 'Projet académique',
        details: {
            context: 'Laboratoire de sécurité visant à comprendre les vecteurs d\'attaque et à mettre en place des contre-mesures.',
            objectives: ['Déployer un IDS/IPS et une supervision type SOC', 'Analyser et corréler des événements sécurité', 'Analyser des vulnérabilités (CVE/CVSS/CWE)'],
            achievements: ['Configuration de Snort comme IDS/IPS', 'Monitoring et analyse via Sguil et Kibana', 'Analyse de vulnérabilités et rédaction de synthèses'],
            challenges: ['Configuration fine de Snort pour minimiser les faux positifs', 'Corrélation des événements dans le SIEM'],
            results: 'Mise en place et exploitation d’un mini-lab SOC pour l’analyse et la supervision sécurité.',
            learnings: ['Supervision et analyse de logs', 'Utilisation d’outils SIEM/SOC', 'Analyse de vulnérabilités (CVE/CVSS/CWE)']
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
        shortDescription: 'Simulations d’attaques en environnement de test pour comprendre les vecteurs et améliorer la détection.',
        description: 'Projet séparé dédié aux simulations d’attaques en laboratoire (phishing, brute force, SQL injection, etc.) afin de comprendre les vecteurs, observer les traces, et améliorer la détection/mitigation.',
        technologies: ['Kali Linux', 'Linux', 'Windows', 'Sécurité applicative', 'Phishing', 'Brute force', 'SQL Injection'],
        role: 'Analyste Sécurité Junior',
        duration: '—',
        team: 'Projet académique',
        details: {
            context: 'Séparer clairement la partie “analyse/défense” (SOC, logs, vulnérabilités) de la partie “simulations d’attaques”.',
            objectives: [
                'Réaliser des simulations contrôlées pour apprendre les étapes et les indicateurs',
                'Documenter les résultats (captures, traces, points d’amélioration)',
                'Relier chaque simulation à des mesures de mitigation'
            ],
            achievements: [
                'Simulations de scénarios (phishing, brute force, SQLi) en environnement de test',
                'Collecte de traces et captures pour documentation',
                'Synthèse des mesures de mitigation'
            ],
            challenges: ['Garder un cadre 100% laboratoire/éthique', 'Rendre les scénarios reproductibles et documentés'],
            results: 'Meilleure compréhension des vecteurs d’attaque et des traces observables côté défense.',
            learnings: ['Méthodologie de simulation en lab', 'Indicateurs/IoC de base', 'Lien attaque → détection → mitigation']
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
        image: null,
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
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png']
    },

    /* Pour ajouter un projet : copiez un bloc ci-dessus, changez l'id et les champs.
       Catégories : security | network | development | achievement
       Pour supprimer un projet : supprimez tout le bloc { id: X, ... }, */
];
