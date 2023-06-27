import { Request,Response } from "express";
import Pokemon from "../models/Pokemon";

const getPokemons:(req:Request,res:Response)=>Object|any=async(req,res)=>{
try {
    const pokes=await Pokemon.find({})
    res.status(200).send(pokes)
} catch (error:any) {
    
}
}
export default getPokemons