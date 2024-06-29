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
    현재가: string;
    고가: string;
    저가: string;
  };
}

type priceType = "현재가" | "고가" | "저가";

const Card = ({
  onClick,
  clubName,
  clubImage = "/images/minoru.png",
  variationRate,
  price,
}: Props) => {
  const priceList: priceType[] = ["현재가", "고가", "저가"];

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
            <S.Price $priceType={item}>{price[item]}</S.Price>
          </Row>
        ))}
      </Column>
    </S.CardBox>
  );
};

export default Card;
