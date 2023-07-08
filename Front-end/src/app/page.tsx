"use client"
import Link from 'next/link'
import { usePokeStore } from '../../store/pokeStore'

export default function Landing() {
 const {getPokes}= usePokeStore(state=>state)

 const {pokes}=usePokeStore(state=>state)
 if(!pokes.length){
   getPokes()

 }



 
  return (
    <main >
      <Link href={"/home"}>
      <button>ENTER</button>
      </Link>
    </main>
  )
}
