import { Avatar, Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
/**REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";
import { retrieveTopRestaurants } from "../Homepage/selector";
import {
  setBestBoArticles,
  setTrendBoArticle,
  setNewsBoArticles,
} from "./slice";
import {
  retrieveBestBoArticles,
  retrieveTrendBoArticles,
  retrieveNewsBoArticles,
} from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { BoArticle } from "../../../types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { serverApi } from "../../../lib/config";
import TViewer from "../../components/tuiEditor/TViewer";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setBestBoArticles: (data: BoArticle[]) => dispach(setBestBoArticles(data)),
  setTrendBoArticle: (data: BoArticle[]) => dispach(setTrendBoArticle(data)),
  setNewsBoArticles: (data: BoArticle[]) => dispach(setNewsBoArticles(data)),
});

//REDUX SELECTOR
const bestBoArticlesRetriever = createSelector(
  retrieveBestBoArticles,
  (bestBoArticles) => ({
    bestBoArticles,
  })
);

const trendBoArticleRetriever = createSelector(
  retrieveTrendBoArticles,
  (trendBoArticle) => ({
    trendBoArticle,
  })
);
const newsBoArticlesRetriever = createSelector(
  retrieveNewsBoArticles,
  (newsBoArticles) => ({
    newsBoArticles,
  })
);
export function Recommendations() {
  /**INITIALIZATION */
  const { setBestBoArticles, setNewsBoArticles, setTrendBoArticle } =
    actionDispatch(useDispatch());
  const { bestBoArticles } = useSelector(bestBoArticlesRetriever);
  const { trendBoArticle } = useSelector(trendBoArticleRetriever);
  const { newsBoArticles } = useSelector(newsBoArticlesRetriever);

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setBestBoArticles(data))
      .catch((err) => console.log(err));

    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_likes",
      })
      .then((data) => setTrendBoArticle(data))
      .catch((err) => console.log(err));

    communityService
      .getTargetArticles({
        bo_id: "celebrity",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setNewsBoArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="top_article_frame">
      <Container
        sx={{
          mb: "50px",
          mt: "60px",
        }}
        style={{ position: "relative" }}>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}>
          <Box className="category_title">Tafsiya qilingan maqolalar</Box>
          <Stack className="article_main " flexDirection={"row"}>
            <Stack className="article_container">
              <Box className="article_category">Ko'p ko'rilgan</Box>

              {bestBoArticles?.map((article: BoArticle) => {
                const artImage = article?.art_image
                  ? `${serverApi}/${article.art_image.replace(/\\/g, "/")}`
                  : "/community/default_article.png";
                const userImage = article?.member_data.mb_image
                  ? `${serverApi}/${article.member_data.mb_image.replace(
                      /\\/g,
                      "/"
                    )}`
                  : "/auth/default_user.svg";
                return (
                  <Stack className="article_box" key={article._id}>
                    <Box
                      className="article_img"
                      sx={{
                        backgroundImage: `url(${artImage})`,
                      }}></Box>
                    <Box className="article_info">
                      <Box className="article_main_info">
                        <div className="article_author">
                          <Avatar
                            alt="Author_photo"
                            src={userImage}
                            sx={{
                              width: "35px",
                              height: "35px",
                            }}
                          />
                          <span className="author_username">
                            {article?.member_data?.mb_nick}
                          </span>
                        </div>
                        <span className="article_title">
                          {article?.art_subject}
                        </span>
                        <p className="article_desc"></p>
                      </Box>
                    </Box>
                  </Stack>
                );
              })}

              <Stack className="article_container">
                <Box className="article_category">Ko'p yoqtirilgan</Box>
                {trendBoArticle?.map((article: BoArticle) => {
                  const artImage = article?.art_image
                    ? `${serverApi}/${article.art_image.replace(/\\/g, "/")}`
                    : "/community/default_article.png";
                  const userImage = article?.member_data.mb_image
                    ? `${serverApi}/${article.member_data.mb_image.replace(
                        /\\/g,
                        "/"
                      )}`
                    : "/auth/default_user.svg";
                  return (
                    <Stack className="article_box" key={article?._id}>
                      <Box
                        className="article_img"
                        sx={{
                          backgroundImage: `url(${artImage})`,
                        }}></Box>
                      <Box className="article_info">
                        <Box className="article_main_info">
                          <div className="article_author">
                            <Avatar
                              alt="Author_photo"
                              src={userImage}
                              sx={{
                                width: "35px",
                                height: "35px",
                              }}
                            />
                            <span className="author_username">
                              {article?.member_data?.mb_nick}
                            </span>
                          </div>
                          <span className="article_title">
                            {article?.art_subject}
                          </span>
                          <p className="article_desc"></p>
                        </Box>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>

            <Stack className="article_container">
              <Box className="article_category">Mashxurlar</Box>
              {newsBoArticles?.map((article: BoArticle) => {
                return (
                  <Box className="article_news">
                    <TViewer chosenSingleBoArticle={article} />
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
