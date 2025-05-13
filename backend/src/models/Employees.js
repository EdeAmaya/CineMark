import {Schema, model} from "mongoose";

const EmployeesShema = new Schema({

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
    role: {
        type: String
    },
    hireDate: {
        type: Date,
       
    },
    salary: {
        type: Number
    },
    active: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    strict: false
})


export default model("employees", EmployeesShema)