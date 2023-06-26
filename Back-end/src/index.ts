import 'dotenv/config'
import server from "./server"
//
const {PORT}=process.env

server.listen(PORT,()=>{
    console.log(`Logged on port ${PORT}`);

})