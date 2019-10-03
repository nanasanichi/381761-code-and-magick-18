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
var WIZARD_COUNT = 4;

document.querySelector('.setup').classList.remove('hidden');

var getRandomValueFromArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomCharacterName = function (arr1, arr2) {
  return arr1[Math.floor(Math.random() * arr1.length)] + ' ' + arr2[Math.floor(Math.random() * arr2.length)];
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
