"use client";

import React, { useState } from "react";
import * as S from "./style";
import { Row } from "@/styles/Flex";
import Club from "./club";
import User from "./user";

const Ranking = () => {
  const [switchItemIdx, setSwitchItemIdx] = useState(0);

  return (
    <S.Container>
      <Row $alignItems={"center"} $columnGap={"10px"}>
        {["동아리", "사용자"].map((item, idx) => (
          <S.SelectBox
            key={idx}
            $isSwitch={idx === switchItemIdx}
            onClick={() => setSwitchItemIdx(idx)}
          >
            {item}
          </S.SelectBox>
        ))}
      </Row>

      {switchItemIdx === 0 ? <Club /> : <User />}
    </S.Container>
  );
};

export default Ranking;
