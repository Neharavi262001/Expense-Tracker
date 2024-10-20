import { Expense } from "../models/Expense.js";

//get all expenses
export const getAllExpenses=async(req,res)=>{
    try {
        const allExpenses=await Expense.find()
        res.status(200).json({allExpenses,message:`All expenses fetched successfully`})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}

// add a new expense
export const addExpense=async(req,res)=>{
    const {amount,category,description}=req.body
    const expense=new Expense({
        amount,
        category,
        description
    })

    try {
        const savedExpense= await expense.save()
        res.status(201).json({savedExpense,msg:`New expense added successfully`})
    } catch (error) {
        res.status(400).json({message:error.message})
    }


    
}

//update an expense
export const updateExpense=async(req,res)=>{
    const {id}=req.params
    const {amount,category,description}=req.body
    try {
        const updatedExpense=await Expense.findByIdAndUpdate(
            id,
            {amount,category,description},
            {new:true}
        )
        if (!updatedExpense){
            res.status(404)
            throw new Error('Expense not found')
        }
        res.status(201).json({updateExpense,message:`Expense updated successfully !`})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
   
   
}

//delete an expense
export const deleteExpense=async (req,res) => {
   const {id}=req.params
   try {
    const deleteExpense = await Expense.findByIdAndDelete(id)

    if (!deleteExpense){
        res.status(404)
            throw new Error('Expense not found')
    }
    res.status(200).json({deleteExpense,message:`Expense deleted successfully !`});

   } catch (error) {
    res.status(400).json({ message: error.message });
   }
}
