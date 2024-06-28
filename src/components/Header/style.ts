import { Flex } from "@/styles/Flex";
import styled from "styled-components";
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
  background-color: ${palette.commit_4};
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f3f3f4;
  border-radius: 10px;
  cursor: pointer;
  ${Flex({ $alignItems: "center", $justifyContent: "center" })}
`;
