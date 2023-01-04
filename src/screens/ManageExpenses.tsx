import { View } from 'react-native'
import {NavigationProp, ParamListBase, RouteProp} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {IconButton} from "../components/UI/IconButton";
import {GlobalStyles} from "../constants";
import {styles} from "./ManageExpenses.styles";

type ScreenNavigatorProps = {
    route: RouteProp<{ params: Readonly<Record<string, string>> }>
    navigation: NavigationProp<ParamListBase>
}

export const ManageExpenses = ({ route, navigation }: ScreenNavigatorProps) => {
    const id = route.params?.expenseId
    const isEditing = !!id

    const deleteExpenseHandler = () => {

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    return (
        <View style={styles.container}>{isEditing && (
            <View style={styles.deleteContainer}>
                <IconButton
                    size={GlobalStyles.iconSize.l}
                    color={GlobalStyles.colors.error500}
                    onPress={deleteExpenseHandler}
                    icon={'trash'}
                />
            </View>)
        }</View>
    )
}
