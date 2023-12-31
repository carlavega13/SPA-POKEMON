import { usePokeStore } from "../../../store/pokeStore"
import s from "../Css/SearchBar.module.css"
import {useState} from "react"
export default function SearchBar() {
  const[poke,setPoke]=useState("")
 const{searchPokes,bringBackPokes}=usePokeStore()
  const searchHandler=(e:any)=>{
    searchPokes(poke)
    
  }
  const enter=(e:any)=>{
if(e.keyCode===13){
  searchPokes(poke)
}

  }
  const bringBackHandler=()=>{
    bringBackPokes()
  }
    return (
      <main className={s.box} >
         <img className={s.logo} alt={"Not Found"}src={"/logo.png"}/>
         <div className={s.searchBar}>

       <input className={s.searchBox} onKeyUp={enter} onChange={(e)=>setPoke(e.target.value)} value={poke} type="text" />
       <div className={s.butt}>
       <button onClick={searchHandler}>Search Pokemon</button>
       <button onClick={bringBackHandler}>Show All</button>

       </div>
         </div>
      </main>
    )
  }
  