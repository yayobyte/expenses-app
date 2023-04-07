import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ManageExpenses} from "./src/screens/ManageExpenses";
import {GlobalStyles} from "./src/constants";
import {EXPENSES_OVERVIEW_NAV, MANAGE_EXPENSES_NAV} from "./src/navigation/routes";
import {ExpensesContextProvider} from "./src/store/expenses.context";
import React from 'react';
import { ExpensesOverview } from "./src/navigation/bottomTabsNavigator";

const Stack = createStackNavigator()

export default function App() {
    return (
        <>
            <StatusBar style="dark"/>
            <ExpensesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                        headerTintColor: 'white',
                    }}>
                        <Stack.Screen
                            name={EXPENSES_OVERVIEW_NAV}
                            component={ExpensesOverview}
                            options={{headerShown: false}}
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
    );
}

