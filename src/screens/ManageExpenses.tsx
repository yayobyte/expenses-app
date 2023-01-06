import {View} from 'react-native'
import {NavigationProp, ParamListBase, RouteProp} from "@react-navigation/native";
import {useContext, useLayoutEffect, useState} from "react";
import {IconButton} from "../components/UI/IconButton";
import {Expense, GlobalStyles} from "../constants";
import {styles} from "./ManageExpenses.styles";
import {ExpensesContext} from "../store/expenses.context";
import {ExpenseForm} from "../components/ManageExpense/ExpenseForm";
import {deleteStoredExpense, storeExpense, updateStoredExpense} from "../http";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({route, navigation}: ScreenNavigatorProps) => {
    const { deleteExpense, addExpense, updateExpense, expenses } = useContext(ExpensesContext)
    const [isLoading, setIsLoading] = useState(false)

    const id = route.params?.expenseId
    const isEditing = !!id

    const selectedExpense = expenses.find((expense) => expense.id === id)

    const deleteExpenseHandler = async () => {
        setIsLoading(true)
        await deleteStoredExpense(id)
        setIsLoading(false)
        deleteExpense(id)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = async (expense: Expense) => {
        setIsLoading(true)
        if(isEditing) {
            await updateStoredExpense({ ...expense, id })
            updateExpense({ ...expense, id })
        }else{
            const id = await storeExpense(expense)
            addExpense({ ...expense, id})
        }
        setIsLoading(false)
        navigation.goBack()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    if (isLoading) {
        return <LoadingOverlay />
    }

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
