"use client";

import React from "react";
import * as S from "./style";
import { Column, Row } from "@/styles/Flex";
import { REGIST_STOCK_STEPS } from "./constant";

const RegistStock = () => {
  return (
    <S.Form onSubmit={(e) => e.preventDefault()}>
      {REGIST_STOCK_STEPS.map((item, idx) => (
        <Column key={idx} $width={"100%"} $rowGap={"16px"}>
          <p>{item.guideText}</p>
          <item.component placeholder={item.placeholder} />
        </Column>
      ))}

      <Row $width={"100%"} $alignItems={"center"} $justifyContent={"flex-end"}>
        <S.Button type="submit">등록</S.Button>
      </Row>
    </S.Form>
  );
};

export default RegistStock;
