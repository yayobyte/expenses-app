import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ManageExpenses } from "./src/screens/ManageExpenses";
import { GlobalStyles } from "./src/constants";
import { EXPENSES_OVERVIEW_NAV, MANAGE_EXPENSES_NAV } from "./src/navigation/routes";
import { ExpensesContextProvider } from "./src/store/expenses.context";
import React, { Suspense } from 'react';
import { ExpensesOverview } from "./src/navigation/bottomTabsNavigator";
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locales/i18n';

const Stack = createStackNavigator()

export default function App() {
	return (
		<Suspense fallback={"Loading..."}>
			<I18nextProvider i18n={i18n}>
				<>
					<StatusBar style="dark"/>
					<ExpensesContextProvider>
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
									}}
								/>
							</Stack.Navigator>
						</NavigationContainer>
					</ExpensesContextProvider>
				</>
			</I18nextProvider>
		</Suspense>
	);
}
