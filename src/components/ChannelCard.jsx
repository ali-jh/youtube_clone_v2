import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle, Margin } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height:"326px",
        margin:"auto"
      }}
    >
      <Link to={`/channel/${channelDetail?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail.thumbnail[0]?.url || demoProfilePicture}
            alt={channelDetail?.title}
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.title}
            <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: 14 }} />
          </Typography>
          <Typography variant="body2">
            {channelDetail?.description.slice(0, 30)}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
