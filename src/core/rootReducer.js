import dummyComponentReducer, { dummyComponentSlice } from '../features/dummyComponent/dummyComponent.slice';

export const rootReducer = {
  [dummyComponentSlice.name]: dummyComponentReducer,
};

export default rootReducer;
