"use client";

import React, { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";
import { useEscCloseModal } from "@/hooks/useEscCloseModal";
import { useLockScroll } from "@/hooks/useLockScroll";
import styled from "styled-components";
import { Flex, Row } from "@/styles/Flex";
import Img from "../Img";
import Title from "../Title";

interface Props {
  children: ReactNode;
  setIsActiveModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, setIsActiveModal }: Props) => {
  useLockScroll();
  useEscCloseModal(() => setIsActiveModal(false));

  return (
    <ModalWrap onClick={() => setIsActiveModal(false)}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Row
          $width={"100%"}
          $alignItems={"center"}
          $justifyContent={"space-between"}
        >
          <Title content="주식을 등록해보세요" />
          <Img
            src={"icons/cancel.svg"}
            width={16}
            height={16}
            onClick={() => setIsActiveModal(false)}
            cursor={"pointer"}
            alt="cancel"
          />
        </Row>

        {children}
      </Box>
    </ModalWrap>
  );
};

export default Modal;

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  ${Flex({ $alignItems: "center", $justifyContent: "center" })}
`;

const Box = styled.div`
  border-radius: 25px;
  background-color: #fff;
  padding: 32px 35px;

  ${Flex({ $flexDirection: "column", $rowGap: "15px" })}
`;
