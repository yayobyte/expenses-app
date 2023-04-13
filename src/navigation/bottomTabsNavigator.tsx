import { GlobalStyles } from "../constants";
import { IconButton } from "../components/UI/IconButton";
import { MANAGE_EXPENSES_NAV } from "./routes";
import { RecentExpenses } from "../screens/RecentExpenses";
import { Ionicons } from "@expo/vector-icons";
import { AllExpenses } from "../screens/AllExpenses";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";

const BottomTabs = createBottomTabNavigator()

export const ExpensesOverview = () => {
	const { t } = useTranslation()
	return (
		<BottomTabs.Navigator screenOptions={({navigation}) => ({
			headerStyle: {
				backgroundColor: GlobalStyles.colors.primary500,
			},
			headerTintColor: 'white',
			tabBarStyle: {backgroundColor: GlobalStyles.colors.primary800},
			tabBarActiveTintColor: GlobalStyles.colors.accent500,
			headerRight: ({tintColor}) => (<
					IconButton icon={'add'} size={GlobalStyles.iconSize.m} color={tintColor}
					           onPress={() => navigation.navigate(MANAGE_EXPENSES_NAV)}/>
			),
		})}>
			<BottomTabs.Screen
				name={"RecentExpenses"}
				component={RecentExpenses}
				options={{
					title: t('RECENT_EXPENSES') || '',
					tabBarLabel: t('RECENT') || '',
					tabBarIcon: ({color, size}) => (
						<Ionicons name={'time'} size={size} color={color}/>
					)
				}}
			/>
			<BottomTabs.Screen
				name={"AllExpenses"}
				component={AllExpenses}
				options={{
					title: t('ALL_EXPENSES') || '',
					tabBarLabel: t('ALL_EXPENSES') || '',
					tabBarIcon: ({color, size}) => <Ionicons name={'calendar'} size={size} color={color}/>
				}}
			/>
		</BottomTabs.Navigator>
	)
}
