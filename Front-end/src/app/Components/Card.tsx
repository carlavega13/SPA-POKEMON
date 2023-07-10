import Image from "next/image"
import s from "../Css/Card.module.css"
import Link from "next/link"
import { CardI } from "../interfaces";
import { LuSwords} from 'react-icons/lu';

export default function Card(props:CardI) {
const{_id,name,img,types,idChain}=props
const pngs:Array<String>=setColorAndType(types)
  
    return (
      <main>
         <div id={_id.toString()}className={s.card}>
        <Link className={s.link} href={`/detail?id=${_id}&idChain=${idChain}`}>
          <Image width={150} height={150} className={s.pokeImg} src={img.toString()} alt="Not Found" />
  
          <div className={pngs[0]?s[pngs[0].toString()]:s.non}>
            <h3 className={s.name}>{name}</h3>

            <div className={s.bottomCard}>

              <div className={s.apBox}>
              <LuSwords size={20} className={s.apLogo}/>
              <h3 className={s.ap}>{props.attackPoints}</h3>

              </div>
            <div className={s.types}>
            {
              pngs.length>0?pngs.map(type=><Image alt="Not Found"width={25} height={35} src={`/${type.toString()}.png`}/>):null
            }

            </div>
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
    })
    return res
  }