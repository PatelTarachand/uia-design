// Member Profile Page JavaScript

$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Sample member data - In a real application, this would come from a database
    const membersData = {
        "ADITYA TRANSFORMERS": {
            name: "ADITYA TRANSFORMERS",
            address: "Raipur",
            fullAddress: "Plot No. 156, Urla Industrial Area,<br>Raipur - 492003 (C.G.)",
            description: "Power Dismi Button, Furnace Transformer Up to 33 KV Clad & 10 MVP of Transformers",
            categories: ["Electrical Unit", "Iron & Steel Rolling Mills"],
            email: "arya220kv@gmail.com",
            phone: "2324784 (O)",
            website: "www.adityatransformers.com",
            established: "1990",
            employees: "100-200",
            contactPersons: [
                { name: "Mr. Vivek Arora", phone: "9425505111" },
                { name: "Mrs. Riddhi Arora", phone: "9425505111" }
            ]
        },
        "ALFA BIO PRODUCTS": {
            name: "ALFA BIO PRODUCTS",
            address: "Raipur",
            fullAddress: "Plot No. 372, Sector-C, Urla Industrial Area,<br>Raipur - 492003 (C.G.)",
            description: "Bio Organic manure, pesticide Formulation, NPF Fertilizer, Bio Pesticides & Seed Packaging.",
            categories: ["Chemical Unit"],
            email: "alfabioproducts@gmail.com",
            phone: "+91 771 2345678",
            website: "www.alfabio.com",
            established: "1995",
            employees: "50-100",
            contactPersons: [
                { name: "Mr. Mandip Chawla", phone: "9981310000" },
                { name: "Mr. Suresh Dwivedi", phone: "9039010012" }
            ]
        },
        "HIRA CEMENT LTD": {
            name: "HIRA CEMENT LTD",
            address: "Raipur",
            fullAddress: "Sector 2, Urla Industrial Area,<br>Raipur - 492003 (C.G.)",
            description: "Manufacturing of high-quality cement tiles, bricks, and A.C. pipes for construction industry.",
            categories: ["Cement Tiles, Bricks & A.C. Pipes"],
            email: "contact@hiracements.com",
            phone: "+91 771 2345679",
            website: "www.hiracements.com",
            established: "1988",
            employees: "200-500",
            contactPersons: [
                { name: "Mr. Rajesh Kumar", phone: "9876543210" },
                { name: "Ms. Priya Sharma", phone: "9123456789" }
            ]
        },
        "OM CHEMICAL INDUSTRIES": {
            name: "OM CHEMICAL INDUSTRIES",
            address: "Raipur",
            fullAddress: "Plot No. 145, Sector-A, Urla Industrial Area,<br>Raipur - 492003 (C.G.)",
            description: "Leading manufacturer of industrial chemicals and metal processing solutions.",
            categories: ["Chemical Unit", "Metal (Non-Ferrous) Unit"],
            email: "info@omchemical.com",
            phone: "+91 771 2345680",
            website: "www.omchemical.com",
            established: "1992",
            employees: "100-200",
            contactPersons: [
                { name: "Mr. Om Prakash", phone: "9988776655" },
                { name: "Mr. Vikash Gupta", phone: "9876543211" }
            ]
        }
    };

    // Get member name from URL parameter or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const memberName = urlParams.get('member') || localStorage.getItem('selectedMember') || 'ADITYA TRANSFORMERS';
    
    // Load member data
    loadMemberProfile(memberName);

    // Load member profile data
    function loadMemberProfile(memberName) {
        const member = membersData[memberName];
        
        if (!member) {
            // If member not found, redirect to members page
            window.location.href = 'uia-members.html';
            return;
        }

        // Update page title
        document.title = `${member.name} - UIA Member Profile`;

        // Update header
        $('#companyName').text(member.name);
        $('#companyBreadcrumb').text(member.name);
        $('#categoryLink').text(member.categories[0]);

        // Update company information
        $('#profileCompanyName').text(member.name);
        $('#companyAddress').text(member.address);
        $('#companyFullAddress').html(member.fullAddress);
        $('#companyDescription').text(member.description);
        $('#companyEmail').text(member.email).attr('href', `mailto:${member.email}`);

        // Update categories
        const categoriesHtml = member.categories.map(cat =>
            `<span class="category-badge">${cat}</span>`
        ).join('');
        $('#companyCategories').html(categoriesHtml);

        // Update quick stats
        $('#establishedYear').text(member.established);
        $('#employeeCount').text(member.employees);
        $('#categoryCount').text(member.categories.length);

        // Update contact persons
        const contactPersonsHtml = member.contactPersons.map(person => `
            <div class="col-md-6 mb-3">
                <div class="contact-person">
                    <h6 class="fw-bold">${person.name}</h6>
                    <p class="text-muted mb-0">
                        <i class="fas fa-phone me-2"></i>
                        <a href="tel:${person.phone}">${person.phone}</a>
                    </p>
                </div>
            </div>
        `).join('');

        $('#contactPersons').html(`<div class="row">${contactPersonsHtml}</div>`);
    }

    // Contact form submission
    $('#memberContactForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#contactName').val().trim();
        const email = $('#contactEmail').val().trim();
        const message = $('#contactMessage').val().trim();

        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
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
            // For now, we'll just show a success message
            showNotification(`Thank you ${name}! Your message has been sent to ${memberName}. We will get back to you soon.`, 'success');

            // Reset form and button
            this.reset();
            submitBtn.html(originalText).prop('disabled', false);
        }, 1500);
    });

    // Open contact modal function
    window.openContactForm = function() {
        // Scroll to contact form
        $('html, body').animate({
            scrollTop: $('#memberContactForm').offset().top - 100
        }, 500);
        
        // Focus on first input
        $('#contactName').focus();
    };

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
        }, 4000);
    }

    // Print profile function
    window.printProfile = function() {
        window.print();
    };

    // Share profile function
    window.shareProfile = function() {
        if (navigator.share) {
            navigator.share({
                title: `${memberName} - UIA Member Profile`,
                text: `Check out ${memberName} profile on UIA website`,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('Profile link copied to clipboard!', 'success');
            });
        }
    };
});

// Global function to navigate to member profile
window.goToMemberProfile = function(memberName) {
    localStorage.setItem('selectedMember', memberName);
    window.location.href = `member-profile.html?member=${encodeURIComponent(memberName)}`;
};
