import { Request,Response } from "express";
import addingPokemon from "../controllers/addingpokemon";


const postPokemon:(req:Request,res:Response)=>Object|String=async(req,res)=>{
try {
    const pokemon:Object|String=await addingPokemon(req.body)

    
    res.status(200).send(pokemon)
} catch (error:any) {
    res.status(400).send(error.message)
}
}
export default postPokemon