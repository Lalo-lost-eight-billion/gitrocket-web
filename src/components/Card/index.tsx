"use client";

import React from "react";
import Img from "../Img";
import * as S from "./style";
import { Column } from "@/styles/Flex";

interface Props {
  onClick: () => void;
  clubName: string;
  clubImage: string;
  price: {
    종가: string;
    고가: string;
    저가: string;
  };
}

type priceType = "종가" | "고가" | "저가";

const Card = ({
  onClick,
  clubName,
  clubImage = "/images/minoru.png",
  price,
}: Props) => {
  const priceList: priceType[] = ["종가", "고가", "저가"];

  return (
    <S.CardBox onClick={onClick}>
      <S.Name>{clubName}</S.Name>

      <S.ImageWrap>
        <Img src={clubImage} width={224} height={85} alt="image" />
        <S.ImageFilter />
      </S.ImageWrap>

      <Column
        $width={"100%"}
        $height={"50%"}
        $rowGap={"7px"}
        $padding={"13px 17px"}
      >
        {priceList.map((item, idx) => (
          <S.Text key={idx} $priceType={item}>
            {item} <span>{price[item]}</span>
          </S.Text>
        ))}
      </Column>
    </S.CardBox>
  );
};

export default Card;
