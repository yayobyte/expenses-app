import {Pressable, View, Text} from "react-native";
import {Expense} from "../../constants";
import {styles} from "./ExpenseItem.styles";
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MANAGE_EXPENSES_NAV} from "../../navigation/routes";

type ExpenseItemProps = {
    description: Expense['description'],
    amount: Expense['amount'],
    date: Expense['date'],
}

export const ExpenseItem = ({ description, amount, date }: ExpenseItemProps) => {
    const navigation = useNavigation<NavigationProp<Record<string, object | undefined>, string>>()

    const expensePressHandler = () => {
        navigation.navigate(MANAGE_EXPENSES_NAV)
    }

    return(
        <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
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
