import {useContext, useEffect, useState} from "react";
import {getExpenses} from "../http";
import {ExpensesContext} from "../store/expenses.context";

export const useGetExpenses = () => {
    const { setExpenses } = useContext(ExpensesContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                setLoading(true)
                const expenses = await getExpenses()
                setExpenses(expenses)
                setError('')
            } catch (reason) {
                setError('Unable to get Expenses')
                console.warn(reason)
            } finally {
                setLoading(false)
            }
        }
        fetchExpenses()
    }, [])

    return { loading, error, removeError: () => setError('') }
}
