import { Box, Container, Stack } from "@mui/material";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
/**REDUX */
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveFinishedOrders,
  retrieveProcessOrders,
} from "../../screens/OrdersPage/selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";

//REDUX SELECTOR
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

export function FinishedOrders(props: any) {
  /**INITIALIZATION */
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      <Stack justifyContent={"space-between"}>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order?.order_items?.map((item) => {
                  const product: Product = order?.product_data.filter(
                    (ele) => ele._id === item?.product_id
                  )[0];
                  // console.log("******", product);
                  const image_path = `${serverApi}/${product?.product_images[0].replace(
                    /\\/g,
                    "/"
                  )}`;
                  return (
                    <Box className="ordersName_price">
                      <Box className="img_title">
                        <img src={image_path} className="orderDishImg" />
                        <p className="titleDish">{product?.product_name}</p>
                      </Box>
                      <Box className="priceBox">
                        <p>${item?.item_price}</p>
                        <img
                          style={{ marginLeft: "15px" }}
                          src="/icons/Close.svg"
                        />
                        <p style={{ marginLeft: "15px" }}>
                          {item?.item_quantity}
                        </p>
                        <img
                          style={{ marginLeft: "15px" }}
                          src="/icons/Pause.svg"
                        />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.item_price * item.item_quantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="total_price_box finished ">
                <Box className="boxTotal finished">
                  <p>mahsulot narxi</p>
                  <p>
                    ${order?.order_total_amount - order?.order_delivery_cost}
                  </p>
                  <img src="/icons/Plus.svg" />
                  <p>yetkazish xizmati</p>
                  <p>${order?.order_delivery_cost}</p>
                  <img src="/icons/Pause.svg" />
                  <p>jami narxi</p>
                  <p>${order?.order_total_amount}</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
