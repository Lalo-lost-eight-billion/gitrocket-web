"use client";

import React, { ReactNode } from "react";
import { Column, Row } from "@/styles/Flex";
import { palette } from "@/styles/palette";
import { CSSProperties } from "styled-components";
import * as S from "./style";
import Title from "@/components/Title";
import { StockItemType } from "@/types/stock/stock.type";

const StockRecentlyStatus = ({
  variationRate,
  price,
}: Omit<StockItemType, "clubName" | "clubImage">) => {
  const { present, high, low } = price;

  return (
    <Row
      $width={"100%"}
      $height={"88px"}
      $padding={"10px 0 0 0"}
      $justifyContent={"space-between"}
    >
      <PresentMarketPrice
        presentPrice={present}
        variationRate={variationRate}
      />

      <Row $alignItems={"center"} $columnGap={"25px"}>
        <StockStatus>
          <StockStatus.Item
            title={"고가"}
            price={high}
            color={palette.commit_5}
          />
          <S.Line />
          <StockStatus.Item title={"저가"} price={low} color={"#B1B4B9"} />
        </StockStatus>

        <StockStatus>
          <StockStatus.Item title={"거래량(24h)"} price={"3,086.123"} />
          <S.Line />
          <StockStatus.Item title={"거래대금(24H)"} price={"266,946,609,885"} />
        </StockStatus>
      </Row>
    </Row>
  );
};

export default StockRecentlyStatus;

const PresentMarketPrice = ({
  ...props
}: {
  presentPrice: string;
  variationRate: string;
}) => {
  const { presentPrice, variationRate } = props;

  // 가격과 변동률을 숫자로 변환
  const numericPresentPrice = Number(presentPrice.replaceAll(",", ""));
  const numericVariationRate = Number(variationRate.replace("%", ""));

  // 변동된 가격 계산
  const variationPrice = (numericPresentPrice * numericVariationRate) / 100;

  return (
    <Column $rowGap={"15px"}>
      <Row $alignItems={"flex-end"} $columnGap={"5px"}>
        <Title
          content={props.presentPrice}
          size={"32px"}
          color={numericVariationRate > 0 ? palette.commit_4 : "#B1B4B9"}
        />
        <Title content="코인" size={"18px"} />
      </Row>

      <S.VariationRateText $isUp={numericVariationRate > 0}>
        {props.variationRate} ({variationPrice.toLocaleString()})
      </S.VariationRateText>
    </Column>
  );
};

const StockStatus = ({ children }: { children: ReactNode }) => {
  return <S.StatusWrap>{children}</S.StatusWrap>;
};

const StockStatusItem = ({
  color = "#000",
  ...props
}: {
  title: string;
  price: string;
  color?: CSSProperties["color"];
}) => {
  return (
    <Row
      $width={"100%"}
      $height={"50%"}
      $alignItems={"center"}
      $columnGap={"20px"}
      $justifyContent={"space-between"}
    >
      <S.StatusTitle>{props.title}</S.StatusTitle>
      <S.StatusPrice $color={color}>{props.price}</S.StatusPrice>
    </Row>
  );
};

StockStatus.Item = StockStatusItem;
