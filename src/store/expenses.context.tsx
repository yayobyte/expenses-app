import React, {createContext, useReducer, ReducerState, ReducerAction, Reducer} from "react";
import {Expense} from "../constants";
import uuid from "react-uuid";
import {DUMMY_EXPENSES} from "../data";

enum ExpenseActions {
    addExpense = 'addExpense',
    deleteExpense = 'deleteExpense',
    updateExpense = 'updateExpense',
}

export const ExpensesContext = createContext({
    expenses: [],
    [ExpenseActions.addExpense]: ({ description, amount, date }: Expense) => null,
    [ExpenseActions.deleteExpense]: (id : Expense['id']) => null,
    [ExpenseActions.updateExpense]: ({ id, description, amount, date }: Expense) => null
})

export const expensesReducer = (state: Array<Expense>, action: ReducerAction<Reducer<string, any>>) => {
    switch (action.type) {
        case ExpenseActions.addExpense:
            return [...state, {...action.payload, id: uuid()}]
        case ExpenseActions.updateExpense:
            const updateExpenseId = state.findIndex(({ id }) => id === action.payload.id)
            const updatedItem = state[updateExpenseId] =  { ...action.payload }
            return [...state, ...updatedItem]
        case ExpenseActions.deleteExpense:
            state.filter(({ id }) => id !== action.payload)
            return [...state]
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

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    )
}
