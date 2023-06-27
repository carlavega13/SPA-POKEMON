import Pokemon from "../models/Pokemon"
import axios from "axios";



//
const massivePostIntoDB:()=>void=async()=>{
try {
    const numDePokemons:number=await Pokemon.countDocuments()
    if(numDePokemons<100){

    let promiseArray:Promise<Object>[]=[]
    for (let i = 1; i < 301; i++) {
   promiseArray.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(res=>res.data))
        
    }
 let pokemons:Array<Object>= await  Promise.all(promiseArray)
 pokemons=await transformData(pokemons)

 await Pokemon.insertMany(pokemons)



    }
} catch (error:any) {
    console.log(error.message);
    
}
}
const transformData:(pokemons:Array<Object>)=>Array<Object>|any=async(pokemons) =>{
    try {
        let evoPromiseArray:Promise<Object>[]=[]
       let transformedPokes:Array<Object>=pokemons.map(async(poke:any)=>{
        let types=poke.types.map((t:any)=>t.type.name)

let id=await axios(`https://pokeapi.co/api/v2/pokemon-species/${poke.id}`).then(res=>Number(res.data.evolution_chain.url.slice(0,-1).split("/").pop()))


        return {
            _id:poke.id,
                name:poke.name,
                img:poke.sprites.other.home.front_default,
                imgShiny:poke.sprites.other.home.front_default.front_shiny,
                lifePoints:poke.stats[0].base_stat,
                attackPoints:poke.stats[1].base_stat,
                defensePoints:poke.stats[2].base_stat,
                speedPoints:poke.stats[5].base_stat,
                height:poke.height,
                weight:poke.weight,
                types:types,
                evolutionId:id,
                createdInDb:false
            }
            
       })
      transformedPokes=await Promise.all(transformedPokes)

       
        return transformedPokes
    } catch (error:any) {
        console.log(error.message);
        
    }
  
}
export default massivePostIntoDB
