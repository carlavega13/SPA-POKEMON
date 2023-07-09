export interface CardI{
    key:Number,
    idChain:Number,
    _id:Number,
    types:Array<String>,
    name:String,
    img:String,
   }
   export interface PokeFromBack{
    _id:Number,
    types:Array<String>,
    name:String,
    img:String,
    imgShiny:String,
    attackPoints:Number,
    createdInDb:Boolean,
    defensePoints:Number,
    evolutionId:Number,
    gif:String,
    height:Number,
    weight:Number,
    lifePoints:Number,
    speedPoints:Number,


   }
