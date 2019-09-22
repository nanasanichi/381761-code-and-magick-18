'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['а Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardCount = 4;

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarItem = similarWizardTemplate.content.querySelector('.setup-similar-item');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var getRandomWizard = function () {
  var wizard = [];
  for (var i = 0; i < wizardCount; i++) {
    var wizardName = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];
    var coatColor = coatColors[getRandomNumber(0, coatColors.length - 1)];
    var eyeColor = eyeColors[getRandomNumber(0, eyeColors.length - 1)];
    wizard[i] = {
      name: wizardName,
      coat: coatColor,
      eyes: eyeColor
    };
  }
  return wizard;
};

var renderWizard = function (wizard) {
  var wizardElement = setupSimilarItem.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

  return wizardElement;
};

var renderMoreWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizards = getRandomWizard(names, surnames, coatColors, eyeColors);
  for (var i = 0; i < wizardCount; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var wizardDialog = document.querySelector('.setup-similar');
wizardDialog.classList.remove('hidden');
renderMoreWizards();
