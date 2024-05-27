import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

export type AuthStackRouteParams = {
    ['Login']: undefined
}

const Stack = createNativeStackNavigator<AuthStackRouteParams>();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}