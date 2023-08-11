import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
const VideoCard = ({ video }) => {
  return (
    <Card sx={{width:{md:'320px' , xs:'100%'} , boxShadow:0, borderRadius:"none"}}>
      <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video.thumbnail[0]?.url}
          alt={video.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video?.channelId ? `/channel/${video?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ color: "gray", ml: "5px" , fontSize:12}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
