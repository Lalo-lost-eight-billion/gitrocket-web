import React from "react";
import styled from "styled-components";

const Title = ({ content }: { content: string }) => {
  return <StyledTitle>{content}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.p`
  font-size: 20px;
  color: #21242c;
  font-family: "Pretendard-Bold" !important;
`;
