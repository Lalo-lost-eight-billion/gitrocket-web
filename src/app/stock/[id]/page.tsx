"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Stock = () => {
  const pathname = Number(usePathname().split("/stock/")[1]);
  return <div>{pathname}</div>;
};

export default Stock;
