import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./Backend/controllers/user.controller.js";
dotenv.config();


mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Funciona la conexión de la base de datos")
})
.catch((error)=> {
    console.log("no funciona la conexión a la base de datos", error)
})

const app=express();
app.use(cors())

app.listen(4003, ()=>
{
    console.log("Ecuchando tu servidor correctamente")
})


test()