import {createSprite} from '../utils/Utils.js';

export default class GameArea extends PIXI.Container{
    constructor(){
        super();

        this._background = this._createBackground();
    }

    resize(width,height){
        this._background.scale.set(1);
        const scaleX = width / this._background.width;
        const scaleY = height / this._background.height;
        this._background.scale.set(Math.min(1, scaleX, scaleY));
    }

    _createBackground(){
        const bg = createSprite('images/map.png');
        bg.anchor.set(0.5);
        return this.addChild(bg);
    }
}