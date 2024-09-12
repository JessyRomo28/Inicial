import { Schema, model } from "mongoose";

const Esquema1 = new Schema({
    name: {
        type: String
    },
    edad:{
        type: Number
    }
})

export const modelo1 = new model("tabla de usuarios", Esquema1)