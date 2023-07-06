import React, { useState } from "react";
import {
  Favorite,
  FavoriteBorder,
  Height,
  RemoveRedEye,
} from "@mui/icons-material";
import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Marginer from "../../components/marginer";

const chosen_list = Array.from(Array(7).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Box className="swiper_container">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
            {chosen_list.map((ele, order) => {
              return (
                <SwiperSlide>
                  <img src="/others/ovqat1.png" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            // onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="dish_swiper_2">
            {chosen_list.map((ele) => {
              const image_path = `/others/ovqat1.png`;
              return (
                <SwiperSlide>
                  <img className={"dish_img"} src={image_path} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        <Stack className="right_container">
          <Stack flexDirection={"column"} mt={"30px"} ml={"40px"}>
            <Box className="title">Qovurilgan Go'sht</Box>
            <Box className="title_info" mt={"16px"}>
              Texas De Brazil
            </Box>
          </Stack>

          <Stack mt={"20px"} ml={"40px"} mr={"40px"}>
            <Box className="stars">
              <Stack
                spacing={1}
                flexDirection={"row"}
                justifyContent={"space-between"}>
                <Box>
                  <Rating
                    name="half-rating"
                    defaultValue={3.5}
                    precision={0.5}
                    style={{ width: "24px", height: "24px" }}
                  />
                </Box>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  ml={"230px"}>
                  <div className={"evaluation_box"}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}>
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        /*@ts-ignore*/
                        checked={true}
                      />

                      <span>98 ta</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                      <span>1000 ta</span>
                    </div>
                  </div>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Stack mt={"20px"} ml={"40px"} mr={"40px"}>
            <Box className="dish_desc_info">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </Box>
            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
          </Stack>
          <div className={"dish_price_box"}>
            <span>Narxi:</span>
            <span>$11</span>
          </div>
          <div className={"button_box"}>
            <Button
              variant="contained"
              style={{
                width: "230px",
                height: "44px",
                borderRadius: "4px",
                fontSize: "15px",
              }}>
              Savatga qo'shish
            </Button>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
