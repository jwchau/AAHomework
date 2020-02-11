const theMatrix = require("./matrix.js");

window.Game = function (xDim, yDim) {
  this.xDim = xDim;
  this.yDim = yDim;
  this.matrix = new theMatrix();
};

Game.prototype.render = function (ctx) {
  ctx.fillStyle = `rgb(13, 2, 8, 0.1)`
  ctx.fillRect(0, 0, this.xDim, this.yDim);

  this.matrix.render(ctx);
};

Game.prototype.start = function (canvasEl) {
  // get a 2d canvas drawing context. The canvas API lets us call
  // a `getContext` method on a canvas DOM element.
  const ctx = canvasEl.getContext("2d");
  // debugger;
  //clear the canvas, and redraw them
  const animateCallback = () => {
    this.render(ctx);

    //this will call our animateCallback again, but only when the browser
    //is ready, usually every 1/60th of a second
    requestAnimationFrame(animateCallback);
    //if we didn't know about requestAnimationFrame, we could use setTimeout
    //setTimeout(animateCallback, 1000/60);
  };

  //this will cause the first render and start the endless triggering of
  //the function using requestAnimationFrame
  animateCallback();
};

module.exports = Game;
