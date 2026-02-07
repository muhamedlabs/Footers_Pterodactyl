// Detect screen dimensions
const width = window.innerWidth;
const height = window.innerHeight;
console.log("Viewport dimensions:", width, "x", height);

// Store in global scope for accessibility
window.SCREEN_WIDTH = width;
window.SCREEN_HEIGHT = height;

// ===== ENHANCED LANGUAGE DETECTION AND LOCALIZATION =====
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage || 'en';
    const langCode = userLang.split('-')[0].toLowerCase();
    
    console.log('Detected browser language:', userLang, 'code:', langCode);
    
    let texts = [];
    let titleText = "";
    let buttonText = "";
    const emoji = "👹";
    
    if (langCode === 'uk') {
        texts = [
            "Круті YouTube-канали, ІТ-проекти та індивідуальні плани від Андрея Мухамеда.",
            "Креативні YouTube-канали, сміливі IT-проєкти та бачення Андрея Мухамеда.",
            "Де поєднуються YouTube, технології та ідеї — світ Андрея Мухамеда."
        ];
        titleText = "Мухамед Ads";
        buttonText = "Єдине посилання";
    } else if (langCode === 'ru') {
        texts = [
            "Отличные YouTube-каналы, IT-проекты и индивидуальные планы Андрея Мухамеда.",
            "Креативные YouTube-каналы, смелые IT-проекты и видение Андрея Мухамеда.",
            "Где объединяются YouTube, технологии и идеи — мир Андрея Мухамеда."
        ];
        titleText = "Мухамед Ads";
        buttonText = "Мультиссылка";
    } else {
        texts = [
            "Great YouTube-channels, IT-projects and individual plans Andrey Muhameda.",
            "Creative YouTube channels, bold IT projects, and the vision of Andrey Muhameda.",
            "Where YouTube, technology, and ideas unite — the world of Andrey Muhameda."
        ];
        titleText = "Muhamed Ads";
        buttonText = "Multilink";
    }
    
    return { texts, titleText, buttonText, emoji };
}

// ===== ADVANCED TYPEWRITER EFFECT WITH FULL CYCLE =====
class TypewriterEffect {
    constructor() {
        this.typingElement = document.getElementById("typing-text");
        this.titleElement = document.getElementById("title-text");
        this.buttonTextElement = document.getElementById("button-text");
        this.data = detectLanguage();
        
        // Animation states
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.animationId = null;
        this.typingSpeed = 50;
        this.deletingSpeed = 30;
        this.pauseBetweenTexts = 1500;
        this.pauseAfterTyping = 2000;
        
        // Performance settings
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.initialize();
    }
    
    initialize() {
        // Set initial text
        this.titleElement.textContent = this.data.titleText;
        this.buttonTextElement.textContent = this.data.buttonText;
        
        // Create initial display
        this.createInitialDisplay();
        
        // Start animation if motion is not reduced
        if (!this.prefersReducedMotion) {
            this.startTyping();
        }
    }
    
    createInitialDisplay() {
        this.typingElement.innerHTML = '';
        
        const emojiSpan = this.createEmojiSpan();
        const cursorSpan = this.createCursorSpan();
        
        if (this.prefersReducedMotion) {
            cursorSpan.style.animation = 'none';
            cursorSpan.style.opacity = '0.8';
            // Show first text immediately
            const textSpan = document.createElement('span');
            textSpan.textContent = this.data.texts[0];
            this.typingElement.appendChild(emojiSpan);
            this.typingElement.appendChild(textSpan);
            this.typingElement.appendChild(cursorSpan);
        } else {
            // Show only emoji and cursor initially
            this.typingElement.appendChild(emojiSpan);
            this.typingElement.appendChild(cursorSpan);
        }
    }
    
    createEmojiSpan() {
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'emoji-inline';
        emojiSpan.textContent = this.data.emoji + ' ';
        emojiSpan.setAttribute('aria-hidden', 'true');
        return emojiSpan;
    }
    
    createCursorSpan() {
        const cursorSpan = document.createElement('span');
        cursorSpan.className = 'typing-cursor';
        cursorSpan.textContent = '|';
        cursorSpan.setAttribute('aria-hidden', 'true');
        return cursorSpan;
    }
    
    startTyping() {
        console.log('Starting typewriter effect...');
        setTimeout(() => this.typeLoop(), 800);
    }
    
    typeLoop() {
        if (this.isPaused) {
            this.animationId = setTimeout(() => this.typeLoop(), 100);
            return;
        }
        
        const currentText = this.data.texts[this.textIndex];
        
        // Calculate display text based on current state
        let displayText = '';
        if (this.isDeleting) {
            displayText = currentText.substring(0, this.charIndex - 1);
        } else {
            displayText = currentText.substring(0, this.charIndex + 1);
        }
        
        // Update display
        this.updateDisplay(displayText);
        
        // Calculate speed
        let speed = this.typingSpeed;
        if (this.isDeleting) {
            speed = this.deletingSpeed;
        }
        
        // Handle state transitions
        if (!this.isDeleting && this.charIndex === currentText.length) {
            // Finished typing - pause before deleting
            this.isPaused = true;
            setTimeout(() => {
                this.isPaused = false;
                this.isDeleting = true;
                this.animationId = setTimeout(() => this.typeLoop(), 500);
            }, this.pauseAfterTyping);
            return;
        }
        
        if (this.isDeleting && this.charIndex === 0) {
            // Finished deleting - move to next text
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.data.texts.length;
            this.isPaused = true;
            setTimeout(() => {
                this.isPaused = false;
                this.animationId = setTimeout(() => this.typeLoop(), 500);
            }, this.pauseBetweenTexts);
            return;
        }
        
        // Update character index
        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }
        
        // Continue loop
        this.animationId = setTimeout(() => this.typeLoop(), speed);
    }
    
    updateDisplay(text) {
        this.typingElement.innerHTML = '';
        
        const emojiSpan = this.createEmojiSpan();
        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        const cursorSpan = this.createCursorSpan();
        
        this.typingElement.appendChild(emojiSpan);
        this.typingElement.appendChild(textSpan);
        this.typingElement.appendChild(cursorSpan);
    }
    
    // Public method to restart the effect
    restart() {
        this.destroy();
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.createInitialDisplay();
        this.startTyping();
    }
    
    // Public method to change texts
    updateTexts(newTexts) {
        this.data.texts = newTexts;
        this.restart();
    }
    
    destroy() {
        if (this.animationId) {
            clearTimeout(this.animationId);
            this.animationId = null;
        }
    }
}

// ===== SIMPLIFIED PARTICLE SYSTEM =====
class ParticleSystem {
    constructor() {
        this.containerId = 'particles-js';
        this.isMobile = window.innerWidth <= 768;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.initialized = false;
    }
    
    shouldInitialize() {
        return !this.isMobile && !this.prefersReducedMotion;
    }
    
    async initialize() {
        if (!this.shouldInitialize()) {
            document.getElementById(this.containerId).style.display = 'none';
            return;
        }
        
        // Load particles.js if not already loaded
        if (typeof particlesJS === 'undefined') {
            await this.loadParticlesJS();
        }
        
        if (typeof particlesJS !== 'undefined') {
            this.createParticles();
            this.initialized = true;
        }
    }
    
    loadParticlesJS() {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.onload = () => {
                console.log('Particles.js loaded successfully');
                resolve();
            };
            script.onerror = () => {
                console.warn('Failed to load particles.js');
                resolve();
            };
            document.head.appendChild(script);
        });
    }
    
    createParticles() {
        particlesJS(this.containerId, {
            particles: {
                number: {
                    value: 45,
                    density: {
                        enable: true,
                        value_area: 400
                    }
                },
                color: {
                    value: ["#ff265c", "#ff5f8a", "#ffffff"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.2,
                        sync: false
                    }
                },
                size: {
                    value: 2.2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#ff5f8a",
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "bounce",
                    bounce: true
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 120,
                        line_linked: {
                            opacity: 0.4
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }
    
    destroy() {
        if (this.initialized && typeof pJSDom !== 'undefined') {
            const canvases = document.querySelectorAll('.particles-js-canvas-el');
            canvases.forEach(canvas => canvas.remove());
            this.initialized = false;
        }
    }
}

// ===== RESPONSIVE LAYOUT MANAGER =====
class LayoutManager {
    constructor() {
        this.footer = document.getElementById('footer');
        this.actionsElement = document.querySelector('.footer-actions');
        this.resizeTimeout = null;
        this.previousWidth = window.innerWidth;
    }
    
    calculateAndSetFixedWidth() {
        const screenWidth = window.innerWidth;
        
        // Get the longest text
        const { texts, emoji } = detectLanguage();
        const longestText = texts.reduce((a, b) => a.length > b.length ? a : b);
        const fullText = emoji + ' ' + longestText;
        
        // Create hidden element for measurement
        const sizer = document.createElement('span');
        sizer.className = 'hidden-text-sizer';
        sizer.textContent = fullText;
        document.body.appendChild(sizer);
        
        const maxTextWidth = sizer.offsetWidth;
        document.body.removeChild(sizer);
        
        // Calculate actions width based on screen size
        let actionsWidth;
        if (screenWidth <= 768) {
            actionsWidth = 5 * 34 + 4 * 8 + 130 + 20;
        } else if (screenWidth <= 992) {
            actionsWidth = 5 * 36 + 4 * 8 + 130 + 20;
        } else {
            actionsWidth = 5 * 38 + 4 * 10 + 165 + 20;
        }
        
        // Calculate available width
        const availableWidth = Math.min(1180, screenWidth * 0.9) - 60;
        
        // Determine if content fits
        const totalWidth = maxTextWidth + actionsWidth + 40;
        const fits = totalWidth <= availableWidth;
        
        // Apply appropriate mode
        if (screenWidth <= 768) {
            this.footer.classList.add('compact-mode');
        } else if (fits) {
            this.footer.classList.remove('compact-mode');
            if (this.actionsElement) {
                this.actionsElement.style.minWidth = actionsWidth + 'px';
            }
        } else {
            this.footer.classList.add('compact-mode');
            if (this.actionsElement) {
                this.actionsElement.style.minWidth = 'auto';
            }
        }
        
        return fits;
    }
    
    handleResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            const currentWidth = window.innerWidth;
            const widthChanged = Math.abs(currentWidth - this.previousWidth) > 50;
            
            if (widthChanged) {
                window.SCREEN_WIDTH = currentWidth;
                window.SCREEN_HEIGHT = window.innerHeight;
                
                this.calculateAndSetFixedWidth();
                this.previousWidth = currentWidth;
            }
        }, 250);
    }
    
    destroy() {
        clearTimeout(this.resizeTimeout);
    }
}

// ===== SOCIAL ICONS ANIMATION CONTROLLER =====
class SocialIconsController {
    constructor() {
        this.icons = document.querySelectorAll('.social-icon');
        this.initialize();
    }
    
    initialize() {
        // Add hover effect enhancements
        this.icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => this.onIconHover(icon));
            icon.addEventListener('mouseleave', () => this.onIconLeave(icon));
            icon.addEventListener('focus', () => this.onIconHover(icon));
            icon.addEventListener('blur', () => this.onIconLeave(icon));
        });
    }
    
    onIconHover(icon) {
        icon.style.transform = 'translateY(-3px) scale(1.05)';
        icon.style.boxShadow = 
            '0 8px 25px rgba(255,38,92,0.4), 0 0 15px rgba(255,38,92,0.3), inset 0 0 10px rgba(255,255,255,0.2)';
    }
    
    onIconLeave(icon) {
        icon.style.transform = 'translateY(0) scale(1)';
        icon.style.boxShadow = 
            '0 0 0 1px rgba(255,38,92,0.1), inset 0 0 10px rgba(255,38,92,0.05)';
    }
    
    destroy() {
        this.icons.forEach(icon => {
            icon.removeEventListener('mouseenter', () => this.onIconHover(icon));
            icon.removeEventListener('mouseleave', () => this.onIconLeave(icon));
            icon.removeEventListener('focus', () => this.onIconHover(icon));
            icon.removeEventListener('blur', () => this.onIconLeave(icon));
        });
    }
}

// ===== MAIN FOOTER CONTROLLER =====
class FooterController {
    constructor() {
        this.typewriter = null;
        this.particleSystem = null;
        this.layoutManager = null;
        this.socialIconsController = null;
        this.isInitialized = false;
    }
    
    async initialize() {
        if (this.isInitialized) return;
        
        console.log('=== INITIALIZING FOOTER ===');
        
        // Load FontAwesome
        this.loadFontAwesome();
        
        // Initialize layout manager
        this.layoutManager = new LayoutManager();
        this.layoutManager.calculateAndSetFixedWidth();
        
        // Initialize typewriter effect
        this.typewriter = new TypewriterEffect();
        
        // Initialize particle system
        this.particleSystem = new ParticleSystem();
        await this.particleSystem.initialize();
        
        // Initialize social icons controller
        this.socialIconsController = new SocialIconsController();
        
        // Setup event listeners
        this.setupEventListeners();
        
        this.isInitialized = true;
        console.log('=== FOOTER INITIALIZED SUCCESSFULLY ===');
    }
    
    loadFontAwesome() {
        if (document.querySelector('script[src*="fontawesome"]')) return;
        
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/87b9cd76ed.js';
        script.crossOrigin = 'anonymous';
        script.async = true;
        script.onerror = () => console.warn('FontAwesome failed to load');
        document.head.appendChild(script);
    }
    
    setupEventListeners() {
        // Handle resize events
        window.addEventListener('resize', () => this.layoutManager.handleResize());
        
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.typewriter.isPaused = true;
            } else {
                this.typewriter.isPaused = false;
                if (!this.typewriter.animationId) {
                    this.typewriter.typeLoop();
                }
            }
        });
        
        // Handle multilink button click
        const multilinkButton = document.querySelector('.multilink-button');
        if (multilinkButton) {
            multilinkButton.addEventListener('click', (e) => {
                console.log('Multilink button clicked');
                // Add any tracking or additional behavior here
            });
        }
    }
    
    // Public method to restart typewriter
    restartTypewriter() {
        if (this.typewriter) {
            this.typewriter.restart();
        }
    }
    
    // Public method to update texts
    updateTypewriterTexts(newTexts) {
        if (this.typewriter) {
            this.typewriter.updateTexts(newTexts);
        }
    }
    
    destroy() {
        if (this.typewriter) {
            this.typewriter.destroy();
        }
        
        if (this.particleSystem) {
            this.particleSystem.destroy();
        }
        
        if (this.layoutManager) {
            this.layoutManager.destroy();
        }
        
        if (this.socialIconsController) {
            this.socialIconsController.destroy();
        }
        
        this.isInitialized = false;
    }
}

// ===== GLOBAL INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Create and initialize the footer controller
    window.footerController = new FooterController();
    window.footerController.initialize();
    
    // Add global utilities
    window.footerUtils = {
        restartTyping: () => window.footerController?.restartTypewriter(),
        updateTexts: (texts) => window.footerController?.updateTypewriterTexts(texts),
        detectLanguage: detectLanguage
    };
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        if (window.footerController) {
            window.footerController.destroy();
        }
    });
});

// ===== UTILITY FUNCTIONS =====
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