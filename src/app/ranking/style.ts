import { Flex } from "@/styles/Flex";
import { palette } from "@/styles/palette";
import styled, { CSSProperties } from "styled-components";

export const Container = styled.div`
  width: 1160px;
  height: 100%;

  margin: 0 auto;
  padding-top: 50px;

  ${Flex({ $flexDirection: "column" })}
`;

export const SelectBox = styled.div<{ $isSwitch: boolean }>`
  width: 80px;
  height: 30px;
  border-radius: 30px;

  background-color: ${({ $isSwitch }) =>
    $isSwitch ? palette.commit_3 : "#d9d9d9"};
  color: #ffffff;
  padding: 4px 17px;

  transition: all 0.15s ease-in-out;
  cursor: pointer;

  ${Flex({ $alignItems: "center", $justifyContent: "center" })}
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  ${Flex({ $flexDirection: "column", $rowGap: "14px" })}
`;

export const AttributeWrap = styled.ul`
  width: 100%;
  height: 50px;

  border-radius: 10px;
  padding: 0 65px;
  border: 2px solid ${palette.commit_3};

  ${Flex({ $alignItems: "center", $justifyContent: "space-between" })}
`;

export const Text = styled.li<{ $color?: CSSProperties["color"] }>`
  width: 150px;
  text-align: center;

  font-size: 20px;
  font-family: "Pretendard-SemiBold" !important;

  color: ${({ $color }) => $color || "#000"};
`;

export const TubleWrap = styled.ul`
  width: 100%;
  height: 75px;

  cursor: pointer;
  background-color: #fff;

  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0 65px;

  ${Flex({ $alignItems: "center", $justifyContent: "space-between" })};
`;
