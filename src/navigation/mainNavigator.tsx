import { GlobalStyles } from "../constants";
import { EXPENSES_OVERVIEW_NAV, MANAGE_EXPENSES_NAV } from "./routes";
import { ExpensesOverview } from "./bottomTabsNavigator";
import { ManageExpenses } from "../screens/ManageExpenses";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

const Stack = createStackNavigator()

export const MainNavigator = () => {
	const { t } = useTranslation()
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				headerTintColor: 'white',
			}}>
				<Stack.Screen
					name={EXPENSES_OVERVIEW_NAV}
					component={ExpensesOverview}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={MANAGE_EXPENSES_NAV}
					component={ManageExpenses}
					options={{
						presentation: 'modal',
						headerBackTitle: t('BACK') || '',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
