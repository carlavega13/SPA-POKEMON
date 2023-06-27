import PokemonModel, {Pokemon}from "../models/Pokemon"



const addingPokemon:(pokemon:Pokemon)=>Object|String=async(pokemon)=>{
    try {
       const random:Number=Date.now()
       let pok={
        ...pokemon,
        _id:random
       }
       let newPoke=new PokemonModel(pok)

       await newPoke.save()
       return newPoke

    } catch (error:any) {

        return error.message
    }
}


export default addingPokemon