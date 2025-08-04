// UIA Website JavaScript

$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Counter Animation
    function animateCounters() {
        $('[data-counter]').each(function() {
            const $this = $(this);
            const target = parseInt($this.attr('data-counter'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $this.text(Math.floor(current) + (target > 99 ? '+' : ''));
            }, 16);
        });
    }

    // Trigger counter animation when in viewport
    function checkCounters() {
        $('[data-counter]').each(function() {
            const $this = $(this);
            if (!$this.hasClass('animated')) {
                const elementTop = $this.offset().top;
                const windowBottom = $(window).scrollTop() + $(window).height();

                if (elementTop < windowBottom - 100) {
                    $this.addClass('animated');
                    animateCounters();
                }
            }
        });
    }

    $(window).scroll(checkCounters);
    checkCounters(); // Run on page load

    // Industry Categories Data
    const categories = [
        { name: "Agricultural Implements & Allied Products", count: 0, icon: "fas fa-tractor" },
        { name: "Cement Tiles, Bricks & A.C. Pipes", count: 3, icon: "fas fa-building" },
        { name: "Chemical Unit", count: 4, icon: "fas fa-flask" },
        { name: "Electicals Tower & Rail Products", count: 15, icon: "fas fa-bolt" },
        { name: "Electrical Unit", count: 11, icon: "fas fa-plug" },
        { name: "Engineering & Allied Products", count: 40, icon: "fas fa-cogs" },
        { name: "Ferro - Alloys Units", count: 10, icon: "fas fa-industry" },
        { name: "Industrial Gas Unit", count: 4, icon: "fas fa-gas-pump" },
        { name: "Iron & Steel Rolling Mills", count: 59, icon: "fas fa-hammer" },
        { name: "Metal (Non-Ferrous) Unit", count: 12, icon: "fas fa-coins" },
        { name: "Mini Steel Plants & Sponge Iron", count: 19, icon: "fas fa-fire" },
        { name: "Miscellaneous Items", count: 46, icon: "fas fa-boxes" },
        { name: "Plastic Unit", count: 16, icon: "fas fa-recycle" },
        { name: "Wood Timber", count: 3, icon: "fas fa-tree" }
    ];

    // Load Categories on Home Page
    function loadCategories() {
        const categoriesGrid = $('#categoriesGrid');
        if (categoriesGrid.length) {
            categories.forEach((category, index) => {
                const categoryCard = `
                    <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <div class="category-card" onclick="goToMembers('${category.name}')">
                            <div class="category-icon">
                                <i class="${category.icon}"></i>
                            </div>
                            <h5 class="category-title">${category.name}</h5>
                            <p class="category-count">${category.count} Companies</p>
                        </div>
                    </div>
                `;
                categoriesGrid.append(categoryCard);
            });
        }
    }

    // Navigate to Members Page
    window.goToMembers = function(categoryName) {
        localStorage.setItem('selectedCategory', categoryName);
        window.location.href = 'uia-members.html';
    };

    // Load Members Data
    const membersData = {
        "Chemical Unit": [
            { name: "ALFA BIO PRODUCTS", address: "Raipur", categories: ["Chemical Unit"] },
            { name: "HIRA CEMENT LTD", address: "Raipur", categories: ["Chemical Unit"] },
            { name: "OM CHEMICAL INDUSTRIES", address: "Raipur", categories: ["Chemical Unit", "Metal (Non-Ferrous) Unit"] },
            { name: "RAIPUR RASAYAN UDYOG", address: "Raipur", categories: ["Chemical Unit"] }
        ],
        "Cement Tiles, Bricks & A.C. Pipes": [
            { name: "SAMPLE CEMENT COMPANY 1", address: "Raipur", categories: ["Cement Tiles, Bricks & A.C. Pipes"] },
            { name: "SAMPLE CEMENT COMPANY 2", address: "Raipur", categories: ["Cement Tiles, Bricks & A.C. Pipes"] },
            { name: "SAMPLE CEMENT COMPANY 3", address: "Raipur", categories: ["Cement Tiles, Bricks & A.C. Pipes"] }
        ]
        // Add more categories and members as needed
    };

    // Load Members Page
    function loadMembersPage() {
        const selectedCategory = localStorage.getItem('selectedCategory');
        const membersContainer = $('#membersContainer');
        const categoryTitle = $('#categoryTitle');
        const memberCount = $('#memberCount');

        if (selectedCategory && membersContainer.length) {
            categoryTitle.text(selectedCategory);
            const members = membersData[selectedCategory] || [];
            memberCount.text(`Found ${members.length} listings`);

            members.forEach((member, index) => {
                const memberCard = `
                    <div class="col-12" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <div class="member-card">
                            <h5 class="member-title">${member.name}</h5>
                            <p class="member-address"><i class="fas fa-map-marker-alt me-2"></i>${member.address}</p>
                            <div class="member-categories">
                                ${member.categories.map(cat => `<span class="category-badge">${cat}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
                membersContainer.append(memberCard);
            });
        }
    }

    // Load Categories List for Members Page
    function loadCategoriesList() {
        const categoriesList = $('#categoriesList');
        if (categoriesList.length) {
            categories.forEach(category => {
                const categoryItem = `
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div class="category-card" onclick="goToMembers('${category.name}')">
                            <div class="category-icon">
                                <i class="${category.icon}"></i>
                            </div>
                            <h6 class="category-title">${category.name}</h6>
                            <p class="category-count">(${category.count})</p>
                        </div>
                    </div>
                `;
                categoriesList.append(categoryItem);
            });
        }
    }

    // Form Validation and Submission
    function initializeForms() {
        // Contact Form
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: $('#contactName').val(),
                email: $('#contactEmail').val(),
                phone: $('#contactPhone').val(),
                message: $('#contactMessage').val()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            const submitBtn = $(this).find('button[type="submit"]');
            const originalText = submitBtn.text();
            submitBtn.html('<span class="loading"></span> Sending...').prop('disabled', true);

            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.text(originalText).prop('disabled', false);
            }, 2000);
        });

        // Quotation Form
        $('#quotationForm').on('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: $('#quotationName').val(),
                email: $('#quotationEmail').val(),
                phone: $('#quotationPhone').val(),
                products: $('#quotationProducts').val(),
                message: $('#quotationMessage').val()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.products) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission
            const submitBtn = $(this).find('button[type="submit"]');
            const originalText = submitBtn.text();
            submitBtn.html('<span class="loading"></span> Sending...').prop('disabled', true);

            setTimeout(() => {
                alert('Thank you for your quotation request! We will contact you soon with the details.');
                this.reset();
                submitBtn.text(originalText).prop('disabled', false);
            }, 2000);
        });
    }

    // Search Functionality
    $('#searchInput').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        // Implement search logic here
        console.log('Searching for:', searchTerm);
    });

    // Smooth Scrolling for Anchor Links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Navbar Scroll Effect
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();

        if (scrollTop > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        // Parallax effect for hero section
        if ($('.hero-section').length) {
            const parallaxSpeed = 0.5;
            $('.hero-section').css('transform', `translateY(${scrollTop * parallaxSpeed}px)`);
        }
    });

    // Enhanced smooth scrolling with offset
    function smoothScrollTo(target, offset = 80) {
        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 800, 'easeInOutQuart');
    }

    // Improved scroll to section functionality
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            smoothScrollTo(target);
        }
    });

    // Hero scroll indicator
    $('.scroll-down').on('click', function(e) {
        e.preventDefault();
        const target = $('#about');
        if (target.length) {
            smoothScrollTo(target);
        }
    });

    // Initialize page-specific functions
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadCategories();
            break;
        case 'uia-members.html':
            loadMembersPage();
            loadCategoriesList();
            break;
        case 'contact.html':
        case 'get-quotation.html':
            initializeForms();
            break;
    }

    // Add fade-in animation to elements
    function addFadeInAnimation() {
        const elements = $('.fade-in');
        elements.each(function() {
            const element = $(this);
            const elementTop = element.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 100) {
                element.addClass('visible');
            }
        });
    }

    $(window).scroll(addFadeInAnimation);
    addFadeInAnimation(); // Run on page load

    // Preloader (if needed)
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

    // Back to Top Button
    const backToTop = $('<button class="back-to-top"><i class="fas fa-arrow-up"></i></button>');
    $('body').append(backToTop);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });

    backToTop.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Enhanced category card interactions
    $(document).on('mouseenter', '.category-card', function() {
        $(this).find('.category-icon').addClass('animate__animated animate__pulse');
    }).on('mouseleave', '.category-card', function() {
        $(this).find('.category-icon').removeClass('animate__animated animate__pulse');
    });

    // Service card hover effects
    $(document).on('mouseenter', '.service-card', function() {
        $(this).find('.service-icon').addClass('animate__animated animate__heartBeat');
    }).on('mouseleave', '.service-card', function() {
        $(this).find('.service-icon').removeClass('animate__animated animate__heartBeat');
    });

    // Testimonial card interactions
    $(document).on('mouseenter', '.testimonial-card', function() {
        $(this).find('.testimonial-stars').addClass('animate__animated animate__flash');
    }).on('mouseleave', '.testimonial-card', function() {
        $(this).find('.testimonial-stars').removeClass('animate__animated animate__flash');
    });

    // News card interactions
    $(document).on('mouseenter', '.news-card', function() {
        $(this).find('.news-date').addClass('animate__animated animate__bounceIn');
    }).on('mouseleave', '.news-card', function() {
        $(this).find('.news-date').removeClass('animate__animated animate__bounceIn');
    });

    // Loading states for buttons
    function addLoadingState(button, originalText) {
        button.html('<span class="loading"></span> Loading...').prop('disabled', true);

        setTimeout(() => {
            button.text(originalText).prop('disabled', false);
        }, 2000);
    }

    // Enhanced search functionality
    let searchTimeout;
    $('#searchInput').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (searchTerm.length > 2) {
                // Implement actual search logic here
                console.log('Searching for:', searchTerm);
                showNotification(`Searching for "${searchTerm}"...`, 'info');
            }
        }, 500);
    });

    // Keyboard navigation
    $(document).keydown(function(e) {
        // ESC key to close modals
        if (e.keyCode === 27) {
            $('.modal').modal('hide');
        }

        // Ctrl+K to open search
        if (e.ctrlKey && e.keyCode === 75) {
            e.preventDefault();
            $('#searchModal').modal('show');
            $('#searchInput').focus();
        }
    });

    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});

// Additional utility functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showNotification(message, type = 'success') {
    const notification = $(`
        <div class="notification ${type}">
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            ${message}
        </div>
    `);
    
    $('body').append(notification);
    
    setTimeout(() => {
        notification.addClass('show');
    }, 100);
    
    setTimeout(() => {
        notification.removeClass('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
