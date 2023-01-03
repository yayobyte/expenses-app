import {View} from "react-native";
import {ExpensesList} from "./ExpensesList";
import {ExpensesSummary, ExpensesSummaryProps} from "./ExpensesSummary";
import {styles} from "./ExpensesOutput.styles";

type ExpensesOutputProps = {
    expenses: ExpensesSummaryProps['expenses'],
    expensesPeriod: ExpensesSummaryProps['periodName']
}

export const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
        </View>
    )
}
