import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import CommentScreen from './screens/CommentScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Comment' component={CommentScreen} />
            <Stack.Screen
              name='Basket'
              component={BasketScreen}
              options={{presentation: 'modal', headerShown: false}}
            />
            {/* @NOTE another way to remove Screen header */}
            <Stack.Screen
              name='Preparing Order'
              component={PreparingOrderScreen}
              options={{headerShown: false, presentation: 'fullScreenModal'}}
            />
            <Stack.Screen
              name='Delivery'
              component={DeliveryScreen}
              options={{headerShown: false, presentation: 'fullScreenModal'}}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

