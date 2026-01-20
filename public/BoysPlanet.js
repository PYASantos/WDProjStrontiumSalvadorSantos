// SIDEBAR
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('sidebar-toggle');
        sidebar.classList.toggle('active');
        toggle.classList.toggle('active');
    }
// CAROUSEL SCROLLING
    function scrollCarousel(carouselId, direction) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const videoContainer = carousel.querySelector('.video-container');
        if (!videoContainer) return;

        const itemWidth = videoContainer.offsetWidth + 20;
        
        const scrollAmount = itemWidth * direction;

        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }