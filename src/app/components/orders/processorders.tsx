import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Height } from "@mui/icons-material";
import { Order } from "../../../types/order";

import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";

/**REDUX */
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "../../screens/OrdersPage/selector";
import moment from "moment";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";

//REDUX SELECTOR
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

export default function ProcessOrders(props: any) {
  /**INITIALIZATION */
  const { processOrders } = useSelector(processOrdersRetriever);
  /** HANDLERS **/
  const finishOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "FINISHED" };

      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider(`Please login first`, true);
      }

      let confirmation = window.confirm(
        `Buyurtmani olganingizni tasdiqlaysizmi?`
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        //refresh builder
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log(`finishOrderHandler, ERROR::`, err);
      sweetErrorHandling(err).then();
    }
  };

  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");
  return (
    <TabPanel value={"2"}>
      <Stack justifyContent={"space-between"}>
        {processOrders?.map((order: Order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order?.order_items.map((item) => {
                  const product: Product = order?.product_data.filter(
                    (ele) => ele._id === item?.product_id
                  )[0];
                  console.log("*current*****", order);
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
                          {" "}
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

              <Box className="total_price_box process">
                <Box className="boxTotal process">
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
                  {moment(order.createdAt).format("YY-MM-DD HH:mm")}
                </Box>
                <Button
                  value={order._id}
                  onClick={finishOrderHandler}
                  variant="contained">
                  Yakunlash
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
