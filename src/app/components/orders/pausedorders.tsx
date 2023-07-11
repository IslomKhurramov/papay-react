import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  const currentDate = moment().format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");
  return (
    <TabPanel value={"2"}>
      <Stack justifyContent={"space-between"}>
        {pausedOrders?.map((order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order.map((item) => {
                  const image_path = "/others/ovqat1.png";
                  return (
                    <Box className="ordersName_price">
                      <Box className="img_title">
                        <img src={image_path} className="orderDishImg" />
                        <p className="titleDish">Qovurma</p>
                      </Box>
                      <Box className="priceBox">
                        <p>$12</p>
                        <img
                          style={{ marginLeft: "15px" }}
                          src="/icons/Close.svg"
                        />
                        <p style={{ marginLeft: "15px" }}>2</p>
                        <img
                          style={{ marginLeft: "15px" }}
                          src="/icons/Pause.svg"
                        />
                        <p style={{ marginLeft: "15px" }}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total_price_box jarayon ">
                <Box className="boxTotal jarayon">
                  <p>mahsulot narxi</p>
                  <p>$22</p>
                  <img src="/icons/Plus.svg" />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img src="/icons/Pause.svg" />
                  <p>jami narxi</p>
                  <p>$24</p>
                </Box>
                <Box mt={"5px"}>
                  <span>{currentDate} </span>
                  <span>{currentTime}</span>
                </Box>
                <Button variant="contained">Yakunlash</Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
