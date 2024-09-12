
import { modelo1 } from "../models/user.model.js";

modelo1.create({
    name: "Pablito",
    edad: 23
})

export const test = ()=>{
    console.log("Funciona tu controlador")
}