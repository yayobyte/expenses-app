import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {DUMMY_EXPENSES} from "../constants";
export const RecentExpenses = () => {
    return (
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod={'Last 7 days'} />
    )
}
