const HOST = 'http://localhost:3000';

const GET_PAGE_DRIVERS = (page: number) => HOST + `/drivers?page=${page}`;
const PUT_DRIVER = (driverId: string) => HOST + `/drivers/${driverId}`;

export default {
  GET_PAGE_DRIVERS,
  PUT_DRIVER,
};
