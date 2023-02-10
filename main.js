'use strict';

const header = document.querySelector('.header');
const sections = document.querySelectorAll('main > *');
const footer = document.querySelector('.footer');

const allSections = [header, ...sections, footer];

// Reveal Sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
