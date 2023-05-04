import { StatusBar } from 'expo-status-bar';
import { ExpensesContextProvider } from "./src/store/expenses.context";
import { Text } from 'react-native'
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locales/i18n';
import { MainNavigator } from "./src/navigation/mainNavigator";



export default function App() {
	return (
		<Suspense fallback={<Text>Loading...</Text>}>
			<I18nextProvider i18n={i18n}>
				<>
					<StatusBar style="dark"/>
					<ExpensesContextProvider>
						<MainNavigator />
					</ExpensesContextProvider>
				</>
			</I18nextProvider>
		</Suspense>
	);
}
