"use client";

import React from "react";
import * as S from "./style";
import Title from "@/components/Title";
import { CLUB_ATTRIBUTES_ITEMS, CLUB_TUBLE_ITEMS } from "./constant";
import { palette } from "@/styles/palette";
import { useRouter } from "next/navigation";

const Club = () => {
  const router = useRouter();

  return (
    <S.Wrap>
      <Title content="현재 주가가 높은 동아리 순으로 확인해봐요" />

      <S.AttributeWrap>
        {CLUB_ATTRIBUTES_ITEMS.map((item, idx) => (
          <S.Text key={idx}>{item}</S.Text>
        ))}
      </S.AttributeWrap>

      {CLUB_TUBLE_ITEMS.map((item, idx) => (
        <S.TubleWrap key={idx} onClick={() => router.push(`/stock/${idx}`)}>
          <S.Text>{idx + 1}</S.Text>
          <S.Text>{item.clubName}</S.Text>
          <S.Text $color={palette.commit_3}>{item.price.현재가}</S.Text>
          <S.Text $color={palette.commit_5}>{item.price.고가}</S.Text>
          <S.Text $color={"#B1B4B9"}>{item.price.저가}</S.Text>
        </S.TubleWrap>
      ))}
    </S.Wrap>
  );
};

export default Club;
