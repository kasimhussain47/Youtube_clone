import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/constant";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  // console.log(video)
  return (
    // <></>
    <Card sx={{ width:{xs:'100%' ,sm:'300', md:'260px'}, boxShadow: "none", borderRadius: '15px', backgroundColor:'rgb(18, 18, 18)'  }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width:{xs:'100%',sm:'300',md:'260px'}, height: 150 ,borderRadius: '15px'}}
        />
      </Link>
      <CardContent sx={{  backgroundColor:'rgb(18, 18, 18)', height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      {/* <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link> */}
      </CardContent>
    </Card>
  )
}

export default VideoCard
