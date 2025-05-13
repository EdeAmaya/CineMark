import {Schema,model} from "mongoose";

const peliculasShema = new Schema({
    title: {
        type: String,
    },

    description: {
        type: String,
    },
    
    director: {
        type: String,
    },


    genre: {
        type: String,
    },

    anio:{
        type: Number,
    },

    duration: {
        type: Number,
    },

    image:{
        type:String
    }
},{
    timestamps : true,
    strict:false
})

export default model("Peliculas",peliculasShema)