import { usePokeStore } from "../../../store/pokeStore";
import s from "../Css/Paginated.module.css"
export default function Home(props:any) {
     const {pokesCopia}=usePokeStore(state=>state)
     let cantidad:number=pokesCopia.length
     let aux:number=1
     let numbers:Array<number>=[]

     while(cantidad>0){
        cantidad=cantidad-15
        
        if(cantidad>0){
            
            numbers.push(aux)
            aux++
            
        }
        }
        
        const handlerPaginater=(numero:number)=>{

            props.setPage(numero)
            }
            //! este handler maneja la flechita de adelante 
            const handlerAdelante=()=>{
                if(props.page<aux-1){
                     props.setPage(props.page+1)
                }}
            
                //! este handler maneja la flechita de atras 
                const handlerAtras=()=>{
                    if(props.page>1){
                         props.setPage(props.page-1)
                    }
            
            }
        
        if(numbers.length>1){
            return(
              <div className={s.box}>
                   <button className={s.arrows} onClick={handlerAtras}>{"<"}</button>
                  {
                      numbers?.map(numero=>{
                          return <button className={props.page===numero?s.selected:s.butt}  onClick={()=>handlerPaginater(numero)} key={numero}>{numero}</button>
                      })
                  }
                  <button className={s.arrows} onClick={handlerAdelante} >{">"}</button>
              </div>
          )
          }
          return (
              <div></div>
          )
    };