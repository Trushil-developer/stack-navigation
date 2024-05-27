import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppStackRouteParams } from './app';
import { AuthStackRouteParams } from './auth';

export type RootStackParamList = {
  app: NavigatorScreenParams<AppStackRouteParams>
  auth: NavigatorScreenParams<AuthStackRouteParams>;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const isSignIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          isSignIn ? (
            <Stack.Screen name="app" getComponent={() => require('./app').AppStack} />
          ) :
            (
              <Stack.Screen name="auth" getComponent={() => require('./auth').AuthStack} />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
} 