import {FiSun} from "react-icons/fi"
import {BiMoon}from "react-icons/bi"
import Image from "next/image"
import { LuMail } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import s from "../Css/NavBar.module.css"
export default function NavBar() {
    return (
      <main className={s.box} >
        <div>
           <FiSun/>
       <BiMoon/>
        </div>
      <Image width={439} height={254}alt={"Not Found"}src={"/logo.webp"}/>

   

       <div>
        <LuMail/>
        <FaLinkedinIn/>
        <FiGithub/>
       </div>
      </main>
    )
  }
  