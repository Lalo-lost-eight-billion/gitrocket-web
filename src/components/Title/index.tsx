import React from "react";
import styled, { CSSProperties } from "styled-components";

interface Props {
  content: string;
  size?: CSSProperties["fontSize"];
  color?: CSSProperties["color"];
}

const Title = ({ content, size = "20px", color = "#21242c" }: Props) => {
  return (
    <StyledTitle $size={size} $color={color}>
      {content}
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.p<{
  $size: CSSProperties["fontSize"];
  $color: CSSProperties["color"];
}>`
  font-size: ${({ $size }) => $size};
  color: ${({ $color }) => $color};
  font-family: "Pretendard-Bold" !important;
`;
