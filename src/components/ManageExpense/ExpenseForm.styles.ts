import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const styles = StyleSheet.create({
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    formStyle: {
        marginTop: GlobalStyles.spacing.xxl + GlobalStyles.spacing.xxl,
    },
    title: {
        fontSize: GlobalStyles.fontSize.h1,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: GlobalStyles.spacing.xxl,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: GlobalStyles.spacing.l,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        ...GlobalStyles.buttonSize,
    }
})
