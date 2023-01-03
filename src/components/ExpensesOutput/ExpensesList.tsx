import {FlatList} from "react-native";
import {Expense} from "../../constants";
import {ExpenseItem} from "./ExpenseItem";

type ExpensesListProps = {
    expenses: Array<Expense>
}

const renderExpenseItem = ({ item }: { item: Expense }) => {
    return (
        <ExpenseItem amount={item.amount} description={item.description} date={item.date} />
    )
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={({ id }) => id} />
    )
}
