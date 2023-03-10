import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const styles = StyleSheet.create({
    container: {
        padding: GlobalStyles.spacing.m,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: GlobalStyles.borderRadius.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: GlobalStyles.spacing.xl,
    },
    period: {
        fontSize: GlobalStyles.fontSize.default,
        color: GlobalStyles.colors.primary700,
    },
    sum: {
        fontSize: GlobalStyles.fontSize.h3,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary700,
    }
})
