import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/detailScreen';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DETAIL" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
