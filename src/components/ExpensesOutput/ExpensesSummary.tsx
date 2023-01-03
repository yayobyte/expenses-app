import {Text, View} from "react-native";
import {Expense} from "../../constants";
import {styles} from "./ExpensesSummary.styles";

export type ExpensesSummaryProps = {
    periodName: string
    expenses: Array<Expense>
}

export const ExpensesSummary = ({ periodName, expenses }: ExpensesSummaryProps) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}
