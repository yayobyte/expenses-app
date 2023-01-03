import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ManageExpenses} from "./src/screens/ManageExpenses";
import {RecentExpenses} from "./src/screens/RecentExpenses";
import {AllExpenses} from "./src/screens/AllExpenses";

const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator screenOptions={{

        }}>
            <BottomTabs.Screen name={"RecentExpenses"} component={RecentExpenses}/>
            <BottomTabs.Screen name={"AllExpenses"} component={AllExpenses}/>
        </BottomTabs.Navigator>
    )
}

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'ExpensesOverview'} component={ExpensesOverview} options={{ headerShown: false }} />
                    <Stack.Screen name={'ManageExpenses'} component={ManageExpenses}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

