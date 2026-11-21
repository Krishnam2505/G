// ==============================================
// GANYA BHATTI PORTFOLIO INTERACTIVE SCRIPTS
// ==============================================

// 1. GLOBAL LIGHTBOX GALLERY DATA
const GALLERY_ITEMS = [
    { src: 'assets/ganya_black_dress_lobby.jpg', caption: 'Ganya Bhatti — Creative Storytelling & Leadership' },
    { src: 'assets/ganya_pachamama_volunteer.jpg', caption: 'Ganya Bhatti — Volunteer at Pachamama Alliance 30th Anniversary' },
    { src: 'assets/ganya_aacsb_certificate.jpg', caption: 'SFSU Lam Family College of Business — AACSB Committee Certificate of Recognition' },
    { src: 'assets/ganya_aucip_letter.jpg', caption: 'SFSU Division of International Education — AUCIP Appointment & Recognition Letter' },
    { src: 'assets/ganya_alli_awards.jpg', caption: 'Ganya Bhatti — 2024-2025 Alli\'s Awards Ceremony' },
    { src: 'assets/ganya_panel_pachamama.jpg', caption: 'Ganya Bhatti — Community Leadership at Pachamama Alliance Event' },
    { src: 'assets/ganya_panel_saree.jpg', caption: 'Ganya Bhatti — Traditional Black Saree & Celebration' },
    { src: 'assets/ganya_panel_dress.jpg', caption: 'Ganya Bhatti — Evening Portrait in Black Cowl Dress' },
    { src: 'assets/ganya_panel_skyline.jpg', caption: 'Ganya Bhatti — San Francisco City Skyline & Dolores Park' },
    { src: 'assets/ganya_sunny_beach.jpg', caption: 'Ganya Bhatti — Sunny Ocean Beach Portrait in Blue Floral Top' },
    { src: 'assets/ganya_film_beach.jpg', caption: 'Ganya Bhatti — Coastal Portrait at the Beach' },
    { src: 'assets/ganya_film_cafe.jpg', caption: 'Ganya Bhatti — Study & Cafe Work Session' },
    { src: 'assets/ganya_film_lobby.jpg', caption: 'Ganya Bhatti — Evening Portrait in Modern Lobby' },
    { src: 'assets/ganya_film_night.jpg', caption: 'Ganya Bhatti — Night Street Lights & Festival' },
    { src: 'assets/ganya_sunny_beach.jpg', caption: 'Ganya Bhatti — Sunny Ocean Beach Portrait in Blue Floral Top' },
    { src: 'assets/ganya_film_beach.jpg', caption: 'Ganya Bhatti — Coastal Portrait at the Beach' },
    { src: 'assets/ganya_film_cafe.jpg', caption: 'Ganya Bhatti — Study & Cafe Work Session' },
    { src: 'assets/ganya_film_lobby.jpg', caption: 'Ganya Bhatti — Evening Portrait in Modern Lobby' },
    { src: 'assets/ganya_film_night.jpg', caption: 'Ganya Bhatti — Night Street Lights & Festival' },
    { src: 'assets/ganya_sunset_hero.jpg', caption: 'Ganya Bhatti — Sunset Sky & Golden Hour (Canva Slide 1)' },
    { src: 'assets/ganya_dress_hero.jpg', caption: 'Ganya Bhatti — Black Glitter Dress Portrait (Canva Slide 2)' },
    { src: 'assets/ganya_jeep_hero.jpg', caption: 'Ganya Bhatti — SFSU Campus Life & White Jeep (Canva Slide 11)' },
    { src: 'assets/ganya_coat_hero.jpg', caption: 'Ganya Bhatti — Scenic Nature Walkway Bridge (Canva Slide 11)' },
    { src: 'assets/ganya_whats_in_my_bag.png', caption: "What's In My Bag? — Everyday Essentials by Ganya Bhatti" },
    { src: 'assets/ganya_flyers_posters.png?v=20261120_revamped_collage', caption: 'Flyers & Event Posters Gallery (10 Real Campaigns) — Ganya Bhatti' },
    { src: 'assets/flyer_gb_overseas.jpg', caption: 'GB Overseas — UAE Property Investment Marketing Flyer Designed by Ganya Bhatti' },
    { src: 'assets/project_marketing_content_portfolio.jpg', caption: 'Marketing Content Portfolio — Digital Design & Visual Identity Assets Designed by Ganya Bhatti' },
    { src: 'assets/project_feb_newsletter.jpg', caption: 'February Residence Life Community Newsletter — Designed by RA Ganya & RA Hannah' },
    { src: 'assets/project_retail_cafes.jpg', caption: 'Brewing Brand Loyalty: The Marketing Strategy Behind Retail Cafés — Case Study by Ganya Bhatti, Livia Williams, Elizabeth Sandoval, Jessie Fisher' },
    { src: 'assets/project_moonchem.jpg', caption: 'MoonChem: Supply Chain Logistics & Inventory Strategy — Case Study by Ganya Bhatti, Kevin Tran, Estrella Hernandez, Jimin Pyo, Miti Nakrani' },
    { src: 'assets/project_velox_carbon.jpg', caption: 'Velox Carbon: Year 2 Strategic Marketing Plan — Ganya Bhatti (VP of Brand & Sales Management)' },
    { src: 'assets/project_hubspot.jpg', caption: 'HubSpot & Ritual Coffee: CRM Automation & Lifecycle Retention Case Study — Ganya Bhatti et al.' },
    { src: 'assets/project_sf_monorail.jpg', caption: 'San Francisco Monorail Proposal — Business 300 Rail Inc. (Ganya Bhatti et al.)' },
    { src: 'assets/project_business_ethics.jpg', caption: 'Business Ethics: Making Decisions When It Actually Matters — Group 1 (Ganya Bhatti, Sean Dutton, Tristen Tunsen-Perez, Juan Zelaya)' },
    { src: 'assets/project_dubai_real_estate.jpg', caption: 'Discovering Dubai: Real Estate Market — The 4Ps Marketing Strategy by Ganya Bhatti' },
    { src: 'assets/project_mktg567_internship.jpg', caption: 'MKTG 567: Digital Marketing Assistant Internship Dossier — Ganya Bhatti (SFSU Lam Family College of Business)' },
    { src: 'assets/project_two_centuries_magazine.jpg', caption: 'Two Centuries of Power: Black Women\'s 200-Year Fight for the Vote — Magazine Publication by Ganya Bhatti' },
    { src: 'assets/ganya_short_videos_1.png', caption: 'Short Videos & Reels Part 1: Campus Campaigns & Community — Ganya Bhatti' },
    { src: 'assets/ganya_short_videos_2.png', caption: 'Short Videos & Reels Part 2: Campus Life & Outdoor Leadership — Ganya Bhatti' },
    { src: 'assets/ganya_experience_p1.png', caption: 'Professional Experience Dossier — Part 1' },
    { src: 'assets/ganya_experience_p2.png', caption: 'Professional Experience Dossier — Part 2' },
    { src: 'assets/ganya_certifications_slide.png', caption: 'Verified Credentials & Academic Recognition — SFSU' },
    { src: 'assets/ganya_manny_mashouf_scholarship.jpg', caption: 'Manny Mashouf Endowed Scholarship in Marketing — Official Award Letter, San Francisco State University, Spring 2027' }
];

let currentLightboxIndex = 0;
let selectedNoteColor = 'yellow';

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgressBar();
    initBackToTopButton();
    initActiveNavScroll();
    initExperienceFilters();
    initProjectFilters();
    initDraggableStickers();
    init3DCardTilt();
    initConfettiEngine();
});

// ==============================================
// 1. SCROLL READING PROGRESS BAR
// ==============================================
function initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }, { passive: true });
}

// ==============================================
// 2. FLOATING WAX SEAL BACK TO TOP BUTTON
// ==============================================
function initBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 380) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }, { passive: true });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==============================================
// 3. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
// ==============================================
function initActiveNavScroll() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-pill');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 220;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active-nav');
            } else {
                link.classList.remove('active-nav');
            }
        });
    }, { passive: true });
}

// ==============================================
// 4. EXPERIENCE CATEGORY FILTER
// ==============================================
function initExperienceFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const expCards = document.querySelectorAll('.exp-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            expCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 20);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

// ==============================================
// 5. DRAGGABLE SCRAPBOOK STICKERS
// ==============================================
function initDraggableStickers() {
    const stickers = document.querySelectorAll('.float-item.draggable');

    stickers.forEach(sticker => {
        let isDragging = false;
        let startX, startY;
        let initialLeft, initialTop;
        let hasMoved = false;

        sticker.addEventListener('pointerdown', (e) => {
            isDragging = true;
            hasMoved = false;
            sticker.classList.add('is-dragging');
            sticker.setPointerCapture(e.pointerId);

            const rect = sticker.getBoundingClientRect();
            const parentRect = sticker.parentElement.getBoundingClientRect();

            startX = e.clientX;
            startY = e.clientY;
            initialLeft = rect.left - parentRect.left;
            initialTop = rect.top - parentRect.top;

            sticker.style.left = `${initialLeft}px`;
            sticker.style.top = `${initialTop}px`;
            sticker.style.right = 'auto';
            sticker.style.bottom = 'auto';
        });

        sticker.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                hasMoved = true;
            }

            sticker.style.left = `${initialLeft + dx}px`;
            sticker.style.top = `${initialTop + dy}px`;
        });

        const stopDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            sticker.classList.remove('is-dragging');
            if (hasMoved) {
                // Gentle settling bounce
                sticker.style.transform = `${sticker.style.transform || ''} scale(1.02)`;
                setTimeout(() => {
                    sticker.style.transform = sticker.style.transform.replace(' scale(1.02)', '');
                }, 150);
            }
        };

        sticker.addEventListener('pointerup', stopDrag);
        sticker.addEventListener('pointercancel', stopDrag);
    });
}

// ==============================================
// 6. INTERACTIVE NIKON CAMERA SHUTTER & FLASH
// ==============================================
function snapCameraPhoto(e) {
    if (e && e.stopPropagation) e.stopPropagation();

    // 1. Play synthesized camera shutter & flash charging sound via Web Audio API
    playCameraShutterSound();

    // 2. Camera Flash Overlay Animation
    const flashOverlay = document.getElementById('camera-flash-overlay');
    if (flashOverlay) {
        flashOverlay.classList.add('flash');
        setTimeout(() => {
            flashOverlay.classList.remove('flash');
        }, 120);
    }

    // 3. Camera sticker snap recoil
    const cameraEl = document.getElementById('interactive-camera');
    if (cameraEl) {
        cameraEl.style.transform = 'scale(0.92) rotate(4deg)';
        setTimeout(() => {
            cameraEl.style.transform = 'scale(1.05) rotate(7deg)';
            setTimeout(() => {
                cameraEl.style.transform = 'scale(1) rotate(6deg)';
            }, 200);
        }, 120);
    }

    // 4. Pop-up Toast
    showToast(' Snap! Memory saved to Ganya\'s digital scrapbook! ');

    // 5. Confetti celebration
    if (window.fireConfetti) {
        const rect = cameraEl ? cameraEl.getBoundingClientRect() : { left: window.innerWidth / 2, top: 200 };
        window.fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
    }
}

// Synthesizes a vintage camera click + motor whir using pure Web Audio API
function playCameraShutterSound() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        // Mechanical Click 1
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.04);

        // Shutter snap noise
        const bufferSize = ctx.sampleRate * 0.05;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1400;
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.25, ctx.currentTime + 0.01);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start(ctx.currentTime + 0.01);
    } catch (e) {
        // AudioContext may be blocked before gesture
    }
}

// ==============================================
// 7. 3D TACTILE CARD TILT ON HOVER
// ==============================================
function init3DCardTilt() {
    const tiltCards = document.querySelectorAll(
        '.frames-container-horizontal .frame, .project-card, .bag-item-card, .tool-card, .note-creator-card'
    );

    tiltCards.forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.2s ease';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -7;
            const rotateY = ((x - centerX) / centerX) * 7;

            card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// ==============================================
// 8. FLYERS CAMPAIGN INTERACTIVE FILTER
// ==============================================
function filterFlyers(category, btnElement) {
    const filterButtons = document.querySelectorAll('#flyer-filters .filter-pill');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const chips = document.querySelectorAll('#flyer-grid .campaign-chip');
    chips.forEach(chip => {
        const chipCat = chip.getAttribute('data-category');
        if (category === 'all' || chipCat === category) {
            chip.style.display = 'flex';
            setTimeout(() => {
                chip.style.opacity = '1';
                chip.style.transform = 'scale(1)';
            }, 20);
        } else {
            chip.style.opacity = '0';
            chip.style.transform = 'scale(0.95)';
            setTimeout(() => {
                chip.style.display = 'none';
            }, 180);
        }
    });
}

// ==============================================
// 9. ENHANCED LIGHTBOX MODAL WITH GALLERY CONTROLS
// ==============================================
function openLightbox(src, caption) {
    const modal = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    if (!modal || !img) return;

    // Find index in GALLERY_ITEMS or default to matching
    let idx = GALLERY_ITEMS.findIndex(item => item.src === src);
    if (idx === -1) {
        GALLERY_ITEMS.push({ src, caption: caption || 'Portfolio Showcase' });
        idx = GALLERY_ITEMS.length - 1;
    }
    currentLightboxIndex = idx;

    updateLightboxView();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightboxView() {
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    const counter = document.getElementById('lightbox-counter');
    if (!img) return;

    const currentItem = GALLERY_ITEMS[currentLightboxIndex];
    img.src = currentItem.src;
    img.alt = currentItem.caption;
    if (cap) cap.textContent = currentItem.caption;
    if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${GALLERY_ITEMS.length}`;
}

function navigateLightbox(direction, e) {
    if (e && e.stopPropagation) e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + direction + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    updateLightboxView();
}

function closeLightbox(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const modal = document.getElementById('image-lightbox');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Keyboard Controls for Lightbox
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('image-lightbox');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
    } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
    }
});

// ==============================================


// ==============================================
// 12. LIGHTWEIGHT CANVAS CONFETTI ENGINE
// ==============================================
function initConfettiEngine() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#38BDF8', '#90CAF9', '#f4a261', '#e9c46a', '#2a9d8f', '#ffcdd2', '#b3e5fc'];

    class ConfettiParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 8 + 4;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speedX = (Math.random() - 0.5) * 12;
            this.speedY = Math.random() * -10 - 4;
            this.gravity = 0.35;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 10;
            this.opacity = 1;
            this.shape = Math.random() > 0.5 ? 'rect' : 'circle';
        }

        update() {
            this.speedY += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;
            this.opacity -= 0.015;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.opacity);
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;

            if (this.shape === 'rect') {
                ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].opacity <= 0 || particles[i].y > canvas.height) {
                particles.splice(i, 1);
            }
        }
        if (particles.length > 0) {
            animationId = requestAnimationFrame(animate);
        } else {
            animationId = null;
        }
    }

    window.fireConfetti = (x, y, count = 40) => {
        const startX = typeof x === 'number' ? x : window.innerWidth / 2;
        const startY = typeof y === 'number' ? y : window.innerHeight / 2;
        for (let i = 0; i < count; i++) {
            particles.push(new ConfettiParticle(startX, startY));
        }
        if (!animationId) {
            animate();
        }
    };
}

// ==============================================
// 13. COPY TO CLIPBOARD & TOAST
// ==============================================
function copyText(text, btnElement) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied ${text} to clipboard!`);
            handleCopyFeedback(btnElement);
        }).catch(() => {
            fallbackCopy(text, btnElement);
        });
    } else {
        fallbackCopy(text, btnElement);
    }
}

function fallbackCopy(text, btnElement) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(`Copied ${text} to clipboard!`);
        handleCopyFeedback(btnElement);
    } catch (err) {
        showToast('Unable to copy automatically');
    }
    document.body.removeChild(textArea);
}

function handleCopyFeedback(btnElement) {
    if (btnElement) {
        const originalText = btnElement.textContent;
        btnElement.textContent = 'Copied!';
        if (window.fireConfetti) {
            const rect = btnElement.getBoundingClientRect();
            window.fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
        }
        setTimeout(() => {
            btnElement.textContent = originalText;
        }, 2000);
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}


// OPT Modal handlers
function openOptModal() {
    const modal = document.getElementById('opt-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeOptModal() {
    const modal = document.getElementById('opt-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
// Listen for Escape key on OPT modal
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeOptModal();
    }
});


// ==============================================
// PROJECTS CATEGORY FILTER (Divided like Experience)
// ==============================================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.projects-filter-tabs .filter-btn');
    const projItems = document.querySelectorAll('.project-filterable-item');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-proj-filter');
            const container = document.querySelector('.projects-container');
            const moreBar = document.querySelector('.projects-more-bar');
            const lessBar = document.querySelector('.projects-less-bar');

            if (filter !== 'all') {
                if (moreBar) moreBar.style.display = 'none';
                if (lessBar) lessBar.style.display = 'none';
            } else {
                if (moreBar) moreBar.style.display = '';
                if (lessBar) lessBar.style.display = '';
            }

            projItems.forEach(item => {
                if (filter === 'all') {
                    const isExtra = item.classList.contains('is-extra-project');
                    const isExpanded = container && container.classList.contains('is-expanded');
                    if (isExtra && !isExpanded) {
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    } else {
                        item.style.display = item.classList.contains('video-spotlight-card') ? 'block' : 'flex';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 20);
                    }
                } else if (item.getAttribute('data-proj-category') === filter) {
                    item.style.display = item.classList.contains('video-spotlight-card') ? 'block' : 'flex';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 20);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

function toggleProjectsExpand(expand) {
    const container = document.querySelector('.projects-container');
    if (!container) return;

    if (expand) {
        container.classList.add('is-expanded');
        const extraProjects = container.querySelectorAll('.project-card.is-extra-project');
        extraProjects.forEach(item => {
            item.style.display = 'flex';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 20);
        });
    } else {
        container.classList.remove('is-expanded');
        const extraProjects = container.querySelectorAll('.project-card.is-extra-project');
        extraProjects.forEach(item => {
            item.style.display = 'none';
            item.style.opacity = '0';
        });
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ==============================================
// SHORT REELS VIDEO PLAY / PAUSE CONTROLS
// ==============================================
function toggleReelVideo(frameEl) {
    if (!frameEl) return;
    const video = frameEl.querySelector('video');
    const playBtn = frameEl.querySelector('.reel-play-overlay');
    const card = frameEl.closest('.vertical-reel-card');
    const actionBtn = card?.querySelector('.reel-action-btn');

    if (video && (video.src || video.querySelector('source') || video.currentSrc)) {
        if (video.paused) {
            // Pause any other playing reel videos to prevent audio clash
            document.querySelectorAll('.phone-mockup-frame video').forEach(v => {
                if (v !== video && !v.paused) {
                    v.pause();
                    const parent = v.closest('.phone-mockup-frame');
                    if (parent) {
                        parent.classList.remove('is-playing');
                        const btn = parent.querySelector('.reel-play-overlay');
                        if (btn) btn.setAttribute('aria-label', 'Play');
                    }
                }
            });

            video.play().then(() => {
                frameEl.classList.add('is-playing');
                if (playBtn) playBtn.setAttribute('aria-label', 'Pause');
            }).catch(() => {
                // Retry muted if browser policy blocked unmuted playback
                video.muted = true;
                const soundBtn = frameEl.querySelector('.reel-sound-btn');
                if (soundBtn) soundBtn.textContent = 'Unmute';
                video.play().then(() => {
                    frameEl.classList.add('is-playing');
                    if (playBtn) playBtn.setAttribute('aria-label', 'Pause');
                }).catch(() => {
                    if (actionBtn && actionBtn.href && !actionBtn.href.endsWith('#')) {
                        window.open(actionBtn.href, '_blank', 'noopener,noreferrer');
                    }
                });
            });
        } else {
            video.pause();
            frameEl.classList.remove('is-playing');
            if (playBtn) playBtn.setAttribute('aria-label', 'Play');
        }
    } else {
        if (actionBtn && actionBtn.href && !actionBtn.href.endsWith('#')) {
            window.open(actionBtn.href, '_blank', 'noopener,noreferrer');
        } else {
            showToast('Video file incoming! Send the MP4 file to play inline.');
        }
    }
}

function toggleReelSound(event, btnEl) {
    if (event) event.stopPropagation();
    const frameEl = btnEl?.closest('.phone-mockup-frame');
    const video = frameEl?.querySelector('video');
    if (!video) return;

    video.muted = !video.muted;
    btnEl.textContent = video.muted ? 'Unmute' : 'Mute';
}

function toggleReelsExpand(expand) {
    const container = document.querySelector('.reels-container');
    if (!container) return;

    if (expand) {
        container.classList.add('is-expanded');
    } else {
        // Pause any extra videos currently playing to prevent background audio clash
        const extraVideos = container.querySelectorAll('.vertical-reel-card.is-extra-reel video');
        extraVideos.forEach(v => {
            if (!v.paused) {
                v.pause();
                const frame = v.closest('.phone-mockup-frame');
                if (frame) {
                    frame.classList.remove('is-playing');
                    const playBtn = frame.querySelector('.reel-play-overlay');
                    if (playBtn) playBtn.setAttribute('aria-label', 'Play');
                }
            }
        });

        container.classList.remove('is-expanded');
        const reelsSection = document.getElementById('reels');
        if (reelsSection) {
            reelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}


