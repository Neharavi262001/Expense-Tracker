import express from 'express'
import { addExpense, deleteExpense, getAllExpenses, updateExpense } from '../controllers/expenseController.js'

const router=express.Router()
router.get('/',getAllExpenses)
router.post('/',addExpense)
router.put('/:id',updateExpense)
router.delete('/:id',deleteExpense)

export default router
