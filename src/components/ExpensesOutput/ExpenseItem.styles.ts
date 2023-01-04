import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const styles = StyleSheet.create({
    item: {
        padding: GlobalStyles.spacing.l,
        marginVertical: GlobalStyles.spacing.m,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: GlobalStyles.borderRadius.m,
        elevation: GlobalStyles.spacing.m,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: GlobalStyles.fontSize.default,
        marginBottom: GlobalStyles.spacing.s,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: GlobalStyles.spacing.l,
        paddingVertical: GlobalStyles.spacing.s,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: GlobalStyles.borderRadius.s,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    }
})
