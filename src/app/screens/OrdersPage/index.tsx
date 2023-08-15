import { Container, Stack, Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import { LocationOn } from "@mui/icons-material";
import TabContext from "@mui/lab/TabContext";

import { TabList } from "@mui/lab";
import Marginer from "../../components/marginer";
/**REDUX */
import { useDispatch } from "react-redux";

import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order } from "../../../types/order";
import OrderApiService from "../../apiServices/orderApiService";
import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import { Member } from "../../../types/user";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
});
export function OrdersPage(props: any) {
  const [value, setValue] = useState("1");
  /**INITIALIZATION */
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const verifiedMemberData: Member | null = props.verifiedMemberData;

  useEffect(() => {
    const orderApiService = new OrderApiService();
    orderApiService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderApiService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderApiService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [props.orderRebuild]);

  /**HANDLERS */
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="order_left">
          <TabContext value={value}>
            <Box className="order_new_frame">
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  marginBottom: "20px",
                }}>
                <TabList
                  onChange={handleChange}
                  value={value}
                  // aria-label="basic tabs example"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "50px",
                    marginRight: "50px",
                  }}>
                  <Tab label="Buyurtmalar" value={"1"}></Tab>
                  <Tab label="Jarayon" value={"2"}></Tab>
                  <Tab label="Yakunlangan" value={"3"}></Tab>
                </TabList>
              </Box>
            </Box>
            <Marginer direction="vertical" height="1" width="1" bg="white" />

            <Stack className="order_main_content">
              <PausedOrders setOrderRebuild={props?.setOrderRebuild} />
              <ProcessOrders setOrderRebuild={props?.setOrderRebuild} />
              <FinishedOrders setOrderRebuild={props?.setOrderRebuild} />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order_right">
          <Stack className="user_box">
            <img
              src={props.verifiedMemberData?.mb_image?.replace(/\\/g, "/")}
              className="user_img"
            />

            <Box className="user_name">{props.verifiedMemberData?.mb_nick}</Box>
            <Box className="who">
              {props.verifiedMemberData?.mb_type ?? "Foydalanuvchi"}
            </Box>
            <Marginer
              direction="vertical"
              height="1"
              width="120"
              bg="#A1A1A1"
            />
            <Box className="location_user">
              <span>
                {" "}
                <img src="/icons/location.png" alt="" />
              </span>
              {verifiedMemberData?.mb_address ?? "Manzil kiritilmagan"}
            </Box>
          </Stack>

          <Stack className="payment">
            <Box>
              <input
                type="number"
                className="input_number"
                placeholder="Contact Number:"
              />
            </Box>
            <Stack
              flexDirection={"row"}
              width={"325px"}
              mt={"10px"}
              ml={"20px"}>
              <input className="input_date" type="number" placeholder="07/24" />
              <input
                className="input_cvv"
                type="number"
                placeholder="CVV:010"
              />
            </Stack>
            <Box>
              {" "}
              <input
                type="number"
                className="input_number"
                placeholder="Ismoilov Akmaljon"
              />
            </Box>
            <Stack flexDirection={"row"} className="cards">
              <img src="/icons/Shape 329.svg" />
              <img src="/icons/Paypal.svg" />
              <img src="/icons/Shape 327.png" />
              <img src="/icons/Western-union.svg" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      ;
    </div>
  );
}
