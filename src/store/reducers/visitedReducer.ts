import { AnyAction, Reducer } from '@reduxjs/toolkit';

const initialState: string[] = [];

const visitedReducer: Reducer<string[], AnyAction> = (
  state: string[] = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case 'ADD': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default visitedReducer;
