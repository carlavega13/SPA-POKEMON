"use client"
import { usePokeStore } from "../../../store/pokeStore";
import Cards from "../Components/Cards"
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Paginated from "../Components/Paginated"
import {useState }from "react"
import Shuffle from "../Components/Shuffle";
import ButtonForm from "../Components/ButtonForm";
import s from "../Css/Home.module.css"
export default function Home() {
  const [page,setPage]=useState(1)
  const {pokeDetail,cleanDetail,pokes,getPokes,pokesCopia}=usePokeStore(state=>state)
  if(  Object.entries(pokeDetail).length >0){
cleanDetail()
  }
 if(pokes.length===0){
getPokes()
 }
  
 let slicePokemons=pokesCopia

 if(slicePokemons.length>11){
   if(page===1){
 
     slicePokemons=pokesCopia?.slice(0*10,page*10)
 
   }else{
 
     slicePokemons=pokesCopia?.slice(page*10,page*10+10)
 
   }
   
 }
    return (
      <main >
     <NavBar/>
     <SearchBar/>
     <Cards pokesCopia={slicePokemons}/>
     <div className={s.paginatedBox}>
     <Shuffle/>
     <Paginated page={page} setPage={setPage}/>
     <ButtonForm/>
     </div>

      </main>
    );
  };