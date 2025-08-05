// Contact Page JavaScript

$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            email: $('#email').val().trim(),
            phone: $('#phone').val().trim(),
            company: $('#company').val().trim(),
            industry: $('#industry').val(),
            subject: $('#subject').val(),
            message: $('#message').val().trim(),
            newsletter: $('#newsletter').is(':checked')
        };
        
        // Validate required fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        const originalText = submitBtn.html();
        submitBtn.html('<i class="fas fa-spinner fa-spin me-2"></i>Sending...').prop('disabled', true);

        // Simulate API call
        setTimeout(() => {
            // Here you would typically send the data to your server
            console.log('Contact form data:', formData);
            
            // Show success message
            showNotification(`Thank you ${formData.firstName}! Your message has been sent successfully. We'll get back to you within 24 hours.`, 'success');
            
            // Reset form and button
            this.reset();
            submitBtn.html(originalText).prop('disabled', false);
            
            // Scroll to top
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }, 2000);
    });

    // Form field animations
    $('.form-control, .form-select').on('focus', function() {
        $(this).parent().addClass('focused');
    });

    $('.form-control, .form-select').on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
    });

    // Phone number formatting
    $('#phone').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        if (value.length >= 10) {
            value = value.substring(0, 10);
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        }
        $(this).val(value);
    });

    // Character counter for message
    $('#message').on('input', function() {
        const maxLength = 500;
        const currentLength = $(this).val().length;
        const remaining = maxLength - currentLength;
        
        let counterHtml = `<small class="text-muted">${currentLength}/${maxLength} characters</small>`;
        if (remaining < 50) {
            counterHtml = `<small class="text-warning">${remaining} characters remaining</small>`;
        }
        if (remaining < 0) {
            counterHtml = `<small class="text-danger">Character limit exceeded by ${Math.abs(remaining)}</small>`;
        }
        
        // Add or update character counter
        let counter = $(this).siblings('.character-counter');
        if (counter.length === 0) {
            $(this).after(`<div class="character-counter mt-1">${counterHtml}</div>`);
        } else {
            counter.html(counterHtml);
        }
    });

    // Show notification function
    function showNotification(message, type = 'info') {
        const notification = $(`
            <div class="notification ${type}">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                ${message}
            </div>
        `);
        
        $('body').append(notification);
        
        setTimeout(() => {
            notification.addClass('show');
        }, 100);
        
        setTimeout(() => {
            notification.removeClass('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Back to top functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Contact info card hover effects
    $('.contact-info-card').hover(
        function() {
            $(this).addClass('shadow-lg').removeClass('shadow');
        },
        function() {
            $(this).addClass('shadow').removeClass('shadow-lg');
        }
    );

    // FAQ accordion enhancements
    $('.accordion-button').on('click', function() {
        const icon = $(this).find('i');
        if ($(this).hasClass('collapsed')) {
            icon.removeClass('fa-question-circle').addClass('fa-chevron-down');
        } else {
            icon.removeClass('fa-chevron-down').addClass('fa-question-circle');
        }
    });

    // Form validation styling
    $('.form-control, .form-select').on('blur', function() {
        const field = $(this);
        const value = field.val().trim();
        
        // Remove previous validation classes
        field.removeClass('is-valid is-invalid');
        
        // Check if field is required
        if (field.prop('required')) {
            if (value === '') {
                field.addClass('is-invalid');
            } else {
                // Special validation for email
                if (field.attr('type') === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(value)) {
                        field.addClass('is-valid');
                    } else {
                        field.addClass('is-invalid');
                    }
                } else {
                    field.addClass('is-valid');
                }
            }
        } else if (value !== '') {
            // Optional fields with content
            if (field.attr('type') === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(value)) {
                    field.addClass('is-valid');
                } else {
                    field.addClass('is-invalid');
                }
            } else {
                field.addClass('is-valid');
            }
        }
    });

    // Auto-resize textarea
    $('#message').on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Industry-specific subject suggestions
    $('#industry').on('change', function() {
        const industry = $(this).val();
        const subjectSelect = $('#subject');
        
        // Add industry-specific options
        if (industry && industry !== '') {
            const industryOptions = {
                'steel': 'Steel Industry Partnership',
                'power': 'Power Sector Collaboration',
                'cement': 'Cement Industry Alliance',
                'chemical': 'Chemical Sector Partnership',
                'engineering': 'Engineering Solutions'
            };
            
            if (industryOptions[industry]) {
                const optionExists = subjectSelect.find(`option[value="${industry}-specific"]`).length > 0;
                if (!optionExists) {
                    subjectSelect.append(`<option value="${industry}-specific">${industryOptions[industry]}</option>`);
                }
            }
        }
    });

    // Print functionality
    window.printPage = function() {
        window.print();
    };

    // Share functionality
    window.sharePage = function() {
        if (navigator.share) {
            navigator.share({
                title: 'Contact UIA - Urla Industries Association',
                text: 'Get in touch with Urla Industries Association',
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('Page link copied to clipboard!', 'success');
            });
        }
    };

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add loading animation to external links
    $('a[target="_blank"]').on('click', function() {
        const link = $(this);
        const originalText = link.html();
        link.html('<i class="fas fa-spinner fa-spin me-2"></i>Opening...');
        
        setTimeout(() => {
            link.html(originalText);
        }, 2000);
    });
});

// Global functions
window.scrollToForm = function() {
    $('html, body').animate({
        scrollTop: $('#contactForm').offset().top - 100
    }, 1000);
};

window.scrollToTop = function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
};
