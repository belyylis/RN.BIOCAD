import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { Driver } from 'types/Driver';

const initialState: number = 1;

const driverReducer: Reducer<number, AnyAction> = (
  state: number = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case 'CHANGE': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default driverReducer;
