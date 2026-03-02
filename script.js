document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle (simple scroll jump/alert for now, could be expanded to a mobile drawer)
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        // Toggle mobile nav visibility by injecting inline style or toggling a class
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            menuToggle.innerHTML = '<i class="ph ph-list"></i>';
        } else {
            nav.style.display = 'block';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = 'var(--glass-bg)';
            nav.style.backdropFilter = 'var(--glass-blur)';
            nav.style.padding = '1rem';
            nav.style.boxShadow = 'var(--shadow-md)';
            menuToggle.innerHTML = '<i class="ph ph-x"></i>';

            // Adjust nav list for mobile
            const navList = document.querySelector('.nav-list');
            navList.style.flexDirection = 'column';
            navList.style.gap = '1rem';
            navList.style.alignItems = 'center';
        }
    });

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                nav.style.display = 'none';
                menuToggle.innerHTML = '<i class="ph ph-list"></i>';
            }
        });
    });

    // Menu Filtering
    const filterBtns = document.querySelectorAll('.menu-filter');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filterValue = btn.textContent.toLowerCase();

            menuCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else if (filterValue === 'food') {
                    if (card.classList.contains('category-food')) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                } else if (filterValue === 'beverages') {
                    if (card.classList.contains('category-bev')) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
