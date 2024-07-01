"use client";

import React from "react";
import * as S from "./style";
import StockRecentlyStatus from "./StockRecentlyStatus";
import StockHeader from "./StockHeader";
import { Row } from "@/styles/Flex";
import StockGraph from "./StockGraph";
import StockBuySell from "./StockBuySell";
import { useRecoilValue } from "recoil";
import { StockItemAtom } from "@/stores/stock/stock.store";

const Stock = () => {
  const stokeItem = useRecoilValue(StockItemAtom);

  return (
    <S.Container>
      <StockHeader clubName={stokeItem?.clubName!} />

      <StockRecentlyStatus
        variationRate={stokeItem?.variationRate!}
        coin={stokeItem?.coin!}
      />

      <Row $width={"100%"} $columnGap={"20px"}>
        <StockGraph clubName={stokeItem?.clubName!} />
        <StockBuySell />
      </Row>
    </S.Container>
  );
};

export default Stock;
