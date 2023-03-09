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
import {ErrorOverlay} from "../components/UI/ErrorOverlay";
import { useFlag } from '@unleash/proxy-client-react';

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({route, navigation}: ScreenNavigatorProps) => {
    const {expenses, updateExpense, deleteExpense, addExpense} = useContext(ExpensesContext)
    const isDeleteExpenseEnabled = useFlag('deleteExpense');

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const id = route.params?.expenseId
    const isEditing = !!id

    const selectedExpense = expenses.find((expense) => expense.id === id)

    const deleteExpenseHandler = async () => {
        try {
            setLoading(true)
            await deleteStoredExpense(id)
            deleteExpense(id)
            setError('')
            cancelHandler()
        } catch (reason) {
            setError('Unable to delete the Expense')
            console.warn(reason)
        } finally {
            setLoading(false)
        }
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = async (expense: Expense) => {
        try {
            setLoading(true)
            if (isEditing) {
                await updateStoredExpense({...expense, id})
                updateExpense({...expense, id})
            } else {
                const id = await storeExpense(expense)
                addExpense({...expense, id})
            }
            setError('')
            cancelHandler()
        } catch (reason) {
            setError('Unable to submit Expense')
            console.warn(reason)
        } finally {
            setLoading(false)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    if (error) {
        return <ErrorOverlay message={error} onPress={() => setError('')} />
    }

    if (loading) {
        return <LoadingOverlay/>
    }

    return (
        <View style={styles.container}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                submitLabel={isEditing ? 'Update' : 'Add'}
                defaultValues={selectedExpense}
            />
            {isDeleteExpenseEnabled && isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        size={GlobalStyles.iconSize.l}
                        color={GlobalStyles.colors.error50}
                        onPress={deleteExpenseHandler}
                        icon={'trash'}
                    />
                </View>)
            }
        </View>
    )
}
