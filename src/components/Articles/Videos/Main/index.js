import React from "react";
import VideosList from "../../../widgets/VideosList/VideosList";

const VideosMain = () => (
  <VideosList type="card" title={false} loadMore={true} start={0} amount={10} />
);

export default VideosMain;
