import {Router}from "express"
import postPokemon from "./postPokemon"
import getPokemons from "./getPokemons"
import getPokemonById from "./getPokemonById"
import getPokemonByName from "./getPokemonByName"

//
const router:Router=Router()

//
router.get("/",getPokemons)
router.get("/detail",getPokemonById)
router.get("/name",getPokemonByName)
//
router.post("/",postPokemon)

//
export default router