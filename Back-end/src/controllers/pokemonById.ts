
import Pokemon from "../models/Pokemon"

//
const pokemonById:(id:Number,idChain:Number)=>Object=async(id,idChain)=>{
let pokemons:Array<Object>=await Pokemon.find({evolutionId:Number(idChain)})
let selectedPoke:Object|any=pokemons.find((p:any)=>id===p._id)
pokemons=pokemons.filter((p:any)=>p._id !==id)
pokemons=pokemons.map((p:any)=>{
    return {
        name:p.name,
        _id:p._id,
        img:p.img,
        idChain:p.evolutionId

    }
})
selectedPoke={
    ...selectedPoke.toObject(),
    evolutions:pokemons
}

return selectedPoke
}
export default pokemonById