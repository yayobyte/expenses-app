import {View, Text, TextInput, TextInputProps, ViewStyle} from "react-native";
import {style} from "./Input.styles";

type InputProps = {
    textInputConfig?: TextInputProps
    label: string
    containerStyles?: ViewStyle,
}

export const Input = ({ label, textInputConfig, containerStyles }: InputProps) => {
    return (
        <View style={[style.inputContainer, containerStyles]}>
            <Text style={style.label}>{label}</Text>
            <TextInput {...textInputConfig} style={[style.input, textInputConfig?.multiline && style.inputMultiline]} />
        </View>
    )
}
