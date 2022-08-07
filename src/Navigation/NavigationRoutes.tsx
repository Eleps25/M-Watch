import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../Screens/HomePage/index';
import DetailPage from '../Screens/DetailPage/index';

export type StackParams = {
    HomePage: undefined,
    DetailPage: [
        id: number,
        title: string,
        year: string,
        duration: string,
        genres: string[],
        director: string,
        actors: string,
        plot: string,
        posterUrl: string
    ]
}

const Stack = createNativeStackNavigator<StackParams>();

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