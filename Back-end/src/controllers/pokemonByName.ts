import axios from "axios";
import Pokemon from "../models/Pokemon";

const pokemonByName:(name:String)=>Array<Object>|Promise<any>=async(name)=>{
    try {
        const foundApi=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res:any)=>{
            return {
                _id:res.data.id,
                    name:res.data.name,
                    img:res.data.sprites.other.home.front_default,
                    imgShiny:res.data.sprites.other.home.front_shiny,
                    lifePoints:res.data.stats[0].base_stat,
                    attackPoints:res.data.stats[1].base_stat,
                    defensePoints:res.data.stats[2].base_stat,
                    speedPoints:res.data.stats[5].base_stat,
                    height:res.data.height,
                    weight:res.data.weight,
                    types:res.data.types.map((t:any)=>t.type.name),
                    // evolutionId:id,
                    createdInDb:false
                }
        })
        .catch(err=>false)
      const foundDB= await Pokemon.find({ name: { $regex: `^${name}`, $options: 'i' } }).limit(15)
    if(!foundApi){
        return foundDB
    }
    return foundApi
        
       
    } catch (error:any) {
        return error
    }
    
}
export default pokemonByName