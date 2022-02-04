import HUD from './HUD.js';
//GameArea i HUD maja 'default' przy exporcie wiec w sumie moglem nazwac to jakkolwiek 
//ale nazwalem to tak samo zeby bylo wiadomo czym jest ten import
import GameArea from './GameArea.js';
//tu sa te {} i tam wpisuje sie nazwe tak zwanego 'Named Exportu' 
import {loader} from './app.js';

export default class Root extends PIXI.Container{
    constructor(width, height){
        super();

        this.screenWidth = width;
        this.screenHeight = height;

        this._background = this._createBackground();
        this._gameArea = this._createGameArea();
        this._hud = this._createHUD();

        this._resize = this._resize.bind(this);

        this._resize(width,height);
    }

    update(width, height){
        this._resize(width, height);
    }

    _resize(width, height){
        this.screenWidth = width;
        this.screenHeight = height;

        this._background.position.set(this.screenWidth/2, this.screenHeight/2);

        this._background.scale.set(1);
        const scaleX = this.screenWidth/this._background.width;
        const scaleY = this.screenHeight/this._background.height;

        this._background.scale.set(Math.max(scaleX, scaleY));

        const positionY = this.screenHeight * 0.8;

        this._hud.position.set(this.screenWidth/2, positionY);


        this._gameArea.position.set(this.screenWidth/2, this.screenHeight/2 - 100);
    }

    _createHUD(){
        return this.addChild(new HUD());
    }

    _createGameArea(){
        return this.addChild(new GameArea());
    }

    _createBackground(){
        // PIXI.Text
        // PIXI.Texture
        // tutaj wyciagnalem z loadera zaimportowany asset, to ['../images.bg.jpeg'] to jest magia JSa xd
        // bo nie dosc ze na obiektach mozesz odwolywac sie do pól jako loader.resources to mozna tez loader['resources']
        // to jest pomocne jak chcesz stworzyc pole w obiekcie ktore ma np w nazwie '-'
        // normalnie nie da sie zrobic const obj = {imie-nazwisko: 'ala kot'} 
        // ale da sie zrobic const obj; obj['imie-nazwisko'] = 'ala kot'; xd
        const bg = new PIXI.Sprite(loader.resources['images/bg.jpeg'].texture);
        console.log(bg);
        bg.anchor.set(0.5);
        return this.addChild(bg);
    }
}