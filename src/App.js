import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// import { Feed } from '@mui/icons-material';

import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import Feed from "./components/Feed";

function App() {
  return (
    <div>
    <Router>
        <Navbar />
      {/* <Box sx={{ backgroundColor: "#000" }}> */}
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      {/* </Box> */}
    </Router>
    </div>

  );
}

export default App;
