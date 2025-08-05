// Quotation Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Form elements
    const quotationForm = document.getElementById('quotationForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    // Form validation and submission
    if (quotationForm) {
        quotationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateQuotationForm()) {
                // Show loading state
                showLoadingState();
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Hide loading state
                    hideLoadingState();
                    
                    // Show success modal
                    successModal.show();
                    
                    // Reset form
                    quotationForm.reset();
                    
                    // Reset product checkboxes visual state
                    resetProductCheckboxes();
                }, 2000);
            }
        });
    }

    // Product checkbox styling
    const productCheckboxes = document.querySelectorAll('.product-check input[type="checkbox"]');
    productCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.classList.add('selected');
                this.parentElement.classList.add('selected');
            } else {
                label.classList.remove('selected');
                this.parentElement.classList.remove('selected');
            }
        });
    });

    // Form validation function
    function validateQuotationForm() {
        let isValid = true;
        const requiredFields = ['fullName', 'email', 'message'];
        const productCheckboxes = document.querySelectorAll('input[name="products[]"]:checked');
        const termsCheckbox = document.getElementById('terms');

        // Clear previous error states
        clearErrorStates();

        // Validate required fields
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
            }
        });

        // Validate email format
        const emailField = document.getElementById('email');
        if (emailField.value.trim() && !isValidEmail(emailField.value)) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate at least one product is selected
        if (productCheckboxes.length === 0) {
            showProductSelectionError();
            isValid = false;
        }

        // Validate terms checkbox
        if (!termsCheckbox.checked) {
            showFieldError(termsCheckbox, 'You must agree to the terms');
            isValid = false;
        }

        return isValid;
    }

    // Helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showFieldError(field, message) {
        field.classList.add('is-invalid');
        
        // Remove existing error message
        const existingError = field.parentElement.querySelector('.invalid-feedback');
        if (existingError) {
            existingError.remove();
        }

        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.textContent = message;
        field.parentElement.appendChild(errorDiv);
    }

    function showProductSelectionError() {
        const productSection = document.querySelector('.row.g-3');
        const existingError = productSection.parentElement.querySelector('.product-error');
        
        if (!existingError) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'alert alert-danger product-error mt-3';
            errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i>Please select at least one product';
            productSection.parentElement.appendChild(errorDiv);
        }
    }

    function clearErrorStates() {
        // Remove invalid classes
        document.querySelectorAll('.is-invalid').forEach(field => {
            field.classList.remove('is-invalid');
        });

        // Remove error messages
        document.querySelectorAll('.invalid-feedback').forEach(error => {
            error.remove();
        });

        // Remove product selection error
        const productError = document.querySelector('.product-error');
        if (productError) {
            productError.remove();
        }
    }

    function showLoadingState() {
        const submitBtn = quotationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Submitting...';
        submitBtn.setAttribute('data-original-text', originalText);
    }

    function hideLoadingState() {
        const submitBtn = quotationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.getAttribute('data-original-text');
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.removeAttribute('data-original-text');
    }

    function resetProductCheckboxes() {
        productCheckboxes.forEach(checkbox => {
            const label = checkbox.nextElementSibling;
            label.classList.remove('selected');
            checkbox.parentElement.classList.remove('selected');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-resize textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        messageTextarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove non-numeric characters except + and spaces
            let value = e.target.value.replace(/[^\d+\s-]/g, '');
            e.target.value = value;
        });
    }

    // Form field focus effects
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Success modal auto-close after 5 seconds
    document.getElementById('successModal').addEventListener('shown.bs.modal', function() {
        setTimeout(() => {
            successModal.hide();
        }, 5000);
    });

    // Add animation to process steps on scroll
    const processSteps = document.querySelectorAll('.process-step');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-step');
            }
        });
    }, observerOptions);

    processSteps.forEach(step => {
        processObserver.observe(step);
    });
});

// Export functions for potential external use
window.QuotationForm = {
    validateForm: function() {
        return document.getElementById('quotationForm') ? 
            validateQuotationForm() : false;
    },
    
    resetForm: function() {
        const form = document.getElementById('quotationForm');
        if (form) {
            form.reset();
            resetProductCheckboxes();
            clearErrorStates();
        }
    }
};
