"use client";

import React from "react";
import * as S from "./style";
import { Column, Row } from "@/styles/Flex";

const RegistStock = () => {
  return (
    <S.Form onSubmit={(e) => e.preventDefault()}>
      <FirstStep />
      <SecondStep />
      <ThirdStep />

      <Submit />
    </S.Form>
  );
};

const FirstStep = () => {
  return (
    <Column $width={"100%"} $rowGap={"16px"}>
      <p>1. 먼저 이미지가 필요해요, 1:1 비율의 이미지가 가장 이쁘답니다</p>
      <S.LogoBox />
    </Column>
  );
};

const SecondStep = () => {
  return (
    <Column $width={"100%"} $rowGap={"16px"}>
      <p>2. 그 다음, 주식(동아리)의 이름을 알려주세요</p>
      <S.Input placeholder="ex) B1ND" />
    </Column>
  );
};

const ThirdStep = () => {
  return (
    <Column $width={"100%"} $rowGap={"16px"}>
      <p>3. 마지막으로, Oraganization 링크가 필요해요</p>
      <S.Input placeholder="ex) https://~~~" />
    </Column>
  );
};

const Submit = () => {
  return (
    <Row $width={"100%"} $alignItems={"center"} $justifyContent={"flex-end"}>
      <S.Button type="submit">등록</S.Button>
    </Row>
  );
};

export default RegistStock;
