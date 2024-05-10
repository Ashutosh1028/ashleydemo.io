window.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.getElementById('sliderContainer');
    var swipercontainer = document.getElementById('swiper-container');
    if (sliderContainer) {

        sliderContainer.addEventListener('mouseenter', function () {
            scrollToSection();
        });
    }
    function scrollToSection() {
        var yOffset = sliderContainer.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }

    $(document).ready(function () {
        // Function to handle intersection observer
        function animateFeatures(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('animate__animated');
                    // Add animation classes based on the feature
                    if ($(entry.target).hasClass('feature1')) {
                        $(entry.target).addClass('animate__fadeInLeft');
                    } else if ($(entry.target).hasClass('feature2')) {
                        $(entry.target).addClass('animate__fadeInDown');
                    } else if ($(entry.target).hasClass('feature3')) {
                        $(entry.target).addClass('animate__fadeInRight');
                    } else if ($(entry.target).hasClass('feature4')) {
                        $(entry.target).addClass('animate__fadeInLeft');
                    } else if ($(entry.target).hasClass('feature5')) {
                        $(entry.target).addClass('animate__fadeIn');
                    } else if ($(entry.target).hasClass('feature6')) {
                        $(entry.target).addClass('animate__fadeInRight');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }

        // Create an intersection observer instance
        let observer = new IntersectionObserver(animateFeatures, { root: null, threshold: 0.5 });

        // Observe each feature
        $('.feature').each(function () {
            observer.observe(this);
        });
    });

});