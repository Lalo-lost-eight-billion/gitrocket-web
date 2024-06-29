"use client";

import React from "react";
import * as S from "./style";
import Title from "@/components/Title";

const StockHeader = ({ clubName }: { clubName: string }) => {
  return (
    <S.HeaderWrap>
      <Title
        content={`${clubName}의 현재 시세를 파악해보세요!`}
        size={"22px"}
      />
    </S.HeaderWrap>
  );
};

export default StockHeader;
