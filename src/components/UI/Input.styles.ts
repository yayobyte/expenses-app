import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const style = StyleSheet.create({
    inputContainer: {
        marginHorizontal: GlobalStyles.spacing.s,
        marginVertical: GlobalStyles.spacing.m,
    },
    label: {
        fontSize: GlobalStyles.fontSize.small,
        color: GlobalStyles.colors.primary100,
        marginBottom: GlobalStyles.spacing.s,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: GlobalStyles.spacing.m,
        borderRadius: GlobalStyles.borderRadius.m,
        fontSize: GlobalStyles.fontSize.h3,
        color: GlobalStyles.colors.primary700,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})
