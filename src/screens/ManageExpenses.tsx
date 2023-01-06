import {View} from 'react-native'
import {NavigationProp, ParamListBase, RouteProp} from "@react-navigation/native";
import {useContext, useLayoutEffect} from "react";
import {IconButton} from "../components/UI/IconButton";
import {Expense, GlobalStyles} from "../constants";
import {styles} from "./ManageExpenses.styles";
import {ExpensesContext} from "../store/expenses.context";
import {ExpenseForm} from "../components/ManageExpense/ExpenseForm";
import {storeExpense} from "../http";

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({route, navigation}: ScreenNavigatorProps) => {
    const { deleteExpense, addExpense, updateExpense, expenses } = useContext(ExpensesContext)
    const id = route.params?.expenseId
    const isEditing = !!id

    const selectedExpense = expenses.find((expense) => expense.id === id)

    const deleteExpenseHandler = () => {
        deleteExpense(id)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = (expense: Expense) => {
        if(isEditing) {
            updateExpense({ ...expense, id })
        }else{
            storeExpense(expense)
            addExpense(expense)
        }
        navigation.goBack()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    return (
        <View style={styles.container}>
            <ExpenseForm onCancel={cancelHandler} onSubmit={confirmHandler} submitLabel={isEditing ? 'Update' : 'Add'} defaultValues={selectedExpense}/>
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
