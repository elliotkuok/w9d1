import MovingObject from "./moving-object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "red";
    constructor(options = {}) {
        options.pos = options.pos || options.game.randomPosition();
        options.vel = options.vel || Util.randomVec(5);
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        super(options);
    }
    
}

export default Asteroid;