import {ExpensesOutput} from "../components/ExpensesOutput/ExpensesOutput";
import {DUMMY_EXPENSES} from "../constants";
export const RecentExpenses = () => {
    return (
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod={'Lsat 7 days'} />
    )
}
