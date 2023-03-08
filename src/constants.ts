export const GlobalStyles = {
    colors: {
        primary50: '#e9eaf0',
        primary100: '#bec2d2',
        primary200: '#a8adc3',
        primary400: '#7d85a5',
        primary500: '#677096',
        primary700: '#3c4878',
        primary800: '#273469',
        accent500: '#E1D677',
        error50: '#EEA1CD',
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
    iconSize: {
        m: 24,
        l: 36,
        xl: 48,
    },
    buttonSize: {
        minWidth: 120,
        marginHorizontal: 8
    }
};

export type Expense = {
    id: string,
    description: string,
    amount: number,
    date: Date,
}

