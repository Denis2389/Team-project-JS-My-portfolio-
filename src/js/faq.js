import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Typed from 'typed.js';
import spriteSvg from '../img/icons.svg';
new Accordion('.accordion-container', {
  showMultiple: true,
  duration: 800,
});
document.querySelector('.faq__list').addEventListener('click', event => {
  const triggerElement = event.target.closest('.ac-trigger');
  if (!triggerElement) return;
  const faqItem = triggerElement.closest('.ac');
  const arrowIcon = triggerElement.querySelector('.faq__item-icon use');
  const typedElement = faqItem.querySelector('.typed');
  const stringsElement = faqItem.querySelector('.typed__strings');
  arrowIcon.setAttribute(
    'href',
    faqItem.classList.contains('is-active')
      ? `${spriteSvg}#icon-arrow-up`
      : `${spriteSvg}#icon-arrow-down`
  );
  if (faqItem.classList.contains('is-active')) {
    if (faqItem.typedInstance) {
      faqItem.typedInstance.stop();
      faqItem.typedInstance.destroy();
      faqItem.typedInstance = null;
    }
    typedElement.innerHTML = '';
  }
  if (faqItem.classList.contains('is-active')) {
    typedElement.innerHTML = '';
    const typedOptions = {
      typeSpeed: 1,
      startDelay: 250,
      stringsElement: stringsElement,
      showCursor: false,
      onComplete: () => {
        faqItem.typedInstance = null;
      },
    };
    faqItem.typedInstance = new Typed(typedElement, typedOptions);
  }
});
document.querySelectorAll('.ac-trigger').forEach(triggerElement => {
  triggerElement.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      triggerElement.click();
    }
    if (event.key === 'Escape') {
      const faqItem = triggerElement.closest('.ac');
      if (faqItem.classList.contains('is-active')) {
        triggerElement.click();
      }
    }
  });
});
