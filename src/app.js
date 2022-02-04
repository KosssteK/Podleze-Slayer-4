import Root from './Root.js';

// stworzylem root jako zmienna globalna zeby bylo ja widac wszedzie (da sie to lepiej zrobic ale to trzebaby pomyslec)
let root = null;

//to jest podobne do tego co bylo wczesniej PIXI.Application
const renderer = PIXI.autoDetectRenderer(window.screenWidth, window.screenHeight);



// ogarnalem ten loader, troche ogarniania na necie ale siadlo
// add dodaje teksture
// load odpala sie jezeli wszystkie tekstury sie zaladowaly dlatego do load wrzucilem call back ktory tworzy gre itd zeby 
// miec pewnosc ze tworzenie sprite'ow odbywa sie dopiero po zaladowaniu assetow
// wyeksportowalem ten loader zeby mozna bylo go uzywac do wydostawania assetow z niego do tworzenia spriteow itd
// nie dalem default dlatego przy imporcie trzeba uzyc jego dokladnej nazwy
export const loader = new PIXI.Loader();
loader.add("/images/bg.jpeg");
loader.load(handleLoadComplete);

document.body.appendChild(renderer.view);


// to jest ciekawa sprawa
// przez to ze przegladarka rysuje wszystko jak najszybciej potrafi to ten game loop wywoluje sie za kazdym razem jak 
// przegladarka rysuje czyli powiedzmy jak masz kompa mocnego to 1000 razy na sekunde 
// ale przez to ze sa takie wypadki jak Fallout 76 gdzie na starych konsolach bylo gites bo ograniczyli do 60 fpsow gre
//wiec kazdy poruszal sie z ta sama predkoscia tak na PC jak miales 200fpsow to ruszales sie szybciej xd
//dlatego ten game loop jak sb zobaczysz to on dalej leci jak najszybciej moze ale ten if odpala sie tylko co 1/30 sekundy :P
//i przez to jest 30 fpsow xd hax calkiem niezly ale chyba tak to sie tez normalnie robi :P
const fps = 30;
let then = Date.now();
const interval = 1000/fps;

function gameLoop(){
    requestAnimationFrame(gameLoop);
 
    const now = Date.now();
    const delta = now - then;
     
    if (delta > interval) {
        then = now - (delta % interval);

        updateRendererSize();
        root.update(renderer.width, renderer.height);
        renderer.render(root);
    }
}

function updateRendererSize(){
    const canvasOffset = {left: 0, right: 0, top: 0, bottom: 0};

	const width = (window.innerWidth - canvasOffset.right - canvasOffset.left);
    const height = (window.innerHeight - canvasOffset.bottom - canvasOffset.top);
    
    renderer.resize(width, height);
}

//to jest call back ktory leci po zaladowaniu assetow
function handleLoadComplete(){
    root = new Root(window.innerWidth, window.innerHeight);
    gameLoop();
}