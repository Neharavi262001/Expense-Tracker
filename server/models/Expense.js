import mongoose from "mongoose";

const expenseSchema= new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    decription:{
        type:String
    }
})

export const Expense=mongoose.model('Expense',expenseSchema)