export default class HUD extends PIXI.Container{
    constructor(){
        super();

        this._pointsCounter = this._createCounter();
    }

    _createCounter(){
        const text = new PIXI.Text("0", this._getCounterStyle());
        text.anchor.set(0.5);
        return this.addChild(text);
    }

    _getCounterStyle(){
        return {
            fill: "#ff0054",
            fontSize: "32px"
        }
    }
}