import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses.context";
import {useGetExpenses} from "../hooks/useGetExpenses";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";
import {ErrorOverlay} from "../components/UI/ErrorOverlay";
export const AllExpenses = () => {
    const { expenses } = useContext(ExpensesContext)
    const { loading, error, removeError} = useGetExpenses()

    if (loading) {
        return <LoadingOverlay />
    }

    if (error) {
        return <ErrorOverlay message={error} onPress={removeError} />
    }

    return (
        <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} fallbackText={'No expenses'}/>
    )
}
