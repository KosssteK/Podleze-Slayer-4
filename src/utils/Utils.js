import AssetsModel from '../models/AssetsModel.js';

export const createSprite = (assetID)=>{
    return new PIXI.Sprite(AssetsModel.getTexture(assetID));
}