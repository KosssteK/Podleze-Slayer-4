import {createSprite} from '../utils/Utils.js';

export default class GameArea extends PIXI.Container{
    constructor(){
        super();

        this._background = this._createBackground();
        this._player = this._createPlayer();
        this._enemies = [];
    }

    onKeyDown(keyCode){
        if(keyCode === 65){
            this._player.position.x -= 4;
        }
        if(keyCode === 68){
            this._player.position.x += 4;
        }
    }

    resize(width,height){
        this._background.scale.set(1);
        const scaleX = width / this._background.width;
        const scaleY = height / this._background.height;

        this.scale.set(Math.min(1, scaleX, scaleY));
    }

    _createPlayer(){
        const player = createSprite('images/player.png');
        player.anchor.set(0.5);
        return this.addChild(player);
    }

    _createBackground(){
        const bg = createSprite('images/map.png');
        bg.anchor.set(0.5);
        return this.addChild(bg);
    }
}