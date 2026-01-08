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
    const pathParts = currentPath.split('/').filter(p => p);
    const currentPage = pathParts.pop() || 'index.html';
    const currentDir = pathParts.pop() || '';

    document.querySelectorAll('.nav-section').forEach(section => {
        section.classList.remove('expanded');
    });
    document.querySelectorAll('.nav-submenu a, .nav-section > .nav-link').forEach(link => {
        link.classList.remove('active');
    });

    let activeSection = null;

    document.querySelectorAll('.nav-section').forEach(section => {
        if (activeSection) return;

        const sectionLink = section.querySelector('.nav-link');
        if (!sectionLink) return;

        const sectionHref = sectionLink.getAttribute('href') || '';
        const sectionDir = getSectionDir(sectionHref);

        if (sectionDir !== currentDir && currentDir !== '' && sectionDir !== '') return;

        const submenuLinks = section.querySelectorAll('.nav-submenu a');
        submenuLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;

            const linkPage = href.split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
                activeSection = section;
            }
        });
    });

    if (activeSection) {
        activeSection.classList.add('expanded');
    }
}

function getSectionDir(href) {
    if (!href) return '';
    if (!href.includes('/')) {
        const page = href.replace('.htm', '');
        if (page.includes('get_started')) return 'get_started';
        if (page.includes('concept')) return 'concepts';
        if (page.includes('github')) return 'github';
        if (page.includes('gitlab')) return 'gitlab';
        if (page.includes('jenkins')) return 'jenkins';
        if (page.includes('ado') || page.includes('azure')) return 'azure-devops';
        return '';
    }
    const parts = href.split('/').filter(p => p && p !== '..');
    if (parts.length >= 2) return parts[parts.length - 2];
    return '';
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
