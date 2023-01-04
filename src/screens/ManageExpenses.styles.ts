import {StyleSheet} from "react-native";
import {GlobalStyles} from "../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: GlobalStyles.spacing.xxl,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: GlobalStyles.spacing.xl,
        paddingTop: GlobalStyles.spacing.m,
        borderTopWidth: GlobalStyles.spacing.xs,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        ...GlobalStyles.buttonSize,
    }
})
