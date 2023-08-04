import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";
import { BestRestaurants } from "./bestRestaurants";

const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trendBoArticle: [],
  newsBoArticles: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    bestRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    trendProducts: (state, action) => {
      state.topRestaurants = action.payload;
    },
    bestBoArticles: (state, action) => {
      state.topRestaurants = action.payload;
    },
    trendBoArticle: (state, action) => {
      state.topRestaurants = action.payload;
    },
    newsBoArticles: (state, action) => {
      state.topRestaurants = action.payload;
    },
  },
});

export const {
  setTopRestaurants,
  bestRestaurants,
  trendProducts,
  bestBoArticles,
  trendBoArticle,
  newsBoArticles,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
