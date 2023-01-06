import {useContext, useEffect, useState} from "react";
import {getExpenses} from "../http";
import {ExpensesContext} from "../store/expenses.context";

export const useGetExpenses = () => {
    const { setExpenses } = useContext(ExpensesContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchExpenses = async () => {
            setLoading(true)
            const expenses = await getExpenses()
            setLoading(false)
            setExpenses(expenses)
        }
        fetchExpenses()
    }, [])

    return { loading }
}
