
import axios from "axios"
import {create}from "zustand"



export interface PokeState{
    pokes:Array<Object>,
    pokesCopia:Array<Object>,
    types:Array<Object>,
    getPokes:()=>Promise<void>

}

export const usePokeStore=create<PokeState>((set)=>{
    return {
        pokes:[],
        pokesCopia:[],
        types:[],
        getPokes:async()=>{
            try {
                let pokemons= await axios.get(`http://localhost:3001/pokemon`).then(res=>res.data)
                pokemons= shufflePokes(pokemons)
                set(state=>({
                    ...state,
                    pokes:pokemons
                }))

      
                
            } catch (error:any) {
                console.log(error);
                
            }
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