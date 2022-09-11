const body = document.querySelector('body');
const darkmodeSkillSection = document.querySelector('[data-js="darkmode-light-skillSection"]');
const darkmodeProjectSection = document.querySelector('[data-js="darkmode-light-ProjectSection"]');
const headerDarkmode = document.querySelector('[data-js="darkmode-header"]');
const darkmodeButton = document.querySelector('[data-js="btn"]');
const darkmodeNavbar = document.querySelector('[data-js="darkmode-light"]');
const darkmodeTextColor = document.querySelector('[data-js="darkmode-textColor--headline"]')
const darkmodeProject = document.querySelector('[data-js="darkmode-project"]');
const darkmodeProjectTwo = document.querySelector('[data-js="darkmode-projectTwo"]');
const darkmodeInformationCard = document.querySelector('[data-js="darkmode-light-information"]');
const darkmodeContactCard = document.querySelector('[data-js="darkmode-light-contact"]');


function removeAllColors() {
  headerDarkmode.classList.remove('darkmode');
  darkmodeProject.classList.remove('darkmode');
  darkmodeProjectTwo.classList.remove('darkmode');
  darkmodeNavbar.classList.remove('darkmode-light');
  darkmodeTextColor.classList.remove('darkmode-textColor');
  darkmodeProjectSection.classList.remove('darkmode-light');
  darkmodeSkillSection.classList.remove('darkmode-light');
  darkmodeInformationCard.classList.remove('darkmode-light');
  darkmodeContactCard.classList.remove('darkmode-light');

  addColor();
}

function addColor() {
  document.querySelectorAll('p').forEach(e => e.style.color = "var(--primary-text-color)");
  document.querySelectorAll('body').forEach(e => e.style.backgroundColor = "var(--white)");
  document.querySelectorAll('main').forEach(e => e.style.backgroundColor = "var(--white)");



}






darkmodeButton.addEventListener('click', removeAllColors);