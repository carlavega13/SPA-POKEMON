import 'dotenv/config'
import server from "./server"
import "./database"
import massivePostIntoDB from './controllers/massivePostIntoDB'
//
const {PORT}=process.env
server.listen(PORT,()=>{
    massivePostIntoDB()
    console.log(`Logged on port ${PORT}`);

})