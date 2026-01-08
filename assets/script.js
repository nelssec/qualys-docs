document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    setActivePage();
});

function initNavigation() {
    const navSections = document.querySelectorAll('.nav-section');

    navSections.forEach(section => {
        const link = section.querySelector('.nav-link');
        const submenu = section.querySelector('.nav-submenu');

        if (link && submenu) {
            link.addEventListener('click', function(e) {
                section.classList.toggle('expanded');
            });
        }
    });
}

function setActivePage() {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const currentPage = pathParts.pop() || 'index.html';
    const currentDir = pathParts.pop() || '';

    document.querySelectorAll('.nav-section').forEach(section => {
        section.classList.remove('expanded');
    });
    document.querySelectorAll('.nav-submenu a, .nav-section > .nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const allLinks = document.querySelectorAll('.nav-submenu a');
    let activeSection = null;
    let foundExactMatch = false;

    allLinks.forEach(link => {
        if (foundExactMatch) return;

        const href = link.getAttribute('href');
        if (href) {
            const hrefParts = href.split('/');
            const hrefPage = hrefParts.pop();
            const hrefDir = hrefParts.pop() || '';

            const dirMatch = (hrefDir === currentDir) ||
                             (hrefDir === '.' && currentDir === '') ||
                             (currentDir === 'qualys-docs' && hrefDir === '');

            if (hrefPage === currentPage && dirMatch) {
                link.classList.add('active');
                const parentSection = link.closest('.nav-section');
                if (parentSection) {
                    activeSection = parentSection;
                    foundExactMatch = true;
                }
            }
        }
    });

    if (!activeSection && currentDir) {
        document.querySelectorAll('.nav-section').forEach(section => {
            const sectionLink = section.querySelector('.nav-link');
            if (sectionLink) {
                const href = sectionLink.getAttribute('href') || '';
                if (href.includes(currentDir + '/') || href.includes('/' + currentDir + '/')) {
                    activeSection = section;
                }
            }
        });
    }

    if (activeSection) {
        activeSection.classList.add('expanded');
    }
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
