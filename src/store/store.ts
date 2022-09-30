import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {developersAPI} from '../service/developersAPI';

const rootReducer = combineReducers({
	[developersAPI.reducerPath]: developersAPI.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
		developersAPI.middleware
	)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch