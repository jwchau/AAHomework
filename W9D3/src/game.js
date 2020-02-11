const Orb = require("./orb.js");
const orbs = [];

window.Game = function (xDim, yDim) {
  this.xDim = xDim;
  this.yDim = yDim;

  const spread = xDim / Game.ORBS_COUNT;
  
  for (let x = 0; x < xDim; x += spread) {
    orbs.push(
      new Orb(x, yDim / 2, 50, 'white')
    );
  }
};

Game.ORBS_COUNT = 10;

Game.prototype.render = function (ctx) {
  ctx.fillStyle = `rgb(13, 2, 8, 0.1)`
  ctx.fillRect(0, 0, this.xDim, this.yDim);

  orbs.forEach(function (orb) {
    orb.render(ctx);
  });
};

Game.prototype.start = function (canvasEl) {
  const ctx = canvasEl.getContext("2d");
  const animateCallback = () => {
    this.render(ctx);
    requestAnimationFrame(animateCallback);

    //setTimeout(animateCallback, 1000/60);
  };

  animateCallback();
};

module.exports = Game;
