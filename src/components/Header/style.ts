import { Flex } from "@/styles/Flex";
import styled, { css } from "styled-components";
import { palette } from "@/styles/palette";

export const Container = styled.header`
  width: 100%;
  height: 65px;

  border-bottom: 1px solid #f3f3f3;
  padding: 0 50px;
  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;

  ${Flex({ $alignItems: "center", $justifyContent: "space-between" })}
`;

export const StyledLogo = css`
  &:active {
    opacity: 0.7;
  }
`;

export const Ul = styled.ul`
  padding-left: 146px;

  ${Flex({ $alignItems: "center", $columnGap: "38px" })}
`;

export const Li = styled.li`
  cursor: pointer;
  height: 65px;
  color: #484c50;
  position: relative;
  ${Flex({ $alignItems: "center" })};
`;

export const SelectBottomLine = styled.div`
  width: 100%;
  height: 2px;

  position: absolute;
  bottom: 0;
  background-color: ${palette.commit_3};
`;

export const Profile = styled.div<{ $isSelect: boolean }>`
  width: 40px;
  height: 40px;

  background-color: #f3f3f4;
  cursor: pointer;

  border-radius: 10px;
  border: ${({ $isSelect }) => $isSelect && "2px solid #ddd"};

  ${Flex({ $alignItems: "center", $justifyContent: "center" })};
`;

export const SignInText = styled.div`
  cursor: pointer;
  color: #484c50;
  padding: 10px 15px;
  border-radius: 10px;

  transition: all 0.1s ease-in-out;
  border: 1px solid #ddd;
  &:hover {
    border: 1px solid ${palette.commit_3};
  }

  ${Flex({ $alignItems: "center", $justifyContent: "center" })}
`;
