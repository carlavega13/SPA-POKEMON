import {Router}from "express"
import postPokemon from "./postPokemon"
import getPokemons from "./getPokemons"

//
const router:Router=Router()

//
router.get("/",getPokemons)

//
router.post("/",postPokemon)

//
export default router