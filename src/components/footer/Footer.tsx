import styled from "styled-components";

export function Footer() {
  return (
    <FooterStyled>
      <h3>Some Company 2024</h3>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #fff;
  border-top: 1px solid #eee;
`;
