import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// import {logo} from "../utils/constant";
import SearchBar from "./Searchbar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

export default function Navbar() {
  return (
    <div style={{height:"60px"}}>
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        backgroundColor: "rgb(18, 18, 18)",
        top: 0,
        justifyContent: "space-between",
        height: 50,
        display: "flex",
      }}
    >
      <MenuIcon
        sx={{ color: "white", margin: "20px 0px 0px 20px", fontSize: "32px" }}
      />
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {/* <img src={logo} alt="logo" height="100" style={{color:"transparent"}} /> */}
        <YouTubeIcon
          sx={{ color: "red", fontSize: 40, margin: "20px 0px 5px 20px" }}
        />
        <span style={{ margin: "20px 20px 0px 0px", color: "white" }}>
          YouTube
        </span>
      </Link>

      <SearchBar />

      {/* <KeyboardVoiceIcon
        style={{
          textAlign: "left",
          justifyContent: "left",
          alignItems:'left',
          margin: "auto",
        }}
      /> */}
    </Stack>

     </div>
  );
}
