import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
/**REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveChosenProduct,
  retrieveChosenRestaurants,
  retrieveRandomRestaurants,
  retrieveTargetProducts,
  retrieveTargetRestaurants,
} from "./selector";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setChosenRestaurant } from "./slice";
import ProductApiService from "../../apiServices/productApiService";
import { Product } from "../../../types/product";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import MemberApiService from "../../apiServices/memberApiService";
/****************************************************************** */
//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenRestaurant: (data: Restaurant) => dispach(setChosenRestaurant(data)),
});
/*********************************************************************** */
//REDUX SELECTOR
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const chosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurants,
  (chosenRestaurant) => ({
    chosenRestaurant,
  })
);
const chosen_list = Array.from(Array(7).keys());

export function ChosenDish() {
  /**INITIALIZATION */
  let { dish_id } = useParams<{ dish_id: string }>();
  const { setChosenProduct, setChosenRestaurant } = actionDispatch(
    useDispatch()
  );
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const dishRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenDish(dish_id);
      setChosenProduct(product);

      const restaurantService = new RestaurantApiService();
      const restaurant = await restaurantService.getChosenRestaurant(
        product.restaurant_mb_id
      );
      setChosenRestaurant(restaurant);
    } catch (err) {
      console.log("dishRelatedProcess", err);
    }
  };

  useEffect(() => {
    dishRelatedProcess().then();
  }, [productRebuild]);

  //HANDLERS
  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "product",
      });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("ERROR:targetLikeProduct", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Box className="swiper_container">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
            {chosenProduct?.product_images.map((ele: string) => {
              const image_path = `${serverApi}/${ele}`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            // onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={20}
            slidesPerView={chosenProduct?.product_images.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="dish_swiper_2">
            {chosenProduct?.product_images.map((ele: string) => {
              const image_path = `${serverApi}/${ele}`;
              return (
                <SwiperSlide
                  style={{ height: "107px", width: "120px", display: "flex" }}>
                  <img className={"dish_img"} src={image_path} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        <Stack className="right_container">
          <Stack flexDirection={"column"} mt={"30px"} ml={"40px"}>
            <Box className="title">{chosenProduct?.product_name}</Box>
            <Box className="title_info" mt={"16px"}>
              {chosenRestaurant?.mb_nick}
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
                        id={chosenProduct?._id}
                        onClick={targetLikeProduct}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        /*@ts-ignore*/
                        checked={
                          chosenProduct?.me_liked &&
                          chosenProduct?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      />

                      <span>{chosenProduct?.product_likes} ta</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                      <span>{chosenProduct?.product_views} ta</span>
                    </div>
                  </div>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Stack mt={"20px"} ml={"40px"} mr={"40px"}>
            <Box className="dish_desc_info">
              {chosenProduct?.product_description
                ? chosenProduct?.product_description
                : "no description"}
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
            <span>${chosenProduct?.product_price}</span>
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
