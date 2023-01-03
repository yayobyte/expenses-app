import {Pressable, View, Text} from "react-native";
import {Expense} from "../../constants";
import {styles} from "./ExpenseItem.styles";

type ExpenseItemProps = {
    description: Expense['description'],
    amount: Expense['amount'],
    date: Expense['date'],
}

export const ExpenseItem = ({ description, amount, date }: ExpenseItemProps) => {
    return(
        <Pressable>
            <View style={styles.item}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={[styles.textBase]}>{date.toLocaleDateString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}
