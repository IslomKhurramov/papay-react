import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setBestRestaurants,
  setTopRestaurants,
} from "../../screens/Homepage/slice";
import { retrieveTopRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) => dispach(setBestRestaurants(data)),
});

export function Homepage() {
  //INITALIZATION
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurant()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantService
      .getRestaurant({ page: 1, limit: 4, order: "mb_point" })
      .then((data) => {
        setBestRestaurants(data);
        console.log("data::::", data);
      })
      .catch((err) => console.log(err));

    //slice: data => store
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
