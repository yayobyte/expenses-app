import React, {createContext, useReducer, ReducerAction, Reducer, useEffect} from "react";
import {Expense} from "../constants";
import {DUMMY_EXPENSES} from "../data";
import {getExpenses} from "../http";

enum ExpenseActions {
    addExpense = 'addExpense',
    deleteExpense = 'deleteExpense',
    updateExpense = 'updateExpense',
}

export const ExpensesContext = createContext({
    expenses: [] as Array<Expense>,
    [ExpenseActions.addExpense]: (expense: Expense) => null,
    [ExpenseActions.deleteExpense]: (id : Expense['id']) => null,
    [ExpenseActions.updateExpense]: (expense: Expense) => null
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
        default:
            return state
    }
}

export const ExpensesContextProvider = ({ children }: { children: React.ReactElement}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    const addExpense = (expense: Expense) => {
        dispatch({ type: ExpenseActions.addExpense, payload: expense })
    }

    const deleteExpense = (id: Expense['id']) => {
        dispatch({ type: ExpenseActions.deleteExpense, payload: id })
    }

    const updateExpense = (expense: Expense) => {
        dispatch({ type: ExpenseActions.updateExpense, payload: expense })
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
    }

    useEffect(() => {
        const expenses = getExpenses()
    }, [])

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    )
}
