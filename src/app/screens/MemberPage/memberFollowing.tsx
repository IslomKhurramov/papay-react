import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followers = [
  { mb_nick: "Botir", following: true },
  { mb_nick: "Qodir", following: false },
  { mb_nick: "Sodir", following: true },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/community/cute_girl.png";
        return (
          <Box className={"follow_box"}>
            <Avatar alt={""} src={image_url} sx={{ width: 99, height: 99 }} />

            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
                justifyContent: "center",
              }}>
              <span className={"username_text"}>USER</span>
              <span className="name_text">{follower.mb_nick}</span>
            </div>

            {props.actions_enabled && (
              <Button
                variant="contained"
                startIcon={
                  <img
                    src="/icons/follow icon.svg"
                    style={{ width: "40px", marginLeft: "16px" }}
                  />
                }
                className={"follow_cancel_btn"}>
                Bekor Qilish
              </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
