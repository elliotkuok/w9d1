import Game from "./game.js";
class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
      }

    start(){
        const that = this;
        setInterval(function(){
            that.game.moveObjects();
            that.game.draw(that.ctx);
        }, 20);
    }
}

export default GameView;