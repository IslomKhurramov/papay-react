import { createSelector } from "@reduxjs/toolkit";
import { AppRooteState } from "../../../types/screen";
import { OrdersPage } from ".";

const selectOrdersPage = (state: AppRooteState) => state.ordersPage;
export const retrievePausedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders
);
export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders
);
