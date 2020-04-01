import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Router from './src/navigation/router';

const Stack = createStackNavigator();

function App() {
  return <Router />;
}

export default App;
