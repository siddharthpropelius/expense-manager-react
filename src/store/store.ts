import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ExpenseSlice from './slice/Slice'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  expense: ExpenseSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;