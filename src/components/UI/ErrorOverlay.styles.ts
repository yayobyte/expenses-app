import { StyleSheet } from 'react-native'
import {GlobalStyles} from "../../constants";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: GlobalStyles.spacing.xxl,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: GlobalStyles.spacing.m,
    },
    title: {
        fontSize: GlobalStyles.fontSize.h1,
        fontWeight: 'bold',
    },
    message: {
        marginBottom: GlobalStyles.spacing.xl,
        fontSize: GlobalStyles.fontSize.default,
    }
})
