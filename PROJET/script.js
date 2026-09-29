/**
 * ==================== CONFIGURATION DES PROJETS ====================
 * 
 * Ce fichier permet de personnaliser facilement la section Projets de votre portfolio.
 * Modifiez les données ci-dessous selon vos besoins.
 * 
 * CATÉGORIES DISPONIBLES : security | network | development | achievement | business
 * Pour ajouter une catégorie : modifiez aussi les filtres dans index.html
 * et categoryGradients/categoryFAIcons/getCategoryName/getCategoryIcon dans script.js
 *
 * IMAGES DE COUVERTURE : chaque projet déclare lui-même ses deux images
 *   image: { clair: 'img/covers/clair/...', sombre: 'img/covers/sombre/...' }
 * Le bon fichier est choisi automatiquement selon le thème (fonction themedCover dans script.js).
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
        title: 'Sécurité en laboratoire : SIEM, IDS/IPS et vulnérabilités',
        category: 'security',
        icon: '🔍',
        image: {
            clair:  'img/covers/clair/cover-P8.png',
            sombre: 'img/covers/sombre/cover-p8.jpg'
        },
        year: '2026',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Analyse SOC en lab : Security Onion (Snort/Sguil/Kibana) + PCAP Wireshark + CVE/CVSS/CWE.',
        description: 'Travaux de laboratoire orientés défense : analyse d’attaques déjà simulées via captures réseau (PCAP) et logs, puis investigation/tri dans Security Onion (Snort → alertes, Sguil/Kibana → recherche et corrélation). En parallèle, analyse de vulnérabilités avec le triptyque CVE (référence), CVSS (score) et CWE (famille) afin de qualifier les failles et comprendre leur impact.',
        technologies: ['Security Onion', 'Snort', 'Sguil', 'Kibana', 'Wireshark (PCAP)', 'Nmap', 'CVE', 'CVSS', 'CWE', 'Kali Linux'],
        role: 'Analyste sécurité',
        duration: '—',
        team: 'Individuel',
        type: 'Projet académique',
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
        id: 2,
        title: 'Mise en place de la sécurité réseau',
        category: 'security',
        icon: '🛡️',
        image: {
            clair:  'img/covers/clair/cover-P5.png',
            sombre: 'img/covers/sombre/cover-p5.jpg'
        },
        year: '2026',
        status: 'Terminé',
        featured: true,
        shortDescription: 'ACL Cisco + règles pfSense (filtrage) + tests via scan Nmap déclenchant une alerte IDS.',
        description: 'Projet académique de sécurisation d’une infrastructure simulée : mise en place d’ACL (standard et étendues) sur routeur Cisco, configuration de règles de filtrage sur pfSense et segmentation du réseau. J’ai validé la posture par des tests contrôlés (scan Nmap depuis une machine Windows vers l’interface pfSense), qui a généré une alerte IDS, confirmant la détection côté périmètre. Le focus est sur le filtrage/contrôle des flux (pas de VPN, pas de NAT dans ce projet).',
        technologies: ['Cisco IOS', 'ACL (standard/étendues)', 'pfSense', 'Firewall', 'Segmentation', 'DHCP', 'Routage', 'Windows 10', 'Nmap', 'IDS/Alerting'],
        role: 'Administratrice réseau / sécurité',
        duration: '2 mois',
        team: 'Individuel',
        type: 'Projet académique',
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
        links: { demo: null, github: null, documentation: null, pdf: 'doc/Rapport_PFSENSE.pdf', photos: ['img/TP4.png'] },
        gallery: [ 'img/PF1.png','img/PF2.png']
    },
    {
        id: 3,
        title: 'Infrastructure Windows Server – Novapharm',
        category: 'network',
        icon: '🖥️',
        image: {
            clair:  'img/covers/clair/cover-P11.png',
            sombre: 'img/covers/sombre/cover-p11.jpg'
        },
        year: '2025',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Déploiement complet d\'une infrastructure d\'entreprise sous Windows Server 2019 : RAID 5, AD, DNS, DHCP, GPO.',
        description: 'Mise en place d\'une infrastructure réseau pour l\'entreprise fictive Nova-Pharm.',
        technologies: ['Windows Server 2019', 'RAID 5', 'Active Directory', 'DNS', 'DHCP', 'GPO', 'VirtualBox', 'HP ProLiant'],
        role: 'Administratrice système',
        duration: '2 mois',
        team: 'Individuel',
        type: 'Projet académique',
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
        id: 4,
        title: 'Automatisation système avec l’IA',
        category: 'network',
        icon: '⚙️',
        image: {
            clair:  'img/covers/clair/cover-P17.png',
            sombre: 'img/covers/sombre/cover-p17.png'
        },
        year: '2026',
        status: 'Terminé',
        featured: true,
        shortDescription: '7 scripts Bash triés pour administrer mon lab Linux : changement d\'IP, intégration au domaine LDAP et chaîne AAA FreeRADIUS (authentification, autorisation, accounting, supervision).',
        description: 'Scripts Bash écrits avec l\'aide de l\'IA pour automatiser les tâches répétitives de mon lab OpenLDAP / FreeRADIUS / Zabbix. Le plus utile : un script qui met à jour l\'IP dans tous les fichiers de configuration quand je passe du stage à chez moi.',
        technologies: ['Bash', 'Linux (Ubuntu)', 'SSSD', 'OpenLDAP', 'PAM', 'Netplan', 'FreeRADIUS', 'AAA', 'Zabbix', 'sed / awk', 'Outils IA'],
        role: 'Administratrice système & automatisation',
        duration: '1 mois',
        team: 'Individuel',
        type: 'Projet lié au stage',
        details: {
            context: 'Mon lab change d\'adresse IP à chaque déplacement entre l\'entreprise et chez moi, et chaque intégration ou correction se refaisait à la main.',
            objectives: [
                'Ne plus modifier les fichiers de configuration à la main',
                'Intégrer une machine au domaine LDAP en une commande',
                'Automatiser la chaîne AAA de FreeRADIUS'
            ],
            achievements: [
                '7 scripts retenus après tri des doublons',
                'Sauvegarde et test avant chaque modification, avec retour arrière automatique',
                'Métriques Zabbix pour superviser accounting et authentification'
            ],
            challenges: [
                'Modifier des fichiers de configuration sans doublons ni service cassé',
                'Décrire précisément le besoin pour obtenir des scripts fiables avec l\'IA'
            ],
            results: 'Des scripts qui me font gagner du temps à chaque changement de réseau et fiabilisent le déploiement de mon lab.',
            learnings: [
                'Bash : arguments, conditions, gestion d\'erreurs',
                'sed, awk et grep pour éditer des configurations',
                'SSSD, PAM, LDAP et modèle AAA avec FreeRADIUS'
            ]
        },
        scripts: [
            {
                id: 'change-ip',
                group: 'Réseau',
                label: 'Changer l\'IP partout',
                filename: 'changer_ip.sh',
                order: 1,
                need: 'Pendant mon stage, je travaillais à l\'entreprise et je continuais mon travail chez moi. À chaque fois que je changeais de lieu, l\'adresse IP de ma machine changeait. Avant, je devais modifier manuellement tous les fichiers de configuration un par un — c\'était long et compliqué. Donc j\'ai créé ce script pour automatiser ça.',
                how: [
                    'J\'exécute le script avec sudo, en donnant l\'ancienne IP et la nouvelle IP.',
                    'Le script vérifie que les deux adresses sont valides et qu\'il s\'exécute bien en root.',
                    'Il parcourt tous les fichiers de configuration (Netplan, FreeRADIUS, Zabbix, LDAP, SSSD, PAM), cherche l\'ancienne IP et la remplace par la nouvelle.',
                    'Pour chaque fichier modifié, il garde une copie de secours dans /root/backup-ip-<date>.',
                    'Il redémarre les services concernés pour appliquer les changements.',
                    'Et voilà — en une seule commande, tout fonctionne avec la nouvelle IP.'
                ],
                usage: 'sudo ./changer_ip.sh ancienne_IP nouvelle_IP',
                code: `#!/bin/bash
# Remplace une adresse IP dans tous les fichiers de configuration du lab
# Usage : sudo ./changer_ip.sh <ancienne_ip> <nouvelle_ip>

[ "$EUID" -eq 0 ] || { echo "Veuillez exécuter ce script avec sudo."; exit 1; }
[ "$#" -eq 2 ]    || { echo "Usage : sudo $0 <ancienne_ip> <nouvelle_ip>"; exit 1; }

OLD="$1"; NEW="$2"
IPV4='^([0-9]{1,3}\\.){3}[0-9]{1,3}$'
[[ $OLD =~ $IPV4 && $NEW =~ $IPV4 ]] || { echo "Adresse IPv4 invalide."; exit 1; }

CIBLES=(/etc/netplan /etc/freeradius/3.0 /etc/zabbix /etc/ldap /etc/sssd /etc/pam.d)
BACKUP="/root/backup-ip-$(date +%Y%m%d-%H%M%S)"
OLD_RE="\${OLD//./\\\\.}"      # les points de l'IP deviennent littéraux dans sed/grep

echo "=== $OLD -> $NEW ==="

# 1. Remplacement, uniquement dans les fichiers qui contiennent l'ancienne IP
for CIBLE in "\${CIBLES[@]}"; do
    [ -e "$CIBLE" ] || continue
    grep -rlI "$OLD_RE\\b" "$CIBLE" 2>/dev/null | while read -r F; do
        mkdir -p "$BACKUP$(dirname "$F")" && cp -p "$F" "$BACKUP$F"   # copie de secours
        sed -i "s/$OLD_RE\\b/$NEW/g" "$F"
        echo "  modifié : $F"
    done
done

# 2. Dossier des logs d'accounting nommé d'après l'IP
RADACCT="/var/log/freeradius/radacct"
[ -d "$RADACCT/$OLD" ] && mv "$RADACCT/$OLD" "$RADACCT/$NEW" && echo "  dossier renommé : $RADACCT/$NEW"

# 3. Application du réseau puis redémarrage des services présents
command -v netplan >/dev/null && netplan apply
for S in freeradius sssd slapd zabbix-server zabbix-agent; do
    systemctl cat "$S" &>/dev/null && systemctl restart "$S" && echo "  redémarré : $S"
done

echo "Terminé. Copies de secours : $BACKUP"
`
            },
            {
                id: 'join-domain',
                group: 'Domaine',
                label: 'Rejoindre le domaine',
                filename: 'join_domain.sh',
                order: 2,
                need: 'Chaque fois que j\'ajoutais une nouvelle machine à mon lab, je devais faire des configurations répétitives à la main pour l\'intégrer au domaine LDAP. C\'était toujours la même chose. Donc j\'ai créé ce script pour intégrer une machine au domaine en une seule commande.',
                how: [
                    'J\'exécute le script avec sudo. Il installe d\'abord les paquets nécessaires : SSSD, PAM et NSS.',
                    'Il configure le réseau pour utiliser le serveur DNS du domaine.',
                    'Il crée le fichier de configuration SSSD qui dit à la machine où trouver l\'annuaire LDAP et comment s\'y connecter.',
                    'Il active mkhomedir pour créer automatiquement le dossier personnel des utilisateurs.',
                    'À la fin, il redémarre SSSD et la machine est intégrée au domaine.',
                    'Les utilisateurs du domaine peuvent maintenant se connecter dessus.'
                ],
                usage: 'sudo bash join_domain.sh',
                note: 'Avant de lancer : remplacer MOT_DE_PASSE_ADMIN_LDAP par le vrai mot de passe. Les utilisateurs du domaine (mshr, scher, g01...) doivent exister dans l\'annuaire LDAP avant de pouvoir se connecter.',
                code: `#!/bin/bash
# Script intégration client LDAP — dom10.dz
# Avant de lancer : remplacer MOT_DE_PASSE_ADMIN_LDAP par le mot de passe du compte admin LDAP.
set -e

echo "[*] Installation des paquets SSSD..."
sudo apt update && sudo apt install -y sssd sssd-ldap libpam-sss libnss-sss

echo "[*] Configuration réseau Netplan..."
sudo bash -c "cat > /etc/netplan/01-network-manager-all.yaml" <<EOF
network:
  version: 2
  renderer: networkd
  ethernets:
    ens33:
      dhcp4: true
      dhcp4-overrides:
        use-dns: no
      nameservers:
        addresses: [192.168.1.254, 192.168.1.66, 8.8.8.8]
        search: [dom10.dz]
EOF
sudo chmod 600 /etc/netplan/01-network-manager-all.yaml
sudo netplan apply

echo "[*] Configuration SSSD..."
sudo bash -c "cat > /etc/sssd/sssd.conf" <<EOF
[sssd]
services = nss, pam
config_file_version = 2
domains = default

[domain/default]
id_provider = ldap
auth_provider = ldap
ldap_uri = ldap://192.168.1.66/
ldap_search_base = dc=dom10,dc=dz
cache_credentials = True
enumerate = True
ldap_default_bind_dn = cn=admin,dc=dom10,dc=dz
ldap_default_authtok = MOT_DE_PASSE_ADMIN_LDAP
ldap_id_use_start_tls = False
ldap_auth_disable_tls_never_use_in_production = True
EOF
sudo chown root:root /etc/sssd/sssd.conf
sudo chmod 600 /etc/sssd/sssd.conf

echo "[*] Activation PAM mkhomedir et SSSD..."
sudo pam-auth-update --enable mkhomedir
sudo systemctl restart sssd && sudo systemctl enable sssd

# Vérification finale
if getent passwd mshr > /dev/null 2>&1; then
    echo "[+] Utilisateur mshr trouvé via LDAP — intégration réussie."
else
    echo "[!] mshr non trouvé. Vérifier : sudo journalctl -u sssd -f"
fi
`
            },
            {
                id: 'aaa-auth',
                group: 'Serveur AAA',
                order: 1,
                label: 'Authentification',
                filename: '01_authentification.sh',
                need: 'Avant d\'utiliser FreeRADIUS, il faut lui dire où trouver les utilisateurs et leurs mots de passe. Dans mon lab, tous les utilisateurs sont dans l\'annuaire LDAP. Ce script configure FreeRADIUS pour chercher les identifiants dans LDAP au lieu de fichiers locaux.',
                how: [
                    'J\'exécute le script. Il commence par faire une copie de sauvegarde du fichier de configuration LDAP de FreeRADIUS.',
                    'Il configure les paramètres de connexion à LDAP : l\'adresse du serveur, le compte admin et le mot de passe.',
                    'Il active le module ldap dans FreeRADIUS et vérifie qu\'il est bien listé dans les sections authorize et authenticate.',
                    'Il teste la configuration avec freeradius -XC, et si c\'est bon, il redémarre FreeRADIUS.',
                    'À partir de là, FreeRADIUS cherche les utilisateurs dans LDAP au lieu de fichiers locaux.'
                ],
                usage: 'sudo bash 01_authentification.sh\nradtest utilisateur <mot_de_passe> IP_SERVEUR 0 <secret_radius>',
                note: 'Avant de lancer : remplacer MOT_DE_PASSE_ADMIN_LDAP par le vrai mot de passe du compte admin LDAP.',
                code: `#!/bin/bash
# Étape 1 — Authentification : brancher FreeRADIUS sur l'annuaire LDAP
# Usage : sudo bash 01_authentification.sh
set -e

LDAP_SERVER="192.168.1.66"
BIND_DN="cn=admin,dc=dom10,dc=dz"
BIND_PASS="MOT_DE_PASSE_ADMIN_LDAP"     # à remplacer avant de lancer
BASE_DN="dc=dom10,dc=dz"

MOD=/etc/freeradius/3.0/mods-available/ldap
SITE=/etc/freeradius/3.0/sites-enabled/default

[ -f "$MOD" ] || { echo "[!] Module absent : apt install freeradius-ldap"; exit 1; }

# Remplace la 1re occurrence d'un paramètre (commentée ou non) dans le module
setp() {
    sed -i -E "0,/^[[:space:]]*#?[[:space:]]*$1[[:space:]]*=/s|^[[:space:]]*#?[[:space:]]*$1[[:space:]]*=.*|    $1 = '$2'|" "$MOD"
}

echo "[1] Paramètres LDAP (sauvegarde : $MOD.bak)"
cp "$MOD" "$MOD.bak"
setp server   "$LDAP_SERVER"
setp identity "$BIND_DN"
setp password "$BIND_PASS"
setp base_dn  "$BASE_DN"

echo "[2] Activation du module ldap"
ln -sf "$MOD" /etc/freeradius/3.0/mods-enabled/ldap

echo "[3] 'ldap' présent dans authorize et authenticate ?"
for S in authorize authenticate; do
    if awk -v s="$S" '$0 ~ "^"s"[[:space:]]*\\\\{" {f=1} f && /^[[:space:]]*ldap[[:space:]]*$/ {ok=1} f && /^\\}/ {f=0} END {exit !ok}' "$SITE"; then
        echo "  ✓ $S"
    else
        echo "  ⚠ à ajouter dans $SITE, section $S { ... } : ldap"
    fi
done

echo "[4] Test de la configuration"
if freeradius -XC >/dev/null 2>&1; then
    systemctl restart freeradius && echo "  ✓ FreeRADIUS redémarré"
else
    echo "  ✗ Configuration invalide : restauration"
    cp "$MOD.bak" "$MOD"
    exit 1
fi

echo "Test : radtest mshr <mot_de_passe> $LDAP_SERVER 0 <secret_radius>   (Access-Accept attendu)"
`
            },
            {
                id: 'aaa-authz',
                group: 'Serveur AAA',
                order: 2,
                label: 'Autorisation',
                filename: '02_autorisation.sh',
                need: 'Maintenant que FreeRADIUS sait qui est connecté, il faut lui dire quels droits donner selon le groupe de l\'utilisateur. Un administrateur n\'a pas les mêmes droits qu\'un utilisateur standard ou un invité. Ce script configure ça : durée de session, VLAN autorisé, filtres réseau.',
                how: [
                    'J\'exécute le script. Il sauvegarde d\'abord le fichier de configuration.',
                    'Il crée un bloc de code qui dit : si l\'utilisateur est dans le groupe "admins", donne-lui accès au VLAN 10 et 8 heures de session.',
                    'Si c\'est un "user", VLAN 20 et 1 heure. Si c\'est un "invite", VLAN 30 et 30 minutes.',
                    'Pour tout autre groupe, la connexion est refusée.',
                    'Il teste la configuration, et si c\'est bon, redémarre FreeRADIUS.',
                    'À partir de là, chaque utilisateur reçoit des droits différents selon son groupe.'
                ],
                usage: 'sudo bash 02_autorisation.sh',
                code: `#!/bin/bash
# Étape 2 — Autorisation : droits selon le groupe LDAP (durée, filtre, VLAN)
#   admins -> VLAN 10 | users -> VLAN 20 | invites -> VLAN 30 | autres -> refusés
# Usage : sudo bash 02_autorisation.sh
set -e

FILE=/etc/freeradius/3.0/sites-enabled/default
BLOC=/tmp/authz.unlang

if grep -q ">>> AUTORISATION PAR GROUPE LDAP" "$FILE"; then
    echo "Règles déjà présentes, rien à faire."; exit 0
fi

echo "[1] Sauvegarde : $FILE.bak"
cp "$FILE" "$FILE.bak"

echo "[2] Bloc unlang à insérer dans post-auth"
cat > "$BLOC" <<'UNLANG'
    # >>> AUTORISATION PAR GROUPE LDAP
    if (LDAP-Group == "admins") {
        update reply {
            Reply-Message := "Bienvenue Administrateur"
            Session-Timeout := 28800
            Idle-Timeout := 3600
            Filter-Id := "permit_all"
            Tunnel-Type := VLAN
            Tunnel-Medium-Type := IEEE-802
            Tunnel-Private-Group-Id := "10"
        }
    }
    elsif (LDAP-Group == "users") {
        update reply {
            Reply-Message := "Accès standard"
            Session-Timeout := 3600
            Idle-Timeout := 600
            Filter-Id := "permit_web_only"
            Tunnel-Type := VLAN
            Tunnel-Medium-Type := IEEE-802
            Tunnel-Private-Group-Id := "20"
        }
    }
    elsif (LDAP-Group == "invites") {
        update reply {
            Reply-Message := "Accès invité (30 min)"
            Session-Timeout := 1800
            Idle-Timeout := 300
            Filter-Id := "internet_only"
            Tunnel-Type := VLAN
            Tunnel-Medium-Type := IEEE-802
            Tunnel-Private-Group-Id := "30"
        }
    }
    else {
        update reply {
            Reply-Message := "Accès refusé : groupe non autorisé"
        }
        reject
    }
    # <<< AUTORISATION PAR GROUPE LDAP
UNLANG

# Insertion juste avant l'accolade fermante de post-auth
awk -v blk="$BLOC" '
    /^post-auth[[:space:]]*\\{/ { in_pa=1 }
    in_pa && /^\\}/ { while ((getline l < blk) > 0) print l; in_pa=0 }
    { print }' "$FILE" > /tmp/site.new
cat /tmp/site.new > "$FILE"      # conserve le lien symbolique et les droits

echo "[3] Test de la configuration"
if freeradius -XC >/dev/null 2>&1; then
    systemctl restart freeradius && echo "  ✓ Règles actives"
else
    echo "  ✗ Syntaxe invalide : restauration"
    cp "$FILE.bak" "$FILE"
    exit 1
fi
rm -f "$BLOC" /tmp/site.new
`
            },
            {
                id: 'accounting-fix',
                group: 'Serveur AAA',
                order: 3,
                label: 'Accounting',
                filename: 'accounting_fix.sh',
                need: 'Jusqu\'à présent, FreeRADIUS authentifie et autorise les utilisateurs, mais il n\'enregistre rien. Ce script configure FreeRADIUS pour écrire les logs des connexions et déconnexions.',
                how: [
                    'J\'exécute le script. Il arrête FreeRADIUS pour modifier sa configuration.',
                    'Il crée le dossier où FreeRADIUS va écrire les logs (radacct).',
                    'Il active le module "detail" et décommente les lignes qui enregistrent les sessions dans le bloc accounting.',
                    'Il teste la configuration, et si c\'est bon, redémarre FreeRADIUS.',
                    'À partir de là, FreeRADIUS enregistre qui s\'est connecté et quand.'
                ],
                usage: 'sudo bash accounting_fix.sh',
                code: `#!/bin/bash
# Script de correction accounting FreeRADIUS — Sécurisé (sans doublons)
set -e

echo "======================================"
echo " FreeRADIUS ACCOUNTING FIX"
echo "======================================"

# 1. ARRÊT SERVICE
echo "[1] Arrêt de FreeRADIUS..."
systemctl stop freeradius || true
pkill freeradius || true

# 2. CRÉATION ARBORESCENCE LOGS
echo "[2] Création arborescence logs..."
mkdir -p /var/log/freeradius/radacct/192.168.1.66
chown -R freerad:freerad /var/log/freeradius
chmod -R 755 /var/log/freeradius

# 3. ACTIVATION MODULE DETAIL
echo "[3] Activation module detail..."
if [ ! -e /etc/freeradius/3.0/mods-enabled/detail ]; then
    ln -s /etc/freeradius/3.0/mods-available/detail /etc/freeradius/3.0/mods-enabled/detail
fi

# 4. CORRECTION BLOC ACCOUNTING (sans doublons, décommentage intelligent)
echo "[4] Correction bloc accounting..."
FILE="/etc/freeradius/3.0/sites-enabled/default"
cp $FILE "\${FILE}.bak"

awk '
/accounting[[:space:]]*{/ { print $0; in_accounting=1; next }
in_accounting && /}/ {
    if (!found_detail) print "        detail"
    if (!found_unix) print "        unix"
    if (!found_radutmp) print "        radutmp"
    in_accounting=0; print $0; next
}
in_accounting {
    if ($0 ~ /^[[:space:]]*#?[[:space:]]*detail/) { found_detail=1; sub(/^[[:space:]]*#[[:space:]]*/,"        ") }
    else if ($0 ~ /^[[:space:]]*#?[[:space:]]*unix/) { found_unix=1; sub(/^[[:space:]]*#[[:space:]]*/,"        ") }
    else if ($0 ~ /^[[:space:]]*#?[[:space:]]*radutmp/) { found_radutmp=1; sub(/^[[:space:]]*#[[:space:]]*/,"        ") }
    print $0; next
}
{ print }' "$FILE" > /tmp/default.tmp && mv /tmp/default.tmp "$FILE"

# 5. TEST CONFIGURATION
echo "[5] Test de la configuration..."
if freeradius -XC; then
    echo " => Configuration valide."
else
    echo " => ERREUR. Restauration sauvegarde."
    mv "\${FILE}.bak" "$FILE"
    exit 1
fi

# 6. REDÉMARRAGE
echo "[6] Redémarrage FreeRADIUS..."
systemctl restart freeradius
systemctl enable freeradius

echo "[7] Statut :"
systemctl status freeradius --no-pager

echo "======================================"
echo " ACCOUNTING FIX APPLIQUE AVEC SUCCES "
echo "======================================"
`
            },
            {
                id: 'radwho',
                group: 'Serveur AAA',
                order: 4,
                label: 'Sessions actives',
                filename: 'radwho',
                need: 'Je veux savoir qui est actuellement en ligne sur mon serveur RADIUS. La commande radwho standard souvent ne fonctionne pas bien. Donc j\'ai écrit une version qui lit les logs de FreeRADIUS et affiche les sessions actives.',
                how: [
                    'Je copie ce script vers /usr/local/bin/ et je le rends exécutable.',
                    'Quand j\'exécute radwho, il lit les fichiers de logs detail de FreeRADIUS.',
                    'Il cherche les sessions "Start" (connexions) et "Stop" (déconnexions) pour voir qui est actuellement connecté.',
                    'Il affiche la liste des utilisateurs connectés et le nombre de sessions actives.'
                ],
                usage: 'sudo nano /usr/local/bin/radwho     # coller le script\nsudo chmod +x /usr/local/bin/radwho\nsudo radwho',
                code: `#!/bin/bash
LOGFILE="/var/log/freeradius/radacct/192.168.1.66/detail-$(date +%Y%m%d)"

if [ ! -r "$LOGFILE" ]; then
    echo "Erreur : Fichier log inaccessible — $LOGFILE"
    exit 1
fi

# Nettoyage fichiers temporaires
rm -f /tmp/user_*

# Extraction des noms d'utilisateurs et statuts
grep -E "User-Name|Acct-Status-Type" "$LOGFILE" | sed 's/"//g' | awk '{print $3}' > /tmp/parsed_log

# Calcul des sessions actives (Start sans Stop)
while read user && read status; do
    if [ "$status" = "Start" ]; then
        touch "/tmp/user_$user"
    else
        rm -f "/tmp/user_$user"
    fi
done < /tmp/parsed_log

echo "Utilisateurs actuellement connectes :"
ls /tmp/user_* 2>/dev/null | xargs -I {} basename {} | sed "s/user_//"
echo "Total : $(ls /tmp/user_* 2>/dev/null | wc -l) session(s) active(s)"
`
            },
            {
                id: 'radius-monitoring',
                group: 'Serveur AAA',
                order: 5,
                label: 'Supervision Zabbix',
                filename: 'radius_monitoring.sh',
                need: 'Maintenant que j\'ai un serveur AAA avec authentification, autorisation et accounting, je veux que mon outil de monitoring (Zabbix) surveille FreeRADIUS. Ce script remonte des métriques à Zabbix : connexions réussies, refusées, sessions actives, etc.',
                how: [
                    'Je copie ce script dans le dossier des scripts Zabbix et je le rends exécutable.',
                    'Je configure Zabbix avec une ligne UserParameter qui appelle ce script avec différents paramètres.',
                    'Le script lit les logs FreeRADIUS et compte les événements : authentifications réussies, refusées, sessions actives.',
                    'Zabbix récupère ces chiffres et les affiche dans des graphiques.',
                    'Du coup je vois l\'état du serveur AAA en temps réel.'
                ],
                usage: 'sudo cp radius_monitoring.sh /etc/zabbix/scripts/ && sudo chmod +x /etc/zabbix/scripts/radius_monitoring.sh\n# /etc/zabbix/zabbix_agentd.conf\nUserParameter=radius[*],/etc/zabbix/scripts/radius_monitoring.sh $1',
                note: 'Fusion de 3 anciens scripts de supervision. Demande auth = yes dans le bloc log de radiusd.conf, et que l\'utilisateur zabbix puisse lire les logs.',
                code: `#!/bin/bash
# Supervision Zabbix : métriques d'accounting et d'authentification FreeRADIUS
# Usage : radius_monitoring.sh <métrique>
# Installation : /etc/zabbix/scripts/radius_monitoring.sh (chmod +x)

ACCT="/var/log/freeradius/radacct/192.168.1.66/detail-$(date +%Y%m%d)"
AUTH="/var/log/freeradius/radius.log"

count() { local n; n=$(grep -c "$1" "$2" 2>/dev/null); echo "\${n:-0}"; }
sum()   { [ -r "$ACCT" ] && awk -v k="$1" '$1 == k {s += $3} END {print s + 0}' "$ACCT" || echo 0; }

case "$1" in
    total)      count "Acct-Status-Type" "$ACCT" ;;
    start)      count "Acct-Status-Type = Start" "$ACCT" ;;
    stop)       count "Acct-Status-Type = Stop" "$ACCT" ;;
    active)     a=$(( $(count "Acct-Status-Type = Start" "$ACCT") - $(count "Acct-Status-Type = Stop" "$ACCT") ))
                echo $(( a > 0 ? a : 0 )) ;;
    users)      grep "User-Name" "$ACCT" 2>/dev/null | cut -d'"' -f2 | sort -u | wc -l ;;
    bytes_in)   sum Acct-Input-Octets ;;
    bytes_out)  sum Acct-Output-Octets ;;
    auth_ok)    count "Login OK" "$AUTH" ;;
    auth_fail)  count "Login incorrect" "$AUTH" ;;
    *)          echo "Usage : $0 total|start|stop|active|users|bytes_in|bytes_out|auth_ok|auth_fail"; exit 1 ;;
esac

# Côté agent Zabbix (/etc/zabbix/zabbix_agentd.conf), une seule ligne suffit :
# UserParameter=radius[*],/etc/zabbix/scripts/radius_monitoring.sh $1
`
            }
        ],
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 5,
        title: 'Supervision réseau avec Zabbix',
        category: 'security',
        icon: '📡',
        image: {
            clair:  'img/covers/clair/cover-P14.png',
            sombre: 'img/covers/sombre/cover-p14.jpg'
        },
        year: '2026',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Installation complète Zabbix 7.4 sur Ubuntu 24.04, configuration d’agents, supervision DNS, création d’alertes et dépannage d’incidents réseau.',
        description: 'TP complet de supervision réseau et système en contexte SOC : installation de Zabbix 7.4 sur Ubuntu 24.04 LTS (dépôt officiel, paquets server/agent/frontend/MySQL/Apache), création et configuration de la base de données MySQL (import du schéma, gestion des droits, sécurité log_bin_trust), démarrage et activation des services, configuration de l’interface web, ajout d’hôtes à surveiller, création d’items, de triggers et d’alertes automatiques. Scénario de TP concret : un serveur DNS est tombé sans que personne ne s’en aperçoive pendant 2h. Objectif : mettre en place une supervision capable de détecter toute panne en moins de 30 secondes.',
        technologies: ['Zabbix 7.4', 'Ubuntu 24.04 LTS', 'MySQL', 'Apache', 'PHP', 'Zabbix Server', 'Zabbix Agent', 'Triggers', 'Items', 'Alertes', 'Supervision DNS', 'SOC'],
        role: 'Analyste SOC / Administratrice système',
        duration: '—',
        team: 'Individuel',
        type: 'Projet personnel',
        details: {
            context: 'TP SOC réaliste : un serveur DNS tombe silencieusement et personne ne le détecte pendant 2 heures. Mise en place de Zabbix pour éviter que cela se reproduise — avec détection automatique en moins de 30 secondes.',
            objectives: [
                'Installer Zabbix 7.4 sur Ubuntu 24.04 (dépôt officiel, paquets server/agent/frontend)',
                'Créer et configurer la base de données MySQL (import schéma, droits, sécurité)',
                'Démarrer et activer les services Zabbix Server, Zabbix Agent et Apache',
                'Configurer l’interface web et ajouter les hôtes à superviser',
                'Créer des items, triggers et alertes pour surveiller le service DNS',
                'Diagnostiquer et résoudre les erreurs d’installation fréquentes'
            ],
            achievements: [
                'Zabbix 7.4 installé et opérationnel sur Ubuntu 24.04 (server + agent + frontend)',
                'Base MySQL configurée avec import du schéma et gestion correcte des permissions (log_bin_trust repassé à 0 après import)',
                'Services démarrés et activés (systemctl enable zabbix-server zabbix-agent apache2)',
                'Hôtes ajoutés, items et triggers configurés pour la supervision DNS',
                'Alertes automatiques opérationnelles : détection de panne en < 30 secondes',
                'Module de dépannage documenté (erreurs MySQL, Apache, agent)'
            ],
            challenges: [
                'Gérer correctement la permission MySQL log_bin_trust_function_creators (temporaire puis remise à 0)',
                'Faire correspondre DBPassword dans zabbix_server.conf avec le mot de passe MySQL créé',
                'Comprendre la chaîne Server → Agent → Frontend → MySQL et dépannager chaque maillon'
            ],
            results: 'Infrastructure de supervision SOC complète et opérationnelle : Zabbix 7.4 surveille les services critiques en temps réel et déclenche des alertes automatiques dès qu’un service tombe.',
            learnings: [
                'Installation et administration de Zabbix 7.4 sur Linux',
                'Configuration MySQL pour une application de supervision (import schéma, droits, sécurité)',
                'Concepts SOC : métriques, items, triggers, seuils et alertes automatiques',
                'Dépannage systèmatique d’une stack Linux (MySQL + Apache + service Zabbix)'
            ]
        },
        links: {
            demo: 'https://tudertshr.github.io/ZABBIX/',
            github: null ,
            documentation: null,
            pdf: null,
            photos: []
        },
        gallery: []
    },
    {
        id: 6,
        title: 'Cluster haute disponibilité Linux',
        category: 'network',
        icon: '⚙️',
        image: {
            clair:  'img/covers/clair/cover-P15.png',
            sombre: 'img/covers/sombre/cover-p15.jpg'
        },
        year: '2026',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Déploiement d’un cluster HA Linux : 2 nœuds Ubuntu, IP virtuelle flottante (VIP), bascule automatique Apache2 avec Pacemaker/Corosync.',
        description: 'Déploiement et configuration d’un cluster haute disponibilité sur Linux (Ubuntu 24.04 LTS) avec Pacemaker, Corosync et PCS. Architecture : node1 (192.168.1.10 — maître actif) et node2 (192.168.1.11 — standby) partageant une IP virtuelle flottante (VIP : 192.168.1.100/24). En cas de défaillance du nœud maître, Pacemaker détecte la panne et bascule automatiquement la VIP et Apache2 sur node2 — sans intervention manuelle. Le projet couvre la configuration réseau statique (Netplan), l’installation des paquets, la création du cluster (auth, setup, start, enable), la définition des ressources (IPaddr2 + ocf:heartbeat:apache) groupées en webgroup, les contraintes de localisation, la désactivation de STONITH pour l’environnement virtuel, et les tests de bascule validés avec captures.',
        technologies: ['Ubuntu 24.04 LTS', 'Pacemaker', 'Corosync', 'PCS', 'Apache2', 'Netplan', 'IPaddr2', 'ocf:heartbeat:apache', 'STONITH', 'VIP (IP flottante)', 'VMware Workstation', 'resource-agents'],
        role: 'Administratrice système Linux',
        duration: '—',
        team: 'Individuel',
        type: 'Projet académique',
        details: {
            context: 'Déployer un cluster HA Linux réel en environnement virtualisé (VMware) : 2 nœuds Ubuntu avec bascule automatique d’Apache et d’une IP virtuelle, validé par des tests de failover et documenté avec captures.',
            objectives: [
                'Configurer le réseau statique via Netplan et la résolution de noms /etc/hosts sur les 2 nœuds',
                'Installer et activer pacemaker, corosync, pcs, apache2 et resource-agents',
                'Créer et initialiser le cluster "mycluster" (pcs host auth, pcs cluster setup/start/enable)',
                'Définir la ressource VIP (IPaddr2, 192.168.1.100) et Apache (webserver) groupées en webgroup',
                'Configurer la contrainte de localisation (node1 préféré) et tester la bascule automatique',
                'Documenter chaque étape avec captures d’écran réelles (pcs status, ip a, hostnamectl)'
            ],
            achievements: [
                'Cluster "mycluster" opérationnel : node1 (DC maître) et node2 (standby) — Online sur les 2 nœuds',
                'IP virtuelle flottante 192.168.1.100/24 bascule automatiquement en cas de panne de node1',
                'Apache2 géré exclusivement par Pacemaker (désactivé dans systemd pour éviter le conflit)',
                'Ressources groupées (webgroup : vip + webserver) pour bascule simultanée et cohérente',
                'Tests de failover validés et documentés avec pcs status avant/après bascule',
                'STONITH désactivé et no-quorum-policy configuré pour l’environnement virtuel à 2 nœuds'
            ],
            challenges: [
                'Synchronisation exacte de la configuration réseau (IPs statiques, /etc/hosts) entre les 2 nœuds',
                'Comprendre que Pacemaker doit gérer Apache exclusivement (ne pas le laisser dans systemd)',
                'Adapter STONITH et no-quorum-policy à un environnement virtuel sans matériel dédié'
            ],
            results: 'Cluster web HA Linux pleinement fonctionnel : bascule automatique de la VIP et d’Apache2 en < 30 secondes en cas de panne du nœud maître, validée par des tests de failover réels.',
            learnings: [
                'Architecture cluster HA Linux : Pacemaker, Corosync, PCS et resource-agents',
                'Configuration réseau statique avec Netplan sur Ubuntu 24.04',
                'Gestion des ressources cluster (IPaddr2, ocf:heartbeat:apache) et contraintes de localisation',
                'Test et validation du failover automatique en environnement virtualisé'
            ]
        },
        links: {
            demo: 'https://tudertshr.github.io/HA-CLUSTER--linux-/',
            github: null ,
            documentation: null,
            pdf: null,
            photos: []
        },
      gallery: ['img/lin1.png','img/lin2.png','img/lin3.png','img/lin4.png','img/lin4.png','img/lin5.png']
    },
    {
        id: 7,
        title: 'Étude et gestion des risques',
        category: 'security',
        icon: '✈️',
        image: {
            clair:  'img/covers/clair/cover-P16.png',
            sombre: 'img/covers/sombre/cover-p16.jpg'
        },
        year: '2026',
        status: 'Terminé',
        featured: true,
        shortDescription: 'Application complète de la méthode EBIOS Risk Manager au SI d\'un aéroport international : actifs, événements redoutés, scénarios de menaces et plan de traitement.',
        description: 'Étude de cas académique appliquant la méthode EBIOS Risk Manager au Système d\'Information d\'un aéroport international. Le travail couvre les 5 étapes officielles : étude du contexte (périmètre SI, actifs primaires et supports, acteurs), identification des événements redoutés avec leur impact, étude des scénarios de menaces (sources, types d\'attaques, vulnérabilités), analyse des risques via la formule Probabilité × Impact, et plan de traitement (réduire, éviter, accepter, transférer) avec mesures concrètes pour chaque risque.',
        technologies: ['EBIOS Risk Manager', 'Analyse de risques', 'Gestion des menaces', 'Cybersécurité SI', 'Modélisation des actifs'],
        role: 'Analyste risques / sécurité',
        duration: '—',
        team: 'Individuel',
        type: 'Projet académique',
        details: {
            context: 'Le périmètre couvre le SI complet d\'un aéroport international : interfaces passagers (bornes libre-service, biométrie), gestion des opérations (AODB, SITB), infrastructure critique (réseau LAN/Fibre, vidéosurveillance) et logistique commerciale (passerelles de paiement Duty Free).',
            objectives: [
                'Délimiter le périmètre du SI et identifier les actifs primaires et supports',
                'Cartographier les acteurs et leurs niveaux d\'accès',
                'Évaluer les besoins de sécurité (Confidentialité / Intégrité / Disponibilité)',
                'Identifier les événements redoutés et leurs impacts organisationnels',
                'Modéliser les sources de menaces, types d\'attaques et vulnérabilités',
                'Construire la matrice des risques et le plan de traitement'
            ],
            achievements: [
                'Cartographie complète des actifs : 5 actifs primaires, 9 actifs supports, 5 acteurs',
                'Tableau des besoins de sécurité CIA pour chaque actif',
                '8 événements redoutés identifiés avec impact détaillé (paralysie trafic, fuite biométrique, chaos bagages…)',
                '5 scénarios de menaces réalistes : Ransomware par phishing, Clé USB infectée (SITB), Social Engineering (Tour de Contrôle), Wi-Fi Spoofing, Bombe logique (employé malveillant)',
                'Matrice de risques 10 entrées : Probabilité × Impact → Niveau (Élevé/Moyen/Faible)',
                'Plan de traitement complet : EDR + Air-gap, VLAN, MFA, redondance fibre, chiffrement AODB, blocage USB, assurance Cyber'
            ],
            challenges: [
                'Identifier tous les actifs critiques d\'un SI aussi complexe qu\'un aéroport',
                'Évaluer objectivement la probabilité et l\'impact sans données statistiques réelles',
                'Choisir le bon type de traitement (réduire / éviter / accepter / transférer) selon le contexte'
            ],
            results: 'Étude EBIOS complète en 5 étapes avec cartographie des actifs, 5 scénarios de menaces réalistes et un plan de traitement actionnable pour sécuriser le SI aéroportuaire.',
            learnings: [
                'Maîtrise de la méthode EBIOS Risk Manager (5 étapes)',
                'Identification et classification des actifs SI',
                'Modélisation des menaces (sources, vecteurs, vulnérabilités)',
                'Construction d\'une matrice de risques et d\'un plan de traitement'
            ]
        },
        links: { demo: null, github: null, documentation: null, pdf: 'doc/EBIOS_AEROPORT.pdf', photos: [] },
        gallery: []
    },
    {
        id: 8,
        title: 'Administration réseau : VLAN, STP, DHCP, DNS, sécurité, etc.',
        category: 'network',
        icon: '🌐',
        image: {
            clair:  'img/covers/clair/cover-P13.png',
            sombre: 'img/covers/sombre/cover-p13.jpg'
        },
        year: '2026',
        status: 'En cours',
        featured: true,
        shortDescription: 'Pratique complète couche 2–3 : configuration VLAN/802.1Q, STP, EtherChannel, DHCP, DNS, sécurité L2 et labs CLI Cisco simulés.',
        description: 'Apprentissage et pratique approfondie de l’administration réseau couche 2–3 via des labs guidés et un terminal CLI Cisco simulé avec correction intelligente (IA). Les compétences couvertes : segmentation en VLANs (802.1Q, trunks, inter-VLAN routing), évitement des boucles réseau avec STP/RSTP (Root Bridge, états des ports), agrégation de liens EtherChannel (LACP/PAgP), configuration DHCP (processus DORA, relay, DHCPv6/SLAAC), DNS (résolution forward/reverse, zones, port 53), et sécurité L2 (Port Security, DHCP Snooping, DAI, prévention VLAN Hopping, ACL, durcissement IOS). Le tout pratiqué dans un terminal CLI simulé avec un scénario fictif d’infrastructure hôtel, où l’IA corrige les commandes et guide le dépannage.',
        technologies: ['Cisco IOS CLI', 'VLAN / 802.1Q', 'STP / RSTP', 'EtherChannel (LACP/PAgP)', 'DHCP / DHCPv6', 'DNS', 'Port Security', 'DHCP Snooping', 'DAI', 'ACL', 'GitHub Pages', 'JavaScript', 'Simulation CLI (IA)'],
        role: 'Administratrice réseau',
        duration: 'Continue',
        team: 'Individuel',
        type: 'Projet personnel',
        details: {
            context: 'Maîtriser la couche 2–3 et les services IP fondamentaux en entreprise, avec la logique de dépannage d’un professionnel — en pratiquant sur des labs CLI réalistes et un scénario de simulation hôtel.',
            objectives: [
                'Configurer et dépannager les VLANs, trunks 802.1Q et le routage inter-VLAN sur switches Cisco',
                'Comprendre et appliquer STP/RSTP : élection Root Bridge, états des ports, évitement des boucles',
                'Agréger des liens physiques avec EtherChannel (LACP / PAgP, Layer 2 et Layer 3)',
                'Configurer le service DHCP (DORA, relay, DHCPv6 stateful/stateless, SLAAC)',
                'Mettre en place et diagnostiquer le DNS (forward/reverse lookup, zones, port 53)',
                'Appliquer la sécurité L2 : Port Security, DHCP Snooping, DAI, prévention VLAN Hopping, ACL',
                'S’entraîner via un terminal CLI Cisco simulé (scénario hôtel fictif) avec correction intelligente par IA'
            ],
            achievements: [
                'Configuration complète VLAN : création, ports access/trunk, native VLAN, routage inter-VLAN',
                'Maîtrise STP/RSTP : root bridge, BPDUs, états des ports (blocking/listening/learning/forwarding)',
                'EtherChannel opérationnel : négociation LACP et PAgP, port-channel L2 et L3',
                'DHCP Server Cisco configuré : plages, exclusions, relay agent, DHCPv6 (SARR, SLAAC)',
                'DNS résolu : zones forward/reverse, dépannage avec nslookup et dig',
                'Sécurité L2 : Port Security (sticky MAC, violation), DHCP Snooping activé, DAI configuré, ACL standard et étendues',
                'Labs CLI validés dans le terminal simulé avec scénario hôtel fictif et retour IA'
            ],
            challenges: [
                'Comprendre les subtiles différences STP/RSTP et le comportement des ports selon la topologie',
                'Gérer correctement les modes de négociation EtherChannel (LACP vs PAgP, Active/Passive)',
                'Dépannage DHCP Snooping et DAI sans couper la connectivité légitime'
            ],
            results: 'Compétences solides en administration réseau couche 2–3, validées par des labs CLI et un simulateur IA — avec un réflexe de dépannage professionnel (commandes show, sauvegarde config, inventaire VLAN, NTP).',
            learnings: [
                'Configuration Cisco complète : VLAN, trunk, STP, EtherChannel, DHCP, DNS',
                'Sécurité réseau L2 : Port Security, Snooping, DAI, ACL, durcissement IOS',
                'Dépannage réseau structuré avec commandes show et analyse des logs'
            ]
        },
        links: {
            demo: 'https://tudertshr.github.io/ADMINISTRATEUR/',
            github: null ,
            documentation: null,
            pdf: null,
            photos: []
        },
        gallery: []
    },
    {
        id: 9,
        title: 'Installation d’OpenLDAP & phpLDAPadmin sur Ubuntu',
        category: 'network',
        icon: '📂',
        image: {
            clair:  'img/covers/clair/cover-P12.png',
            sombre: 'img/covers/sombre/cover-p12.jpg'
        },
        year: '2025',
        status: 'En cours',
        featured: false,
        shortDescription: 'Déploiement et configuration d\'un serveur OpenLDAP avec interface web phpLDAPadmin sur Ubuntu/Debian.',
        description: 'Mise en place complète d\'un serveur d\'annuaire LDAP sous Ubuntu à l\'aide d\'OpenLDAP (slapd), couplé à l\'interface web phpLDAPadmin pour l\'administration graphique. Le projet couvre la configuration du nom d\'hôte, l\'installation et la reconfiguration du serveur LDAP, la définition du domaine DNS de base, la gestion des mots de passe administrateur, ainsi que l\'intégration avec Apache pour exposer phpLDAPadmin via navigateur.',
        technologies: ['OpenLDAP', 'phpLDAPadmin', 'Ubuntu', 'Debian', 'Apache2', 'LDAP', 'slapd', 'ldap-utils'],
        role: 'Administratrice système Linux',
        duration: '1 semaine',
        team: 'Individuel',
        type: 'Projet académique',
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
        links: { demo: 'https://tudertshr.github.io/LINUX-serv/#LDHCP', github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png']
    },
    {
        id: 10,
        title: 'Laboratoire de virtualisation – parc de machines virtuelles',
        category: 'network',
        icon: '💻',
        image: {
            clair:  'img/covers/clair/cover-P1.png',
            sombre: 'img/covers/sombre/cover-p1.jpg'
        },
        year: '2024–2026',
        status: 'En cours',
        featured: false,
        shortDescription: 'Parc de VMs (VirtualBox/VMware) réutilisable pour tous mes TP réseau & notions de cybersécurité.',
        description: 'Création d’un laboratoire de virtualisation complet : déploiement d’un parc de machines virtuelles (Windows Server 2019, Windows 10, Ubuntu, Kali Linux, Security Onion) et configuration des bases nécessaires pour pratiquer l’administration, le réseau et les notions de cybersécurité. L’objectif n’est pas un “projet applicatif” unique, mais une plateforme réutilisable : selon les besoins, j’adapte les réseaux virtuels (isolé, host-only, accès Internet, interconnexions) pour reproduire des scénarios de TP et d’apprentissage.',
        technologies: ['VirtualBox', 'VMware', 'Windows Server 2019', 'Windows 10', 'Ubuntu', 'Kali Linux', 'Security Onion', 'Active Directory (AD DS)', 'DNS', 'DHCP', 'Réseaux virtuels'],
        role: 'Administratrice système & services',
        duration: '—',
        team: 'Individuel',
        type: 'Projet personnel',
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
        gallery: ['img/mach1.png','img/mach2.png','img/mach3.png','img/mach4.png','img/mach5.png']
    },
    {
        id: 11,
        title: 'Simulation réseau – topologies et routage avec Packet Tracer',
        category: 'network',
        icon: '🌐',
        image: {
            clair:  'img/covers/clair/cover-P6.png',
            sombre: 'img/covers/sombre/cover-p6.jpg'
        },
        year: '2024',
        status: 'En cours',
        featured: false,
        shortDescription: 'Topologies & routage (LAN/WAN) + VLAN + services (DNS/DHCP) avec WLAN/Wi-Fi.',
        description: 'Conception et simulation de topologies réseau (LAN/WAN) avec Cisco Packet Tracer : VLAN, routage, adressage IP, services (DNS/DHCP) et segmentation. J’ai aussi intégré une partie sans fil (WLAN / Wireless LAN) en ajoutant des équipements Wi-Fi (AP/clients) afin de valider la connectivité et les échanges réseau dans les scénarios.',
        technologies: ['Cisco Packet Tracer', 'Routage', 'VLAN', 'TCP/IP', 'DNS', 'DHCP', 'Switching', 'WLAN', 'Wireless LAN', 'Wi-Fi'],
        role: 'Étudiante en réseaux',
        duration: '—',
        team: 'Individuel',
        type: 'Projet académique',
        details: {
            context: 'Projet de simulation réseau dans le cadre de la formation en administration réseau.',
            objectives: ['Maîtriser Cisco Packet Tracer', 'Configurer VLAN + routage et valider par tests', 'Mettre en place des scénarios réalistes (services et segmentation)', 'Intégrer un WLAN/Wi‑Fi (AP + clients) et tester la connectivité'],
            achievements: ['Conception de plusieurs topologies réseau incluant le sans fil', 'Configuration VLAN, routage, switching et services DNS/DHCP', 'Scénarios de tests et validation de connectivité (LAN/WAN + WLAN)'],
            challenges: ['Debugging de configurations (VLAN / routage / Wi-Fi)', 'Cohérence d’adressage et de routage entre réseaux'],
            results: 'Expertise dans la simulation et la configuration réseau.',
            learnings: ['Maîtrise de Cisco Packet Tracer', 'Compréhension approfondie des protocoles réseau']
        },
        links: { demo: null, github: null, documentation: null, pdf: null, photos: [] },
        gallery: ['img/TP1.png','img/TP2.png','img/TP3.png','img/TP4.png','img/TP5.png','img/TP6.png']
    },
    {
        id: 12,
        title: 'Simulation d’attaques : phishing, brute force, SQLi, etc.',
        category: 'security',
        icon: '🎯',
        image: {
            clair:  'img/covers/clair/cover-P9.png',
            sombre: 'img/covers/sombre/cover-p9.jpg'
        },
        year: '2025',
        status: 'En cours',
        featured: false,
        shortDescription: 'Lab offensif contrôlé : brute force (wordlist), phishing (Zphisher), analyse SQLi et SMB.',
        description: 'Projet laboratoire (éthique et contrôlé) pour comprendre les étapes d’attaque, observer les indices et l’impact : brute force depuis Kali vers une VM Windows 10 (avec wordlist créée manuellement), tests sur partage SMB, phishing via Zphisher (pages clones type Facebook/Instagram/GitHub) uniquement en environnement perso, et analyse d’une attaque SQLi à partir de traces/captures existantes (logique du “1=1”, énumération tables/colonnes, extraction).',
        technologies: ['Kali Linux', 'Linux', 'Windows 10', 'Brute force', 'Wordlists', 'SMB', 'Phishing', 'Zphisher', 'SQL Injection', 'Analyse de traces'],
        role: 'Pentesteuse / Ethical Hacker',
        duration: '—',
        team: 'Individuel',
        type: 'Projet personnel',
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
        id: 13,
        title: 'Haute disponibilité – cluster de serveurs',
        category: 'network',
        icon: '⚡',
        image: {
            clair:  'img/covers/clair/cover-P10.png',
            sombre: 'img/covers/sombre/cover-p10.jpg'
        },
        year: '2026',
        status: 'En cours',
        featured: false,
        shortDescription: 'HA en lab : 2 Windows Server + AD + disque “BD” partagé (cluster passif).',
        description: 'J’ai installé deux machines Windows Server : Server 1 et Server 2. J’ai créé Active Directory sur Server 1 (domaine configuré), puis j’ai ajouté Server 2 au domaine pour qu’il fasse partie du même environnement Active Directory. Pour la simulation du stockage, j’ai aussi utilisé une machine Windows 10 : j’y ai créé un disque de données nommé “BD” et je l’ai partagé/attaché aux deux serveurs (montage identique : disque d’abord connecté à Server 1, puis même disque connecté à Server 2). Les deux serveurs reconnaissent le disque, mais la limite principale que j’ai rencontrée est que les deux VM Windows ne peuvent pas écrire en même temps sur le même disque virtuel. J’ai documenté ce comportement avec des captures. Pour tenter d’améliorer la concurrence, j’ai modifié le fichier de configuration `.vmx` du disque (WindowsDisk.vmx) afin d’activer le mode “multiwriter”. Malgré cela, le TP n’est pas 100% efficient : on n’a pas mis en place un cluster actif, mais un cluster plutôt passif. Concrètement : on peut modifier des données des deux côtés, mais pas simultanément. Je laisse l’installation de “HP API” telle qu’elle a été faite (bien configurée).',
        technologies: ['Windows Server', 'Windows 10', 'Active Directory (AD DS)', 'Disque partagé', 'Clustering', 'HA', 'Multiwriter (VMX)', 'WindowsDisk.vmx', 'VMware', 'VirtualBox'],
        role: 'Administratrice système',
        duration: '2 mois',
        team: 'Individuel',
        type: 'Projet académique',
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
        id: 14,
        title: 'Olympiades des Métiers 2025 – Administration & Sécurité des réseaux',
        category: 'achievement',
        icon: '🏅',
        image: {
            clair:  'img/covers/clair/cover-P7.png',
            sombre: 'img/covers/sombre/cover-p7.jpg'
        },
        year: '2025',
        status: 'Terminé',
        featured: false,
        shortDescription: '1ère place phase Wilaya — Infrastructure réseau complète d\'entreprise déployée en ~5h avec rapport final. Éliminée pour dépassement d\'âge (22 ans).',
        description: 'Dans le cadre des Olympiades des Métiers (phase Wilaya), j\'ai conçu et déployé en environ 5 heures une infrastructure réseau d\'entreprise complète pour la société fictive SoummamTech Solutions. Le travail comprenait la configuration d\'Active Directory (AD DS), DNS, DHCP, la création d\'unités d\'organisation (UO), de groupes de sécurité, d\'utilisateurs, les droits NTFS + partage SMB différenciés, les GPO, et les mesures de sécurité. Un rapport de configuration complet a été produit à la fin de l\'épreuve. Classée 1ère place à la phase Wilaya, mais éliminée pour dépassement d\'âge (22 ans).',
        technologies: ['Windows Server 2019', 'Active Directory (AD DS)', 'DNS', 'DHCP', 'GPO', 'NTFS', 'SMB', 'VMware', 'Windows Defender'],
        role: 'Compétitrice en administration et sécurité des réseaux',
        duration: '5 h',
        team: 'Individuel',
        type: 'Compétition',
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
        id: 15,
        title: 'Bougies artisanales – Branding & Web',
        category: 'business',
        icon: '🕯️',
        image: {
            clair:  'img/covers/clair/cover-P4.png',
            sombre: 'img/covers/sombre/cover-p4.jpg'
        },
        year: '2025',
        status: 'En cours',
        featured: false,
        shortDescription: 'Identité de marque Boo-gie! + site vitrine & commande personnalisée.',
        description: 'J’ai créé Boo-gie! de A à Z : logotype (le “doggo” de la marque), identité visuelle et déclinaisons, puis un site vitrine pour présenter le catalogue et permettre la création sur mesure. La direction artistique repose sur une palette inspirée de la cire et de la lumière (ton chaleureux, douceur et contraste), avec des images produit sélectionnées pour rendre l’univers de la marque immédiat. Le site propose un parcours simple : découverte → personnalisation (parfum, modèle, couleur, message) → panier → finalisation de commande. Les liens Instagram unifient la présence en ligne et renforcent la confiance via avis clients et galerie.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Branding', 'Identité visuelle', 'Canva', 'Instagram'],
        role: 'Product / Brand & Web',
        duration: '—',
        team: 'Avec une partenaire',
        type: 'Projet personnel',
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
        id: 16,
        title: 'Logiciel de gestion de stocks – Web App',
        category: 'development',
        icon: '💰',
        image: {
            clair:  'img/covers/clair/cover-P2.png',
            sombre: 'img/covers/sombre/cover-p2.jpg'
        },
        year: '2024',
        status: 'Terminé',
        featured: false,
        shortDescription: 'Gestion stock & ventes (boutique Boo-gie!) avec JSON (localStorage) + graphiques.',
        description: 'Logiciel créé pour mon atelier/boutique de bougies artisanales : gestion des produits, matières premières et emballages, suivi des ventes et des achats, et calculs associés. L’application est entièrement pensée en front-end avec HTML/CSS/JavaScript . Les données sont stockées localement via `localStorage` au format JSON (export/import), sans base de données côté serveur (donc pas de PHP/MySQL). Projet personnel : encore en évolution et amélioration des calculs/fiabilité.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'JSON (localStorage)', 'Export/Import JSON', 'UI tableaux & graphiques'],
        role: 'Développeuse web',
        duration: '1 mois',
        team: 'Individuel',
        type: 'Projet personnel',
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
                'Graphiques pour visualiser les ventes et les finances',
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
            learnings: ['Modélisation de données en JSON', 'Stockage local (localStorage) et export/import', 'Visualisation ', 'Optimisation du rendu et des calculs']
        },
        links: { demo: 'code/index.html', github: null, documentation: null, pdf: null, photos: [] },
        gallery: []
    },
    {
        id: 17,
        title: 'Création de sites web',
        category: 'development',
        icon: '🤖',
        image: {
            clair:  'img/covers/clair/cover-P3.png',
            sombre: 'img/covers/sombre/cover-p3.jpg'
        },
        year: '2024',
        status: 'En cours',
        featured: false,
        shortDescription: 'Bibliothèque de sites web avec IA : cours, révision/pratique et boutique.',
        description: 'Création de plusieurs sites web statiques (HTML/CSS/JavaScript) avec assistance IA pour accélérer la production (structure, contenu, variations de design). L’objectif ici est de regrouper mes sites par usage : pages de cours/référence, pages de révision/pratique (TP, résumés), et sites liés à ma boutique (expérience web pour Boo-gie!).',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Outils IA', 'GitHub Pages', 'Simulation CLI (JS)', 'API IA'],
        role: 'Développeuse web',
        duration: '—',
        team: 'Individuel',
        type: 'Projet personnel',
        details: {
            context: 'Utiliser l’IA comme accélérateur pour produire des sites web utiles et bien structurés. Une des réalisations phares est l’intégration d’un terminal CLI simulé avec correction intelligente basée sur l’IA, permettant de pratiquer les commandes Cisco dans un scénario fictif (infrastructure hôtel) directement dans le navigateur.',
            objectives: [
                'Produire rapidement des sites web statiques propres et responsive avec assistance IA',
                'Développer un terminal CLI simulé en JavaScript avec correction intelligente (IA) pour pratiquer les commandes Cisco',
                'Créer des scénarios de simulation réalistes (ex. : infrastructure réseau d’un hôtel fictif)',
                'Structurer les liens par catégories (cours, révision/pratique, administration réseau, boutique)',
                'Publier et maintenir les sites via GitHub Pages'
            ],
            achievements: [
                'Terminal CLI Cisco simulé en JS avec correction intelligente (IA) — scénario hôtel fictif complet',
                'Guide interactif Zabbix 7.4 : installation complète, supervision DNS, gestion des alertes (7 modules, 20 checkpoints)',
                'Guide HA Cluster Linux (Pacemaker/Corosync) : 2 nœuds Ubuntu, VIP flottante, bascule automatique Apache2 — documenté avec captures',
                'Sites de cours/référence réseau et sécurité (VLAN, STP, DNS, vulnérabilités)',
                'Sites de révision/pratique : TP vulnérabilités, résumés, scripts Linux',
                'Boutique Boo-gie! : vitrine + configurateur de commande personnalisée'
            ],
            challenges: [
                'Concevoir un terminal CLI Cisco convaincant et pédagogique en JavaScript pur avec retour IA',
                'Maintenir la cohérence et la qualité technique sur un grand nombre de sites',
                'Itérer vite sans accumuler de dette technique'
            ],
            results: 'Une bibliothèque de sites web couvrant l’administration réseau, la sécurité, la supervision et le développement — dont un terminal CLI simulé avec IA pour pratiquer Cisco, utilisable directement dans le navigateur.',
            learnings: [
                'Développement frontend HTML/CSS/JS et intégration d’IA pour la correction/simulation',
                'Conception de simulations interactives (CLI, checkpoints, progression)',
                'Publication et maintenance de sites statiques sur GitHub Pages',
                'Structuration de contenu technique complexe pour l’apprentissage'
            ]
        },
        links: {
            demo: null,
            github: null,
            documentation: null,
            pdf: null,
            photos: [],
            sites: [
                { name: 'Admin Réseau — NetAcademy ', url: 'https://tudertshr.github.io/ADMINISTRATEUR/' },
                { name: 'SOC — Zabbix Mastery : Guide Complet (7 modules, 20 checkpoints)', url: 'https://tudertshr.github.io/ZABBIX/' },
                { name: 'HA — Cluster Linux ', url: 'https://tudertshr.github.io/HA-CLUSTER--linux-/' },

                { name: 'Boutique — BougieSite ', url: 'https://boo-gie.github.io/web/' },

                { name: 'Cours — Vulnérabilités (théorie)', url: 'https://tudertshr.github.io/Vulnerabilites-theorie/#vulnerabilites' },
                { name: 'Cours — Cours', url: 'https://tudertshr.github.io/cours/' },
                { name: 'Cours — Suite sécurité', url: 'https://tudertshr.github.io/suite-securite/' },
                { name: 'Cours — Exam', url: 'https://tudertshr.github.io/exam/' },
                { name: 'Cours — Tendances', url: 'https://tudertshr.github.io/tendances/#introduction' },

                { name: 'Révision/Pratique — TP vulnérabilités', url: 'https://tudertshr.github.io/TP-vulnerabilites/' },
                { name: 'Révision/Pratique — Vulnérabilités', url: 'https://tudertshr.github.io/Vul-resume/' },
                { name: 'Révision/Pratique — LINUX-serv', url: 'https://tudertshr.github.io/LINUX-serv/#top' },
                { name: 'Révision/Pratique — Script', url: 'https://tudertshr.github.io/script/' }
            ]
        },
        gallery: []
    },

    /* Pour ajouter un projet : copiez un bloc ci-dessus, changez l'id et les champs.
       Catégories : security | network | development | achievement | business (Small Business)
       Pour supprimer un projet : supprimez tout le bloc { id: X, ... }, */
];
