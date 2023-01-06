import React, {useContext, useState} from "react";
import {storeExpense} from "../http";
import {ExpensesContext} from "../store/expenses.context";
import {Expense} from "../constants";
import {ErrorOverlay} from "../components/UI/ErrorOverlay";

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

    const SaveExpenseErrorOverlay = () => {
        return (
            error.length > 0 ? <ErrorOverlay onPress={() => setError('')} message={error} /> : null
        )
    }

    return { loading, error, SaveExpenseErrorOverlay, storeExpenseApiCall }
}
