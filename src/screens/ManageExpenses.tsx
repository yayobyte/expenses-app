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
import {useDeleteExpenses} from "../hooks/useDeleteExpense";

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({route, navigation}: ScreenNavigatorProps) => {
    const {expenses} = useContext(ExpensesContext)

    const {
        loading: isLoadingUpdate,
        error: errorUpdate,
        UpdateErrorOverlay,
        updateExpenseApiCall,
    } = useUpdateExpenses()

    const {
        loading: isLoadingSave,
        error: errorSaving,
        SaveExpenseErrorOverlay,
        storeExpenseApiCall,
    } = useStoreExpense()

    const {
        loading: isLoadingDelete,
        DeleteErrorOverlay,
        error: errorDeleting,
        deleteExpenseApiCall,
    } = useDeleteExpenses()

    const hasError = errorSaving || errorUpdate || errorDeleting

    const id = route.params?.expenseId
    const isEditing = !!id

    const selectedExpense = expenses.find((expense) => expense.id === id)

    const deleteExpenseHandler = async () => {
        await deleteExpenseApiCall(id)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = async (expense: Expense) => {
        if (isEditing) {
            await updateExpenseApiCall({...expense, id})
            !errorUpdate && navigation.goBack()
        } else {
            await storeExpenseApiCall(expense)
            !errorSaving && navigation.goBack()
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    if (isLoadingUpdate || isLoadingSave || isLoadingDelete) {
        return <LoadingOverlay/>
    }

    return (
        <View style={styles.container}>
            {errorDeleting && <DeleteErrorOverlay />}
            {errorUpdate && <UpdateErrorOverlay />}
            {errorSaving && <SaveExpenseErrorOverlay />}
            {!hasError && <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                submitLabel={isEditing ? 'Update' : 'Add'}
                defaultValues={selectedExpense}
            />}
            {isEditing && !hasError && (
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
