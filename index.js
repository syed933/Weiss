let slideIndex = 0;
const carouselButtons = document.querySelectorAll('.carousel-btn');

const setHeroImage = (imageIndex) => {
    const imagePath = `images/image-${imageIndex}.jpg`;
    const heroImage = document.getElementById('hero-image');
    heroImage.style.backgroundImage = `url(${imagePath})`;
    heroImage.style.transition = "0.5s";
};

const setHeroIndicator = (index) => {
    for(let i = 0; i < carouselButtons.length; i++ ) {
        if (i === index) {
            carouselButtons[i].querySelector('span').classList.replace('carousel-num','active');        
            carouselButtons[i].querySelector('img').setAttribute('src', 'svg/sliderIndicator.svg');
        } else {
            carouselButtons[i].querySelector('span').classList.replace('active','carousel-num');
            carouselButtons[i].querySelector('img').setAttribute('src', 'svg/indicatorBubble.svg');
        }
    }
};

const showHeroSlides = () => {
    if(slideIndex > 2) {
        slideIndex = 0;
    }
    setHeroImage(slideIndex);
    setHeroIndicator(slideIndex);

    slideIndex++;
};

let slideshowInterval = setInterval(showHeroSlides, 4000);

carouselButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        slideIndex = parseInt(button.getAttribute('data-slide')) - 1;
        showHeroSlides
    ();
        slideshowInterval = setInterval(showHeroSlides
        , 4000);
    });
});

// Accordion 
let faqs = document.querySelectorAll('.faq');
let arrow = document.querySelectorAll('.faq-arrow');
let icons = document.querySelectorAll('.aIcon');
let originalIcon = 'svg/plus.svg';
let newIcon = 'svg/minus.svg';

faqs.forEach((faq, index) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('active');
        icons.forEach((icon, i) => {
            if (i === index) {
                icon.setAttribute('src', icon.getAttribute('src') === originalIcon ? newIcon : originalIcon);
            }
        });
    });
});
