import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../Screens/HomePage/index';
import DetailPage from '../Screens/DetailPage/index';

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                />
                <Stack.Screen
                    name="DetailPage"
                    component={DetailPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoutes;