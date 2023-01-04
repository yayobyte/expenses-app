import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const styles = StyleSheet.create({
    button: {
        borderRadius: GlobalStyles.borderRadius.m,
        padding: GlobalStyles.spacing.m,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: GlobalStyles.borderRadius.m,
    }
})
