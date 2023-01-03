import uuid from 'react-uuid'
import {Expense} from "./constants";

export const DUMMY_EXPENSES: Array<Expense> = [
    {
        id: uuid(),
        description: 'Pair of shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: uuid(),
        description: 'Gloves',
        amount: 69.99,
        date: new Date('2023-01-22')
    },
    {
        id: uuid(),
        description: 'Boots',
        amount: 109.99,
        date: new Date('2022-12-24')
    },
    {
        id: uuid(),
        description: 'Shirt',
        amount: 29.99,
        date: new Date('2022-11-11')
    },
    {
        id: uuid(),
        description: 'Book',
        amount: 29.99,
        date: new Date('2022-10-05')
    },
    {
        id: uuid(),
        description: 'Membership',
        amount: 19.99,
        date: new Date('2022-10-05')
    },
    {
        id: uuid(),
        description: 'Netflix',
        amount: 49.99,
        date: new Date('2022-10-05')
    },
    {
        id: uuid(),
        description: 'Groceries',
        amount: 99.99,
        date: new Date('2022-10-05')
    },
    {
        id: uuid(),
        description: 'Data Cable',
        amount: 9.99,
        date: new Date('2022-10-05')
    },
]
