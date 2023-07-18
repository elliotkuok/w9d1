// import Ship from './ship'
import Asteroid from "./asteroid.js";

class Game {
    static DIM_X = 800;
    static DIM_Y = 600;
    static NUM_ASTEROIDS = 10;
    constructor() {
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
          const asteroid = new Asteroid({ pos: this.randomPosition() });
          this.asteroids.push(asteroid);
        }
    }

    randomPosition() {
        const x = Math.floor(Math.random() * Game.DIM_X);
        const y = Math.floor(Math.random() * Game.DIM_Y);
        return [x, y];
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach(asteroid => asteroid.draw(ctx));
    }

    moveObjects() {
        this.asteroids.forEach(asteroid => asteroid.move());
    }
}

export default Game;