//REDUX
import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObject } from "../../types/others";
import { Product } from "../../types/product";

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObject) {
    try {
      const url = "/products";
      const result = await axios.post(this.path + url, data, {
        withCredentials: true,
      });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      throw err;
    }
  }

  async getChosenDish(dish_id: string) {
    try {
      const url = `/products/${dish_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log("ERROR:::getChosenDish", err.message);
      throw err;
    }
  }
}

export default ProductApiService;
