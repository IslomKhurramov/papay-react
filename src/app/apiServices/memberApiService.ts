import axios from "axios";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";

class MemberApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async loginRequest(login_data: any) {
    try {
      const result = await axios.post(this.path + "/login", login_data, {
        withCredentials: true,
      });
      console.log("STATE:::", result.data.data);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      const memeber: Member = result.data.data;
      localStorage.setItem("memebr_data", JSON.stringify(memeber));
      return memeber;
    } catch (err: any) {
      console.log(`ERROR::: loginRequest ${err.message}`);
      throw err;
    }
  }
}

export default MemberApiService;
