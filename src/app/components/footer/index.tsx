import { Box, Container, Hidden, Stack } from "@mui/material";
import React, { useState } from "react";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_container">
          <Stack flexDirection={"row"} style={{ height: "242px" }}>
            <Stack className="info" flexDirection={"column"}>
              <Box>
                <img src="/Papay_footer.svg" />
              </Box>
              <Box className="Lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Sed ut perspiciatis unde omnis iste{" "}
              </Box>
              <Stack className="contact_links">
                <Box>
                  <img src="/icons/face.svg" />
                </Box>
                <Box>
                  <img src="/icons/insta.svg" />
                </Box>
                <Box>
                  <img src="/icons/twit.svg" />
                </Box>
                <Box>
                  <img src="/icons/youtub.svg" />
                </Box>
              </Stack>
            </Stack>
            <Stack className="info2">
              <Box className="bulimlar">Bo'limlar</Box>
              <Box className="line2"></Box>
              <Box className="bosh_sahifa">
                Bosh Sahifa Oshxonalar Jamiyat Yordam
              </Box>
            </Stack>
            <Stack className="info3">
              <Box className="top">Bizni top</Box>
              <Box className="line"></Box>
              <Stack flexDirection={"row"} sx={{ mt: "19px" }}>
                <Box className="first_line">L.</Box>
                <Box className="second_line">Uzbekistan</Box>
              </Stack>
              <Stack flexDirection={"row"} sx={{ mt: "42px" }}>
                <Box className="first_line">P.</Box>
                <Box className="second_line">+998 - 99 266 25 62</Box>
              </Stack>
              <Stack flexDirection={"row"} sx={{ mt: "9.68px" }}>
                <Box className="first_line">E.</Box>
                <Box className="second_line">Papays@restaurant.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner">asa</Box>
          <Box className="copyright">
            Copyright Papays 2022, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
