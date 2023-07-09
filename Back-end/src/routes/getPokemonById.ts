import { Request,Response } from "express";
import pokemonById from "../controllers/pokemonById";


const getPokemonById:(req:Request,res:Response)=>Object|any=async(req,res)=>{
try {
const id:Number=Number(req.query.id)
const idChain:Number=Number(req.query.chain)
const pokemon:Object= await pokemonById(id,Number(idChain))

       res.status(200).send(pokemon)
} catch (error:any) {
    console.log(error.message);
    
    res.status(400).send(error.message)
}
}
export default getPokemonById