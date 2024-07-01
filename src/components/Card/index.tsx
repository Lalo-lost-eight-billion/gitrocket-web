"use client";

import React from "react";
import Img from "../Img";
import * as S from "./style";
import { Column, Row } from "@/styles/Flex";

interface Props {
  onClick?: () => void;

  clubName: string;
  clubImage: string;
  variationRate: string;
  coin: {
    present: string;
    high: string;
    low: string;
  };
}

type coinType = "present" | "high" | "low";

const Card = ({
  onClick,
  clubName,
  clubImage = "/images/minoru.png",
  variationRate,
  coin,
}: Props) => {
  const coinList = ["현재가", "고가", "저가"];

  const convertCoinTypeToEnglish = (coin: string) => {
    switch (coin) {
      case "현재가":
        return "present";
      case "고가":
        return "high";
      case "저가":
        return "low";
      default:
        return "";
    }
  };

  return (
    <S.CardBox onClick={onClick}>
      <S.Name $isUp={variationRate[0] === "+"}>
        {clubName} <span>{variationRate}</span>
      </S.Name>

      <S.ImageWrap>
        <Img
          src={clubImage}
          width={224}
          height={85}
          customStyle={S.StyledImage}
          alt="image"
        />
        <S.ImageFilter />
      </S.ImageWrap>

      <Column
        $width={"100%"}
        $height={"50%"}
        $rowGap={"7px"}
        $padding={"12px 17px"}
      >
        {coinList.map((item, idx) => (
          <Row $alignItems={"center"} key={idx}>
            <S.CoinType>{item}</S.CoinType>
            <S.Coin $coinType={convertCoinTypeToEnglish(item) as coinType}>
              {coin[convertCoinTypeToEnglish(item) as coinType]}
            </S.Coin>
          </Row>
        ))}
      </Column>
    </S.CardBox>
  );
};

export default Card;
