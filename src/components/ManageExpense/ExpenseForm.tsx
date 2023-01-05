import {View} from "react-native";
import {Input} from "../UI/Input";

export const ExpenseForm = () => {

    const amountChangeHandler = () => {

    }
    return (
        <View>
            <Input
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler
                }}
                label={'Amount'}
            />
            <Input
                textInputConfig={{
                    placeholder: 'YYYY/MM/DD',
                    maxLength: 10,
                }}
                label={'Date'}
            />
            <Input
                textInputConfig={{
                    multiline: true,

                }}
                label={'Description'}
            />
        </View>
    )
}
