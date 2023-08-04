import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

export interface AppRooteState {
  homePage: HomePageState;
}

export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticle: BoArticle[];
  newsBoArticles: BoArticle[];
}
