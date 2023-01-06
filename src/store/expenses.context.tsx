import React, {createContext, useReducer, ReducerAction, Reducer} from "react";
import {Expense} from "../constants";

enum ExpenseActions {
    addExpense = 'addExpense',
    deleteExpense = 'deleteExpense',
    updateExpense = 'updateExpense',
    setExpenses = 'setExpenses',
}

export const ExpensesContext = createContext({
    expenses: [] as Array<Expense>,
    [ExpenseActions.addExpense]: (expense: Expense) => null,
    [ExpenseActions.deleteExpense]: (id : Expense['id']) => null,
    [ExpenseActions.updateExpense]: (expense: Expense) => null,
    [ExpenseActions.setExpenses]: (expenses: Array<Expense>) => null
})

export const expensesReducer = (state: Array<Expense>, action: ReducerAction<Reducer<string, any>>) => {
    switch (action.type) {
        case ExpenseActions.addExpense:
            return [...state, {...action.payload }]
        case ExpenseActions.updateExpense:
            const updateExpenseIndex = state.findIndex(({ id }) => id === action.payload.id)
            state[updateExpenseIndex] =  { ...action.payload }
            return [...state]
        case ExpenseActions.deleteExpense:
            const filteredArray = state.filter(({ id }) => id !== action.payload)
            return [...filteredArray]
        case ExpenseActions.setExpenses:
            return [...action.payload]
        default:
            return state
    }
}

export const ExpensesContextProvider = ({ children }: { children: React.ReactElement}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, [])

    const addExpense = (expense: Expense) => {
        dispatch({ type: ExpenseActions.addExpense, payload: expense })
    }

    const deleteExpense = (id: Expense['id']) => {
        dispatch({ type: ExpenseActions.deleteExpense, payload: id })
    }

    const updateExpense = (expense: Expense) => {
        dispatch({ type: ExpenseActions.updateExpense, payload: expense })
    }

    const setExpenses = (expenses: Array<Expense>) => {
        dispatch({ type: ExpenseActions.setExpenses, payload: expenses })
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
        setExpenses,
    }

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    )
}
