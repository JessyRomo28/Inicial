const mongoose = require("mongoose");

const url_bd= "mongodb://localhost:27017/Utma"

mongoose.connect(url_bd)
.then(()=>{
    console.log("Funciona la conexión de la base de datos")
})
.catch((error)=> {
    console.log("no funciona la conexión a la base de datos", error)
})


const Esquema1 = new mongoose.Schema({
    name: {
        type: String
    },
    edad:{
        type: Number
    }
})

const modelo1 = new mongoose.model("tabla de usuarios", Esquema1)

modelo1.create({
    name: "Pablito",
    edad: 23
})