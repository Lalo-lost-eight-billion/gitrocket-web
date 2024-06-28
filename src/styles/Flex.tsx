"use client";

import styled, { css } from "styled-components";
import type { CSSProperties, RuleSet } from "styled-components";

export interface BaseFlexProps {
  $gap?: CSSProperties["gap"];
  $columnGap?: CSSProperties["columnGap"];
  $rowGap?: CSSProperties["rowGap"];

  $alignItems?: CSSProperties["alignItems"];
  $justifyContent?: CSSProperties["justifyContent"];

  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];

  $flexWrap?: CSSProperties["flexWrap"];
  $padding?: CSSProperties["padding"];
  $margin?: CSSProperties["margin"];
  $backgroundColor?: CSSProperties["backgroundColor"];
  $cursor?: CSSProperties["cursor"];

  $customStyle?: RuleSet;
}

const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;

  gap: ${({ $gap }) => $gap || "0px"};
  row-gap: ${({ $rowGap }) => $rowGap || "0px"};
  column-gap: ${({ $columnGap }) => $columnGap || "0px"};

  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
  flex-wrap: ${({ $flexWrap }) => ($flexWrap ? "wrap" : "nowrap")};

  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};

  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  cursor: ${({ $cursor }) => $cursor};

  ${({ $customStyle }) => $customStyle};
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;

interface FlexProps {
  $flexDirection?: CSSProperties["flexDirection"];
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $columnGap?: CSSProperties["columnGap"];
  $rowGap?: CSSProperties["rowGap"];
  $gap?: CSSProperties["gap"];
}

export const Flex = ({ ...props }: FlexProps) => {
  return css`
    display: flex;

    flex-direction: ${props.$flexDirection};
    justify-content: ${props.$justifyContent};
    align-items: ${props.$alignItems};

    column-gap: ${props.$columnGap};
    row-gap: ${props.$rowGap};
    gap: ${props.$gap};
  `;
};
