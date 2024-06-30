"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import * as S from "./style";
import { STOCK_DATA_ITEMS } from "./constant";
import { palette } from "@/styles/palette";

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
    plotOptions: {
      candlestick: {
        colors: {
          upward: palette.commit_3,
          downward: "#B1B4B9",
        },
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
