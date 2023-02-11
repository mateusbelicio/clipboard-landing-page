'use strict';

const header = document.querySelector('.header');
const sections = document.querySelectorAll('main > *');

const allSections = [header, ...sections];

// Reveal Sections
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle('section--hidden', !entry.isIntersecting);
    entry.isIntersecting && observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach((section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
