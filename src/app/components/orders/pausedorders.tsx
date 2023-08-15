import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
/**REDUX */
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "../../screens/OrdersPage/selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";

//REDUX SELECTOR
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

export default function PausedOrders(props: any) {
  /**INITIALIZATION */
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  /** HANDLERS **/
  const deleteOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "DELETED" };

      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider(`Please login first`, true);
      }

      let confirmation = window.confirm(
        `Buyurtmani bekor qilishni hohlaysizmi?`
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        //refresh builder
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log(`deleteOrderHandler, ERROR::`, err);
      sweetErrorHandling(err).then();
    }
  };

  const processOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "PROCESS" };

      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider(`Please login first`, true);
      }

      let confirmation = window.confirm(
        `Buyurtmangizni to'lashni tasdiqlaysizmi?`
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        //refresh builder
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log(`processOrderHandler, ERROR::`, err);
      sweetErrorHandling(err).then();
    }
  };
  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");
  return (
    <TabPanel value={"1"}>
      <Stack justifyContent={"space-between"}>
        {pausedOrders?.map((order: Order) => {
          // console.log("order:::", order);
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order?.order_items.map((item) => {
                  // console.log("*****", order);
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
                          ${item?.item_price * item.item_quantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total_price_box jarayon ">
                <Box className="boxTotal jarayon">
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
                <Box mt={"5px"}>
                  <span>{currentDate} </span>
                  <span>{currentTime}</span>
                </Box>
                <Button
                  value={order._id}
                  onClick={deleteOrderHandler}
                  color="secondary"
                  variant="contained">
                  Bekor qilish
                </Button>
                <Button
                  value={order._id}
                  onClick={processOrderHandler}
                  variant="contained">
                  To'lash
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
