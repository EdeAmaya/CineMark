import {Schema,model} from "mongoose";

const clientsShema = new Schema({
    name: {
        type: String,   
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    telephone: {
        type: String
    },
    address: {
        type: String
    },
    active: {
        type: Boolean
    }
},{
    timestamps : true,
    strict:false
})

export default model("Clients",clientsShema)