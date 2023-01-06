import React, {useContext, useState} from "react";
import {deleteStoredExpense} from "../http";
import {ExpensesContext} from "../store/expenses.context";
import {Expense} from "../constants";
import {ErrorOverlay} from "../components/UI/ErrorOverlay";

export const useDeleteExpenses = () => {
    const { deleteExpense } = useContext(ExpensesContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const deleteExpenseApiCall = async (id: Expense['id']) => {
        try {
            setLoading(true)
            await deleteStoredExpense(id)
            deleteExpense(id)
            setError('')
        } catch (reason) {
            setError('Unable to delete the Expense')
            console.warn(reason)
        } finally {
            setLoading(false)
        }
    }

    const DeleteErrorOverlay = () => {
        return (
            error.length > 0 ? <ErrorOverlay onPress={() => setError('')} message={error} /> : null
        )
    }

    return { loading, DeleteErrorOverlay, error, deleteExpenseApiCall }
}
