import { palette } from "@/styles/palette";
import styled, { css } from "styled-components";

export const CardBox = styled.div`
  width: 224px;
  height: 175px;

  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #eee;

  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

export const StyledImage = css`
  object-fit: cover;
`;

export const Name = styled.p<{ $isUp: boolean }>`
  font-size: 18px;
  font-family: "Pretendard-Bold" !important;
  color: ${palette.commit_1};

  position: absolute;
  top: 20px;
  left: 20px;

  z-index: 1;

  span {
    font-size: 15px;
    font-family: "Pretendard-SemiBold" !important;
    color: ${({ $isUp }) => ($isUp ? "red" : "blue")};
  }
`;

export const ImageFilter = styled.div`
  width: 100%;
  height: 85px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const PriceType = styled.p`
  font-size: 14px;
  width: 38px;
  font-family: "Pretendard-SemiBold" !important;
`;

export const Price = styled.p<{ $priceType: "present" | "high" | "low" }>`
  font-family: "Pretendard-SemiBold" !important;
  padding-left: 8px;
  color: ${({ $priceType }) => {
    let textColor = "B1B4B9";

    if ($priceType === "high") {
      textColor = palette.commit_5;
    }

    if ($priceType === "present") {
      textColor = palette.commit_3;
    }

    return textColor;
  }};
`;
