export const GlobalStyles = {
    colors: {
        primary50: '#e4d9fd',
        primary100: '#c6affc',
        primary200: '#a281f0',
        primary400: '#5721d4',
        primary500: '#3e04c3',
        primary700: '#2d0689',
        primary800: '#200364',
        accent500: '#f7bc0c',
        error50: '#fcc4e4',
        error500: '#9b095c',
        gray500: '#39324a',
        gray700: '#221c30',
    },
    spacing: {
        xs: 2,
        s: 4,
        m: 8,
        l: 12,
        xl: 16,
        xxl: 24,
    },
    borderRadius: {
        s: 4,
        m: 6,
        l: 8,
    },
    fontSize: {
        default: 14,
        small: 12,
        h3: 18,
        h2: 20,
        h1: 24,
    },
};

export type Expense = {
    id: string,
    description: string,
    amount: number,
    date: Date,
}

export const DUMMY_EXPENSES: Array<Expense> = [
    {
        id: 'e1',
        description: 'Pair of shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'Gloves',
        amount: 69.99,
        date: new Date('2023-01-22')
    },
    {
        id: 'e3',
        description: 'Boots',
        amount: 109.99,
        date: new Date('2022-12-24')
    },
    {
        id: 'e4',
        description: 'Shirt',
        amount: 29.99,
        date: new Date('2022-11-11')
    },
    {
        id: 'e5',
        description: 'Book',
        amount: 29.99,
        date: new Date('2022-10-05')
    },
]
