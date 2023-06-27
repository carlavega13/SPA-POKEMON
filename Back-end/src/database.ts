import 'dotenv/config'
import mongoose from "mongoose"
const {DB_CONNECTION}=process.env


mongoose.connect(`${DB_CONNECTION}`)
.then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
