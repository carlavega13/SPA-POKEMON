import SearchBar from "./SearchBar"
import {FiSun} from "react-icons/fi"
import {BiMoon}from "react-icons/bi"
import Image from "next/image"
export default function NavBar() {
    return (
      <main >
        <div>
           <FiSun/>
       <BiMoon/>
        </div>
      <Image width={439} height={254}alt={"Not Found"}src={"/logo.webp"}/>

   
       <SearchBar/>
      </main>
    )
  }
  