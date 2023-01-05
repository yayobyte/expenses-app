import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: GlobalStyles.spacing.xxl,
        paddingBottom: 0,
        paddingHorizontal: GlobalStyles.spacing.xxl,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: 'white',
        fontSize: GlobalStyles.fontSize.h3,
        textAlign: 'center',
        marginTop: GlobalStyles.spacing.xxl,
    }
})
