import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainNativeStackNavigator } from 'navigators';

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNativeStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
