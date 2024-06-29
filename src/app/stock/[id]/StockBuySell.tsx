"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import { Column, Row } from "@/styles/Flex";

type BuySell = "매수" | "매도";

const StockBuySell = () => {
  const [buySell, setBuySell] = useState<BuySell>("매수");

  return (
    <S.StockBuySellWrap>
      <SwitchBuySell buySell={buySell} setBuySell={setBuySell} />
      <BuySellForm buySell={buySell} />
    </S.StockBuySellWrap>
  );
};

export default StockBuySell;

interface Props {
  buySell: BuySell;
  setBuySell: Dispatch<SetStateAction<BuySell>>;
}

const SwitchBuySell = ({ buySell, setBuySell }: Props) => {
  return (
    <Row $width={"100%"} $height={"45px"}>
      {["매수", "매도"].map((item, idx) => (
        <S.BuySellSelectButton
          key={idx}
          $buySell={item === buySell}
          onClick={() => setBuySell(item as BuySell)}
        >
          {item}
          {item === buySell && <S.SelectBottomLine />}
        </S.BuySellSelectButton>
      ))}
    </Row>
  );
};

const BuySellForm = ({ buySell }: Omit<Props, "setBuySell">) => {
  return (
    <S.Form onSubmit={(e) => e.preventDefault()}>
      <Row $alignItems={"center"} $justifyContent={"space-between"}>
        <S.BuySellItemTitle>주문유형</S.BuySellItemTitle>

        <Row $alignItems={"center"} $columnGap={"15px"}>
          {["지정가", "시장가", "예약-지정가"].map((item, idx) => (
            <Row key={idx} $alignItems={"center"} $columnGap={"5px"}>
              <input type="radio" name="order" />
              <S.OrderTypeText>{item}</S.OrderTypeText>
            </Row>
          ))}
        </Row>
      </Row>

      <Row $justifyContent={"space-between"}>
        <S.BuySellItemTitle>주문가능</S.BuySellItemTitle>
        <S.CanOrderText>
          <span>100,000,000</span> 코인
        </S.CanOrderText>
      </Row>

      <Row $justifyContent={"space-between"}>
        <S.BuySellItemTitle>{buySell}가격</S.BuySellItemTitle>
        <S.Input value={"87,849,000"} />
      </Row>

      <Row $alignItems={"center"} $justifyContent={"space-between"}>
        <S.BuySellItemTitle>주문수량</S.BuySellItemTitle>
        <S.Input placeholder="0" />
      </Row>

      <Row $alignItems={"center"} $justifyContent={"space-between"}>
        <S.BuySellItemTitle>주문총액</S.BuySellItemTitle>
        <S.Input value="0" />
      </Row>

      <Column $width={"100%"} $alignItems={"flex-end"} $rowGap={"10px"}>
        <S.MinimumOrderAmount>최소주문금액: 100 코인</S.MinimumOrderAmount>
        <S.ExcuteBuySellButton type="submit">
          {buySell}하기
        </S.ExcuteBuySellButton>
      </Column>
    </S.Form>
  );
};
