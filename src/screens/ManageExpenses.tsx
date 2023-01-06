import {View} from 'react-native'
import {NavigationProp, ParamListBase, RouteProp} from "@react-navigation/native";
import {useContext, useLayoutEffect, useState} from "react";
import {IconButton} from "../components/UI/IconButton";
import {Expense, GlobalStyles} from "../constants";
import {styles} from "./ManageExpenses.styles";
import {ExpensesContext} from "../store/expenses.context";
import {ExpenseForm} from "../components/ManageExpense/ExpenseForm";
import {deleteStoredExpense} from "../http";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";
import {useUpdateExpenses} from "../hooks/useUpdateExpenses";
import {ErrorOverlay} from "../components/UI/ErrorOverlay";
import {useStoreExpense} from "../hooks/useStoreExpense";

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({route, navigation}: ScreenNavigatorProps) => {
    const {deleteExpense, expenses} = useContext(ExpensesContext)

    const {
        loading: isLoadingUpdate,
        error: errorUpdate,
        removeError: removeUpdateError,
        updateExpenseApiCall,
    } = useUpdateExpenses()

    const {
        loading: isLoadingSave,
        error: errorSaving,
        removeError: removeSavingError,
        storeExpenseApiCall,
    } = useStoreExpense()

    const id = route.params?.expenseId
    const isEditing = !!id

    const selectedExpense = expenses.find((expense) => expense.id === id)

    const deleteExpenseHandler = async () => {
        await deleteStoredExpense(id)
        deleteExpense(id)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = async (expense: Expense) => {
        if (isEditing) {
            await updateExpenseApiCall({...expense, id})
        } else {
            await storeExpenseApiCall(expense)
        }
        navigation.goBack()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    if (isLoadingUpdate || isLoadingSave) {
        return <LoadingOverlay/>
    }

    if (errorUpdate) {
        return <ErrorOverlay message={errorUpdate} onPress={removeUpdateError}/>
    }

    if (errorSaving) {
        return <ErrorOverlay message={errorSaving} onPress={removeSavingError}/>
    }

    return (
        <View style={styles.container}>
            <ExpenseForm onCancel={cancelHandler} onSubmit={confirmHandler} submitLabel={isEditing ? 'Update' : 'Add'}
                         defaultValues={selectedExpense}/>
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
