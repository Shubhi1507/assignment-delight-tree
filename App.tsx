import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from './src/navigation/route.constant';
import WelcomeScreen from './src/screens/welcomescreen';
import DetailScreen from './src/screens/DetailScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.WELCOMESCREEN}>
        <Stack.Screen
          name={ROUTES.WELCOMESCREEN}
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.DETAILSCREEN}
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
