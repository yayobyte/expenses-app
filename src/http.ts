import {Expense} from "./constants";
import axios from "axios";

const baseUrl = 'https://expenses-app-2c964-default-rtdb.firebaseio.com/'

export const storeExpense = async (expense : Expense) => {
    const response = await axios.post(baseUrl + 'expenses.json', expense)
    return response.data.name
}

export const getExpenses = async () => {
    const response = await axios.get(baseUrl + 'expenses.json')
    return  Object.keys(response.data).map((key) => {
        return {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        }
    }) as Array<Expense>
}

export const updateStoredExpense = async (expense: Expense) => {
    await axios.put(baseUrl + `expenses/${expense.id}.json`, expense)
}

export const deleteStoredExpense = async (id: Expense['id']) => {
    await axios.delete(baseUrl + `expenses/${id}.json`)
}
