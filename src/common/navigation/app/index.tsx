import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export type AppStackRouteParams = {
    ['Home']: undefined
    ['Details']: undefined
}

const MainAppStack = createNativeStackNavigator<AppStackRouteParams>();

export const AppStack = () => {
    return (
        <MainAppStack.Navigator initialRouteName="Home">
            <MainAppStack.Screen name="Home" component={HomeScreen} />
            <MainAppStack.Screen name="Details" component={DetailsScreen} />
        </MainAppStack.Navigator>
    )
}