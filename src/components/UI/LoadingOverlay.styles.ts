import { StyleSheet } from 'react-native'
import {GlobalStyles} from "../../constants";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: GlobalStyles.spacing.xxl,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})
