import {View, Text} from "react-native";
import {Input} from "../UI/Input";
import {style} from "./ExpenseForm.styles";
import {useState} from "react";

export const ExpenseForm = () => {

    const [amountValue, setAmountValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')

    const amountChangeHandler = (value: string) => {
        setAmountValue(value)
    }

    const dateChangeHandler = (value: string) => {
        setDateValue(value)
    }

    const descriptionChangeHandler = (value: string) => {
        setDescriptionValue(value)
    }
    return (
        <View style={style.formStyle}>
            <Text style={style.title}>Your Expense</Text>
            <View style={style.inputsRow}>
                <Input
                    containerStyles={style.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountChangeHandler,
                        value: amountValue,
                    }}
                    label={'Amount'}
                />
                <Input
                    containerStyles={style.rowInput}
                    textInputConfig={{
                        placeholder: 'YYYY/MM/DD',
                        maxLength: 10,
                        onChangeText: dateChangeHandler,
                        value: dateValue,
                    }}
                    label={'Date'}
                />
            </View>
                <Input
                    textInputConfig={{
                        multiline: true,
                        onChangeText: descriptionChangeHandler,
                        value: descriptionValue,
                    }}
                    label={'Description'}
                />
        </View>
    )
}
