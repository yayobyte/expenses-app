import {Text, View} from "react-native";
import {ExpensesList} from "./ExpensesList";
import {ExpensesSummary, ExpensesSummaryProps} from "./ExpensesSummary";
import {styles} from "./ExpensesOutput.styles";

type ExpensesOutputProps = {
    expenses: ExpensesSummaryProps['expenses'],
    expensesPeriod: ExpensesSummaryProps['periodName']
    fallbackText: string
}

export const ExpensesOutput = ({expenses, expensesPeriod, fallbackText}: ExpensesOutputProps) => {

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {expenses.length > 0 ?
                <ExpensesList expenses={expenses}/> :
                <Text style={styles.infoText}>{fallbackText}</Text>}
        </View>
    )
}
