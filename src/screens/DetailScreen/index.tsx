import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Driver } from 'types/Driver';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { Endpoint } from 'consts';
import { fetcher } from 'helpers';
import { BasicButton, BasicInput } from 'components';
import useSWR from 'swr/immutable';
import { ADD } from 'store/actions/visited';
import { State } from 'types/State';

type Props = {
  route: {
    params: {
      driver: Driver;
    };
  };
};

const DetailScreen: React.FC<Props> = ({ route }) => {
  const currentPage = useSelector((state: State) => state.page);
  const [editable, setIditable] = useState<boolean>(false);
  const { driver } = route.params;
  const [form, setForm] = useState<Driver>(driver);

  const DISPATCH = useDispatch();
  useEffect(() => {
    DISPATCH(ADD(driver.driverId));
  }, []);

  const { data, mutate } = useSWR<Driver[]>(
    Endpoint.GET_PAGE_DRIVERS(currentPage),
    fetcher,
  );

  const updateDriver = async (driverId: string) => {
    return fetcher(Endpoint.PUT_DRIVER(driverId), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  };

  const handleEditOrCanselDriver = () => {
    if (editable) {
      setForm(driver);
      setIditable(!editable);
    } else {
      setIditable(!editable);
    }
  };

  const handleSaveDriver = useCallback(async () => {
    const response = await updateDriver(driver.driverId);
    if (response.status === 'success') {
      if (data) {
        const index = (data as Array<Driver>).findIndex(
          item => item.driverId === driver.driverId,
        );
        let changedArray = [...data];
        changedArray[index] = { ...form };
        mutate(changedArray, { revalidate: false });
        setIditable(false);
        Alert.alert('Success', response.message);
      }
    } else {
      Alert.alert('Fail', response.message);
      setForm(driver);
      setIditable(false);
    }
  }, [driver.driverId, form]);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Detail</Text>
      </View>
      <View style={styles.content}>
        {Object.keys(form).map(
          item =>
            item !== '_id' &&
            item !== 'driverId' && (
              <BasicInput
                key={item}
                initialValue={form[item]}
                editable={editable}
                name={item}
                setForm={setForm}
              />
            ),
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <BasicButton
          text={editable ? 'Cancel' : 'Edit'}
          onPress={handleEditOrCanselDriver}
        />
        <BasicButton text={'Save'} onPress={handleSaveDriver} />
      </View>
    </View>
  );
};

export default DetailScreen;
