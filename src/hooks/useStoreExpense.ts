import {useContext, useState} from "react";
import {storeExpense} from "../http";
import {ExpensesContext} from "../store/expenses.context";
import {Expense} from "../constants";

export const useStoreExpense = () => {
    const { addExpense } = useContext(ExpensesContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const storeExpenseApiCall = async (expense: Expense) => {
        try {
            setLoading(true)
            const id = await storeExpense(expense)
            addExpense({...expense, id})
            setError('')
        } catch (reason) {
            setError('Unable to save Expense')
            console.warn(reason)
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, removeError: () => setError(''), storeExpenseApiCall }
}
