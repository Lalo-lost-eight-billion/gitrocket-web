import { Flex } from "@/styles/Flex";
import { palette } from "@/styles/palette";
import styled, { CSSProperties } from "styled-components";

export const Container = styled.div`
  width: 1160px;
  height: 100%;

  margin: 0 auto;
  padding-top: 50px;

  ${Flex({ $flexDirection: "column", $rowGap: "20px" })}
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #ddd;

  ${Flex({ $alignItems: "center" })}
`;

export const MarketCoinWrap = styled.div`
  width: 100%;
  height: 88px;

  padding-top: 15px;
`;

export const VariationRateText = styled.p<{ $isUp: boolean }>`
  font-size: 17px;
  font-family: "Pretendard-Semibold" !important;
  color: ${({ $isUp }) => ($isUp ? palette.commit_4 : "#B1B4B9")};
`;

export const StatusWrap = styled.div`
  min-width: 210px;
  height: 55px;
  ${Flex({ $flexDirection: "column", $rowGap: "10px" })}
`;

export const StatusTitle = styled.p`
  color: #333;
  font-size: 14px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;

export const StatusCoin = styled.p<{ $color: CSSProperties["color"] }>`
  font-size: 15px;
  font-family: "Pretendard-Semibold" !important;
  color: ${({ $color }) => $color};
`;

export const StockGraphWrap = styled.div`
  width: 70%;
  height: 100%;
`;

export const StockBuySellWrap = styled.div`
  width: 30%;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export const BuySellSelectButton = styled.button<{ $buySell: boolean }>`
  width: 50%;
  height: 100%;

  cursor: pointer;
  outline: none;
  border: none;
  border-bottom: 1px solid #ddd;

  color: ${({ $buySell }) => ($buySell ? palette.commit_3 : "#000")};
  background-color: transparent;

  transition: all 0.15s ease-in-out;
  font-size: 18px;
  font-family: "Pretendard-Semibold" !important;

  position: relative;
`;

export const SelectBottomLine = styled.div`
  width: 100%;
  height: 2px;

  position: absolute;
  bottom: -1px;
  background-color: ${palette.commit_3};
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  padding: 25px 20px;
  ${Flex({ $flexDirection: "column", $rowGap: "50px" })}
`;

export const BuySellItemTitle = styled.p`
  font-size: 15px;
  color: #333;
`;

export const OrderTypeText = styled.label`
  font-size: 14px;
`;

export const CanOrderText = styled.p`
  font-size: 17px;
  font-family: "Pretendard-SemiBold" !important;

  span {
    font-family: "Pretendard-SemiBold" !important;
    color: ${palette.commit_3};
  }
`;

export const Input = styled.input`
  width: 75%;
  height: 35px;

  text-align: right;
  padding: 0 15px;

  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;

  transition: all 0.13s ease-in-out;
  &:focus {
    border: 1px solid ${palette.commit_3};
  }
`;

export const MinimumOrderAmount = styled.p`
  font-size: 13px;
  color: #333;
`;

export const ExcuteBuySellButton = styled.button`
  width: 100%;
  height: 50px;

  border: none;
  outline: none;
  border-radius: 10px;

  cursor: pointer;
  background-color: ${palette.commit_3};
  opacity: 0.7;

  transition: all 0.13s ease-in-out;
  color: #fff;
  font-size: 17px;
  font-family: "Pretendard-SemiBold" !important;
`;
