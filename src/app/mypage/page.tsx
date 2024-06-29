"use client";

import React from "react";
import * as S from "./style";
import Img from "@/components/Img";
import { Column, Row } from "@/styles/Flex";
import Title from "@/components/Title";
import { MY_STOCK_ITEMS, RECENTLY_TRADED_STOCK_ITEMS } from "./constant";
import Card from "@/components/Card";

const MyPage = () => {
  return (
    <S.Container>
      <S.Background>
        <S.ProfileWrap>
          <Img
            src={"/images/plusUltra.png"}
            width={150}
            height={150}
            customStyle={S.StyledImage}
            alt="profile"
          />

          <S.Name>박상현</S.Name>

          <S.PossessionMoney>
            <span>100,000,000원</span>
            보유
          </S.PossessionMoney>
        </S.ProfileWrap>
      </S.Background>

      <S.Wrap>
        <MyStock />
        <RecentlyTradedStock />
      </S.Wrap>
    </S.Container>
  );
};

const MyStock = () => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content={"박상현님이 현재 보유하고 있는 주식이에요"} />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {MY_STOCK_ITEMS.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </Row>
    </Column>
  );
};

const RecentlyTradedStock = () => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content={"최근 거래한 주식이에요"} />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {RECENTLY_TRADED_STOCK_ITEMS.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </Row>
    </Column>
  );
};

export default MyPage;
