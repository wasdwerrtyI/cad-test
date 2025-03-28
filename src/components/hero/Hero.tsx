import { styled } from "styled-components";
import { Title } from "../shared/Title/Title";
import { VideoPlayer } from "../shared/VideoPlayer/VideoPlayer";

export function Hero() {
  return (
    <HeroContainer>
      <TitleAndDescrContainer>
        <Title>Most important title on the page</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Description>
      </TitleAndDescrContainer>
      <VideoPlayer videoId="dQw4w9WgXcQ"></VideoPlayer>
    </HeroContainer>
  );
}
const Description = styled.p`
  padding-top: 16px;
`;
const TitleAndDescrContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
`;
const HeroContainer = styled.div`
  background-color: rgb(245, 245, 245);
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 768px) {
    padding: 15px 30px;
  }
`;
