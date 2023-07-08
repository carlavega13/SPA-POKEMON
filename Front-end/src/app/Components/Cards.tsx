"use client"
import { usePokeStore } from "../../../store/pokeStore"
import Card from "./Card"
import { PokeFromBack } from "../interfaces"
import s from "../Css/Cards.module.css"
export default function Home() {
  const {pokes}=usePokeStore(state=>state)



 
  return (
      <main className={s.cards}>
         {
          pokes?.map((poke:PokeFromBack|any)=><Card _id={poke._id} name={poke.name} img={poke.img} types={poke.types} />)
         }



      </main>
    )
  }
  