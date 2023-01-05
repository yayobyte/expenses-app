import {View} from 'react-native'
import {NavigationProp, ParamListBase, RouteProp} from "@react-navigation/native";
import {useContext, useLayoutEffect} from "react";
import {IconButton} from "../components/UI/IconButton";
import {GlobalStyles} from "../constants";
import {styles} from "./ManageExpenses.styles";
import {Button} from "../components/UI/Button";
import {ExpensesContext} from "../store/expenses.context";

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({route, navigation}: ScreenNavigatorProps) => {
    const { deleteExpense } = useContext(ExpensesContext)
    const id = route.params?.expenseId
    const isEditing = !!id

    const deleteExpenseHandler = () => {
        deleteExpense(id)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = () => {
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button onPress={cancelHandler} mode={'flat'} style={styles.button}>Cancel</Button>
                <Button onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Edit'}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        size={GlobalStyles.iconSize.l}
                        color={GlobalStyles.colors.error500}
                        onPress={deleteExpenseHandler}
                        icon={'trash'}
                    />
                </View>)
            }
        </View>
    )
}
