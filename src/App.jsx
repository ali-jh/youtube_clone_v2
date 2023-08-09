import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  ChannelDetails,
  Feed,
  SearchFeed,
  VideoDetails,
} from "./components";

const App = () => (
  <Box sx={{ backgroundColor: "#000", color: "red" }}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetails />} />
      <Route path="/channel/:id" element={<ChannelDetails />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
);

export default App;
