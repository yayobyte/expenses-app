import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses.context";
import {useGetExpenses} from "../hooks/useGetExpenses";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";
export const AllExpenses = () => {
    const { expenses } = useContext(ExpensesContext)
    const { loading } = useGetExpenses()

    if (loading) {
        return <LoadingOverlay />
    }

    return (
        <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} fallbackText={'No expenses'}/>
    )
}
