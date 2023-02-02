import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <>
    <Paper
      component="form"
      // onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "rgb(18, 18, 18)",
        borderColor: "#282828",
      }}
      style={{
        textAlign: "center",
        display: "flex",
        margin: "auto",
        height: "40px",
      }}
    >
      {/* <div> */}
      <input
        className="search-bar"
        placeholder="Search..."
        outline="none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          color: "gray",
          backgroundColor: "rgb(18, 18, 18)",
          borderColor: "transparent",
          // width: "500px",
          outline: " none",
        }}
      />
      <Button
        type="button"
        sx={{
          p: "10px",
          color: "white",
          backgroundColor: "#282828",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          outline: "none",
          border: "none",
        }}
        aria-label="search"
      >
        <SearchIcon onClick={onhandleSubmit} />
      </Button>
      {/* </div> */}
    </Paper>
      <KeyboardVoiceIcon style={{color:'whitesmoke' , fontSize:'26px'}}/>
      &nbsp;&nbsp;&nbsp;
      <VideoCallIcon style={{color:'whitesmoke', fontSize:'25px'}}/>
      &nbsp;&nbsp;&nbsp;
      <NotificationsNoneOutlinedIcon style={{color:'whitesmoke', fontSize:'25px'}}/>
      &nbsp;&nbsp;&nbsp;
      <AccountCircleOutlinedIcon style={{color:'whitesmoke'}}/>
      &nbsp;&nbsp;&nbsp;
      </>
  );
};

export default SearchBar;
