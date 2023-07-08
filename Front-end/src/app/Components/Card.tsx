import Image from "next/image"
import s from "../Css/Card.module.css"
import Link from "next/link"
import { CardI } from "../interfaces";

export default function Card(props:CardI) {
const{_id,name,img,types}=props
const pngs:Array<String>=setColorAndType(types)
console.log(pngs[0]);


  
    return (
      <main>
         <div id={_id.toString()}className={s.card}>
        <Link className={s.link} href={"/detail"}>
          <Image width={150} height={150} className={s.pokeImg} src={img.toString()} alt="Not Found" />
  
          <div className={pngs[0]?s[pngs[0].toString()]:s.non}>
            <h3 className={s.name}>{name}</h3>
            <div className={s.types}>
            {/* <Image alt="Not Found"width={30} height={40} src="/leaf.png"/> */}
            {
              pngs.length>0?pngs.map(type=><Image alt="Not Found"width={30} height={40} src={`/${type.toString()}.png`}/>):null
            }

            </div>
          </div>
      </Link>
          </div>   
  
      </main>
    )
  }

  const setColorAndType:(types:Array<String>)=>Array<String>=(types)=>{
    const arryTypes:Array<String>=["fire","electric","water","dark","grass","psychic","ground","dragon","fairy","normal","steel"]
    const res:Array<String>=[]
    types.map((type)=>{
     if(arryTypes.includes(type)){
     res.push(type)
     } 
    //  if(res.length===0){
    //   res.push(null)
    //  }
    })
    return res
  }