import {View, Text, TextInput, TextInputProps} from "react-native";
import {style} from "./Input.styles";

type InputProps = {
    textInputConfig?: TextInputProps
    label: string
}

export const Input = ({ label, textInputConfig }: InputProps) => {
    return (
        <View style={style.inputContainer}>
            <Text style={style.label}>{label}</Text>
            <TextInput {...textInputConfig} style={[style.input, textInputConfig?.multiline && style.inputMultiline]} />
        </View>
    )
}
