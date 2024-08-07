"use client";

import Card from "@/components/Card";
import Title from "@/components/Title";
import {
  DECREASED_CLUB_STOCK_ITMES,
  INCREASED_CLUB_STOCK_ITMES,
  INQUIRED_CLUB_STOCK_ITEMS,
  REGISTED_CLUB_STOCK_ITMES,
} from "@/constants/dummy.constant";
import { StockItemAtom } from "@/stores/stock/stock.store";
import { Column, Flex, Row } from "@/styles/Flex";
import { StockItemType } from "@/types/stock/stock.type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const Home = () => {
  const router = useRouter();
  const setStokeItem = useSetRecoilState(StockItemAtom);

  return (
    <Container>
      <RegistedClubStock router={router} setStokeItem={setStokeItem} />
      <InquiredClubStock router={router} setStokeItem={setStokeItem} />
      <IncreasedClubStock router={router} setStokeItem={setStokeItem} />
      <DecreasedClubStock router={router} setStokeItem={setStokeItem} />
    </Container>
  );
};

interface ClubStockProps {
  router: AppRouterInstance;
  setStokeItem: Dispatch<SetStateAction<StockItemType | null>>;
}

const RegistedClubStock = ({ router, setStokeItem }: ClubStockProps) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="등록된 동아리 주식을 확인해봐요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {REGISTED_CLUB_STOCK_ITMES.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => {
              setStokeItem(item);
              router.push(`/stock/${idx}`);
            }}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

const InquiredClubStock = ({ router, setStokeItem }: ClubStockProps) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="최근 조회한 동아리 주식이에요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {INQUIRED_CLUB_STOCK_ITEMS.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => {
              setStokeItem(item);
              router.push(`/stock/${idx}`);
            }}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

const IncreasedClubStock = ({ router, setStokeItem }: ClubStockProps) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="현재 상승률이 높은 주식들이에요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {INCREASED_CLUB_STOCK_ITMES.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => {
              setStokeItem(item);
              router.push(`/stock/${idx}`);
            }}
            {...item}
          />
        ))}
      </Row>
    </Column>
  );
};

const DecreasedClubStock = ({ router, setStokeItem }: ClubStockProps) => {
  return (
    <Column $width={"100%"} $rowGap={"20px"}>
      <Title content="현재 하락율이 높은 주식들이에요" />

      <Row
        $width={"100%"}
        $flexWrap={"wrap"}
        $columnGap={"10px"}
        $rowGap={"20px"}
      >
        {DECREASED_CLUB_STOCK_ITMES.map((item, idx) => (
          <Card
            key={idx}
            onClick={() => {
              setStokeItem(item);
              router.push(`/stock/${idx}`);
            }}
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
  padding-top: 50px;

  ${Flex({ $flexDirection: "column", $rowGap: "70px" })}
`;
