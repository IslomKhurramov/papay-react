import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function TargetArticles(props: any) {
  const { setArticlesRebuild } = props;
  const time = moment().format("YY-MM-DD HH:mm");
  /**HANDLERS */
  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const artImage = article?.art_image
          ? `${serverApi}/${article.art_image.replace(/\\/g, "/")}`
          : "/community/maria.jpg";
        const userImage = article?.member_data.mb_image
          ? `${serverApi}/${article.member_data.mb_image.replace(/\\/g, "/")}`
          : "/community/maria.jpg";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href={`/member-page/other?mb_id=${article.mb_id}&art_id:${article._id}`}>
            <Box
              className="all_article_img"
              sx={{ backgroundImage: `url(${artImage})` }}></Box>

            <Box className="all_article_container">
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={userImage}
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span className="all_article_author_user">
                  {article?.member_data.mb_nick}
                </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}>
                <span className="all_article_title">{article?.bo_id}</span>
                <span className="all_article_desc">{article?.art_subject}</span>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                className="target_icons">
                <div className={"target_icons_2"}>{time}</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "5px",
                  }}>
                  <Checkbox
                    {...label}
                    onClick={targetLikeHandler}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    id={article?._id}
                    /*@ts-ignore*/
                    checked={
                      article?.me_liked && article.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
                  />
                  <span>{article.art_likes}</span>
                  <Checkbox
                    id={article?._id}
                    /*@ts-ignore*/
                    checked={article?.id ? true : false}
                    {...label}
                    icon={<RemoveRedEyeIcon />}
                    checkedIcon={
                      <RemoveRedEyeIcon style={{ color: "yellow" }} />
                    }
                  />
                  <span>{article?.art_views}</span>
                </div>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
