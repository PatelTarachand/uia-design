// UIA Members Page JavaScript

$(document).ready(function() {
    // Sample members data - In a real application, this would come from a database
    const membersData = [
        {
            name: "ADITYA TRANSFORMERS",
            address: "Urla Industrial Area, Raipur",
            categories: ["Electrical Unit", "Iron & Steel Rolling Mills"],
            phone: "2324784 (O)",
            email: "arya220kv@gmail.com",
            website: "www.adityatransformers.com",
            established: "1990",
            employees: "100-200"
        },
        {
            name: "ALFA BIO PRODUCTS",
            address: "Urla Industrial Area, Raipur",
            categories: ["Chemical Unit"],
            phone: "+91 771 2345678",
            email: "info@alfabio.com",
            website: "www.alfabio.com",
            established: "1995",
            employees: "50-100"
        },
        {
            name: "HIRA CEMENT LTD",
            address: "Sector 2, Urla, Raipur",
            categories: ["Cement Tiles, Bricks & A.C. Pipes"],
            phone: "+91 771 2345679",
            email: "contact@hiracements.com",
            website: "www.hiracements.com",
            established: "1988",
            employees: "200-500"
        },
        {
            name: "OM CHEMICAL INDUSTRIES",
            address: "Plot 45, Urla Industrial Area, Raipur",
            categories: ["Chemical Unit", "Metal (Non-Ferrous) Unit"],
            phone: "+91 771 2345680",
            email: "info@omchemical.com",
            website: "www.omchemical.com",
            established: "1992",
            employees: "100-200"
        },
        {
            name: "RAIPUR RASAYAN UDYOG",
            address: "Industrial Estate, Raipur",
            categories: ["Chemical Unit"],
            phone: "+91 771 2345681",
            email: "contact@raipurrasayan.com",
            website: "www.raipurrasayan.com",
            established: "1990",
            employees: "50-100"
        },
        {
            name: "STEEL TECH INDUSTRIES",
            address: "Urla Industrial Complex, Raipur",
            categories: ["Iron & Steel Rolling Mills"],
            phone: "+91 771 2345682",
            email: "info@steeltech.com",
            website: "www.steeltech.com",
            established: "1985",
            employees: "500+"
        },
        {
            name: "POWER ENGINEERING WORKS",
            address: "Sector 3, Urla, Raipur",
            categories: ["Engineering & Allied Products", "Electrical Unit"],
            phone: "+91 771 2345683",
            email: "contact@powereng.com",
            website: "www.powereng.com",
            established: "1993",
            employees: "200-500"
        },
        {
            name: "FERRO ALLOYS CORPORATION",
            address: "Industrial Zone, Urla, Raipur",
            categories: ["Ferro - Alloys Units"],
            phone: "+91 771 2345684",
            email: "info@ferroalloys.com",
            website: "www.ferroalloys.com",
            established: "1987",
            employees: "300-500"
        },
        {
            name: "PLASTIC SOLUTIONS PVT LTD",
            address: "Plot 78, Urla Industrial Area, Raipur",
            categories: ["Plastic Unit"],
            phone: "+91 771 2345685",
            email: "contact@plasticsolutions.com",
            website: "www.plasticsolutions.com",
            established: "1998",
            employees: "100-200"
        },
        {
            name: "MINI STEEL WORKS",
            address: "Urla Steel Complex, Raipur",
            categories: ["Mini Steel Plants & Sponge Iron"],
            phone: "+91 771 2345686",
            email: "info@ministeel.com",
            website: "www.ministeel.com",
            established: "1991",
            employees: "200-300"
        },
        {
            name: "ELECTRICAL COMPONENTS LTD",
            address: "Electronics Zone, Urla, Raipur",
            categories: ["Electrical Unit", "Electicals Tower & Rail Products"],
            phone: "+91 771 2345687",
            email: "contact@electricalcomp.com",
            website: "www.electricalcomp.com",
            established: "1994",
            employees: "150-250"
        },
        {
            name: "INDUSTRIAL GAS SUPPLIERS",
            address: "Gas Complex, Urla Industrial Area, Raipur",
            categories: ["Industrial Gas Unit"],
            phone: "+91 771 2345688",
            email: "info@industrialgas.com",
            website: "www.industrialgas.com",
            established: "1996",
            employees: "50-100"
        },
        {
            name: "TIMBER WORKS CORPORATION",
            address: "Wood Processing Zone, Urla, Raipur",
            categories: ["Wood Timber"],
            phone: "+91 771 2345689",
            email: "contact@timberworks.com",
            website: "www.timberworks.com",
            established: "1989",
            employees: "100-150"
        },
        {
            name: "AGRO IMPLEMENTS MANUFACTURING",
            address: "Agricultural Zone, Urla, Raipur",
            categories: ["Agricultural Implements & Allied Products"],
            phone: "+91 771 2345690",
            email: "info@agroimplements.com",
            website: "www.agroimplements.com",
            established: "1997",
            employees: "75-125"
        },
        {
            name: "MISCELLANEOUS INDUSTRIES LTD",
            address: "Multi-Purpose Complex, Urla, Raipur",
            categories: ["Miscellaneous Items"],
            phone: "+91 771 2345691",
            email: "contact@miscindustries.com",
            website: "www.miscindustries.com",
            established: "1999",
            employees: "100-200"
        },
        {
            name: "BHILAI STEEL WORKS",
            address: "Steel City, Bhilai",
            categories: ["Iron & Steel Rolling Mills"],
            phone: "+91 788 2345692",
            email: "info@bhilaisteel.com",
            website: "www.bhilaisteel.com",
            established: "1982",
            employees: "1000+"
        },
        {
            name: "KORBA POWER PLANT",
            address: "Power Complex, Korba",
            categories: ["Electrical Unit"],
            phone: "+91 759 2345693",
            email: "contact@korbapower.com",
            website: "www.korbapower.com",
            established: "1986",
            employees: "800+"
        },
        {
            name: "BILASPUR ENGINEERING",
            address: "Industrial Estate, Bilaspur",
            categories: ["Engineering & Allied Products"],
            phone: "+91 752 2345694",
            email: "info@bilaspureng.com",
            website: "www.bilaspureng.com",
            established: "1990",
            employees: "200-300"
        },
        {
            name: "CHHATTISGARH CHEMICALS",
            address: "Chemical Complex, Raipur",
            categories: ["Chemical Unit"],
            phone: "+91 771 2345695",
            email: "contact@cgchemicals.com",
            website: "www.cgchemicals.com",
            established: "1993",
            employees: "150-250"
        },
        {
            name: "METAL PROCESSING UNIT",
            address: "Metal Zone, Urla, Raipur",
            categories: ["Metal (Non-Ferrous) Unit"],
            phone: "+91 771 2345696",
            email: "info@metalprocessing.com",
            website: "www.metalprocessing.com",
            established: "1995",
            employees: "100-150"
        },
        {
            name: "ADVANCED PLASTICS LTD",
            address: "Polymer Park, Urla, Raipur",
            categories: ["Plastic Unit"],
            phone: "+91 771 2345697",
            email: "contact@advancedplastics.com",
            website: "www.advancedplastics.com",
            established: "2000",
            employees: "75-125"
        }
    ];

    let filteredMembers = [...membersData];
    let currentView = 'grid';

    // Initialize the page
    function initializePage() {
        loadMembers();
        updateMemberCount();
        setupEventListeners();
        AOS.refresh();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        $('#memberSearch').on('input', debounce(filterMembers, 300));
        $('#categoryFilter').on('change', filterMembers);
        $('#locationFilter').on('change', filterMembers);

        // View toggle
        $('#gridView').on('click', function() {
            currentView = 'grid';
            $(this).addClass('active').siblings().removeClass('active');
            loadMembers();
        });

        $('#listView').on('click', function() {
            currentView = 'list';
            $(this).addClass('active').siblings().removeClass('active');
            loadMembers();
        });

        // Modal search
        $('#modalSearchInput').on('input', function() {
            const searchTerm = $(this).val();
            $('#memberSearch').val(searchTerm);
            filterMembers();
        });
    }

    // Debounce function for search
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

    // Filter members based on search and filters
    function filterMembers() {
        const searchTerm = $('#memberSearch').val().toLowerCase();
        const categoryFilter = $('#categoryFilter').val();
        const locationFilter = $('#locationFilter').val();

        filteredMembers = membersData.filter(member => {
            const matchesSearch = !searchTerm || 
                member.name.toLowerCase().includes(searchTerm) ||
                member.address.toLowerCase().includes(searchTerm) ||
                member.categories.some(cat => cat.toLowerCase().includes(searchTerm));

            const matchesCategory = !categoryFilter || 
                member.categories.includes(categoryFilter);

            const matchesLocation = !locationFilter || 
                member.address.toLowerCase().includes(locationFilter.toLowerCase());

            return matchesSearch && matchesCategory && matchesLocation;
        });

        loadMembers();
        updateMemberCount();
    }

    // Load and display members
    function loadMembers() {
        const container = $('#membersContainer');
        const noResults = $('#noResults');
        
        container.empty();

        if (filteredMembers.length === 0) {
            container.hide();
            noResults.show();
            return;
        }

        container.show();
        noResults.hide();

        filteredMembers.forEach((member, index) => {
            const memberCard = createMemberCard(member, index);
            container.append(memberCard);
        });

        // Reinitialize AOS for new elements
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }

    // Create member card HTML
    function createMemberCard(member, index) {
        const categories = member.categories.map(cat =>
            `<span class="category-badge">${cat}</span>`
        ).join('');

        if (currentView === 'grid') {
            return `
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 50}">
                    <div class="member-card h-100">
                        <div class="member-logo">
                            <i class="fas fa-building fa-3x text-primary"></i>
                        </div>
                        <div class="member-info">
                            <h5 class="member-name">${member.name}</h5>
                            <p class="member-address">
                                <i class="fas fa-map-marker-alt me-2 text-muted"></i>
                                Address: ${member.address}
                            </p>
                            <div class="member-categories mb-3">
                                ${categories}
                            </div>
                            <div class="member-actions">
                                <button class="btn btn-sm btn-primary me-2" onclick="viewMemberProfile('${member.name}')">
                                    <i class="fas fa-eye me-1"></i>View Profile
                                </button>
                                <button class="btn btn-sm btn-outline-primary" onclick="openContactForm('${member.name}')">
                                    <i class="fas fa-envelope me-1"></i>Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="col-12 mb-3" data-aos="fade-up" data-aos-delay="${index * 30}">
                    <div class="member-card member-card-list">
                        <div class="row align-items-center">
                            <div class="col-md-5">
                                <div class="d-flex align-items-center">
                                    <div class="member-logo me-3">
                                        <i class="fas fa-building fa-lg text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 class="member-name mb-1">${member.name}</h6>
                                        <p class="member-address mb-0">
                                            <i class="fas fa-map-marker-alt me-1 text-muted"></i>
                                            Address: ${member.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="member-categories">
                                    ${categories}
                                </div>
                            </div>
                            <div class="col-md-3 text-end">
                                <div class="member-actions">
                                    <button class="btn btn-sm btn-primary me-1" onclick="viewMemberProfile('${member.name}')">
                                        <i class="fas fa-eye me-1"></i>View Profile
                                    </button>
                                    <button class="btn btn-sm btn-outline-primary" onclick="openContactForm('${member.name}')">
                                        <i class="fas fa-envelope me-1"></i>Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Update member count
    function updateMemberCount() {
        const count = filteredMembers.length;
        const total = membersData.length;
        $('#memberCount').text(`Showing ${count} of ${total} members`);
    }

    // Global functions
    window.clearFilters = function() {
        $('#memberSearch').val('');
        $('#categoryFilter').val('');
        $('#locationFilter').val('');
        filterMembers();
    };

    window.quickFilter = function(category) {
        $('#categoryFilter').val(category);
        $('#searchModal').modal('hide');
        filterMembers();
    };

    window.performSearch = function() {
        const searchTerm = $('#modalSearchInput').val();
        $('#memberSearch').val(searchTerm);
        $('#searchModal').modal('hide');
        filterMembers();
    };

    // View Member Profile Function
    window.viewMemberProfile = function(memberName) {
        const member = filteredMembers.find(m => m.name === memberName);
        if (!member) return;

        // Create and show profile modal
        const modalHtml = `
            <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="profileModalLabel">
                                <i class="fas fa-building me-2"></i>${member.name}
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-4 text-center mb-4">
                                    <div class="member-logo-large mb-3">
                                        <i class="fas fa-building fa-5x text-primary"></i>
                                    </div>
                                    <h4>${member.name}</h4>
                                    <div class="member-categories mb-3">
                                        ${member.categories.map(cat => `<span class="category-badge">${cat}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h6><i class="fas fa-map-marker-alt me-2 text-primary"></i>Address</h6>
                                            <p class="text-muted">${member.address}</p>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <h6><i class="fas fa-phone me-2 text-primary"></i>Phone</h6>
                                            <p class="text-muted">${member.phone}</p>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <h6><i class="fas fa-envelope me-2 text-primary"></i>Email</h6>
                                            <p class="text-muted">${member.email}</p>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <h6><i class="fas fa-globe me-2 text-primary"></i>Website</h6>
                                            <p class="text-muted">${member.website}</p>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <h6><i class="fas fa-calendar me-2 text-primary"></i>Established</h6>
                                            <p class="text-muted">${member.established}</p>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <h6><i class="fas fa-users me-2 text-primary"></i>Employees</h6>
                                            <p class="text-muted">${member.employees}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="openContactForm('${member.name}')">
                                <i class="fas fa-envelope me-2"></i>Contact Company
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('profileModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('profileModal'));
        modal.show();

        // Clean up modal after it's hidden
        document.getElementById('profileModal').addEventListener('hidden.bs.modal', function() {
            this.remove();
        });
    };

    // Open Contact Form Function
    window.openContactForm = function(memberName) {
        // Create and show contact modal
        const modalHtml = `
            <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="contactModalLabel">
                                <i class="fas fa-envelope me-2"></i>Contact ${memberName}
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="contactName" class="form-label">Your Name *</label>
                                        <input type="text" class="form-control" id="contactName" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="contactEmail" class="form-label">Your Email *</label>
                                        <input type="email" class="form-control" id="contactEmail" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="contactPhone" class="form-label">Your Phone</label>
                                        <input type="tel" class="form-control" id="contactPhone">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="contactCompany" class="form-label">Your Company</label>
                                        <input type="text" class="form-control" id="contactCompany">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="contactSubject" class="form-label">Subject *</label>
                                    <input type="text" class="form-control" id="contactSubject" required>
                                </div>
                                <div class="mb-3">
                                    <label for="contactMessage" class="form-label">Message *</label>
                                    <textarea class="form-control" id="contactMessage" rows="4" required></textarea>
                                </div>
                                <input type="hidden" id="targetMember" value="${memberName}">
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onclick="submitContactForm()">
                                <i class="fas fa-paper-plane me-2"></i>Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('contactModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('contactModal'));
        modal.show();

        // Clean up modal after it's hidden
        document.getElementById('contactModal').addEventListener('hidden.bs.modal', function() {
            this.remove();
        });
    };

    // Submit Contact Form Function
    window.submitContactForm = function() {
        const form = document.getElementById('contactForm');

        // Basic validation
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        alert(`Thank you ${name}! Your message has been sent to ${document.getElementById('targetMember').value}. We will get back to you soon.`);

        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        modal.hide();
    };

    // Initialize the page when DOM is ready
    initializePage();
});
