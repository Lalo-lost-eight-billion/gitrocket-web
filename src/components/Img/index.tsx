import Image, { type ImageProps } from "next/image";
import React from "react";
import styled, { CSSProperties, RuleSet } from "styled-components";

interface Props extends ImageProps {
  cursor?: CSSProperties["cursor"];
  customStyle?: RuleSet;
}

const Img = ({ cursor = "auto", customStyle, ...props }: Props) => {
  return (
    <StyledImage $customStyle={customStyle!} $cursor={cursor} {...props} />
  );
};

export default Img;

const StyledImage = styled(Image)<{
  $cursor: CSSProperties["cursor"];
  $customStyle: RuleSet;
}>`
  cursor: ${({ $cursor }) => $cursor};
  ${({ $customStyle }) => $customStyle};
`;
