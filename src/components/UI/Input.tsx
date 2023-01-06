import {View, Text, TextInput, TextInputProps, ViewStyle} from "react-native";
import {style} from "./Input.styles";

type InputProps = {
    textInputConfig?: TextInputProps
    label: string
    containerStyles?: ViewStyle,
    isValid?: boolean
}

export const Input = ({ label, textInputConfig, containerStyles, isValid = true }: InputProps) => {
    return (
        <View style={[style.inputContainer, containerStyles]}>
            <Text style={[style.label, !isValid && style.invalidLabel]}>{label}</Text>
            <TextInput
                {...textInputConfig}
                style={[style.input, textInputConfig?.multiline && style.inputMultiline, !isValid && style.invalidInput]}
            />
        </View>
    )
}
