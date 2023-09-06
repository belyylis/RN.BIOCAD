import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Screens, Palette } from 'consts';
import { DetailScreen, MainScreen } from 'screens';

const STACK = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarColor: Palette.TRANSPARENT,
  navigationBarColor: Palette.TRANSPARENT,
};

const MainNativeStackNavigator: React.FC = () => {
  return (
    <STACK.Navigator
      screenOptions={screenOptions}
      initialRouteName={Screens.MainScreen}>
      <STACK.Screen name={Screens.MainScreen} component={MainScreen} />
      <STACK.Screen name={Screens.DetailScreen} component={DetailScreen} />
    </STACK.Navigator>
  );
};

export default MainNativeStackNavigator;
