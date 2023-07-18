
// Entry file that webpack is interested in
import Game from "./game.js";
import GameView from "./game-view.js";

import MovingObject from "./moving-object.js";
window.MovingObject = MovingObject;
// import Asteroid from "./asteroid.js";
// window.Asteroid = Asteroid;
// window.asteroid = new Asteroid({ pos: [100, 100] });

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
  
    // Set canvas dimensions using Game constants
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
  
    // Create a new Game instance and GameView instance
    const game = new Game();
    new GameView(game, ctx).start();
  });


// ctx.beginPath();
// ctx.arc(200, 200, 25, 0, 2*Math.PI, false);
// ctx.stroke();
// ctx.fill();

// const game = new Game(ctx);
// game.draw();