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
    // Thème : Authentification AAA — FreeRADIUS + OpenLDAP
    // ────────────────────────────────────────────────────────────────────────
    'stage-01': {
        id: 'stage-01',
        type: 'Stage',
        status: 'En cours',
        featured: true,

        // ── Identité ────────────────────────────────────────────────────────
        title: 'Stagiaire — Administration Système & Sécurité Réseau',
        company: 'HighTech Compass',
        sector: 'Informatique & Télécommunications',
        location: 'Algérie',

        // ── Dates ───────────────────────────────────────────────────────────
        period: 'Mai 2025 — Juin 2025',
        duration: '1 mois',
        tutor: 'À compléter',           // ← Nom du tuteur / maître de stage

        // ── Résumé affiché sur la carte ─────────────────────────────────────
        theme: 'Authentification AAA basée sur serveur FreeRADIUS et annuaire LDAP',
        summary: "Mise en place d'une infrastructure d'authentification centralisée AAA (Authentication, Authorization, Accounting) sous Ubuntu Server 24.04 LTS — FreeRADIUS comme serveur RADIUS, OpenLDAP comme annuaire d'utilisateurs, interface web PHP d'administration, et intégration d'une machine Linux cliente au domaine.",

        // ── Contenu de la modal ──────────────────────────────────────────────
        context: "Dans un contexte où la gestion des accès utilisateurs devient critique pour la sécurité des infrastructures réseau, HighTech Compass a confié la mise en place d'un serveur d'authentification AAA centralisé. L'objectif : remplacer les authentifications locales disparates par un système unifié, sécurisé et auditable, basé sur les standards RADIUS et LDAP.",

        objectives: [
            "Déployer et configurer FreeRADIUS sur Ubuntu Server 24.04 LTS",
            "Installer et structurer un annuaire LDAP (OpenLDAP) comme base de données utilisateurs",
            "Interfacer FreeRADIUS avec OpenLDAP pour l'authentification centralisée (module rlm_ldap)",
            "Créer une interface web PHP pour administrer les utilisateurs LDAP",
            "Intégrer une machine Linux cliente au domaine du serveur (PAM / SSSD)",
            "Documenter l'architecture, les procédures et les tests dans un rapport de stage"
        ],

        tasks: [
            {
                icon: 'fas fa-server',
                label: 'Préparation Ubuntu Server 24.04 LTS',
                desc: "Mise à jour système, configuration réseau statique (Netplan), sécurisation SSH, installation des dépendances."
            },
            {
                icon: 'fas fa-broadcast-tower',
                label: 'Déploiement & configuration FreeRADIUS',
                desc: "Installation FreeRADIUS, configuration des clients RADIUS, définition des politiques d'authentification (PAP, CHAP, EAP), tests avec radtest."
            },
            {
                icon: 'fas fa-address-book',
                label: 'Mise en place OpenLDAP',
                desc: "Création de l'arborescence LDAP (DIT), ajout d'unités organisationnelles (ou, cn, uid), configuration du schéma et des ACL, peuplement de la base."
            },
            {
                icon: 'fas fa-link',
                label: 'Intégration FreeRADIUS ↔ OpenLDAP',
                desc: "Configuration du module rlm_ldap dans FreeRADIUS, mapping des attributs RADIUS/LDAP, tests d'authentification de bout en bout."
            },
            {
                icon: 'fab fa-php',
                label: "Interface web PHP d'administration",
                desc: "Développement d'une interface PHP permettant la gestion des comptes utilisateurs LDAP (création, modification, suppression, recherche)."
            },
            {
                icon: 'fas fa-laptop',
                label: 'Intégration machine Linux cliente au domaine',
                desc: "Configuration PAM et SSSD sur la machine cliente pour authentification centralisée via le serveur RADIUS/LDAP."
            },
            {
                icon: 'fas fa-file-alt',
                label: 'Rapport de stage',
                desc: "Rédaction du rapport : architecture AAA, procédures de déploiement, captures d'écran, résultats des tests — en cours de finalisation."
            }
        ],

        technologies: [
            'Ubuntu Server 24.04', 'FreeRADIUS', 'OpenLDAP', 'PHP',
            'PAM', 'SSSD', 'LDAP', 'RADIUS', 'SSH', 'Netplan', 'Linux CLI'
        ],

        results: "Serveur d'authentification AAA fonctionnel avec FreeRADIUS + OpenLDAP. Machine Linux cliente intégrée au domaine avec authentification centralisée opérationnelle. Interface web PHP d'administration déployée. TP et rapport de stage en cours de finalisation.",

        skills_gained: [
            "Architecture et protocole AAA (Authentication, Authorization, Accounting)",
            "Administration FreeRADIUS : clients, politiques, modules (rlm_ldap, rlm_pap...)",
            "Annuaire LDAP : structure DIT, schéma, ACL, peuplement et requêtes LDIF",
            "Intégration de services Linux : PAM, SSSD, authentification centralisée",
            "Développement PHP appliqué à l'administration système et LDAP",
            "Rédaction d'un rapport de stage technique (architecture, procédures, tests)"
        ],

        // ── Rapport ──────────────────────────────────────────────────────────
        report_status: 'En cours',
        report_url: null,          // ← Mettre l'URL du PDF quand c'est prêt
        report_note: "Le rapport de stage sera disponible ici une fois finalisé."
    },

    /* ──────────────────────────────────────────────────────────────────────
       Pour ajouter une nouvelle expérience :
       1. Copier le bloc ci-dessus
       2. Changer l'id (ex : 'stage-02', 'cdi-01', 'alternance-01'...)
       3. Remplir tous les champs
       4. Enregistrer — la carte et la modal se génèrent automatiquement

       Champs obligatoires : id, type, status, title, company, period, summary
       Champs optionnels  : tutor, report_url, featured
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
        `<li><i class="fas fa-star"></i> ${s}</li>`
    ).join('');

    const reportHTML = exp.report_url
        ? `<a href="${exp.report_url}" target="_blank" class="exp-report-link">
               <i class="fas fa-download"></i> Télécharger le rapport
           </a>`
        : `<p>${exp.report_note || 'Rapport non disponible.'}</p>`;

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
            <ul class="exp-modal-list">${skillsHTML}</ul>
        </div>` : ''}

        <div class="exp-modal-report">
            <i class="fas fa-file-alt"></i>
            <div>
                <strong>Rapport de stage</strong>
                ${reportHTML}
            </div>
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

// Initialisation des écouteurs de la modal
document.addEventListener('DOMContentLoaded', function () {
    const overlay  = document.getElementById('expModalOverlay');
    const closeBtn = document.getElementById('expModalClose');
    if (overlay)  overlay.addEventListener('click', closeExpModal);
    if (closeBtn) closeBtn.addEventListener('click', closeExpModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeExpModal();
    });
});
