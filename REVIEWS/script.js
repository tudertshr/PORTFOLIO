// ============================================================
//  REVIEWS/script.js  —  Données + rendu des avis (Témoignages)
//  Source : lettres de recommandation de mes enseignants
//  À charger AVANT le script.js principal (voir index.html)
// ============================================================

const REVIEWS_DATA = [
    {
        id: "chelouah",
        name: "Abdelkader Chelouah",
        role: "Enseignant · INSIM Bouira & HIMI Institut",
        place: "Cisco Contact & Cisco Instructor · Chargé de cours (Sherbrooke, BBA, BTS)",
        domain: "Informatique",
        relation: "4 semestres · BTS (Systèmes, réseaux & sécurité) : Admin & Sécurité des infrastructures réseaux, CCNA, Network Security.",
        text: "Sahraoui Tudert s'est rapidement démarquée de mes autres étudiants, se montrant particulièrement attentive et intéressée par chaque cours. Il ne fait aucun doute qu'elle s'avérera un ajout exceptionnel à vos effectifs, par ses multiples qualités, son professionnalisme et son assiduité.",
        email: "aekchel@hotmail.com",
        phone: "",
        source: "Lettre de recommandation · Béjaïa, 28/09/2026"
    },
    {
        id: "abbas",
        name: "Dr. Akli Abbas",
        role: "Maître de Conférences A",
        place: "Département d'Informatique · Université de Bouira",
        domain: "Informatique",
        relation: "M'a enseigné Linux et Windows à l'INSIM de Bouira (Administration et sécurité des réseaux, 2024-2025).",
        text: "J'ai pu apprécier son sérieux, son assiduité et son intérêt pour les enseignements dispensés. Elle s'est distinguée par son implication dans les activités pédagogiques et par sa capacité à assimiler les concepts, avec 19/20 dans chacun des deux modules que j'ai enseignés.",
        email: "a.abbas@univ-bouira.dz",
        phone: "",
        source: "Lettre de recommandation · Bouira, 23/09/2026"
    },
    {
        id: "ouaret",
        name: "Dr. Manel Ouaret Ladjouze",
        role: "Maître de conférences · Architecte des monuments historiques",
        place: "Département d'Architecture · Université A. Mira, Béjaïa",
        domain: "Architecture",
        relation: "M'a encadrée en atelier « Projet 3 et 4 », 2ᵉ année de licence (2022/2023).",
        text: "Elle a fait preuve de beaucoup d'enthousiasme dans ses travaux. C'était une étudiante remarquable, tant dans son travail que dans ses rapports avec les membres de son groupe, et a su faire montrer ces qualités par son dynamisme.",
        email: "manel.ouaret@univ-bejaia.dz",
        phone: "",
        source: "Lettre de recommandation · Béjaïa, 07/11/2023"
    },
    {
        id: "amir",
        name: "Amar Amir",
        role: "Adjoint du chef de Département d'Architecture",
        place: "Université Abderrahmane Mira · Béjaïa",
        domain: "Architecture / Urbanisme",
        relation: "M'a enseigné Planification et aménagement spatial 1 & 2 (atelier d'urbanisme, 2023-2024).",
        text: "Elle a fait preuve d'un excellent travail de groupe, collaborant avec ses collègues pour trouver des solutions adaptées aux problématiques rencontrées. Ses qualités de rigueur, de collaboration et son sens de l'initiative me permettent de la recommander vivement pour toute opportunité future.",
        email: "amar.amir@univ-bejaia.dz",
        phone: "",
        source: "Lettre de recommandation · Béjaïa, 17/10/2024"
    }
];

// ---------- Rendu ----------
(function renderReviews() {
    const container = document.getElementById('testimonialsContainer');
    if (!container || typeof REVIEWS_DATA === 'undefined') return;

    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const stars = '<i class="fas fa-star"></i>'.repeat(5);

    container.innerHTML = REVIEWS_DATA.map((r, i) => `
        <div class="testimonial-card${i === 0 ? ' active' : ''}" data-review="${esc(r.id)}">
            <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>
            <div class="testimonial-rating">${stars}</div>

            <p class="testimonial-text">« ${esc(r.text)} »</p>

            <div class="testimonial-author">
                <div class="author-avatar"><i class="fas fa-user-circle"></i></div>
                <div class="author-info">
                    <h4 class="author-name">${esc(r.name)}</h4>
                    <p class="author-position">${esc(r.role)}</p>
                    <p class="author-position">${esc(r.place)}</p>
                </div>
            </div>

            <div class="review-meta">
                <p class="review-relation"><span class="review-domain">${esc(r.domain)}</span> ${esc(r.relation)}</p>
                <p class="review-contact">
                    ${r.email ? `<a href="mailto:${esc(r.email)}"><i class="fas fa-envelope"></i> ${esc(r.email)}</a>` : ''}
                    ${r.phone ? `<span><i class="fas fa-phone"></i> ${esc(r.phone)}</span>` : ''}
                    <span class="review-source"><i class="fas fa-file-alt"></i> ${esc(r.source)}</span>
                </p>
            </div>
        </div>
    `).join('');
})();
