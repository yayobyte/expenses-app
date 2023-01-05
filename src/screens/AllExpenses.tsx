import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses.context";
export const AllExpenses = () => {
    const { expenses } = useContext(ExpensesContext)
    return (
        <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} fallbackText={'No expenses'}/>
    )
}
