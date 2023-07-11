import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import "../../../css/community.css";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CommunityChats } from "./communityChats";
import { TargetArticles } from "./targetArticles";

export function CommunityPage() {
  //INITALIZATION
  const [value, setValue] = React.useState("1");

  //HANDLES
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, newValue: number) => {
    console.log(value);
  };

  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunityChats />
            <Stack
              className="community_all_frame"
              inputMode="text"
              style={{ border: "1px solid #fff" }}>
              <TabContext value={value}>
                <Box className="article_tabs">
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      value={value}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "blue" }}>
                      <Tab label="Barcha Maqolalar" value={"1"}></Tab>
                      <Tab label="Mashxurlar" value={"2"}></Tab>
                      <Tab label="Oshxonaga Baho" value={"3"}></Tab>
                      <Tab label="Hikoyalar" value={"4"}></Tab>
                    </TabList>
                  </Box>
                </Box>

                <Box className="article_main">
                  <TabPanel value="1">
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value="2">
                    <TargetArticles targetBoArticles={[1, 2, 3, 4]} />
                  </TabPanel>
                  <TabPanel value="3">
                    <TargetArticles targetBoArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value="4">
                    <TargetArticles targetBoArticles={[1, 2, 3, 4]} />
                  </TabPanel>
                </Box>
              </TabContext>
              <Box className="article_bott">
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
                      color={"secondary"}
                      style={{ marginTop: "20px" }}
                    />
                  )}
                  onChange={handlePaginationChange}
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
