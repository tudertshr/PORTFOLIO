// ==================== CONFIGURATION GLOBALE ====================
const CONFIG = {
    typingSpeed: 100,
    typingDelay: 2000,
    scrollOffset: 80,
    testimonialAutoplay: true,
    testimonialInterval: 5000,
    particlesCount: 50
};

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les fonctionnalités
    initPreloader();
    initThemeToggle();
    initNavigation();
    initScrollProgress();
    initBackToTop();
    initTypingEffect();
    initCounters();
    initSkillBars();
    initParticles();
    initAOS();
    initProjects();
    initTestimonials();
    initContactForm();
    initSmoothScroll();
    initLazyLoading();
    initScrollAnimations();
});

// ==================== PRÉCHARGEUR ====================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = document.getElementById('progressPercentage');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        progressPercentage.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
    }, 200);
}

// ==================== MODE THÈME ====================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Appliquer le thème sauvegardé
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
    }
    
    // Écouter le changement de thème
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        
        const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        
        // Animation du bouton
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0) scale(1)';
        }, 400);
    });
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .lobby-section');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Gestion du menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Navigation active au scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Clic sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            scrollToSection(targetId);
            
            // Fermer le menu mobile
            if (window.innerWidth < 1024) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
}

// ==================== BARRE DE PROGRESSION DU SCROLL ====================
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgressBar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ==================== BOUTON RETOUR EN HAUT ====================
function initBackToTop() {
    const backToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== EFFET DE FRAPPE ====================
function initTypingEffect() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;
    
    const phrases = [
        'Étudiante en administration et sécurité des réseaux informatiques',
        'Étudiante en gestion des systèmes réseau et informatiques',
        'Créatrice web amateur – expérimenter et découvrir le web pour le plaisir',
        'Projet professionnel : Analyste cybersécurité',
        'BTS ASRI — Major de Section',
        '🏆 1ère Place — Olympiades des Métiers 2025 (WILAYA BOUIRA)'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = CONFIG.typingSpeed;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = CONFIG.typingSpeed / 2;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = CONFIG.typingSpeed;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingDelay = CONFIG.typingDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    type();
}

// ==================== COMPTEURS ANIMÉS ====================
function initCounters() {
    // Calcul automatique depuis les données réelles
    const statsMap = {
        'Projets': () => (typeof projectsData !== 'undefined') ? projectsData.length : null,
        'Certifications': () => {
            if (typeof certificationsData === 'undefined') return null;
            return certificationsData.filter(c =>
                c.icon !== 'fas fa-trophy' && c.icon !== 'fas fa-star' && !(c.badge || '').includes('🏆')
            ).length;
        },
        'Prix': () => {
            if (typeof certificationsData === 'undefined') return null;
            return certificationsData.filter(c =>
                c.icon === 'fas fa-trophy' || c.icon === 'fas fa-star' || (c.badge || '').includes('🏆')
            ).length;
        }
    };

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const label = counter.closest('.stat-content') &&
                      counter.closest('.stat-content').querySelector('.stat-label')
                      ? counter.closest('.stat-content').querySelector('.stat-label').textContent.trim()
                      : null;
        if (label && statsMap[label]) {
            const val = statsMap[label]();
            if (val !== null && !isNaN(val)) {
                counter.setAttribute('data-target', val);
            }
        }
    });

    // Animation au scroll
    const observerOptions = { threshold: 0.5, rootMargin: '0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ==================== BARRES DE COMPÉTENCES ====================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 200);
                
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ==================== PARTICULES D'ARRIÈRE-PLAN ====================
function initParticles() {
    const particlesContainer = document.getElementById('particlesBackground');
    if (!particlesContainer) return;
    
    for (let i = 0; i < CONFIG.particlesCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(particle);
}

// ==================== ANIMATION AOS ====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 0
        });
    }
}

// ==================== DÉFILEMENT FLUIDE ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const offsetTop = section.offsetTop - CONFIG.scrollOffset;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// ==================== CHARGEMENT PARESSEUX DES IMAGES ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== ANIMATIONS AU SCROLL ====================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ==================== TÉMOIGNAGES SLIDER ====================
function initTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsContainer = document.getElementById('testimonialsDots');
    
    if (!container) return;
    
    const testimonials = container.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    let autoplayInterval;
    
    // Créer les dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    
    function showTestimonial(index) {
        testimonials.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentIndex = index;
        testimonials[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        
        resetAutoplay();
    }
    
    function nextTestimonial() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    }
    
    function startAutoplay() {
        if (CONFIG.testimonialAutoplay) {
            autoplayInterval = setInterval(nextTestimonial, CONFIG.testimonialInterval);
        }
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
    
    // Démarrer l'autoplay
    startAutoplay();
    
    // Pause sur hover
    container.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    container.addEventListener('mouseleave', startAutoplay);
    
    // Support du swipe sur mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextTestimonial();
        }
        if (touchEndX > touchStartX + 50) {
            prevTestimonial();
        }
    }
}

// ==================== FORMULAIRE DE CONTACT ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const messageTextarea = document.getElementById('message');
    const charCount = document.querySelector('.char-count');
    
    if (!form) return;
    
    // Compteur de caractères
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', () => {
            const length = messageTextarea.value.length;
            charCount.textContent = `${length} / 500`;
            
            if (length > 500) {
                messageTextarea.value = messageTextarea.value.substring(0, 500);
                charCount.textContent = '500 / 500';
            }
        });
    }

    // Label flottant pour les selects
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        const updateLabel = () => {
            if (select.value) {
                select.classList.add('has-value');
            } else {
                select.classList.remove('has-value');
            }
        };
        select.addEventListener('change', updateLabel);
        updateLabel(); // état initial
    });

    // Réinitialiser les classes has-value au reset du formulaire
    form.addEventListener('reset', () => {
        selects.forEach(s => s.classList.remove('has-value'));
    });
    
    // Soumission du formulaire
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon, .fa-paper-plane') || submitBtn.querySelector('i');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        const formMessage = document.getElementById('formMessage');
        
        // État de chargement
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        if (btnIcon) btnIcon.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('https://formspree.io/f/mojkgogw', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                showFormMessage('success', 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
                form.reset();
                if (charCount) charCount.textContent = '0 / 500';
            } else {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || 'Erreur d\'envoi');
            }
        } catch (error) {
            showFormMessage('error', 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
        } finally {
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            if (btnIcon) btnIcon.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
    
    function showFormMessage(type, message) {
        const formMessage = document.getElementById('formMessage');
        formMessage.className = 'form-message ' + type;
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
}

// ==================== UTILITAIRES ====================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Vérifier si un élément est visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Obtenir la position d'un élément
function getElementOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

// ==================== GESTION DES ERREURS ====================
window.addEventListener('error', (e) => {
    console.error('Erreur globale:', e.error);
});

// ==================== PARCOURS ACADÉMIQUE & CERTIFICATIONS ====================

const timelineData = [
    {
        icon: 'fas fa-graduation-cap',
        color: '#6c63ff',
        period: '2024 – 2027',
        title: 'BTS Administration & Sécurité des Réseaux Informatiques',
        institution: 'INSIM Bouira',
        description: 'Formation technique en administration système, sécurité réseau et gestion des infrastructures informatiques.',
        highlights: [
            'Major de Section',
            'Double diplomation avec HIMI Bouira / Sherbrooke (Canada)'
        ]
    },
    {
        icon: 'fas fa-university',
        color: '#00c9ff',
        period: '2024 – 2027',
        title: 'AEC Gestion des Systèmes Réseau Informatique',
        institution: 'HIMI Bouira / Université de Sherbrooke — Canada',
        description: 'Double diplomation internationale en gestion des systèmes réseau informatique.',
        highlights: [
            'Programme en partenariat Canada–Algérie',
            'Orientation en administration et sécurité réseau'
        ]
    },
    {
        icon: 'fas fa-drafting-compass',
        color: '#f7971e',
        period: '2021 – 2024',
        title: 'Licence en Architecture',
        institution: 'Université de Béjaïa — Faculté de Technologie',
        description: 'Formation en architecture, urbanisme et métiers de la ville. Obtention de la Licence en session normale.',
        highlights: [
            'Moyenne finale : 13.06/20',
            'Attestation de bonne conduite',
            'Réorientation vers l\'informatique par passion'
        ]
    },
    {
        icon: 'fas fa-school',
        color: '#56ab2f',
        period: '2018 – 2021',
        title: 'Baccalauréat Scientifique',
        institution: 'Lycée Terrache Hcene',
        description: 'Baccalauréat série scientifique.',
        highlights: []
    }
];

const certificationsData = [
    {
        icon: 'fas fa-network-wired',
        color: '#00bceb',
        title: 'CCNA : Présentation des réseaux',
        issuer: 'Cisco Networking Academy — The Open University',
        date: '02 Mars 2026',
        badge: 'CCNA 01'
    },
    {
        icon: 'fas fa-shield-alt',
        color: '#00bceb',
        title: 'Notions de cybersécurité',
        issuer: 'Cisco Networking Academy',
        date: '02 Mars 2026',
        badge: 'CyberSec'
    },
    {
        icon: 'fas fa-server',
        color: '#00bceb',
        title: 'Notions de base sur les réseaux',
        issuer: 'Cisco Networking Academy — INSIM Bouira',
        date: '27 Juin 2025',
        badge: 'Réseau'
    },
    {
        icon: 'fas fa-laptop-code',
        color: '#00bceb',
        title: 'Premiers pas avec Cisco Packet Tracer',
        issuer: 'Cisco Networking Academy',
        date: '28 Février 2025',
        badge: 'Packet Tracer'
    },
    {
        icon: 'fas fa-trophy',
        color: '#f7971e',
        title: 'Olympiades des Métiers 2025 — 1ère place Wilaya',
        issuer: 'Wilaya — Administration & Sécurité des Réseaux',
        date: '2025',
        badge: '🏆 1ère place'
    },
    {
        icon: 'fas fa-star',
        color: '#6c63ff',
        title: 'Major de Section ',
        issuer: 'INSIM Bouira — BTS ASRI',
        date: '20 Mai 2025',
        badge: '18/20'
    }
];

function renderTimeline() {
    const container = document.querySelector('.experience-timeline');
    if (!container) return;
    container.innerHTML = timelineData.map((item, i) => `
        <div class="timeline-item" data-aos="fade-${i % 2 === 0 ? 'right' : 'left'}" data-aos-delay="${i * 100}">
            <div class="timeline-icon" style="background: ${item.color}">
                <i class="${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <span class="timeline-period">${item.period}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <h4 class="timeline-institution">${item.institution}</h4>
                <p class="timeline-description">${item.description}</p>
                ${item.highlights.length > 0 ? `
                <ul class="timeline-highlights">
                    ${item.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('')}
                </ul>` : ''}
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const container = document.querySelector('.certifications-grid');
    if (!container) return;
    container.innerHTML = certificationsData.map((cert, i) => `
        <div class="certification-card" data-aos="zoom-in" data-aos-delay="${i * 80}">
            <div class="cert-icon" style="color: ${cert.color}">
                <i class="${cert.icon}"></i>
            </div>
            <div class="cert-content">
                <span class="cert-badge" style="background: ${cert.color}20; color: ${cert.color}">${cert.badge}</span>
                <h4 class="cert-title">${cert.title}</h4>
                <p class="cert-issuer">${cert.issuer}</p>
                <span class="cert-date"><i class="far fa-calendar-alt"></i> ${cert.date}</span>
                ${cert.pdf ? `
                    <div class="cert-attachments" style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
                        <a href="${cert.pdf}" target="_blank" class="modal-link-btn" style="text-decoration:none;">
                            <i class="fas fa-file-pdf"></i> Voir le PDF
                        </a>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderCertifications();
});

// ==================== EXPORT DES FONCTIONS GLOBALES ====================
window.scrollToSection = scrollToSection;


// ==================== INITIALISATION DES PROJETS ====================
function initProjects() {
    renderProjects();
    initProjectFilters();
    initProjectModal();
    initLoadMore();
}

// ==================== AFFICHAGE DES PROJETS ====================
let visibleProjects = 6;
let currentFilter = 'all';

function renderProjects(filter = 'all', limit = visibleProjects) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);
    
    const projectsToShow = filteredProjects.slice(0, limit);
    
    projectsGrid.innerHTML = '';
    
    projectsToShow.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
    
    // Gérer le bouton "Charger plus"
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (filteredProjects.length <= limit) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 100);
    card.setAttribute('data-category', project.category);

    const resolveAssetUrl = (src) => {
        if (!src) return '';
        // Garde tel quel: http(s), data:, blob:, ou chemins absolus
        if (/^(https?:|data:|blob:)/i.test(src) || src.startsWith('/')) return src;
        try {
            return new URL(src, document.baseURI).toString();
        } catch {
            return src;
        }
    };

    const projectImageHtml = project.image
        ? `
                <img
                    class="project-image"
                    src="${resolveAssetUrl(project.image)}"
                    alt="${project.title}"
                    loading="lazy"
                    decoding="async"
                    onerror="this.style.display='none'; this.closest('.project-image-container')?.classList.add('no-image');"
                >
        `
        : '';
    
    const featuredBadge = project.featured 
        ? '<span class="project-featured-badge"><i class="fas fa-star"></i> Projet phare</span>' 
        : '';
    
    const statusClass = project.status === 'Terminé' ? 'completed' : 'ongoing';
    
    const categoryGradients = {
        network: 'linear-gradient(135deg, #00c9ff 0%, #0072ff 100%)',
        security: 'linear-gradient(135deg, #f7971e 0%, #ff4757 100%)',
        development: 'linear-gradient(135deg, #9d4edd 0%, #ff6b9d 100%)',
        business: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        achievement: 'linear-gradient(135deg, #f7971e 0%, #ffd700 100%)',
        default: 'linear-gradient(135deg, #ff6b9d 0%, #ff3d7f 100%)'
    };
    const categoryFAIcons = {
        network: 'fas fa-network-wired',
        security: 'fas fa-shield-alt',
        development: 'fas fa-code',
        business: 'fas fa-store',
        achievement: 'fas fa-trophy',
        default: 'fas fa-project-diagram'
    };
    const gradient = categoryGradients[project.category] || categoryGradients.default;
    const faIcon = categoryFAIcons[project.category] || categoryFAIcons.default;

    card.innerHTML = `
        <div class="project-card-header">
            <div class="project-image-container">
                ${projectImageHtml}
                <div class="project-image-placeholder" style="background: ${gradient}">
                    <div class="project-icon"><i class="${faIcon}" style="color:#fff;font-size:1.7rem"></i></div>
                </div>
                <div class="project-overlay">
                    <button class="project-view-btn" onclick="openProjectModal(${project.id})">
                        <i class="fas fa-eye"></i>
                        <span>Voir détails</span>
                    </button>
                </div>
            </div>
            ${featuredBadge}
            <span class="project-status ${statusClass}">${project.status}</span>
        </div>
        <div class="project-card-body">
            <div class="project-meta">
                <span class="project-year">
                    <i class="far fa-calendar"></i>
                    ${project.year}
                </span>
                <span class="project-category-badge">
                    ${getCategoryIcon(project.category)}
                    ${getCategoryName(project.category)}
                </span>
            </div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-description">${project.shortDescription}</p>
            <div class="project-tech-tags">
                ${project.technologies.slice(0, 4).map(tech => 
                    `<span class="tech-tag-mini">${tech}</span>`
                ).join('')}
                ${project.technologies.length > 4 
                    ? `<span class="tech-tag-mini more">+${project.technologies.length - 4}</span>` 
                    : ''}
            </div>
        </div>
        <div class="project-card-footer">
            <button class="project-card-btn primary" onclick="openProjectModal(${project.id})">
                <i class="fas fa-info-circle"></i>
                <span>Détails</span>
            </button>
            ${project.links.demo 
                ? `<a href="${project.links.demo}" class="project-card-btn" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Demo</span>
                </a>` 
                : ''}
            ${project.links.github 
                ? `<a href="${project.links.github}" class="project-card-btn" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>Code</span>
                </a>` 
                : ''}
        </div>
    `;
    
    return card;
}

// ==================== FILTRES DE PROJETS ====================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Injecter les vrais comptages sur chaque bouton
    if (typeof projectsData !== 'undefined') {
        filterButtons.forEach(button => {
            const f = button.getAttribute('data-filter');
            const count = f === 'all'
                ? projectsData.length
                : projectsData.filter(p => p.category === f).length;
            // Supprimer l'ancien badge s'il existe
            const oldBadge = button.querySelector('.filter-count');
            if (oldBadge) oldBadge.remove();
            const badge = document.createElement('span');
            badge.className = 'filter-count';
            badge.textContent = count;
            button.appendChild(badge);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            // Obtenir le filtre
            currentFilter = button.getAttribute('data-filter');
            visibleProjects = 6; // Réinitialiser
            
            // Filtrer et afficher les projets
            renderProjects(currentFilter, visibleProjects);
            
            // Réinitialiser AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });
}

// ==================== BOUTON CHARGER PLUS ====================
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleProjects += 3;
            renderProjects(currentFilter, visibleProjects);
            
            // Réinitialiser AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }
}

// ==================== MODAL DE PROJET ====================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    
    if (!modal) return;
    
    // Fermer avec le bouton
    closeBtn.addEventListener('click', closeProjectModal);
    
    // Fermer avec l'overlay
    overlay.addEventListener('click', closeProjectModal);
    
    // Fermer avec la touche ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = createModalContent(project);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialiser la galerie
    if (project.gallery && project.gallery.length > 0) {
        initProjectGallery();
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function createModalContent(project) {
    const categoryGradients = {
        network: 'linear-gradient(135deg, #00c9ff 0%, #0072ff 100%)',
        security: 'linear-gradient(135deg, #f7971e 0%, #ff4757 100%)',
        development: 'linear-gradient(135deg, #9d4edd 0%, #ff6b9d 100%)',
        business: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        achievement: 'linear-gradient(135deg, #f7971e 0%, #ffd700 100%)',
        default: 'linear-gradient(135deg, #ff6b9d 0%, #ff3d7f 100%)'
    };
    const categoryFAIcons = {
        network: 'fas fa-network-wired',
        security: 'fas fa-shield-alt',
        development: 'fas fa-code',
        business: 'fas fa-store',
        achievement: 'fas fa-trophy',
        default: 'fas fa-project-diagram'
    };
    const gradient = categoryGradients[project.category] || categoryGradients.default;
    const faIcon = categoryFAIcons[project.category] || categoryFAIcons.default;

    const resolveAssetUrl = (src) => {
        if (!src) return '';
        if (/^(https?:|data:|blob:)/i.test(src) || src.startsWith('/')) return src;
        try {
            return new URL(src, document.baseURI).toString();
        } catch {
            return src;
        }
    };

    const modalHeroImage = project.image
        ? `
            <div class="modal-section">
                <div class="project-hero-image" style="border-radius:16px; overflow:hidden;">
                    <img
                        src="${resolveAssetUrl(project.image)}"
                        alt="${project.title}"
                        style="width:100%; height:auto; display:block;"
                        loading="lazy"
                        decoding="async"
                        onerror="this.closest('.modal-section')?.remove();"
                    >
                </div>
            </div>
        `
        : '';

    const gallerySources = Array.isArray(project.gallery) ? project.gallery : [];
    const modalGallery = gallerySources.length > 0
        ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-images"></i>
                    Galerie
                </h3>
                <div class="project-gallery">
                    ${gallerySources.map((src, i) => `
                        <div class="gallery-item" onclick="openLightbox('${resolveAssetUrl(src).replace(/'/g, "\\'")}')">
                            <img
                                src="${resolveAssetUrl(src)}"
                                alt="Image ${i + 1} — ${project.title}"
                                style="width:100%;height:100%;object-fit:cover;border-radius:8px;"
                                loading="lazy"
                                decoding="async"
                                onerror="this.closest('.gallery-item')?.remove();"
                            >
                        </div>
                    `).join('')}
                </div>
            </div>
        `
        : '';

    return `
        <div class="modal-header">
            <div class="modal-header-content">
                <span class="modal-icon" style="background:${gradient};width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="${faIcon}" style="color:#fff;font-size:1.4rem"></i></span>
                <div>
                    <h2 class="modal-title">${project.title}</h2>
                    <div class="modal-meta">
                        <span class="modal-year">
                            <i class="far fa-calendar"></i>
                            ${project.year}
                        </span>
                        <span class="modal-category">
                            ${getCategoryIcon(project.category)}
                            ${getCategoryName(project.category)}
                        </span>
                        <span class="modal-status ${project.status === 'Terminé' ? 'completed' : 'ongoing'}">
                            <i class="fas fa-circle"></i>
                            ${project.status}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-body">
            ${modalHeroImage}
            <!-- Informations générales -->
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-info-circle"></i>
                    Informations générales
                </h3>
                <div class="project-info-grid">
                    <div class="info-box">
                        <span class="info-label">Rôle</span>
                        <span class="info-value">${project.role}</span>
                    </div>
                    <div class="info-box">
                        <span class="info-label">Durée</span>
                        <span class="info-value">${project.duration}</span>
                    </div>
                    <div class="info-box">
                        <span class="info-label">Équipe</span>
                        <span class="info-value">${project.team}</span>
                    </div>
                    <div class="info-box">
                        <span class="info-label">Année</span>
                        <span class="info-value">${project.year}</span>
                    </div>
                </div>
            </div>
            
            <!-- Description -->
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-align-left"></i>
                    Description du projet
                </h3>
                <p class="modal-description">${project.description}</p>
            </div>
            
            <!-- Technologies -->
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-tools"></i>
                    Technologies utilisées
                </h3>
                <div class="modal-tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="modal-tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            
            <!-- Contexte -->
            ${project.details.context ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-lightbulb"></i>
                    Contexte
                </h3>
                <p class="modal-text">${project.details.context}</p>
            </div>
            ` : ''}
            
            <!-- Objectifs -->
            ${project.details.objectives ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-bullseye"></i>
                    Objectifs
                </h3>
                <ul class="modal-list">
                    ${project.details.objectives.map(obj => 
                        `<li><i class="fas fa-check-circle"></i> ${obj}</li>`
                    ).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Réalisations -->
            ${project.details.achievements ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-trophy"></i>
                    Réalisations
                </h3>
                <ul class="modal-list achievements">
                    ${project.details.achievements.map(ach => 
                        `<li><i class="fas fa-star"></i> ${ach}</li>`
                    ).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Défis -->
            ${project.details.challenges ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    Défis rencontrés
                </h3>
                <ul class="modal-list challenges">
                    ${project.details.challenges.map(ch => 
                        `<li><i class="fas fa-mountain"></i> ${ch}</li>`
                    ).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Résultats -->
            ${project.details.results ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-chart-line"></i>
                    Résultats
                </h3>
                <div class="results-box">
                    <p>${project.details.results}</p>
                </div>
            </div>
            ` : ''}
            
            <!-- Apprentissages -->
            ${project.details.learnings ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-graduation-cap"></i>
                    Apprentissages clés
                </h3>
                <ul class="modal-list learnings">
                    ${project.details.learnings.map(learn => 
                        `<li><i class="fas fa-book"></i> ${learn}</li>`
                    ).join('')}
                </ul>
            </div>
            ` : ''}

            ${modalGallery}
            
            <!-- ===== GALERIE PHOTOS ===== -->
            ${(project.links.photos && project.links.photos.length > 0) ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-images"></i>
                    Photos du projet
                </h3>
                <div class="project-gallery">
                    ${project.links.photos.map((src, i) => `
                        <div class="gallery-item" onclick="openLightbox('${src}')">
                            <img src="${src}" alt="Photo projet ${i+1}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
                        </div>`).join('')}
                </div>
            </div>` : ''}

            <!-- ===== LIENS & PIÈCES JOINTES ===== -->
            ${(project.links.pdf || project.links.github || project.links.demo || project.links.documentation || (project.links.sites && project.links.sites.length > 0)) ? `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-paperclip"></i>
                    Liens & Pièces jointes
                </h3>

                <!-- Liste de sites -->
                ${(project.links.sites && project.links.sites.length > 0) ? `
                <div class="attachment-row sites-list">
                    <div class="attachment-label">
                        <i class="fas fa-globe" style="color:#3498db"></i>
                        <span>Sites web</span>
                    </div>
                    <div class="sites-grid">
                        ${project.links.sites.map(s => `
                            <a href="${s.url}" target="_blank" rel="noopener" class="modal-link-btn site-link">
                                <i class="fas fa-external-link-alt"></i> ${s.name}
                            </a>
                        `).join('')}
                    </div>
                </div>` : ''}

                <!-- PDF rapport -->
                ${project.links.pdf ? `
                <div class="attachment-row">
                    <div class="attachment-label">
                        <i class="fas fa-file-pdf" style="color:#e74c3c"></i>
                        <span>Rapport / Documentation PDF</span>
                    </div>
                    <div class="attachment-file-display">
                        <a href="${project.links.pdf}" target="_blank" class="modal-link-btn">
                            <i class="fas fa-download"></i> Télécharger le PDF
                        </a>
                    </div>
                </div>` : ''}

                <!-- GitHub -->
                ${project.links.github ? `
                <div class="attachment-row">
                    <div class="attachment-label">
                        <i class="fab fa-github" style="color:#333"></i>
                        <span>GitHub</span>
                    </div>
                    <div class="attachment-file-display">
                        <a href="${project.links.github}" target="_blank" class="modal-link-btn">
                            <i class="fab fa-github"></i> Voir le code
                        </a>
                    </div>
                </div>` : ''}

                <!-- Démo / Site web -->
                ${project.links.demo ? `
                <div class="attachment-row">
                    <div class="attachment-label">
                        <i class="fas fa-external-link-alt" style="color:#3498db"></i>
                        <span>Démo / Site web</span>
                    </div>
                    <div class="attachment-file-display">
                        <a href="${project.links.demo}" target="_blank" class="modal-link-btn">
                            <i class="fas fa-external-link-alt"></i> Voir la démo
                        </a>
                    </div>
                </div>` : ''}

                <!-- Autre lien -->
                ${project.links.documentation ? `
                <div class="attachment-row">
                    <div class="attachment-label">
                        <i class="fas fa-link" style="color:#9b59b6"></i>
                        <span>Autre lien</span>
                    </div>
                    <div class="attachment-file-display">
                        <a href="${project.links.documentation}" target="_blank" class="modal-link-btn">
                            <i class="fas fa-link"></i> Voir le lien
                        </a>
                    </div>
                </div>` : ''}
            </div>` : ''}

            <!-- CTA -->
            <div class="modal-cta">
                <p>Intéressé par ce projet ou vous avez des questions ?</p>
                <button class="btn btn-primary btn-lg" onclick="closeProjectModal(); scrollToSection('contact');">
                    <i class="fas fa-envelope"></i>
                    <span>Me contacter</span>
                </button>
            </div>
        </div>
    `;
}

function initProjectGallery() {}

function openGalleryImage(index) {
    console.log('Open gallery image:', index);
}

// ==================== LIGHTBOX ====================
function openLightbox(src) {
    let lb = document.getElementById('lightbox-overlay');
    if (!lb) {
        lb = document.createElement('div');
        lb.id = 'lightbox-overlay';
        lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:99999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
        lb.innerHTML = '<img id="lightbox-img" style="max-width:90vw;max-height:90vh;border-radius:10px;box-shadow:0 0 40px rgba(0,0,0,0.8)">';
        lb.addEventListener('click', () => lb.remove());
        document.body.appendChild(lb);
    }
    document.getElementById('lightbox-img').src = src;
    lb.style.display = 'flex';
}

// ==================== GESTION DES PIÈCES JOINTES PROJETS ====================
// Stockage en mémoire session (remplace par localStorage si souhaité)
const projectAttachments = {};

function getProjectData(id) {
    const p = projectsData.find(p => p.id === id);
    if (!projectAttachments[id]) projectAttachments[id] = { ...p.links };
    return projectAttachments[id];
}

// --- Photos ---
function addProjectPhotos(projectId, input) {
    const files = Array.from(input.files);
    const data = getProjectData(projectId);
    if (!data.photos) data.photos = [];

    let loaded = 0;
    files.forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            data.photos.push(e.target.result);
            loaded++;
            if (loaded === files.length) refreshGallery(projectId);
        };
        reader.readAsDataURL(file);
    });
}

function removeProjectPhoto(projectId, index) {
    const data = getProjectData(projectId);
    data.photos.splice(index, 1);
    refreshGallery(projectId);
}

function refreshGallery(projectId) {
    const data = getProjectData(projectId);
    const grid = document.getElementById(`gallery-grid-${projectId}`);
    if (!grid) return;
    if (!data.photos || data.photos.length === 0) {
        grid.innerHTML = '<p class="empty-gallery-msg"><i class="fas fa-camera"></i> Aucune photo ajoutée</p>';
    } else {
        grid.innerHTML = data.photos.map((src, i) => `
            <div class="gallery-item" onclick="openLightbox('${src}')">
                <img src="${src}" alt="Photo ${i+1}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
                <button class="gallery-delete-btn" onclick="event.stopPropagation();removeProjectPhoto(${projectId},${i})" title="Supprimer"><i class="fas fa-times"></i></button>
            </div>
        `).join('');
    }
    showAttachToast('📸 Photo ajoutée !');
}

// --- PDF ---
function addProjectPdf(projectId, input) {
    const file = input.files[0];
    if (!file || file.type !== 'application/pdf') return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = getProjectData(projectId);
        data.pdf = e.target.result;
        const row = document.getElementById(`pdf-row-${projectId}`);
        if (row) {
            const label = row.querySelector('label');
            if (label) label.outerHTML = `
                <div class="attachment-file-display">
                    <a href="${data.pdf}" download="${file.name}" class="modal-link-btn">
                        <i class="fas fa-download"></i> ${file.name}
                    </a>
                    <button class="attach-remove-btn" onclick="removeProjectPdf(${projectId})"><i class="fas fa-times"></i></button>
                </div>`;
        }
        showAttachToast('📄 PDF ajouté !');
    };
    reader.readAsDataURL(file);
}

function removeProjectPdf(projectId) {
    const data = getProjectData(projectId);
    data.pdf = null;
    const row = document.getElementById(`pdf-row-${projectId}`);
    if (row) {
        const display = row.querySelector('.attachment-file-display');
        if (display) display.outerHTML = `
            <label class="attach-btn">
                <i class="fas fa-upload"></i> Joindre un PDF
                <input type="file" accept=".pdf" onchange="addProjectPdf(${projectId}, this)" style="display:none">
            </label>`;
    }
}

// --- URL Links ---
function saveProjectLink(projectId, type) {
    const input = document.getElementById(`${type}-input-${projectId}`);
    if (!input || !input.value.trim()) return;
    const url = input.value.trim();
    const data = getProjectData(projectId);
    data[type] = url;
    const row = document.getElementById(`${type}-row-${projectId}`);
    if (row) {
        const urlRow = row.querySelector('.attach-url-row');
        const icons = { github: 'fab fa-github', demo: 'fas fa-external-link-alt', documentation: 'fas fa-link' };
        const labels = { github: 'Voir le code', demo: 'Voir la démo', documentation: 'Voir le lien' };
        if (urlRow) urlRow.outerHTML = `
            <div class="attachment-file-display">
                <a href="${url}" target="_blank" class="modal-link-btn">
                    <i class="${icons[type]}"></i> ${labels[type]}
                </a>
                <button class="attach-remove-btn" onclick="removeProjectLink(${projectId},'${type}')"><i class="fas fa-times"></i></button>
            </div>`;
    }
    showAttachToast('🔗 Lien enregistré !');
}

function removeProjectLink(projectId, type) {
    const data = getProjectData(projectId);
    data[type] = null;
    const row = document.getElementById(`${type}-row-${projectId}`);
    if (row) {
        const display = row.querySelector('.attachment-file-display');
        if (display) display.outerHTML = `
            <div class="attach-url-row">
                <input type="url" id="${type}-input-${projectId}" placeholder="https://..." class="attach-url-input">
                <button class="attach-btn small" onclick="saveProjectLink(${projectId},'${type}')">
                    <i class="fas fa-plus"></i> Ajouter
                </button>
            </div>`;
    }
}

function showAttachToast(msg) {
    const t = document.createElement('div');
    t.className = 'attach-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

// ==================== GESTION DES PIÈCES JOINTES CERTIFICATIONS ====================
const certAttachments = {};

function addCertPdf(certIndex, input) {
    const file = input.files[0];
    if (!file || file.type !== 'application/pdf') return;
    const reader = new FileReader();
    reader.onload = (e) => {
        certAttachments[certIndex] = { pdf: e.target.result, name: file.name };
        const btn = document.getElementById(`cert-pdf-btn-${certIndex}`);
        if (btn) btn.outerHTML = `
            <div class="cert-pdf-display" id="cert-pdf-display-${certIndex}">
                <a href="${e.target.result}" download="${file.name}" class="cert-pdf-link">
                    <i class="fas fa-file-pdf"></i> ${file.name}
                </a>
                <button class="cert-pdf-remove" onclick="removeCertPdf(${certIndex})" title="Supprimer"><i class="fas fa-times"></i></button>
            </div>`;
        showAttachToast('📄 Certificat PDF ajouté !');
    };
    reader.readAsDataURL(file);
}

function removeCertPdf(certIndex) {
    delete certAttachments[certIndex];
    const display = document.getElementById(`cert-pdf-display-${certIndex}`);
    if (display) display.outerHTML = `
        <label class="cert-pdf-btn" id="cert-pdf-btn-${certIndex}" title="Joindre le certificat PDF">
            <i class="fas fa-paperclip"></i> Joindre PDF
            <input type="file" accept=".pdf" onchange="addCertPdf(${certIndex}, this)" style="display:none">
        </label>`;
}


// ==================== FONCTIONS UTILITAIRES ====================
function getCategoryName(category) {
    const categories = {
        'security': 'Cybersécurité',
        'network': 'Réseau',
        'development': 'Développement',
        'business': 'Small Business',
        'achievement': 'Réalisation'
    };
    return categories[category] || 'Autre';
}

function getCategoryIcon(category) {
    const icons = {
        'security': '<i class="fas fa-shield-alt"></i>',
        'network': '<i class="fas fa-network-wired"></i>',
        'development': '<i class="fas fa-code"></i>',
        'business': '<i class="fas fa-store"></i>',
        'achievement': '<i class="fas fa-trophy"></i>'
    };
    return icons[category] || '<i class="fas fa-folder"></i>';
}

// ==================== EXPORT ====================
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openGalleryImage = openGalleryImage;
window.openLightbox = openLightbox;
window.addProjectPhotos = addProjectPhotos;
window.removeProjectPhoto = removeProjectPhoto;
window.addProjectPdf = addProjectPdf;
window.removeProjectPdf = removeProjectPdf;
window.saveProjectLink = saveProjectLink;
window.removeProjectLink = removeProjectLink;
window.addCertPdf = addCertPdf;
window.removeCertPdf = removeCertPdf;


// ==================== ANIMATIONS AVANCÉES ====================

// Initialiser les animations personnalisées
function initAdvancedAnimations() {
    initParallaxEffect();
    initMouseFollower();
    initTextAnimations();
    initImageReveal();
    initMagneticButtons();
}

// ==================== EFFET PARALLAXE ====================
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 10));
}

// ==================== SUIVEUR DE SOURIS ====================
function initMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;
        
        followerX += distX * 0.1;
        followerY += distY * 0.1;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Agrandir au survol des liens et boutons
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            follower.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            follower.classList.remove('active');
        });
    });
}

// Style du suiveur de souris
const followerStyle = document.createElement('style');
followerStyle.textContent = `
    .mouse-follower {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--color-primary);
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.2s ease;
        transform: translate(-50%, -50%);
    }
    
    .mouse-follower.active {
        transform: translate(-50%, -50%) scale(2);
    }
`;
document.head.appendChild(followerStyle);

// ==================== ANIMATIONS DE TEXTE ====================
function initTextAnimations() {
    const textElements = document.querySelectorAll('[data-text-animation]');
    
    textElements.forEach(element => {
        const animationType = element.getAttribute('data-text-animation');
        
        if (animationType === 'split') {
            splitTextAnimation(element);
        } else if (animationType === 'fade-in') {
            fadeInTextAnimation(element);
        }
    });
}

function splitTextAnimation(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `all 0.3s ease ${index * 0.05}s`;
        element.appendChild(span);
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                element.querySelectorAll('span').forEach(span => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(element);
}

function fadeInTextAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(element);
}

// ==================== RÉVÉLATION D'IMAGES ====================
function initImageReveal() {
    const images = document.querySelectorAll('[data-reveal]');
    
    images.forEach(image => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.overflow = 'hidden';
        
        image.parentNode.insertBefore(wrapper, image);
        wrapper.appendChild(image);
        
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'var(--color-primary)';
        overlay.style.transform = 'scaleX(0)';
        overlay.style.transformOrigin = 'left';
        overlay.style.zIndex = '1';
        wrapper.appendChild(overlay);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animation de l'overlay
                    overlay.style.transition = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)';
                    overlay.style.transform = 'scaleX(1)';
                    
                    setTimeout(() => {
                        overlay.style.transformOrigin = 'right';
                        overlay.style.transform = 'scaleX(0)';
                    }, 600);
                    
                    // Animation de l'image
                    image.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        image.style.transition = 'transform 0.8s ease';
                        image.style.transform = 'scale(1)';
                    }, 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(wrapper);
    });
}

// ==================== BOUTONS MAGNÉTIQUES ====================
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 50;
            
            if (distance < maxDistance) {
                const strength = 0.3;
                element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            }
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// ==================== ANIMATION DE COMPTEUR AVANCÉE ====================
function animateCounterAdvanced(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = easeOutQuart(progress);
        const current = Math.floor(start + (target - start) * easeProgress);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ==================== EFFET DE VAGUE SUR CLIC ====================
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Style pour l'effet ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Ajouter l'effet ripple aux boutons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, button');
    
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
});

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initAdvancedAnimations();
});

// Export des fonctions pour utilisation globale
window.animateCounterAdvanced = animateCounterAdvanced;
window.createRippleEffect = createRippleEffect;document.addEventListener('DOMContentLoaded', function() {
    // Éléments DOM
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');
    const clearCompletedBtn = document.getElementById('clearCompleted');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // État de l'application
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter = 'all';
    
    // Initialiser l'application
    renderTasks();
    updateTaskCount();
    
    // Événements
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
    
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
    
    // Gestion des filtres
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            renderTasks();
        });
    });
    
    // Fonctions
    function addTask() {
        const text = taskInput.value.trim();
        
        if (text === '') {
            alert('Veuillez saisir une tâche');
            return;
        }
        
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        updateTaskCount();
        
        // Réinitialiser le champ de saisie
        taskInput.value = '';
        taskInput.focus();
        
        // Animation
        showNotification('Tâche ajoutée avec succès !');
    }
    
    function toggleTask(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    function editTask(id, newText) {
        if (newText.trim() === '') {
            deleteTask(id);
            return;
        }
        
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: newText.trim() };
            }
            return task;
        });
        
        saveTasks();
        renderTasks();
        showNotification('Tâche modifiée !');
    }
    
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateTaskCount();
        showNotification('Tâche supprimée !');
    }
    
    function clearCompletedTasks() {
        const completedCount = tasks.filter(task => task.completed).length;
        
        if (completedCount === 0) {
            showNotification('Aucune tâche terminée à effacer');
            return;
        }
        
        if (confirm(`Voulez-vous vraiment effacer ${completedCount} tâche(s) terminée(s) ?`)) {
            tasks = tasks.filter(task => !task.completed);
            saveTasks();
            renderTasks();
            updateTaskCount();
            showNotification('Tâches terminées effacées !');
        }
    }
    
    function renderTasks() {
        // Filtrer les tâches selon le filtre actif
        let filteredTasks = tasks;
        
        if (currentFilter === 'pending') {
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (currentFilter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        }
        
        // Vider la liste
        taskList.innerHTML = '';
        
        // Afficher un message si aucune tâche
        if (filteredTasks.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.className = 'empty-message';
            emptyMessage.textContent = getEmptyMessage();
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.padding = '40px 20px';
            emptyMessage.style.color = '#7f8c8d';
            emptyMessage.style.fontStyle = 'italic';
            taskList.appendChild(emptyMessage);
            return;
        }
        
        // Créer les éléments de tâche
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.dataset.id = task.id;
            
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task-text">${escapeHTML(task.text)}</span>
                <div class="task-actions">
                    <button class="edit-btn" title="Modifier">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" title="Supprimer">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            // Événements pour cette tâche
            const checkbox = li.querySelector('.task-checkbox');
            const editBtn = li.querySelector('.edit-btn');
            const deleteBtn = li.querySelector('.delete-btn');
            const taskText = li.querySelector('.task-text');
            
            checkbox.addEventListener('click', () => toggleTask(task.id));
            
            deleteBtn.addEventListener('click', () => deleteTask(task.id));
            
            // Double-clic pour éditer
            taskText.addEventListener('dblclick', () => {
                const currentText = taskText.textContent;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentText;
                input.className = 'edit-input';
                
                taskText.replaceWith(input);
                input.focus();
                input.select();
                
                input.addEventListener('blur', () => {
                    editTask(task.id, input.value);
                });
                
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        input.blur();
                    }
                });
            });
            
            // Édition via bouton
            editBtn.addEventListener('click', () => {
                taskText.dispatchEvent(new Event('dblclick'));
            });
            
            taskList.appendChild(li);
        });
    }
    
    function updateTaskCount() {
        const pendingTasks = tasks.filter(task => !task.completed).length;
        taskCount.textContent = `${pendingTasks} tâche(s) restante(s)`;
    }
    
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function getEmptyMessage() {
        switch (currentFilter) {
            case 'all':
                return tasks.length === 0 ? 'Aucune tâche pour le moment. Ajoutez-en une !' : 'Félicitations ! Toutes les tâches sont terminées !';
            case 'pending':
                return 'Aucune tâche en cours. Ajoutez une nouvelle tâche ou consultez les tâches terminées.';
            case 'completed':
                return 'Aucune tâche terminée pour le moment.';
            default:
                return 'Aucune tâche à afficher.';
        }
    }
    
    function showNotification(message) {
        // Créer une notification temporaire
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ecc71;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s, fadeOut 0.3s 2s forwards;
        `;
        
        document.body.appendChild(notification);
        
        // Supprimer après 2.5 secondes
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 2500);
    }
    
    function escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Ajouter quelques styles CSS pour les animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
            to { opacity: 0; }
        }
        
        .edit-input {
            width: 100%;
            padding: 8px;
            border: 2px solid #3498db;
            border-radius: 6px;
            font-size: 1.1rem;
        }
    `;
    document.head.appendChild(style);
});
