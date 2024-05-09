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
});