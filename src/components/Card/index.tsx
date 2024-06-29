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
  price: {
    present: string;
    high: string;
    low: string;
  };
}

type priceType = "present" | "high" | "low";

const Card = ({
  onClick,
  clubName,
  clubImage = "/images/minoru.png",
  variationRate,
  price,
}: Props) => {
  const priceList = ["현재가", "고가", "저가"];

  const convertPriceTypeToEnglish = (price: string) => {
    switch (price) {
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
        {priceList.map((item, idx) => (
          <Row $alignItems={"center"} key={idx}>
            <S.PriceType>{item}</S.PriceType>
            <S.Price $priceType={convertPriceTypeToEnglish(item) as priceType}>
              {price[convertPriceTypeToEnglish(item) as priceType]}
            </S.Price>
          </Row>
        ))}
      </Column>
    </S.CardBox>
  );
};

export default Card;
