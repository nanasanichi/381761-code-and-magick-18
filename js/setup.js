'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'а Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb (0, 0, 0)'
];
var EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var WIZARD_COUNT = 4;
var ENTER = 13;
var ESC = 27;

var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupForm = document.querySelector('.setup-wizard-form');
var setupUserName = setupWindow.querySelector('.setup-user-name');
var submitButton = document.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardBalls = document.querySelector('.setup-fireball-wrap');

// Обработка событий формы
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC) {
    closeWindow();
  }
};

var openWindow = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeWindow = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openWindow();
});

setupOpen.addEventListener('keydown', function () {
  openWindow();
});

setupClose.addEventListener('click', function () {
  closeWindow();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    closeWindow();
  }
});

submitButton.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.keyCode === ENTER) {
    setupForm.submit();
  }
});

submitButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  setupForm.submit();
});

// Генератор магов
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var getRandomValueFromArray = function (arr) {
  return arr[getRandomNumber(0, arr.length)];
};

var getRandomCharacterName = function (arr1, arr2) {
  return arr1[getRandomNumber(0, arr1.length - 1)] + ' ' + arr2[getRandomNumber(0, arr2.length - 1)];
};

var getRandomWizard = function () {
  var wizardsArr = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    var wizardName = getRandomCharacterName(NAMES, SURNAMES);
    var coatColor = getRandomValueFromArray(COAT_COLORS);
    var eyeColor = getRandomValueFromArray(EYE_COLORS);
    wizardsArr[i] = {
      name: wizardName,
      coat: coatColor,
      eyes: eyeColor
    };
  }
  return wizardsArr;
};

var renderWizard = function (wizard) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

  return wizardElement;
};

var renderMoreWizards = function (wizards) {
  var moreWizards = document.querySelector('.setup-similar-list');
  document.querySelector('.setup-similar').classList.remove('hidden');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARD_COUNT; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  moreWizards.appendChild(fragment);
};

renderMoreWizards(getRandomWizard());

// Валидация ввода имени персонажа
setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя персонажа не может содержать менее 2 символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Максимальная длина имени персонажа — 25 символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  }
});

// Изменение цвета мантии, глаз и файербола персонажа по нажатию
var onWizardCoatClick = function () {
  var wizardCoatColor = getRandomValueFromArray(COAT_COLORS);
  wizardCoat.style.fill = wizardCoatColor;
};

wizardCoat.addEventListener('click', onWizardCoatClick);

var onWizardEyesClick = function () {
  var wizardEyeColor = getRandomValueFromArray(EYE_COLORS);
  wizardEyes.style.fill = wizardEyeColor;
};

wizardEyes.addEventListener('click', onWizardEyesClick);

var onWizardBallsClick = function () {
  var wizardBallColor = getRandomValueFromArray(FIREBALL_COLOR);
  wizardBalls.style.background = wizardBallColor;
};

wizardBalls.addEventListener('click', onWizardBallsClick);
