import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import HomePageReducer from "./screens/Homepage/slice";
import reduxLogger from "redux-logger";
import RestaurantPageReducer from "./screens/RestaurantPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger), //bizzi malumotlarimizzi (console logdagi) storega qushib beradi

  reducer: {
    homePage: HomePageReducer,
    restaurantPage: RestaurantPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
