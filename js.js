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
const neueFischeSpan = document.querySelector('[data-js="neueFische-span--color"]');



function removeAllColors() {
  document.querySelectorAll('.darkmode').forEach(element => element.classList.remove('darkmode'));
  document.querySelectorAll('.darkmode-light').forEach(element => element.classList.remove('darkmode-light'));

  darkmodeTextColor.classList.remove('darkmode-textColor');


  addColor();
}

function addColor() {
  document.querySelectorAll('p').forEach(element => element.style.color = "var(--primary-text-color)");
  document.querySelector('body').style.backgroundColor = "var(--primary-background-color)";
  document.querySelector('main').style.backgroundColor = "var(--white)";
  document.querySelectorAll('[data-js="test"]').forEach(element => element.style.color = "var(--primary-text-color)");
  document.querySelectorAll('[data-js="test"]').forEach(element => element.style.backgroundColor = "var(--primary-background-color");
  neueFischeSpan.style.color = '#568744';
  darkmodeButton.innerHTML = 'Dark Mode';
  darkmodeButton.style.color = 'Black';
  darkmodeButton.style.backgroundColor = '#fbfbfb';
}






darkmodeButton.addEventListener('click', removeAllColors);