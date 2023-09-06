import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import useSWR from 'swr/immutable';

import { Endpoint, Palette } from 'consts';
import { BasicButton, DriverItem } from 'components';
import { fetcher } from 'helpers';

import { Driver } from 'types/Driver';

import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE } from 'store/actions/page';
import { State } from 'types/State';

const MainScreen: React.FC = () => {
  const currentPage = useSelector((state: State) => state.page);
  const { data, isLoading, mutate } = useSWR<Driver[]>(
    Endpoint.GET_PAGE_DRIVERS(currentPage),
    fetcher,
  );

  const dispatch = useDispatch();

  const visitedDrivers: string[] = useSelector(
    (state: { visited: string[]; drivers: Driver[] }) => state?.visited,
  );

  const handleChangeDriver = useCallback((driver: Driver) => {
    if (data) {
      const index = (data as Array<Driver>).findIndex(
        item => item.driverId === driver.driverId,
      );
      mutate(([...data][index] = driver));
    }
  }, []);

  const goToPrevPage = () => {
    dispatch(CHANGE(currentPage - 1));
  };
  const goToNextPage = () => {
    dispatch(CHANGE(currentPage + 1));
  };

  const onRefresh = () => {
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Drivers</Text>
      </View>
      {isLoading ? (
        <View style={styles.indicatorWrapper}>
          <ActivityIndicator size={48} color={Palette.GREEN} />
        </View>
      ) : (
        <View style={styles.flatlistWrapper}>
          <FlatList
            contentContainerStyle={styles.flatlistContent}
            data={data}
            renderItem={({ item }) => (
              <DriverItem
                key={item.driverId}
                driver={item}
                visited={visitedDrivers.includes(item.driverId)}
              />
            )}
          />
        </View>
      )}

      <View style={styles.buttonWrapper}>
        <BasicButton
          text="Prev"
          onPress={goToPrevPage}
          isDisabled={currentPage === 1}
        />
        <Text style={styles.counter}>{currentPage} from 10</Text>
        <BasicButton
          text="Next"
          onPress={goToNextPage}
          isDisabled={currentPage === 10}
        />
      </View>
    </View>
  );
};

export default MainScreen;
