import {Expense} from "./constants";
import axios from "axios";

const baseUrl = 'https://expenses-app-backend-default-rtdb.firebaseio.com/'

export const storeExpense = async (expense : Expense) => {
    try {
        const response = await axios.post(baseUrl + 'expenses.json', expense)
        return response.data.name
    } catch (reason) {
        console.warn(reason)
    }
}

export const getExpenses = async () => {
    let expenses: Array<Expense> = []
    try {
        const response = await axios.get(baseUrl + 'expenses.json')
        expenses = Object.keys(response.data).map((key) => {
            return {
                id: key,
                amount: response.data[key].amount,
                date: new Date(response.data[key].date),
                description: response.data[key].description,
            }
        })
    }catch (reason) {
        console.warn(reason)
    }
    return expenses
}

export const updateStoredExpenses = async (expense: Expense) => {
    try {
        await axios.put(baseUrl + `expenses/${expense.id}.json`, expense)
    } catch(reason) {
        console.warn(reason)
    }
}
