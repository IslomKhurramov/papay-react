import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
/**REDUX */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetRestaurants } from "./slice";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) =>
    dispach(setTargetRestaurants(data)),
});

//REDUX SELECTOR
const targetRestaurantsRetriever = createSelector(
  retrieveTargetRestaurants,
  (targetRestaurants) => ({
    targetRestaurants,
  })
);

const order_list = Array.from(Array(8).keys());
console.log(order_list);

export function AllRestaurants() {
  /**INITIALIZATION */
  const { setTargetRestaurants } = actionDispatch(useDispatch());
  const { targetRestaurants } = useSelector(targetRestaurantsRetriever);

  useEffect(() => {
    //TODO: retrieve targetREstaurantsData
  }, []);

  return (
    <div className="all_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="fil_search_box">
            <Box className="fil_box">
              <a>Zo'r</a>
              <a>MAshhur</a>
              <a>Trenddagi</a>
              <a>Yangi</a>
            </Box>
            <Box className="search_big_box">
              <form action="" className="search_form" method="">
                <input
                  type="search"
                  name="resSearch"
                  placeholder="Qidiruv"
                  className="searchInput"
                />
                <Button
                  className="button_search"
                  variant="contained"
                  endIcon={<SearchIcon />}>
                  Izlash
                </Button>
              </form>
            </Box>
          </Box>
          <Stack className="all_res_box">
            <CssVarsProvider>
              {order_list.map((ele) => {
                return (
                  <Card
                    variant="outlined"
                    sx={{
                      minHeight: 410,
                      minWidth: 290,
                      mx: "17px",
                      my: "20px",
                    }}>
                    <CardOverflow>
                      <AspectRatio ratio={"1"}>
                        <img src="/restaurant/belissimo.jpg" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,0.4)",
                        }}>
                        <Favorite style={{ color: "white" }} />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      Texas De Brazil
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor={"neutral.700"}>
                        Tashkent, Yunus Abad 4-1
                      </Link>
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor={"neutral.700"}>
                        99890 12365489
                      </Link>
                    </Typography>
                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlinedBorder",
                        bgcolor: "background.level1",
                      }}>
                      <Typography
                        level="body3"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex",
                        }}>
                        1000{" "}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        level="body3"
                        sx={{
                          display: "flex",
                          color: "text.secondary",
                          alignItems: "center",
                        }}>
                        <div>500</div>
                        <FavoriteIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>

          <Stack className="bottom_box">
            <img src="/icons/group_line.png" className="line_img" />
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
                />
              )}
            />
            <img src="/icons/group_line.png" className="line_img_two" />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
