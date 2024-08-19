// import Swiper from 'swiper/bundle';

// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 'auto',
//     centeredSlides: true,
//     spaceBetween: 10,
//     keyboard: {
//         enabled: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

import Swiper from 'swiper';  
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    onlyInViewport: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.swiper-button-next'
    },
    touchEventsTarget: 'wrapper',
    mousewheel: {
        invert: false,
    },
    on: {
        slideChange: function () {
            updateActiveClass();
        }
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      }
    }
});

function updateActiveClass() {
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.querySelectorAll('.skills-list li').forEach(li => li.classList.remove('active'));
        if (slide.classList.contains('swiper-slide-active')) {
            const activeItem = slide.querySelector('.skills-list li');
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }
    });
}

updateActiveClass();
