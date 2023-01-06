import {Expense} from "./constants";
import axios from "axios";

const baseUrl = 'https://expenses-app-backend-default-rtdb.firebaseio.com/'


export const storeExpense = async (expense : Expense) => {
    try {
        await axios.post(baseUrl + 'expenses.json', expense)
    } catch (reason) {
        console.warn(reason)
    }
}

export const getExpenses = async () => {
    let expenses: Array<Expense> = []
    try {
        const response = await axios.get(baseUrl + 'expenses.json')
        expenses = response.data
    }catch (reason) {
        console.warn(reason)
    }
    return expenses
}
