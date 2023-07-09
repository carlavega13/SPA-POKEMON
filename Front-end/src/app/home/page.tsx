"use client"
import { usePokeStore } from "../../../store/pokeStore";
import Cards from "../Components/Cards"
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
export default function Home() {
  const {pokeDetail,cleanDetail,pokes,getPokes}=usePokeStore(state=>state)
  if(  Object.entries(pokeDetail).length >0){
cleanDetail()
  }
 if(pokes.length===0){
getPokes()
 }
  
    return (
      <main >
     <NavBar/>
     <SearchBar/>
     <Cards/>

      </main>
    );
  };