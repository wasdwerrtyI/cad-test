import YouTube from "react-youtube";
import styled from "styled-components";

type VideoPlayerProps = {
  videoId?: string;
  className?: string;
};

export function VideoPlayer({ videoId = "", className }: VideoPlayerProps) {
  const opts = {
    width: "100%",
    height: "235px",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      controls: 1,
    },
  };

  return (
    <VideoContainer className={className}>
      <YouTube videoId={videoId} opts={opts} />
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  width: 530px;
  height: 235px;
  background-color: rgb(217, 217, 217);
  border-radius: 8px;
  overflow: hidden;
`;
