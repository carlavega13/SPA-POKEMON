import { Request,Response } from "express";
import Pokemon from "../models/Pokemon";
import pokemonById from "../controllers/pokemonById";

const getPokemonById:(req:Request,res:Response)=>Object|any=async(req,res)=>{
try {
const id:Number=Number(req.query.id)
const idChain:Number=Number(req.query.chain)
const pokemon:Object= await pokemonById(id,idChain)
    // console.log(pokemon);
    
       res.status(200).send(pokemon)
} catch (error:any) {
    res.status(400).send(error.message)
}
}
export default getPokemonById