// @flow

import 'react-native-gesture-handler';

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ColorPallete from '../screens/ColorPallete';
import Home from '../screens/Home';
import ColoredPane from '../screens/ColoredPane';

const RootStack = createStackNavigator();

const App = (): Node => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="Color Pallete"
          component={ColorPallete}
          options={({ route }) => ({
            title: route.params.paletteName,
            headerShown: true,
          })}
        />
        <RootStack.Screen
          name="Colored Pane"
          component={ColoredPane}
          options={({ route }) => ({
            title: `${route.params.colorName}`,
            headerShown: true,
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
