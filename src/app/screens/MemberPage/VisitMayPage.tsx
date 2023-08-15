import { Route, Switch, useRouteMatch } from "react-router-dom";
import React, { useState } from "react";
import {
  Box,
  Container,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import { MemberPosts } from "./memberPosts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MemberFollowing } from "./memberFollowing";
import { MemberFollowers } from "./memberFollowers";
import SettingsIcon from "@mui/icons-material/Settings";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import { MySettings } from "./mySettings";
import { TuiEditor } from "../../components/tuiEditor/TuiEditor";
import TViewer from "../../components/tuiEditor/TViewer";
/**REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoArticles,
  retrieveChosenSingleBoArticle,
} from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { Member } from "../../../types/user";
import { BoArticle } from "../../../types/boArticle";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticle[]) =>
    dispach(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispach(setChosenSingleBoArticle(data)),
});

//REDUX SELECTOR
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenMemberBoArticlesRetriever = createSelector(
  retrieveChosenMemberBoArticles,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);
const chosenSingleBoArticleRetriever = createSelector(
  retrieveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({
    chosenSingleBoArticle,
  })
);

export function VisitMyPage(props: any) {
  //INITALIZATION
  const {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetriever
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriever);

  const [value, setValue] = useState("1");

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value={"1"}>
                  <Box className="menu_name">Mening Maqolalarim</Box>
                  <Box className="menu_content">
                    <MemberPosts />

                    <Stack
                      sx={{ my: "40px" }}
                      direction="row"
                      alignItems="center"
                      justifyContent="center">
                      <Box className="bottom_box">
                        <Pagination
                          count={3}
                          page={1}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color="secondary"
                            />
                          )}></Pagination>
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className="menu_name">Followers</Box>
                  <Box className="menu-content">
                    <MemberFollowers actions_enabled={true} />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  {" "}
                  <Box className="menu_name">Following</Box>
                  <Box className="menu-content">
                    <MemberFollowing actions_enabled={true} />
                  </Box>
                </TabPanel>
                <TabPanel value={"4"}>
                  <Box className="menu_name">Maqola Yozish</Box>
                  <Box className="write-content">
                    <TuiEditor />
                  </Box>
                </TabPanel>
                <TabPanel value={"5"}>
                  <Box className="menu_name">Tanlangan Maqola</Box>
                  <Box className="menu-content">
                    <TViewer text={`<h3>Hello</h3>`} />
                  </Box>
                </TabPanel>
                <TabPanel value={"6"}>
                  <Box className="menu_name">Malumotlarni O'zgartirish</Box>
                  <Box className="menu-content">
                    <MySettings />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right">
              <Box className="order_info_box">
                <a onClick={() => setValue("6")} className="settings_btn">
                  <SettingsIcon />
                </a>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <div className="order_user_img">
                    <img
                      src="/community/cute_girl.png"
                      style={{
                        width: "117px",
                        height: "112px",
                        borderRadius: "37px",
                      }}
                      className="order_user_avatar"
                    />
                    <div className="order_user_icon_box">
                      <img src="/icons/user.svg" />
                    </div>
                  </div>
                  <span className={"order_user_name"}>Ismoilov Akmaljon</span>
                  <span className={"order_user_prof"}>USER</span>
                </Box>
                <Box className="user_media_box">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                  <YouTubeIcon />
                </Box>

                <Box className="user_media_box_1">
                  <p className="follows">Followers: 2</p>
                  <p className="follows">Followings: 3</p>
                </Box>

                <span className="user_desc">
                  Qo'shimcha ma'lumot kiritilmagan
                </span>

                <Box className="btn_right" sx={{ mt: "20px" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example">
                    <Tab
                      style={{ flexDirection: "column" }}
                      value="4"
                      component={(e) => (
                        <Button
                          variant="contained"
                          onClick={() => setValue("4")}>
                          Maqola yozish
                        </Button>
                      )}
                    />
                  </TabList>
                </Box>
              </Box>

              <Box className="my_page_menu">
                <TabList
                  orientation="vertical"
                  onChange={handleChange}
                  aria-label="lab API tabs example">
                  <Tab
                    style={{ display: "flex", flexDirection: "column" }}
                    value="1"
                    component={() => (
                      <div
                        style={{ cursor: "pointer" }}
                        className={`menu_box ${value}`}
                        onClick={() => setValue("1")}>
                        <img src="/icons/pencil.png" />
                        <span>Maqolalarim</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ display: "flex", flexDirection: "column" }}
                    value="2"
                    component={() => (
                      <div
                        style={{ cursor: "pointer" }}
                        className={`menu_box ${value}`}
                        onClick={() => setValue("2")}>
                        <img src={"/icons/User.png"} />
                        <span>Followers</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ display: "flex", flexDirection: "column" }}
                    value="3"
                    component={() => (
                      <div
                        style={{ cursor: "pointer" }}
                        className={`menu_box ${value}`}
                        onClick={() => setValue("3")}>
                        <img src={"/icons/group.png"} alt="Following" />
                        <span>Following</span>
                      </div>
                    )}
                  />
                </TabList>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
