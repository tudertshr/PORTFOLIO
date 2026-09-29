// ╔══════════════════════════════════════════════════════════════════════════╗
// ║              EXPÉRIENCES PROFESSIONNELLES — Données & Modal             ║
// ║   Ce fichier est chargé AVANT script.js dans index.html                 ║
// ║   Pour ajouter un stage / une expérience : copier un bloc ci-dessous,   ║
// ║   changer l'id, remplir les champs. La carte s'ajoute automatiquement   ║
// ║   dans la section « Expérience Professionnelle » du site, exactement   ║
// ║   comme les projets se génèrent depuis PROJET/script.js.                ║
// ║   Champs utilisés pour la carte : icon, type, status, title, company,   ║
// ║   period, duration, location, theme, summary (ou context), card_tags    ║
// ║   (ou technologies), practical_url / report_url (lien affiché).         ║
// ║   Types : "Stage" | "CDI" | "CDD" | "Alternance" | "Freelance"         ║
// ║   Status : "En cours" | "À venir" | "Terminé"                            ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const experiencesData = {

    // ────────────────────────────────────────────────────────────────────────
    // STAGE 01 — HighTech Compass
    // ────────────────────────────────────────────────────────────────────────
    'stage-01': {
        id: 'stage-01',
        type: 'Stage',
        status: 'Terminé',
        featured: true,
        icon: 'fas fa-shield-alt',

        title: 'Stagiaire — Administration Système & Sécurité Réseau',
        cover: 'img/covers/cover-stage.jpg',
        company: 'HighTech Compass',
        sector: 'Informatique & Télécommunications',
        location: 'Algérie',

        period: 'Mai 2025 — Juin 2025',
        duration: '1 mois',
        tutor: 'À compléter',

        theme: 'Authentification AAA Basée sur Serveur — FreeRADIUS + OpenLDAP',
        summary: "Rapport de stage complet (54 pages, réalisé en binôme) couvrant la théorie de l'authentification réseau (RADIUS, TACACS+, LDAP, 802.1X/EAP) et sa mise en œuvre pratique en trois étapes : AAA local sur routeur Cisco, AAA basé sur serveur côté routeur, puis déploiement personnel d'un serveur FreeRADIUS + OpenLDAP sous Ubuntu 24.04.",

        // ── Rapport théorique (section orange existante) ──────────────────
        report_url: 'doc/RAPPORT_DE_STAGE_.pdf',

        // ── Partie pratique (nouveau bouton foncé) ────────────────────────
        practical_url: 'https://tudertshr.github.io/AAA-freeRadius/',

        // ── Projets complémentaires ───────────────────────────────────────
        related_projects: [
            {
                label: 'Installation OpenLDAP & phpLDAPadmin',
                portfolio_id: 12,
                external_url: 'https://tudertshr.github.io/LINUX-serv/#LDHCP'
            },
            {
                label: 'Supervision Zabbix 7.4',
                portfolio_id: 14,
                external_url: 'https://tudertshr.github.io/ZABBIX/'
            }
        ],

        // ── Contenu modal ─────────────────────────────────────────────────
        context: "Face aux limites de la gestion locale des accès (duplication, absence de traçabilité), le stage explore le passage à une authentification AAA centralisée : d'abord sur routeur Cisco IOS (local puis délégué à un serveur RADIUS), puis via le déploiement personnel d'un serveur FreeRADIUS + OpenLDAP complet sous Ubuntu 24.04, domaine dom10.dz.",

        objectives: [
            "Configurer l'AAA local sur routeur Cisco IOS (comptes, privilèges, accounting)",
            "Faire évoluer le routeur vers une délégation RADIUS avec fallback local",
            "Déployer FreeRADIUS et OpenLDAP sur Ubuntu 24.04 LTS",
            "Intégrer une machine Linux cliente au domaine (SSSD / PAM)",
            "Mettre en place l'autorisation par groupe LDAP et la comptabilité des sessions",
            "Configurer l'authentification Wi-Fi 802.1X/EAP-TTLS et le VLAN dynamique",
            "Superviser le serveur AAA avec Zabbix (métriques et alertes)"
        ],

        tasks: [
            {
                icon: 'fas fa-router',
                label: 'AAA local & délégué sur routeur Cisco',
                desc: "Activation d'aaa new-model, comptes locaux par niveau de privilège, puis délégation des décisions à FreeRADIUS via un groupe de serveurs RADIUS avec compte de secours local (fallback)."
            },
            {
                icon: 'fas fa-network-wired',
                label: 'Intégration client Linux au domaine',
                desc: "Configuration SSSD et PAM pour intégrer la machine cliente dans le domaine dom10.dz et permettre l'authentification via l'annuaire LDAP."
            },
            {
                icon: 'fas fa-user-lock',
                label: 'Authentification utilisateur & machine',
                desc: "Mise en place de l'authentification centralisée via FreeRADIUS couplé à OpenLDAP — utilisateurs et machines authentifiés depuis le même annuaire."
            },
            {
                icon: 'fas fa-shield-alt',
                label: 'Autorisation par groupe (unlang)',
                desc: "Définition de trois niveaux d'accès (admins, users, invités) avec des politiques RADIUS différenciées (VLAN, durée de session, filtre) selon le groupe LDAP de l'utilisateur."
            },
            {
                icon: 'fas fa-chart-line',
                label: 'Comptabilité & supervision',
                desc: "Journalisation des sessions RADIUS (module detail) et intégration avec Zabbix pour la supervision en temps réel et la génération d'alertes automatiques."
            },
            {
                icon: 'fas fa-wifi',
                label: 'Authentification Wi-Fi & VLAN dynamique',
                desc: "Configuration 802.1X/EAP-TTLS pour le réseau sans-fil et attribution automatique de VLAN selon le groupe de l'utilisateur via attributs RADIUS."
            }
        ],

        technologies: [
            'Cisco IOS (AAA/RADIUS)', 'Ubuntu 24.04 LTS', 'FreeRADIUS', 'OpenLDAP', 'phpLDAPadmin',
            'SSSD', 'PAM', '802.1X / EAP-TTLS', 'VLAN 802.1Q', 'Zabbix', 'RADIUS', 'LDAP'
        ],

        results: "Chaîne AAA complète et documentée sur 54 pages : du routeur Cisco (local puis délégué) jusqu'au serveur FreeRADIUS/OpenLDAP personnel — authentification centralisée, autorisation différenciée par groupe, comptabilité des sessions avec alertes Zabbix, et authentification Wi-Fi EAP-TTLS avec VLAN dynamique.",

        skills_gained: [
            "Configuration AAA sur équipement Cisco IOS (local et délégué RADIUS)",
            "Architecture AAA et protocole RADIUS",
            "Administration FreeRADIUS et intégration LDAP (unlang)",
            "Gestion d'un annuaire OpenLDAP sous Linux",
            "Authentification réseau 802.1X et gestion de VLAN",
            "Supervision et alerting avec Zabbix"
        ],

        report_status: 'Terminé',
    },


    // ────────────────────────────────────────────────────────────────────────
    // STAGE 02 — Stage de fin d'études (PFE) — À VENIR
    // Thème, entreprise, lieu et dates exactes : à compléter
    // ────────────────────────────────────────────────────────────────────────
    'stage-02': {
        id: 'stage-02',
        type: "Stage de fin d'études",
        status: 'À venir',
        icon: 'fas fa-graduation-cap',
        card_tags: ['PFE', 'Mémoire', '6 mois'],

        title: "Stage de fin d'études (PFE) avec mémoire",
        company: 'Entreprise à définir',
        location: 'Lieu à définir',

        period: 'Novembre — Mai / Juin',
        duration: '6 mois',
        tutor: 'À compléter',

        theme: 'À définir',
        context: "Stage de fin d'études de six mois, avec rédaction d'un mémoire. Le contenu détaillé (contexte, missions, technologies) sera ajouté dès que le thème sera fixé.",

        report_label: 'Mémoire de fin d\'études',
        report_note: 'Le mémoire sera disponible à la fin du stage.',
    },

    /* ──────────────────────────────────────────────────────────────────────
       Pour ajouter une nouvelle expérience :
       1. Copier le bloc ci-dessus
       2. Changer l'id (ex : 'stage-03', 'cdi-01', 'alternance-01'...)
       3. Remplir les champs (title, company, period, duration, location,
          theme, summary, card_tags, icon...)
       4. Enregistrer — la carte apparaît automatiquement dans la section
          Expérience, et la fenêtre de détail se génère avec ces données.
    ────────────────────────────────────────────────────────────────────── */
};


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                  LOGIQUE MODAL — NE PAS MODIFIER                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝

function openExpModal(id) {
    const exp = experiencesData[id];
    if (!exp) return;

    const modal   = document.getElementById('expModal');
    const content = document.getElementById('expModalContent');

    const statusMap = {
        'En cours': { cls: 'exp-status-wip',  icon: 'fa-spinner fa-spin' },
        'À venir':  { cls: 'exp-status-soon', icon: 'fa-hourglass-half' },
        'Terminé':  { cls: 'exp-status-done', icon: 'fa-check-circle' }
    };
    const statusInfo  = statusMap[exp.status] || statusMap['Terminé'];
    const statusClass = statusInfo.cls;
    const statusIcon  = statusInfo.icon;

    const tasksHTML = (exp.tasks || []).map(t => `
        <div class="exp-modal-task">
            <div class="exp-modal-task-icon"><i class="${t.icon}"></i></div>
            <div class="exp-modal-task-body">
                <strong>${t.label}</strong>
                <p>${t.desc}</p>
            </div>
        </div>
    `).join('');

    const techHTML = (exp.technologies || []).map(t =>
        `<span class="exp-tag">${t}</span>`
    ).join('');

    const objHTML = (exp.objectives || []).map(o =>
        `<li><i class="fas fa-check-circle"></i> ${o}</li>`
    ).join('');

    const skillsHTML = (exp.skills_gained || []).map(s =>
        `<li><i class="fas fa-angle-right"></i> ${s}</li>`
    ).join('');

    // Rapport théorique (bouton orange existant)
    const reportHTML = exp.report_url
        ? `<a href="${exp.report_url}" target="_blank" class="exp-report-link-theory">
               <i class="fas fa-file-pdf"></i> Télécharger le rapport
           </a>`
        : `<p class="exp-report-pending">${exp.report_note || 'Rapport non disponible.'}</p>`;

    // Partie pratique (bouton foncé élégant)
    const practicalHTML = exp.practical_url ? `
        <a href="${exp.practical_url}" target="_blank" class="exp-practical-link">
            <i class="fas fa-laptop-code"></i>
            <div>
                <span class="exp-practical-label">Partie pratique</span>
                <span class="exp-practical-sub">Rapport interactif en ligne</span>
            </div>
            <i class="fas fa-arrow-right exp-practical-arrow"></i>
        </a>` : '';

    // Projets complémentaires
    const relatedHTML = (exp.related_projects || []).map(p => `
        <div class="exp-related-item">
            <div class="exp-related-name">
                <i class="fas fa-cube"></i>
                <span>${p.label}</span>
            </div>
            <div class="exp-related-actions">
                <a href="${p.external_url}" target="_blank" class="exp-related-btn exp-related-btn-ext" title="Voir le guide en ligne">
                    <i class="fas fa-external-link-alt"></i> Site
                </a>
                ${p.portfolio_id ? `<button onclick="closeExpModal(); setTimeout(() => openProjectModal(${p.portfolio_id}), 300);" class="exp-related-btn exp-related-btn-portfolio" title="Voir dans Mes Projets">
                    <i class="fas fa-folder-open"></i> Portfolio
                </button>` : ''}
            </div>
        </div>
    `).join('');

    content.innerHTML = `
        <div class="exp-modal-hero"${exp.cover ? ` style="background-image: linear-gradient(100deg, rgba(11,7,21,0.88), rgba(11,7,21,0.6)), url('${exp.cover}'); background-size: cover; background-position: center;"` : ''}>
            <div class="exp-modal-hero-left">
                <div class="exp-modal-logo"${exp.cover ? ` style="background-image:url('${exp.cover}'); background-size:cover; background-position:center;"` : ''}>${exp.cover ? '' : '<i class="fas fa-building"></i>'}</div>
                <div>
                    <h2 class="exp-modal-title">${exp.title}</h2>
                    <p class="exp-modal-company"><strong>${exp.company}</strong>${exp.sector ? ' · ' + exp.sector : ''}</p>
                    <div class="exp-modal-badges">
                        <span class="exp-type-badge"><i class="fas fa-user-graduate"></i> ${exp.type}</span>
                        <span class="exp-status-badge ${statusClass}"><i class="fas ${statusIcon}"></i> ${exp.status}</span>
                    </div>
                </div>
            </div>
            <div class="exp-modal-hero-right">
                <div class="exp-modal-info-row"><i class="fas fa-calendar-alt"></i> <span>${exp.period}</span></div>
                ${exp.duration ? `<div class="exp-modal-info-row"><i class="fas fa-clock"></i> <span>${exp.duration}</span></div>` : ''}
                ${exp.location ? `<div class="exp-modal-info-row"><i class="fas fa-map-marker-alt"></i> <span>${exp.location}</span></div>` : ''}
                ${exp.tutor && exp.tutor !== 'À compléter' ? `<div class="exp-modal-info-row"><i class="fas fa-chalkboard-teacher"></i> <span>Tuteur : ${exp.tutor}</span></div>` : ''}
            </div>
        </div>

        ${exp.theme ? `
        <div class="exp-modal-theme">
            <i class="fas fa-lightbulb"></i>
            <div>
                <strong>Thème</strong>
                <p>${exp.theme}</p>
            </div>
        </div>` : ''}

        ${exp.context ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-align-left"></i> Contexte & Mission</h4>
            <p>${exp.context}</p>
        </div>` : ''}

        ${objHTML ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-bullseye"></i> Objectifs</h4>
            <ul class="exp-modal-list">${objHTML}</ul>
        </div>` : ''}

        ${tasksHTML ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-tasks"></i> Tâches réalisées</h4>
            <div class="exp-modal-tasks">${tasksHTML}</div>
        </div>` : ''}

        ${exp.results ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-flag-checkered"></i> Résultats</h4>
            <p>${exp.results}</p>
        </div>` : ''}

        ${techHTML ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-tools"></i> Technologies utilisées</h4>
            <div class="exp-tags exp-tags-row">${techHTML}</div>
        </div>` : ''}

        ${skillsHTML ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-graduation-cap"></i> Compétences acquises</h4>
            <ul class="exp-modal-list exp-modal-list-compact">${skillsHTML}</ul>
        </div>` : ''}

        ${relatedHTML ? `
        <div class="exp-modal-section">
            <h4><i class="fas fa-link"></i> Projets complémentaires</h4>
            <div class="exp-related-list">${relatedHTML}</div>
        </div>` : ''}

        <div class="exp-modal-docs">
            <div class="exp-modal-report">
                <i class="fas fa-file-alt"></i>
                <div>
                    <strong>${exp.report_label || 'Rapport théorique'}</strong>
                    ${reportHTML}
                </div>
            </div>
            ${practicalHTML}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExpModal() {
    const modal = document.getElementById('expModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const overlay  = document.getElementById('expModalOverlay');
    const closeBtn = document.getElementById('expModalClose');
    if (overlay)  overlay.addEventListener('click', closeExpModal);
    if (closeBtn) closeBtn.addEventListener('click', closeExpModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeExpModal();
    });
});


/* ═══════════════════════════════════════════════════════════
   PATCH NIVEAUX COMPÉTENCES
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {

    function getLevel(pct) {
        if (pct < 50) return { label: 'Débutant',      level: 'debutant' };
        if (pct < 75) return { label: 'Intermédiaire', level: 'intermediaire' };
        return             { label: 'Avancé',           level: 'avance' };
    }

    document.querySelectorAll('.skill-item').forEach(item => {
        const bar     = item.querySelector('.skill-bar');
        const pctSpan = item.querySelector('.skill-percentage');
        if (!bar || !pctSpan) return;
        const progress = parseInt(bar.getAttribute('data-progress') || '0', 10);
        const { label, level } = getLevel(progress);
        pctSpan.textContent = label;
        pctSpan.setAttribute('data-level', level);
    });

    document.querySelectorAll('.skill-category-card').forEach(card => {
        if (card.querySelector('.skill-level-legend')) return;
        const legend = document.createElement('div');
        legend.className = 'skill-level-legend';
        legend.innerHTML =
            '<span class="legend-step"><span class="legend-dot d1"></span>Débutant</span>' +
            '<span class="legend-step"><span class="legend-dot d2"></span>Intermédiaire</span>' +
            '<span class="legend-step"><span class="legend-dot d3"></span>Avancé</span>';
        card.appendChild(legend);
    });
});
