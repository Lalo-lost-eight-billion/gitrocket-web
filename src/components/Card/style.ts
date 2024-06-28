import { palette } from "@/styles/palette";
import styled from "styled-components";

export const CardBox = styled.div`
  width: 224px;
  height: 170px;

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

export const Name = styled.p`
  font-size: 18px;
  font-family: "Pretendard-Bold" !important;
  color: ${palette.commit_1};

  position: absolute;
  top: 20px;
  left: 20px;

  z-index: 1;
`;

export const ImageFilter = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Text = styled.p<{ $priceType: "종가" | "고가" | "저가" }>`
  font-size: 14px;
  font-family: "Pretendard-SemiBold" !important;

  span {
    font-family: "Pretendard-SemiBold" !important;
    padding-left: 8px;
    color: ${({ $priceType }) => {
      let textColor = "B1B4B9";

      if ($priceType === "고가") {
        textColor = palette.commit_5;
      }

      if ($priceType === "종가") {
        textColor = palette.commit_3;
      }

      return textColor;
    }};
  }
`;
