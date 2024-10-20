import { Expense } from "../models/Expense.js";

//get all expenses
export const getAllExpenses=async(req,res)=>{
    res.json({msg:`all expenses`})
}

// add a new expense
export const addExpense=async(req,res)=>{
    res.json({msg:`add an expense`})
}

//update an expense
export const updateExpense=async(req,res)=>{
    res.json({msg:`update an expense`})
}

//delete an expense
export const deleteExpense=async (req,res) => {
    res.json({msg:`delete expense`})
}
