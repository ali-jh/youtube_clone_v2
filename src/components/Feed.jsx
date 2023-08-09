import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar} from "../components"
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "92vh", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
        >
          CopyRight 2024 datamcode
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
