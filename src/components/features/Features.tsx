import styled from "styled-components";
import { FeatureCard } from "./FeatureCard";
import { Title } from "../shared/Title/Title";
import { ButtonContactUs } from "../shared/buttonContactUs/ButtonContactUs";

export function Features() {
  return (
    <>
      <FeaturesContainer>
        <Title style={{ margin: "32px", textAlign: "center" }}>
          Also very important title
        </Title>
        <FeaturesStyled>
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          ></FeatureCard>
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          ></FeatureCard>
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          ></FeatureCard>
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          ></FeatureCard>
          <FeatureCard
            title="Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
          ></FeatureCard>
        </FeaturesStyled>
        <ButtonContainer style={{ marginBottom: "32px" }}>
          <ButtonContactUs>Contact Us</ButtonContactUs>
        </ButtonContainer>
      </FeaturesContainer>
    </>
  );
}
const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FeaturesStyled = styled.div`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 25px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
