import Image from "next/image"
import s from "../Css/Card.module.css"
// import leaf from "/leaf.png"
export default function Card() {
    return (
      <main>
         <div className={s.card}>
          <Image width={202} height={202} className={s.pokeImg} src="/1.png" alt="Not Found" />
  
          <div className={s.gradiantCard}>
            <h3 className={s.name}>{"Bolubasaur"}</h3>
            <div className={s.types}>
            <Image alt="Not Found"width={30} height={40} src="/leaf.png"/>

            </div>
          </div>
          </div>   
  
      </main>
    )
  }