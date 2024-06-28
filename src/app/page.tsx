"use client";

import Card from "@/components/Card";
import Title from "@/components/Title";
import {
  DECREASE_CLUB_STOKE_ITMES,
  INCREASE_CLUB_STOKE_ITMES,
  INQUIRED_CLUB_STOKE_ITEMS,
  REGISTED_CLUB_STOKE_ITMES,
} from "@/constants/dummy.constant";
import { Column, Flex, Row } from "@/styles/Flex";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Home = () => {
  const router = useRouter();

  return (
    <Container>
      <RegistedClubStoke router={router} />
      <InquiredClubStoke router={router} />
      <IncreaseClubStoke router={router} />
      <DecreaseClubStoke router={router} />
    </Container>
  );
};

const RegistedClubStoke = ({ router }: { router: AppRouterInstance }) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="등록된 동아리 주식을 확인해봐요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {REGISTED_CLUB_STOKE_ITMES.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => router.push(`/stoke/${idx}`)}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

const InquiredClubStoke = ({ router }: { router: AppRouterInstance }) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="최근 조회한 동아리 주식이에요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {INQUIRED_CLUB_STOKE_ITEMS.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => router.push(`/stoke/${idx}`)}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

const IncreaseClubStoke = ({ router }: { router: AppRouterInstance }) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="현재 상승률이 높은 주식들이에요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {INCREASE_CLUB_STOKE_ITMES.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => router.push(`/stoke/${idx}`)}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

const DecreaseClubStoke = ({ router }: { router: AppRouterInstance }) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="현재 하락율이 높은 주식들이에요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {DECREASE_CLUB_STOKE_ITMES.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => router.push(`/stoke/${idx}`)}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

export default Home;

const Container = styled.div`
  width: 1160px;
  height: 100%;
  margin: 0 auto;

  ${Flex({ $flexDirection: "column", $rowGap: "70px" })}
`;
