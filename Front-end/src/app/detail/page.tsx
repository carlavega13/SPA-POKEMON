"use client"
import { usePokeStore } from "../../../store/pokeStore"
import Image from "next/image"
import s from "../Css/Detail.module.css"
import { useRouter } from 'next/navigation';

export default function Detail(props:any) {
  const router=useRouter()
  const{id,idChain}=props.searchParams
  const{pokeDetail,getPokeById}=usePokeStore(state=>state)

  Object.entries(pokeDetail).length === 0?getPokeById(Number(id),Number(idChain)):null



    return (
      <main className={s.box}>
     <h1>{pokeDetail.name}</h1>
  <Image src={pokeDetail?.img} height={400}width={400}alt="Not"/>
  <h3>Attack: {pokeDetail?.attackPoints}</h3>
  <h3>Defense: {pokeDetail?.defensePoints}</h3>
  <h3>Life: {pokeDetail?.lifePoints}</h3>
  <h3>Speed: {pokeDetail?.speedPoints}</h3>
  <h3>Height: {pokeDetail?.height}</h3>
  <h3>Weight: {pokeDetail?.weight}</h3>
  <ul>
   {
    pokeDetail.types?.map((type:String)=><li>{type}</li>)
   }
  </ul>
  <div className={s.back}>
 
  <button className={s.backButton} onClick={()=>router.back()}>Back to Home !</button>

   <img src={pokeDetail?.gif} alt="dsads" />
  </div>
   {
    pokeDetail.evolutions?.length>=1?<div className={s.evolutionsBox}>
      {
        pokeDetail.evolutions?.map((po:any)=><div onClick={()=>getPokeById(po?._id,po?.idChain)}>
          <h5>{po.name}</h5>
          <Image src={po?.img} height={100} width={100} alt="Not"/>
          <h6>{po._id}</h6>
        </div>)
      }
    </div>:null
   }
      </main>
    )
  }