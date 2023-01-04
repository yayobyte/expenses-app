import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const style = StyleSheet.create({
    buttonContainer: {
        borderRadius: GlobalStyles.borderRadius.m,
        padding: GlobalStyles.spacing.s,
        marginHorizontal: GlobalStyles.spacing.m,
        marginVertical: GlobalStyles.spacing.xs,
    },
    pressed: {
        opacity: 0.75,
    }
})
