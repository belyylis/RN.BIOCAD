import { Driver } from 'types/Driver';

export default (page: number) => ({
  type: 'CHANGE',
  payload: page,
});
