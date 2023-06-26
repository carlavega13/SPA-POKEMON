import 'dotenv/config'
import mongoose from "mongoose"
const {DB_CONNECTION}=process.env

mongoose.connect(`${DB_CONNECTION}`)
mongoose.connection.on("connected",_=>{
    console.log("entre a la db");
    
})