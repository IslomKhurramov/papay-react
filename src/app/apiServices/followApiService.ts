import axios from "axios";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { FollowSearchObj, Follower, Following } from "../../types/follow";

class FollowApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getMemberFollowers(data: FollowSearchObj): Promise<Follower[]> {
    try {
      let url = `/follow/followers?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      console.log("STATE:", result.data.data);

      const followers: Follower[] = result.data.data;
      return followers;
    } catch (err: any) {
      console.log(`ERROR::: getTargetArticles ${err.message}`);
      throw err;
    }
  }

  public async getMemberFollowings(
    data: FollowSearchObj
  ): Promise<Following[]> {
    try {
      let url = `/follow/followings?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      console.log("STATE:", result.data.data);

      const followings: Following[] = result.data.data;
      return followings;
    } catch (err: any) {
      console.log(`ERROR::: getTargetArticles ${err.message}`);
      throw err;
    }
  }

  public async subscribe(mb_id: string): Promise<void> {
    try {
      const url = `/follow/subscribe`;

      const result = await axios.post(
        this.path + url,
        { mb_id: mb_id },
        {
          withCredentials: true,
        }
      );
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      console.log("STATE:", result.data.state);

      // return result.data.data === "subscribed";
    } catch (err: any) {
      console.log(`ERROR::: subscribe ${err.message}`);
      throw err;
    }
  }
  public async unsubscribe(mb_id: string): Promise<boolean> {
    try {
      const url = `/follow/unsubscribe`;

      const result = await axios.post(
        this.path + url,
        { mb_id: mb_id },
        {
          withCredentials: true,
        }
      );
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      console.log("STATE:", result.data.state);

      return result.data.data === "unsubscribed";
    } catch (err: any) {
      console.log(`ERROR::: unsubscribe ${err.message}`);
      throw err;
    }
  }
}

export default FollowApiService;
