const colorModeButton = document.querySelector('[data-js="btn"]');
const darkMode = document.querySelectorAll('.darkmode');
const darkModeTextColor = document.querySelectorAll('.darkmode--TextColor');
const lightModeDefault = document.querySelectorAll('.lightmodeDefault');
const lightMode = document.querySelectorAll('.lightmode');
const lightmodeTextColor = document.querySelectorAll('.lightmode--TextColor');
const skillSectionLightmode = document.querySelectorAll('.skill-section-lightmode');
const buttonDark = document.querySelectorAll('.button-dark');
const buttonLight = document.querySelectorAll('.button-light');
const skillDark = document.querySelectorAll('.skill-dark');
const skillLight = document.querySelectorAll('.skill-light');

colorModeButton.addEventListener('click', () => {

  lightModeDefault.forEach(element => element.classList.toggle('lightmodeDefault'));
  lightMode.forEach(element => element.classList.toggle('lightmode'));
  lightmodeTextColor.forEach(element => element.classList.toggle('lightmode--TextColor'));
  skillSectionLightmode.forEach(element => element.classList.toggle('skill-section-lightmode'));

  buttonDark.forEach(element => element.classList.toggle('button-dark'));
  buttonLight.forEach(element => element.classList.toggle('button-light'));
  skillDark.forEach(element => element.classList.toggle('skill-dark'));
  skillLight.forEach(element => element.classList.toggle('skill-light'));



});














/* const body = document.querySelector('body');
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
  darkmodeTextColor.classList.toggle('darkmode-textColor');


  addColor();
}

function addColor() {
  document.querySelectorAll('.darkmode-textColor').forEach(element => element.style.color = "var(--primary-text-color)");
  document.querySelector('body').style.backgroundColor = "var(--primary-background-color)";
  document.querySelector('main').style.backgroundColor = "var(--white)";
  document.querySelectorAll('[data-js="buttonLight"]').forEach(element => element.style.color = "var(--primary-text-color)");
  document.querySelectorAll('[data-js="buttonLight"]').forEach(element => element.style.backgroundColor = "var(--primary-background-color");
  neueFischeSpan.style.color = '#568744';
  darkmodeButton.innerHTML = 'Dark Mode';
  darkmodeButton.style.color = 'Black';
  darkmodeButton.style.backgroundColor = '#fbfbfb';
}


darkmodeButton.addEventListener('click', removeAllColors); */