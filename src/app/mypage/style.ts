import { Flex } from "@/styles/Flex";
import { palette } from "@/styles/palette";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: ${palette.commit_3};
`;

export const ProfileWrap = styled.div`
  width: 100%;

  position: absolute;
  bottom: -180px;

  ${Flex({ $flexDirection: "column", $alignItems: "center", $rowGap: "15px" })}
`;

export const StyledImage = css`
  border-radius: 100px;
  border: 5px solid ${palette.commit_3};
  object-fit: cover;
`;

export const Name = styled.div`
  font-size: 28px;
  font-family: "Pretendard-SemiBold" !important;
`;

export const PossessionMoney = styled.p`
  font-size: 20px;
  font-family: "Pretendard-Bold" !important;

  span {
    font-family: "Pretendard-Bold" !important;
    color: ${palette.commit_3};
    padding-right: 5px;
  }
`;

export const SignOutText = styled.p`
  font-size: 17px;
  font-family: "Pretendard-SemiBold" !important;
  color: #838181;
  cursor: pointer;
`;

export const Wrap = styled.div`
  width: 1160px;
  height: 100%;

  margin: 0 auto;
  margin-top: 240px;
  padding-top: 60px;

  border-top: 1px solid #d9d9d9;
  ${Flex({ $flexDirection: "column", $rowGap: "70px" })}
`;
