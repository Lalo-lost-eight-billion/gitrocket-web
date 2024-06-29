import { Flex } from "@/styles/Flex";
import { palette } from "@/styles/palette";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;

  padding-top: 22px;
  ${Flex({ $flexDirection: "column", $rowGap: "25px" })}
`;

export const LogoBox = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 10px;
  border: 1px solid #b1b4b9;
`;

export const Input = styled.input`
  width: 667px;
  height: 50px;

  border-radius: 10px;
  border: 1px solid #b1b4b9;
  outline: none;

  font-size: 17px;
  padding: 0 18px;
  transition: all 0.15s ease-in-out;

  &:focus {
    border: 2px solid ${palette.commit_3};
  }

  &::placeholder {
    color: #ddd;
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 45px;

  background-color: ${palette.commit_3};
  color: #fff;
  opacity: 0.8;

  font-size: 18px;
  font-family: "Pretendard-Bold" !important;
  cursor: pointer;

  outline: none;
  border: none;
  border-radius: 10px;

  transition: all 0.15s ease-in-out;
`;
