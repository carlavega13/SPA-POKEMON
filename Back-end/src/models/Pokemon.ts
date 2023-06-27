import mongoose,{Schema,model}from "mongoose"
export interface Pokemon extends mongoose.Document{
    _id:Number,
    name:String;
    img:String;
    imgShiny:String;
    lifePoints:Number;
    attackPoints:Number;
    defensePoints:Number;
    speedPoints:Number;
    heigth:Number;
    weigth:Number;
    createdInDb:Boolean;
    types:Array<String>;
    evolutionId:Number;
}
const pokemonSchema=new Schema({
    _id:Number,
    name:String,
    img:String,
    imgShiny:String,
    lifePoints:Number,
    attackPoints:Number,
    defensePoints:Number,
    speedPoints:Number,
    height:Number,
    weight:Number,
    createdInDb:Boolean,
    types:Array<String>,
    evolutionId:Number,
}, { versionKey: false })
export default model<Pokemon>("Pokemon",pokemonSchema)