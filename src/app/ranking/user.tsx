"use client";

import React from "react";
import * as S from "./style";
import Title from "@/components/Title";
import { USER_ATTRIBUTES_ITEMS, USER_TUBLE_ITEMS } from "./constant";
import { palette } from "@/styles/palette";

const User = () => {
  return (
    <S.Wrap>
      <Title content="현재 커밋 수가 가장 높은 사용자 순으로 확인해봐요" />

      <S.AttributeWrap>
        {USER_ATTRIBUTES_ITEMS.map((item, idx) => (
          <S.Text key={idx}>{item}</S.Text>
        ))}
      </S.AttributeWrap>

      {USER_TUBLE_ITEMS.map((item, idx) => (
        <S.TubleWrap
          key={idx}
          onClick={() =>
            window.open(`https://github.com/${item.githubId}`, "_blank")
          }
        >
          <S.Text>{idx + 1}</S.Text>
          <S.Text>{item.name}</S.Text>
          <S.Text>{item.githubId}</S.Text>
          <S.Text $color={palette.commit_3}>{item.commits} 커밋</S.Text>
        </S.TubleWrap>
      ))}
    </S.Wrap>
  );
};

export default User;
