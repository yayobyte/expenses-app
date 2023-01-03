import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {DUMMY_EXPENSES} from "../constants";
export const AllExpenses = () => {
    return (
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod={"Total"} />
    )
}
