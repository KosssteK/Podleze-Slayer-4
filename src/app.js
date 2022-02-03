import Root from './Root.js';


let app = new PIXI.Application({ resizeTo: window });

document.body.appendChild(app.view);


const root = new Root(window.innerWidth, window.innerHeight);
app.stage.addChild(root);


window.addEventListener("resize", (event)=>{
    root.resize(event.currentTarget.innerWidth,event.currentTarget.innerHeight);
});