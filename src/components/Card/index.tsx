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

const Card = ({
  onClick,
  clubName,
  clubImage = "/images/minoru.png",
  price,
}: Props) => {
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
        <S.Text $priceType={"종가"}>
          종가 <span>{price.종가}</span>
        </S.Text>

        <S.Text $priceType={"고가"}>
          고가 <span>{price.고가}</span>
        </S.Text>

        <S.Text $priceType={"저가"}>
          저가 <span>{price.저가}</span>
        </S.Text>
      </Column>
    </S.CardBox>
  );
};

export default Card;
