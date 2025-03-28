import styled from "styled-components";
import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonContactUsProps {
  children: string;
  style?: CSSProperties;
}

export function ButtonContactUs({ children, style }: ButtonContactUsProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <StyledButtonContactUs onClick={handleClick} style={style}>
      {children}
    </StyledButtonContactUs>
  );
}

const StyledButtonContactUs = styled.button`
  width: 180px;
  height: 35px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  &:hover {
    background-color: #333333;
  }

  &:active {
    transform: scale(0.98);
  }
`;
