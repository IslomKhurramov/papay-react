import { BoArticle } from "./boArticle";
import { Order } from "./order";
import { Product } from "./product";
import { Restaurant } from "./user";

/**REACT APP STATE */
export interface AppRooteState {
  restaurantPage: any;
  homePage: HomePageState;
  restaurantPageState: RestaurantPageState;
}

/**HOMEPAGE */
export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticle: BoArticle[];
  newsBoArticles: BoArticle[];
}

/**RESTAURANT PAGE  */
export interface RestaurantPageState {
  targetRestaurants: Restaurant[];
  randomRestaurants: Restaurant[];
  chosenRestaurant: Restaurant | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
}

/**Orders Page */

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
