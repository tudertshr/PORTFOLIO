// ╔══════════════════════════════════════════════════════════════════════════╗
// ║              EXPÉRIENCES PROFESSIONNELLES — Données & Modal             ║
// ║   Ce fichier est chargé AVANT script.js dans index.html                 ║
// ║   Pour ajouter une expérience : copier un bloc, changer l'id            ║
// ║   Types : "Stage" | "CDI" | "CDD" | "Alternance" | "Freelance"         ║
// ║   Status : "En cours" | "Terminé"                                       ║
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

        title: 'Stagiaire — Administration Système & Sécurité Réseau',
        company: 'HighTech Compass',
        sector: 'Informatique & Télécommunications',
        location: 'Algérie',

        period: 'Mai 2025 — Juin 2025',
        duration: '1 mois',
        tutor: 'À compléter',

        theme: 'Authentification AAA — FreeRADIUS + OpenLDAP',
        summary: "Mise en place d'un système d'authentification centralisé AAA (Authentication, Authorization, Accounting) sous Ubuntu 24.04 LTS, basé sur FreeRADIUS et OpenLDAP — avec intégration d'une machine Linux cliente au domaine.",

        // ── Rapport théorique (section orange existante) ──────────────────
        report_url: null,
        report_note: 'Le rapport théorique sera disponible ici une fois finalisé.',

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
        context: "Déploiement d'un serveur d'authentification AAA centralisé pour HighTech Compass, visant à unifier et sécuriser la gestion des accès réseau via FreeRADIUS et un annuaire OpenLDAP.",

        objectives: [
            "Déployer FreeRADIUS et OpenLDAP sur Ubuntu 24.04 LTS",
            "Interfacer FreeRADIUS avec OpenLDAP pour l'authentification centralisée",
            "Intégrer une machine Linux cliente au domaine (SSSD / PAM)",
            "Mettre en place l'autorisation par groupe et la comptabilité des sessions",
            "Configurer l'authentification Wi-Fi (EAP-TTLS) et l'attribution de VLAN dynamique"
        ],

        tasks: [
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
                label: 'Autorisation par groupe',
                desc: "Définition de trois niveaux d'accès (admins, users, invités) avec des politiques RADIUS différenciées selon le groupe LDAP de l'utilisateur."
            },
            {
                icon: 'fas fa-chart-line',
                label: 'Comptabilité & supervision',
                desc: "Journalisation des sessions RADIUS et intégration avec Zabbix pour la supervision en temps réel et la génération d'alertes automatiques."
            },
            {
                icon: 'fas fa-wifi',
                label: 'Authentification Wi-Fi & VLAN dynamique',
                desc: "Configuration EAP-TTLS pour le réseau sans-fil et attribution automatique de VLAN selon le groupe de l'utilisateur via attributs RADIUS."
            }
        ],

        technologies: [
            'Ubuntu 24.04 LTS', 'FreeRADIUS', 'OpenLDAP', 'phpLDAPadmin',
            'SSSD', 'PAM', 'EAP-TTLS', 'VLAN 802.1Q', 'Zabbix', 'RADIUS', 'LDAP'
        ],

        results: "Infrastructure AAA fonctionnelle : authentification centralisée, autorisation différenciée par groupe, comptabilité des sessions avec alertes Zabbix, authentification Wi-Fi EAP-TTLS et attribution de VLAN dynamique — le tout documenté dans la partie pratique disponible en ligne.",

        skills_gained: [
            "Architecture AAA et protocole RADIUS",
            "Administration FreeRADIUS et intégration LDAP",
            "Gestion d'un annuaire OpenLDAP sous Linux",
            "Authentification réseau 802.1X et gestion de VLAN",
            "Supervision et alerting avec Zabbix"
        ],

        report_status: 'Terminé',
    },

    /* ──────────────────────────────────────────────────────────────────────
       Pour ajouter une nouvelle expérience :
       1. Copier le bloc ci-dessus
       2. Changer l'id (ex : 'stage-02', 'cdi-01', 'alternance-01'...)
       3. Remplir tous les champs
       4. Enregistrer — la carte et la modal se génèrent automatiquement
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

    const statusClass = exp.status === 'En cours' ? 'exp-status-wip' : 'exp-status-done';
    const statusIcon  = exp.status === 'En cours' ? 'fa-spinner fa-spin' : 'fa-check-circle';

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
        <div class="exp-modal-hero">
            <div class="exp-modal-hero-left">
                <div class="exp-modal-logo"><i class="fas fa-building"></i></div>
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
                    <strong>Rapport théorique</strong>
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
