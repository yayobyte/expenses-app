import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ManageExpenses} from "./src/screens/ManageExpenses";
import {RecentExpenses} from "./src/screens/RecentExpenses";
import {AllExpenses} from "./src/screens/AllExpenses";
import {GlobalStyles} from "./src/constants";
import {Ionicons} from '@expo/vector-icons'
import {IconButton} from "./src/components/UI/IconButton";
import {EXPENSES_OVERVIEW_NAV, MANAGE_EXPENSES_NAV} from "./src/navigation/routes";
import {ExpensesContextProvider} from "./src/store/expenses.context";
import React from 'react';

const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpensesOverview = () => {
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
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={'time'} size={size} color={color}/>
                    )
                }}
            />
            <BottomTabs.Screen
                name={"AllExpenses"}
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All Expenses',
                    tabBarIcon: ({color, size}) => <Ionicons name={'calendar'} size={size} color={color}/>
                }}
            />
        </BottomTabs.Navigator>
    )
}

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

