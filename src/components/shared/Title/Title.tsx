import { styled } from "styled-components";
import { CSSProperties } from "react";

interface TitleProps {
  children: string;
  style?: CSSProperties;
}

export function Title({ children, style }: TitleProps) {
  return <StyledTitle style={style}>{children}</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-weight: bold;
  margin: 0;
`;
