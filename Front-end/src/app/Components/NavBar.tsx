import {FiSun} from "react-icons/fi"
import {BiMoon}from "react-icons/bi"
import Image from "next/image"
import { LuMail } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import s from "../Css/NavBar.module.css"
import SearchBar from "./SearchBar";
export default function NavBar() {
    return (
      <main className={s.box} >
        <div className={s.theme}>
           <FiSun/>
       <BiMoon/>
        </div>
     <div>

       <SearchBar/>
     </div>
   

       <div>
        <LuMail/>
        <FaLinkedinIn/>
        <FiGithub/>
       </div>
      </main>
    )
  }
  