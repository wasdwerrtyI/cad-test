import styled from "styled-components";
import { ButtonContactUs } from "../shared/buttonContactUs/ButtonContactUs";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Some company</h1>
      <ButtonContactUs>Contact us</ButtonContactUs>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  padding: 30px 90px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 15px 45px;
  }
`;
