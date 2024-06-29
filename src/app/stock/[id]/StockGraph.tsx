"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import * as S from "./style";
import { STOCK_DATA_ITEMS } from "./constant";

const StockGraph = ({ clubName }: { clubName: string }) => {
  const STOKE_GRAPH_OPTIONS: ApexCharts.ApexOptions = {
    chart: {
      type: "candlestick",
      height: 555,
    },
    title: {
      text: `${clubName} 주가 그래프`,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <S.StockGraphWrap>
      <ReactApexChart
        options={STOKE_GRAPH_OPTIONS}
        series={STOCK_DATA_ITEMS}
        type="candlestick"
        height={555}
      />
    </S.StockGraphWrap>
  );
};

export default StockGraph;
