import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((v, index) => (
        <Box key={index}>
          {v.type === "video" && <VideoCard video={v} />}
          {v.type === "channel" && <ChannelCard channelDetail={v} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
