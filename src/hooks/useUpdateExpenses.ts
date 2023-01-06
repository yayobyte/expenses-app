import {useContext, useState} from "react";
import {updateStoredExpense} from "../http";
import {ExpensesContext} from "../store/expenses.context";
import {Expense} from "../constants";

export const useUpdateExpenses = () => {
    const { updateExpense } = useContext(ExpensesContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const updateExpenseApiCall = async (expense: Expense) => {
        try {
            setLoading(true)
            await updateStoredExpense(expense)
            updateExpense(expense)
            setError('')
        } catch (reason) {
            setError('Unable to update Expenses')
            console.warn(reason)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, removeError: () => setError(''), updateExpenseApiCall }
}
