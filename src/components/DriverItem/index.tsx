import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Driver } from 'types/Driver';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Palette } from 'consts';

type Props = {
  driver: Driver;
  visited: boolean;
};

type RootStackParamList = {
  DetailScreen: { driver: Driver };
};

const DriverItem: React.FC<Props> = ({ driver, visited }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateToDetail = () => {
    navigation.navigate('DetailScreen', {
      driver,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetail}>
      <Text
        style={[
          styles.text,
          { color: visited ? Palette.BLUE : Palette.GREEN },
        ]}>
        {driver.givenName} {driver.familyName}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(DriverItem);
