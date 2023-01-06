import {View, Text} from "react-native";
import {Input} from "../UI/Input";
import {styles} from "./ExpenseForm.styles";
import {useEffect, useState} from "react";
import {Button} from "../UI/Button";
import {Expense} from "../../constants";

type ExpenseFormProps = {
    onCancel: () => void
    onSubmit: (expenseData: Expense) => void
    submitLabel: string
    defaultValues?: Expense
}

type Error = {
    amount?: boolean
    date?: boolean
    description?: boolean
}

export const ExpenseForm = ({ onCancel, onSubmit, submitLabel, defaultValues }: ExpenseFormProps) => {

    const [amountValue, setAmountValue] = useState(defaultValues?.amount.toString() || '')
    const [dateValue, setDateValue] = useState(defaultValues?.date.toLocaleDateString() || '')
    const [descriptionValue, setDescriptionValue] = useState(defaultValues?.description || '')
    const [error, setError] = useState<Error>({})

    const isFormValid = Object.keys(error).length === 0

    const amountChangeHandler = (value: string) => {
        setAmountValue(value)
    }

    const dateChangeHandler = (value: string) => {
        setDateValue(value)
    }

    const descriptionChangeHandler = (value: string) => {
        setDescriptionValue(value)
    }

    const submitHandler = () => {
        const isValidAmount = !isNaN(+amountValue) && +amountValue > 0
        const isValidDate = new Date(dateValue).toLocaleDateString() !== 'Invalid Date' && dateValue.length === 10
        const isValidDescription = descriptionValue.trim().length > 0

        if(isValidAmount && isValidDate && isValidDescription) {
            const expenseData: Expense = {
                amount: +amountValue,
                date: new Date(dateValue.slice(0,10)),
                description: descriptionValue,
                id: '',
            }
            setError({})
            onSubmit(expenseData)
            return
        }
        setError({
            ...!isValidAmount && { amount: true },
            ...!isValidDate && { date: true },
            ...!isValidDescription && { description: true },

        })
    }

    useEffect(() => {
        setError({})
    }, [amountValue, dateValue, descriptionValue])

    return (
        <View style={styles.formStyle}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    containerStyles={styles.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountChangeHandler,
                        value: amountValue,
                    }}
                    label={'Amount'}
                    isValid={!error.amount}
                />
                <Input
                    containerStyles={styles.rowInput}
                    textInputConfig={{
                        placeholder: 'MM/DD/YYYY',
                        maxLength: 10,
                        onChangeText: dateChangeHandler,
                        value: dateValue,
                    }}
                    label={'Date'}
                    isValid={!error.date}
                />
            </View>
            <Input
                textInputConfig={{
                    multiline: true,
                    onChangeText: descriptionChangeHandler,
                    value: descriptionValue,
                }}
                label={'Description'}
                isValid={!error.description}
            />
            {!isFormValid && <Text style={styles.errorText}>Invalid Input Values, please check entered data</Text>}
            <View style={styles.buttonContainer}>
                <Button onPress={onCancel} mode={'flat'} style={styles.button}>Cancel</Button>
                <Button onPress={submitHandler} style={styles.button}>{submitLabel}</Button>
            </View>
        </View>
    )
}
