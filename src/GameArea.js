export default class GameArea extends PIXI.Container{
    constructor(){
        super();

        this.gWidth = 600;
        this.gHeight = 400;

        this._background = this._createBackground();
    }

    _createBackground(){
        const bg = new PIXI.Graphics();
        bg.beginFill(0x00ffff);
        bg.drawRect(-this.gWidth/2, -this.gHeight/2, this.gWidth,this.gHeight);
        bg.endFill();
        return this.addChild(bg);
    }
}