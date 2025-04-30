// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos que aparecerán con animación
    const animatedElements = document.querySelectorAll('.hero-text, .post-card, .category-card, .subscribe, .featured-text');
    
    // Configuración del observador
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Crear un observador para detectar cuando los elementos están en el viewport
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
        
            // Esperar a que el DOM esté completamente cargado
            document.addEventListener('DOMContentLoaded', function() {
                    // Elementos que aparecerán con animación
                    const animatedElements = document.querySelectorAll('.hero-text, .post-card, .category-card, .subscribe, .featured-text');
                    
                    // Configuración del observador
                    const observerOptions = {
                        root: null,
                        rootMargin: '0px',
                        threshold: 0.1
                    };
                    
                    // Crear un observador para detectar cuando los elementos están en el viewport
                    const observer = new IntersectionObserver(function(entries, observer) {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, observerOptions);
                    
                    // Observar todos los elementos animados
                    animatedElements.forEach(element => {
                        element.classList.add('fade-in');
                        observer.observe(element);
                    });
                    
                    // Agregar clase activa al menú
                    const menuLinks = document.querySelectorAll('.menu-items a');
                    menuLinks.forEach(link => {
                        link.addEventListener('click', function(e) {
                            // Remover clase activa de todos los enlaces
                            menuLinks.forEach(item => item.classList.remove('active'));
                            // Agregar clase activa al enlace clickeado
                            this.classList.add('active');
                        });
                    });
                    
                    // Efecto hover para las tarjetas de categoría
                    const categoryCards = document.querySelectorAll('.category-card');
                    categoryCards.forEach(card => {
                        card.addEventListener('mouseenter', function() {
                            this.style.transform = 'translateY(-10px)';
                        });
                        
                        card.addEventListener('mouseleave', function() {
                            this.style.transform = 'translateY(0)';
                        });
                    });
                    
                    // Formulario de suscripción
                    const subscribeForm = document.querySelector('.subscribe-form');
                    if (subscribeForm) {
                        subscribeForm.addEventListener('submit', function(e) {
                            e.preventDefault();
                            const emailInput = this.querySelector('input[type="email"]');
                            
                            if (emailInput.value.trim() === '') {
                                // Mostrar error
                                showNotification('Por favor ingresa tu email', 'error');
                            } else if (!isValidEmail(emailInput.value)) {
                                // Validar formato de email
                                showNotification('Por favor ingresa un email válido', 'error');
                            } else {
                                // Simular envío exitoso
                                showNotification('¡Gracias por suscribirte!', 'success');
                                emailInput.value = '';
                            }
                        });
                    }
                    
                    // Validar formato de email
                    function isValidEmail(email) {
                        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return regex.test(email);
                    }
                    
                    // Mostrar notificaciones
                    function showNotification(message, type) {
                        // Crear elemento de notificación
                        const notification = document.createElement('div');
                        notification.className = `notification ${type}`;
                        notification.textContent = message;
                        
                        // Añadir al DOM
                        document.body.appendChild(notification);
                        
                        // Añadir clase para mostrar con animación
                        setTimeout(() => {
                            notification.classList.add('show');
                        }, 10);
                        
                        // Remover después de 3 segundos
                        setTimeout(() => {
                            notification.classList.remove('show');
                            setTimeout(() => {
                                document.body.removeChild(notification);
                            }, 300);
                        }, 3000);
                    }
                    
                    // Botón "volver" en la navegación
                    const backButton = document.querySelector('.back-button');
                    if (backButton) {
                        backButton.addEventListener('click', function() {
                            window.history.back();
                        });
                    }
                    
                    // Animación para el logo
                    const logo = document.querySelector('.logo h1');
                    if (logo) {
                        logo.addEventListener('mouseenter', function() {
                            this.style.transform = 'scale(1.05)';
                            this.style.transition = 'transform 0.3s ease';
                        });
                        
                        logo.addEventListener('mouseleave', function() {
                            this.style.transform = 'scale(1)';
                        });
                    }
                    
                    // Efecto parallax para elementos decorativos
                    window.addEventListener('scroll', function() {
                        const scrollPosition = window.scrollY;
                        
                        // Aplicar parallax a elementos decorativos
                        const decorativeElements = document.querySelectorAll('.flower, .heart, .star, .rainbow');
                        decorativeElements.forEach(element => {
                            const speed = 0.05;
                            element.style.transform = `translateY(${scrollPosition * speed}px)`;
                        });
                    });
                    
                    // Añadir estilos adicionales para animaciones
                    const style = document.createElement('style');
                    style.textContent = `
                        .fade-in {
                            opacity: 0;
                            transform: translateY(20px);
                            transition: opacity 0.6s ease, transform 0.6s ease;
                        }
                        
                        .fade-in.visible {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        
                        .notification {
                            position: fixed;
                            bottom: 20px;
                            right: 20px;
                            padding: 15px 25px;
                            border-radius: 10px;
                            color: white;
                            font-size: 14px;
                            font-weight: 500;
                            z-index: 1000;
                            transform: translateY(100px);
                            opacity: 0;
                            transition: transform 0.3s ease, opacity 0.3s ease;
                        }
                        
                        .notification.show {
                            transform: translateY(0);
                            opacity: 1;
                        }
                        
                        .notification.success {
                            background-color: #4CAF50;
                        }
                        
                        .notification.error {
                            background-color: #F44336;
                        }
                    `;
                    document.head.appendChild(style);
                    
                    // Animación para botones
                    const buttons = document.querySelectorAll('.btn');
                    buttons.forEach(button => {
                        button.addEventListener('mouseenter', function() {
                            this.style.transform = 'translateY(-3px)';
                            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                        });
                        
                        button.addEventListener('mouseleave', function() {
                            this.style.transform = 'translateY(0)';
                            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                        });
                    });
                    
                    // Carousel para posts destacados en mobile
                    function initMobileCarousel() {
                        if (window.innerWidth <= 768) {
                            const postsGrid = document.querySelector('.posts-grid');
                            if (postsGrid) {
                                const postCards = postsGrid.querySelectorAll('.post-card');
                                const totalPosts = postCards.length;
                                let currentIndex = 0;
                                
                                // Crear indicadores de navegación
                                const carouselNav = document.createElement('div');
                                carouselNav.className = 'carousel-nav';
                                
                                // Crear botones de navegación
                                const prevBtn = document.createElement('button');
                                prevBtn.className = 'carousel-btn prev-btn';
                                prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
                                
                                const nextBtn = document.createElement('button');
                                nextBtn.className = 'carousel-btn next-btn';
                                nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
                                
                                // Añadir botones al DOM
                                carouselNav.appendChild(prevBtn);
                                carouselNav.appendChild(nextBtn);
                                postsGrid.parentNode.insertBefore(carouselNav, postsGrid.nextSibling);
                                
                                // Mostrar solo la tarjeta actual
                                function updateCards() {
                                    postCards.forEach((card, index) => {
                                        if (index === currentIndex) {
                                            card.style.display = 'block';
                                        } else {
                                            card.style.display = 'none';
                                        }
                                    });
                                }
                                
                                // Inicializar
                                updateCards();
                                
                                // Evento para botón anterior
                                prevBtn.addEventListener('click', function() {
                                    currentIndex = (currentIndex - 1 + totalPosts) % totalPosts;
                                    updateCards();
                                });
                                
                                // Evento para botón siguiente
                                nextBtn.addEventListener('click', function() {
                                    currentIndex = (currentIndex + 1) % totalPosts;
                                    updateCards();
                                });
                                
                                // Estilo para los botones de navegación
                                const carouselStyle = document.createElement('style');
                                carouselStyle.textContent = `
                                    .carousel-nav {
                                        display: flex;
                                        justify-content: center;
                                        gap: 15px;
                                        margin-top: 20px;
                                    }
                                    
                                    .carousel-btn {
                                        width: 40px;
                                        height: 40px;
                                        border-radius: 50%;
                                        background-color: white;
                                        border: none;
                                        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                                        cursor: pointer;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        transition: all 0.3s ease;
                                    }
                                    
                                    .carousel-btn:hover {
                                        background-color: #FFE1E9;
                                        transform: scale(1.1);
                                    }
                                `;
                                document.head.appendChild(carouselStyle);
                            }
                        }
                    }
                    
                    // Inicializar carousel en mobile
                    initMobileCarousel();
                    
                    // Actualizar en resize
                    window.addEventListener('resize', function() {
                        initMobileCarousel();
                    });
                });
            });