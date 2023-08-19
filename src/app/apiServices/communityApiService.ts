import axios from "axios";
import { serverApi } from "../../lib/config";
import {
  BoArticle,
  BoArticleInput,
  SearchArticlesObj,
  SearchMemberArticleObj,
} from "../../types/boArticle";
import assert from "assert";
import { Definer } from "../../lib/Definer";

class CommunityApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async uploadImageToServer(image: any) {
    try {
      let formData = new FormData();
      formData.append("community_image", image);
      console.log(image);
      const result = await axios(`${this.path}/community/image`, {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("STATE:", result.data.state);

      console.log("result::", result);
      const image_name: string = result.data.data;
      return image_name;
    } catch (err: any) {
      console.log(`ERROR::: getTargetArticles ${err.message}`);
      throw err;
    }
  }

  public async createArticle(data: BoArticleInput) {
    try {
      const result = await axios.post(this.path + `/community/create`, data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      console.log("STATE:", result.data.state);

      const articles: BoArticle = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR::: createArticle ${err.message}`);
      throw err;
    }
  }

  public async getTargetArticles(data: SearchArticlesObj) {
    try {
      let url = `/community/target?page=${data?.page}&limit=${data?.limit}&bo_id=${data?.bo_id}`;
      if (data.order) url += `&order=${data.order}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      console.log("STATE:", result.data.state);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR::: getTargetArticles ${err.message}`);
      throw err;
    }
  }

  public async getMemberCommunityArticles(data: SearchMemberArticleObj) {
    try {
      let url = `/community/articles?mb_id=${data.mb_id}&page=${data.page}&limit=${data.limit}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("STATE:", result.data.data);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR::: getMemberCommunityArticles ${err.message}`);
      throw err;
    }
  }

  public async getChosenArticle(art_id: string) {
    try {
      let url = `/community/single-article/${art_id}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("STATE:", result.data.data);

      const article: BoArticle = result.data.data;
      return article;
    } catch (err: any) {
      console.log(`ERROR::: getChosenArticle ${err.message}`);
      throw err;
    }
  }
}

export default CommunityApiService;
