import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

import book_mob_1x from '../img/projects/book-mob.jpg';
import book_mob_2x from '../img/projects/book-mob-2x.jpg';
import book_tab_1x from '../img/projects/book-tab.jpg';
import book_tab_2x from '../img/projects/book-tab-2x.jpg';
import book_main from '../img/projects/book-tab.jpg';

import pet_mob_1x from '../img/projects/pet-mob.jpg';
import pet_mob_2x from '../img/projects/pet-mob-2x.jpg';
import pet_tab_1x from '../img/projects/pet-tab.jpg';
import pet_tab_2x from '../img/projects/pet-tab-2x.jpg';
import pet_main from '../img/projects/pet-tab.jpg';

import vocab_mob_1x from '../img/projects/vocab-mob.jpg';
import vocab_mob_2x from '../img/projects/vocab-mob-2x.jpg';
import vocab_tab_1x from '../img/projects/vocab-tab.jpg';
import vocab_tab_2x from '../img/projects/vocab-tab-2x.jpg';
import vocab_main from '../img/projects/vocab-tab.jpg';

const projectImages = [
{
mob_1x: book_mob_1x,
mob_2x: book_mob_2x,
tab_1x: book_tab_1x,
tab_2x: book_tab_2x,
main: book_main,
description: 'ReadJourney',
},
{
mob_1x: pet_mob_1x,
mob_2x: pet_mob_2x,
tab_1x: pet_tab_1x,
tab_2x: pet_tab_2x,
main: pet_main,
description: 'PetLove',
},
{
mob_1x: vocab_mob_1x,
mob_2x: vocab_mob_2x,
tab_1x: vocab_tab_1x,
tab_2x: vocab_tab_2x,
main: vocab_main,
description: 'VocabBuilder',
},
];

new Swiper('.swiper-projects', {
direction: 'horizontal',
navigation: {
nextEl: '.projects-btn-next',
prevEl: '.projects-btn-prev',
},
slidesPerView: 1,
spaceBetween: 34,
keyboard: {
enabled: true,
onlyInViewport: false,
},
});

const projectsList = document.querySelector('.projects-list');

function createProjectsSlideMarkup(
mob_1x,
mob_2x,
tab_1x,
tab_2x,
main,
description
) {
const markup = `
    <li class="swiper-slide projects-slide">
    <div class="projects-items">
        <div class="projects-container">
        <ul class="projects-tech">
            <li class="projects-tech-items">
            <p>#react</p>
            </li>
            <li class="projects-tech-items">
            <p>#js</p>
            </li>
            <li class="projects-tech-items">
            <p>#node js</p>
            </li>
            <li class="projects-tech-items">
            <p>#git</p>
            </li>
        </ul>
        <div class="projects-list-text">
            <p>Programming Across<br />Borders: Ideas,<br />Technologies, Innovations</p>
        </div>
        <a class="see-project"
            href="https://github.com/Tormoond/Team-project-JS-My-portfolio-">
            See project</a>
        </div>
        <div class="projects-picture">
        <picture class="projects-picture-item">
            <source
            srcset="
            ${tab_1x} 1x,
            ${tab_2x} 2x"
            media="(min-width: 768px)"
            />
            <source
            srcset="
            ${mob_1x} 1x,
            ${mob_2x} 2x"
            media="(max-width: 767px)"
            />
            <img
            class="projects-img"
            src="${main}"
            alt="${description}"
            width="614"
            height="385"
            />
        </picture>
        </div>
    </div>
    </li>
`;

projectsList.insertAdjacentHTML('beforeend', markup);
}
projectImages.map(({ mob_1x, mob_2x, tab_1x, tab_2x, main, description }) => {
createProjectsSlideMarkup(mob_1x, mob_2x, tab_1x, tab_2x, main, description);
});