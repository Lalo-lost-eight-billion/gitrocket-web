import { Flex } from "@/styles/Flex";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;

  padding-top: 20px;
`;

export const GithubButton = styled.button`
  width: 420px;
  height: 60px;

  outline: none;
  border: none;

  background-color: #000;
  border-radius: 10px;
  cursor: pointer;

  ${Flex({ $alignItems: "center", $justifyContent: "center" })}

  p {
    color: #fff;
    font-size: 17px;
    font-family: "Pretendard-Bold" !important;
  }

  transition: all 0.17s ease-in-out;
  &:active {
    opacity: 0.8;
  }
`;
