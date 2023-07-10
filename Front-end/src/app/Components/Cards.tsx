"use client"
import { usePokeStore } from "../../../store/pokeStore"
import Card from "./Card"
import { PokeFromBack } from "../interfaces"
import s from "../Css/Cards.module.css"
export default function Home(props:any) {

 
  return (
      <main className={s.cards}>
         {
          props.pokesCopia?.map((poke:PokeFromBack|any)=><Card idChain={poke.evolutionId
          } key={poke._id} _id={poke._id} name={poke.name} img={poke.img} types={poke.types} />)
         }



      </main>
    )
  }
  