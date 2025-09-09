// ConfiAI Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // AI Products Data
    const products = [
        {
            id: 'smartanalytics',
            name: 'ConfiAI Smart Analytics',
            shortDesc: 'Advanced business intelligence powered by machine learning algorithms',
            description: 'Transform your raw data into actionable insights with our Smart Analytics platform. Featuring predictive modeling, real-time dashboards, and automated reporting capabilities.',
            icon: 'fas fa-chart-line',
            features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Data Visualization'],
            price: 'Enterprise',
            category: 'Analytics',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'aiassistant',
            name: 'ConfiAI Virtual Assistant',
            shortDesc: 'Intelligent conversational AI for customer service and support',
            description: 'Deploy sophisticated AI assistants that understand context, handle complex queries, and provide personalized customer experiences across multiple channels.',
            icon: 'fas fa-robot',
            features: ['Natural Language Processing', '24/7 Availability', 'Multi-channel Support', 'Custom Training'],
            price: 'Custom',
            category: 'Conversational AI',
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 'visionai',
            name: 'ConfiAI Vision AI',
            shortDesc: 'Computer vision solutions for image and video analysis',
            description: 'Harness the power of computer vision to analyze images and videos, detect objects, recognize faces, and extract meaningful information from visual content.',
            icon: 'fas fa-eye',
            features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analytics'],
            price: 'Premium',
            category: 'Computer Vision',
            color: 'from-green-500 to-teal-500'
        },
        {
            id: 'nlpengine',
            name: 'ConfiAI NLP Engine',
            shortDesc: 'Natural language processing for text analysis and understanding',
            description: 'Advanced NLP capabilities including sentiment analysis, entity recognition, language translation, and content generation for diverse business applications.',
            icon: 'fas fa-language',
            features: ['Sentiment Analysis', 'Entity Recognition', 'Language Translation', 'Text Generation'],
            price: 'Standard',
            category: 'Natural Language',
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 'automl',
            name: 'ConfiAI AutoML Platform',
            shortDesc: 'Automated machine learning for rapid model development',
            description: 'Build, train, and deploy machine learning models without extensive coding. Our AutoML platform democratizes AI development for businesses of all sizes.',
            icon: 'fas fa-cogs',
            features: ['No-code ML', 'Automated Training', 'Model Deployment', 'Performance Monitoring'],
            price: 'Professional',
            category: 'Machine Learning',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            id: 'predictive',
            name: 'ConfiAI Predictive Engine',
            shortDesc: 'Forecasting and prediction models for business optimization',
            description: 'Leverage advanced forecasting algorithms to predict trends, optimize inventory, forecast demand, and make data-driven business decisions with confidence.',
            icon: 'fas fa-crystal-ball',
            features: ['Demand Forecasting', 'Trend Analysis', 'Risk Assessment', 'Optimization Models'],
            price: 'Enterprise',
            category: 'Predictive Analytics',
            color: 'from-yellow-500 to-orange-500'
        }
    ];

    // Generate Product Cards
    function generateProductCards() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        productsGrid.innerHTML = products.map(product => `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl card-hover overflow-hidden group">
                <div class="p-6">
                    <!-- Product Icon -->
                    <div class="w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i class="${product.icon} text-white text-2xl"></i>
                    </div>
                    
                    <!-- Product Info -->
                    <div class="mb-4">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl font-bold text-gray-900">${product.name}</h3>
                            <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">${product.category}</span>
                        </div>
                        <p class="text-gray-600 mb-4">${product.shortDesc}</p>
                    </div>
                    
                    <!-- Features -->
                    <div class="mb-6">
                        <div class="flex flex-wrap gap-2">
                            ${product.features.slice(0, 2).map(feature => `
                                <span class="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">${feature}</span>
                            `).join('')}
                            ${product.features.length > 2 ? `<span class="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">+${product.features.length - 2} more</span>` : ''}
                        </div>
                    </div>
                    
                    <!-- Pricing and CTA -->
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="text-sm text-gray-500">Starting from</span>
                            <div class="text-lg font-bold text-gray-900">${product.price}</div>
                        </div>
                        <a href="product-${product.id}.html" 
                           class="bg-gradient-to-r ${product.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center">
                            Learn More
                            <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Hover Effect Overlay -->
                <div class="absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        `).join('');
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
        }
    }

    // Smooth Scrolling for Navigation Links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const mobileMenuButton = document.getElementById('mobile-menu-button');
                        const icon = mobileMenuButton.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            });
        });
    }

    // Navbar Background on Scroll
    function initScrollEffects() {
        const navbar = document.querySelector('nav');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/98');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/98');
            }
        });
    }

    // Intersection Observer for Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe product cards
        setTimeout(() => {
            const productCards = document.querySelectorAll('#products-grid > div');
            productCards.forEach(card => observer.observe(card));
        }, 100);
    }

    // Contact Form Handler
    function initContactForm() {
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const name = this.querySelector('input[placeholder="Your Name"]').value;
                const email = this.querySelector('input[placeholder="your@email.com"]').value;
                const message = this.querySelector('textarea').value;
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Show success message (in a real app, you'd send this to a server)
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
            });
        }
    }

    // Add CSS for fade-in animation
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .animate-fade-in {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            #products-grid > div {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            #products-grid > div.animate-fade-in {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize all functions
    generateProductCards();
    initMobileMenu();
    initSmoothScrolling();
    initScrollEffects();
    initContactForm();
    addAnimationStyles();
    
    // Initialize scroll animations after a short delay
    setTimeout(initScrollAnimations, 500);

    // Export products data for individual pages
    window.ConfiAI = {
        products: products,
        getProduct: function(id) {
            return products.find(product => product.id === id);
        }
    };
});

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}