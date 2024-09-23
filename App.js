import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AuthenticatedScreen from './screens/AuthenticatedScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Màn hình đăng nhập */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login', headerShown: false }}
          />

          {/* Màn hình đăng ký */}
          <Stack.Screen
            name="SignupScreen" // Đổi tên để khớp với LoginScreen.js
            component={SignupScreen}
            options={{ title: 'Sign Up' , headerShown: false }}
          />

          <Stack.Screen
            name="ForgotPasswordScreen" // Đổi tên để khớp với LoginScreen.js
            component={ForgotPasswordScreen}
            options={{ title: 'Forgot Password', headerShown: false  }}
          />


          {/* Màn hình sau khi đăng nhập thành công */}
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedScreen}
            options={{ headerShown: false  }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
