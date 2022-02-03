export default class Root extends PIXI.Container{
    constructor(width, height){
        super();

        this.screenWidth = width;
        this.screenHeight = height;

        this._background = this._createBackground();

        this.resize = this.resize.bind(this);

        console.log(this);
        setTimeout(()=>{
            this.resize(this.screenWidth,this.screenHeight);
        }, 100);
    }

    resize(width, height){
        this.screenWidth = width;
        this.screenHeight = height;

        this._background.position.set(this.screenWidth/2, this.screenHeight/2);

        this._background.scale.set(1);
        const scaleX = this.screenWidth/this._background.width;
        const scaleY = this.screenHeight/this._background.height;

        this._background.scale.set(Math.max(scaleX, scaleY));
        
        // this._background.scale.set(1);
        // const scaleX = this.screenWidth/this._background.width;
        // const scaleY = this.screenHeight/this._background.height;

        // this._background.scale.set(Math.min(scaleX, scaleY));
    }

    _createBackground(){
        // PIXI.Text
        // PIXI.Texture
        const bg = new PIXI.Sprite.from("../images/bg.jpeg");
        console.log(bg);
        bg.anchor.set(0.5);
        return this.addChild(bg);
    }
}