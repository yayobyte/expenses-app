import { Text } from 'react-native'
import {NavigationProp, RouteProp} from "@react-navigation/native";
import {useLayoutEffect} from "react";
type ManageExpensesProps = {
    route: RouteProp<{ params: { expenseId: string }}>
    navigation: NavigationProp<string>
}

export const ManageExpenses = ({ route, navigation }: ManageExpensesProps) => {
    const id = route.params?.expenseId
    const isEditing = !!id

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    return (
        <Text>Manage Expenses</Text>
    )
}
