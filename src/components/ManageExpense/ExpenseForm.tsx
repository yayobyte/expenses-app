import {View, Text} from "react-native";
import {Input} from "../UI/Input";
import {styles} from "./ExpenseForm.styles";
import {useEffect, useState} from "react";
import {Button} from "../UI/Button";
import {Expense} from "../../constants";
import uuid from "react-uuid";

type ExpenseFormProps = {
    onCancel: () => void
    onSubmit: (expenseData: Expense) => void
    submitLabel: string
    defaultValues?: Expense
}

export const ExpenseForm = ({ onCancel, onSubmit, submitLabel, defaultValues }: ExpenseFormProps) => {

    const [amountValue, setAmountValue] = useState(defaultValues?.amount.toString() || '')
    const [dateValue, setDateValue] = useState(defaultValues?.date.toLocaleDateString() || '')
    const [descriptionValue, setDescriptionValue] = useState(defaultValues?.description || '')
    const [isFormValid, setFormIsValid] = useState(true)

    const isValidAmount = !isNaN(+amountValue) && +amountValue > 0
    const isValidDate = new Date(dateValue).toLocaleDateString() !== 'Invalid Date' && new Date(dateValue).toLocaleDateString().length === 10
    const isValidDescription = descriptionValue.trim().length > 0

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
        if(isValidAmount && isValidDate && isValidDescription) {
            const expenseData: Expense = {
                amount: +amountValue,
                date: new Date(dateValue.slice(0,10)),
                description: descriptionValue,
                id: uuid(),
            }
            onSubmit(expenseData)
            return
        }
        setFormIsValid(false)
    }

    useEffect(() => {
        setFormIsValid(true)
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
                    isValid={isValidAmount}
                />
                <Input
                    containerStyles={styles.rowInput}
                    textInputConfig={{
                        placeholder: 'DD/MM/YYYY',
                        maxLength: 10,
                        onChangeText: dateChangeHandler,
                        value: dateValue,
                    }}
                    label={'Date'}
                    isValid={isValidDate}
                />
            </View>
            <Input
                textInputConfig={{
                    multiline: true,
                    onChangeText: descriptionChangeHandler,
                    value: descriptionValue,
                }}
                label={'Description'}
                isValid={isValidDescription}
            />
            {!isFormValid && <Text style={styles.errorText}>Invalid Input Values, please check entered data</Text>}
            <View style={styles.buttonContainer}>
                <Button onPress={onCancel} mode={'flat'} style={styles.button}>Cancel</Button>
                <Button onPress={submitHandler} style={styles.button}>{submitLabel}</Button>
            </View>
        </View>
    )
}
