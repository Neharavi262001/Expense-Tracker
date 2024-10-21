import express from 'express'
import { addExpense, deleteExpense, getAllExpenses, getExpenseByCategory, getTotalExpenses, updateExpense } from '../controllers/expenseController.js'

const router=express.Router()
router.get('/',getAllExpenses)
router.post('/',addExpense)
router.put('/:id',updateExpense)
router.delete('/:id',deleteExpense)
router.get('/total',getTotalExpenses)
router.get('/category',getExpenseByCategory)

export default router
