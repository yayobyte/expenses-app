import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses.context";
import {useGetExpenses} from "../hooks/useGetExpenses";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";

const EXPENSES_DAYS = 7

export const RecentExpenses = () => {
    const { expenses } = useContext(ExpensesContext)

    const recentExpenses = expenses.filter(({ date }) => {
        const today = new Date()
        const dateMinusSeven = new Date(today.getFullYear(), today.getMonth(), today.getDay() - EXPENSES_DAYS)
        return date > dateMinusSeven
    })

    const { loading } = useGetExpenses()

    if (loading) {
        return <LoadingOverlay />
    }

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod={`Last ${EXPENSES_DAYS} days`} fallbackText={'No expenses'} />
    )
}
