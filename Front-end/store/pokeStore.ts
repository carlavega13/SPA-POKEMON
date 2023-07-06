import {create}from "zustand"

interface PokeState{
    pokes:Array<Object>,
    pokesCopia:Array<Object>,
    types:Array<Object>

}

export const usePokeStore=create<PokeState>(()=>{
    return {
        pokes:[],
        pokesCopia:[],
        types:[]
    }
})