import React, { useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function CommunityChats() {
  //Initialization
  const [messagelist, setMessagesList] = useState([]);

  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Muloqot</Box>
      <Box className="chat_content">
        <Stack className="chat_main">
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <div className="msg_left">Bu yer jonli muloqot</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">Sammaykim</div>
          </Box>

          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">Va Alaykum assalom</div>
          </Box>

          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">Ishlaring yaxshimi uka</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">Yaxshi raxmat</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">Yaxshida bomasa</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">judayam zo'r ekan</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">malades</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">shunday</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">shunday busa shundayda</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">Va Alaykum assalom</div>
          </Box>

          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">Ishlaring yaxshimi uka</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">Yaxshi raxmat</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">Yaxshida bomasa</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">judayam zo'r ekan</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
            justifyContent={"flex-end"}>
            <div className="msg_right">malades</div>
          </Box>
          <Box
            flexDirection="row"
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}>
            <Avatar alt="martin" src="/community/cute_girl.png" />
            <div className="msg_left">shunday</div>
          </Box>
        </Stack>
      </Box>
      <Box className="chat_bott">
        <input
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo'natish"
        />
        <button className="send_msg_button">
          <SendIcon style={{ color: "#fff" }} />
        </button>
      </Box>
    </Stack>
  );
}
