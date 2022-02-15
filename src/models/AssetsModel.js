let instance = null;

class AssetsModel {
    constructor(){
        if(instance instanceof AssetsModel){
            return instance;
        }

        this.loader = null;
        this.number = Math.random();
        instance = this;
    }

    addLoader(loader, config){
        if(!this.loader){
            this.loader = loader;

            const assetsArray = this._getAssetsList().map(el => {
                const rootPath = document.location.pathname;
                return {
                    name: el, 
                    url: rootPath + el
                };
            });

            this.loader.add(assetsArray);
            this.loader.load(config.loadHandler);
        }else{
            console.warn("Loader already exists!");
        }
    }

    getTexture(assetID){
        return this.loader.resources[assetID].texture;
    }

    _getAssetsList(){
        return [
            'images/bg.jpeg',
            'images/map.png',
            'images/player.png'
        ];
    }
}

function getInstance (){
    return new AssetsModel();
}

export default getInstance();