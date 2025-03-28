import styled from "styled-components";
import { Title } from "../shared/Title/Title";
import { ButtonContactUs } from "../shared/buttonContactUs/ButtonContactUs";

export function CallToAction() {
  return (
    <CallToActionStyled>
      <Title>Less important title</Title>
      <ButtonContactUs>Contact us</ButtonContactUs>
    </CallToActionStyled>
  );
}

const CallToActionStyled = styled.section`
  background-color: rgb(245, 245, 245);
  display: flex;
  width: 100%;
  height: 275px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
