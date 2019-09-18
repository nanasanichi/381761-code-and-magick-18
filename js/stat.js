'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 16;
var BAR_HEIGTH = 150;
var BAR_WIDTH = 40;
var GAP_X = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  // ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + GAP * 1.5 + TEXT_HEIGHT * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP_X + (GAP_X + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP_X + (GAP_X + BAR_WIDTH) * i, CLOUD_HEIGHT - TEXT_HEIGHT - (times[i] * BAR_HEIGTH / maxTime));

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomNumber(1, 100) + '%, ' + getRandomNumber(50, 100) + '%)';
    }
    ctx.fillRect(CLOUD_X + GAP_X + (GAP_X + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT, BAR_WIDTH, GAP + TEXT_HEIGHT - (times[i] * BAR_HEIGTH / maxTime));
  }
};

