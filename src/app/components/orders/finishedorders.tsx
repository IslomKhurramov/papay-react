import { Box, Container, Stack } from "@mui/material";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";

const finishedOrders = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
      <Stack justifyContent={"space-between"}>
        {finishedOrders?.map((order) => {
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
              <Box className="total_price_box finished ">
                <Box className="boxTotal finished">
                  <p>mahsulot narxi</p>
                  <p>$22</p>
                  <img src="/icons/Plus.svg" />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img src="/icons/Pause.svg" />
                  <p>jami narxi</p>
                  <p>$24</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
