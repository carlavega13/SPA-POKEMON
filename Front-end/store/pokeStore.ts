
import axios from "axios"
import {create}from "zustand"



export interface PokeState{
    pokes:Array<Object>,
    pokeDetail:any,
    pokesCopia:Array<Object>,
    types:Array<Object>,
    getPokes:()=>Promise<void>,
    getPokeById:(id:Number,idChain:Number)=>Promise<void>,
    cleanDetail:()=>void,
    searchPokes:(input:String)=>any,
    bringBackPokes:()=>void

}

export const usePokeStore=create<PokeState>((set)=>{
    return {
        pokes:[],
        pokeDetail:{},
        pokesCopia:[],
        types:[],
        getPokes:async()=>{
            try {
                let pokemons= await axios.get(`http://localhost:3001/pokemon`).then(res=>res.data)
                pokemons= shufflePokes(pokemons)
                set(state=>({
                    ...state,
                    pokes:pokemons,
                    pokesCopia:pokemons
                }))   
            } catch (error:any) {
                console.log(error);
                
            }
        },
        getPokeById:async(id,idChain)=>{
         try {            
            const poke= await axios.get(`http://localhost:3001/pokemon/detail?id=${id}&chain=${idChain}`).then(res=>res.data)
            set(state=>({
                ...state,
                pokeDetail:poke
            }))
         } catch (error:any) {
           console.log(error.message);
            
         }
        },
        cleanDetail:()=>{
            set(state=>({
            ...state,
            pokeDetail:[]
        }))},
        searchPokes:async(input)=>{
        const response=await axios.get(`http://localhost:3001/pokemon/name/?name=${input.trim()}`).then(res=>res.data)
        set(state=>({
            ...state,
            pokesCopia: response
        }))
        },
        bringBackPokes:()=>{
        set(state=>({
            ...state,
            pokesCopia:state.pokes
        }))
        }

   
        }

        
    }
)

function shufflePokes<T>(array: T[]): T[] {
    const newArray = [...array]; // Copiar el array original para no modificarlo directamente
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); // Generar un índice aleatorio
  
      // Intercambiar elementos usando destructuring assignment
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
  
    return newArray;
  }