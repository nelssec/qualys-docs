// Qualys Documentation - Navigation Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible navigation
    initNavigation();

    // Set active page
    setActivePage();
});

function initNavigation() {
    const navSections = document.querySelectorAll('.nav-section');

    navSections.forEach(section => {
        const link = section.querySelector('.nav-link');
        const submenu = section.querySelector('.nav-submenu');

        if (link && submenu) {
            link.addEventListener('click', function(e) {
                // If it's just a toggle (has submenu), prevent navigation
                const href = this.getAttribute('href');

                // Toggle expanded state
                section.classList.toggle('expanded');

                // Close other sections (accordion behavior)
                navSections.forEach(otherSection => {
                    if (otherSection !== section && otherSection.classList.contains('expanded')) {
                        // Keep other sections open for now
                        // otherSection.classList.remove('expanded');
                    }
                });
            });
        }
    });
}

function setActivePage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Find and mark active link
    const allLinks = document.querySelectorAll('.nav-submenu a, .nav-section > .nav-link');

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const linkPage = href.split('/').pop();
            if (linkPage === currentPage || href.includes(currentPage)) {
                link.classList.add('active');

                // Expand parent section
                const parentSection = link.closest('.nav-section');
                if (parentSection) {
                    parentSection.classList.add('expanded');
                }
            }
        }
    });

    // Auto-expand section based on current directory
    const pathParts = currentPath.split('/');
    const currentDir = pathParts[pathParts.length - 2];

    document.querySelectorAll('.nav-section').forEach(section => {
        const sectionLink = section.querySelector('.nav-link');
        if (sectionLink) {
            const href = sectionLink.getAttribute('href') || '';
            if (href.includes(currentDir + '/') || href.includes('../' + currentDir)) {
                section.classList.add('expanded');
            }
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
