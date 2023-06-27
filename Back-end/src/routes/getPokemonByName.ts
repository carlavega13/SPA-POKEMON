import { Request,Response } from "express";
import pokemonByName from "../controllers/pokemonByName";
const getPokemonByName:(req:Request,res:Response)=>Array<Object>|any=async(req,res)=>{
    try {
        const name:String|any=req.query.name
      const response:Array<Object>=await pokemonByName(name)

        
           res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
    }
    export default getPokemonByName