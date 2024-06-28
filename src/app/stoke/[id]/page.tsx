"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Stoke = () => {
  const pathname = Number(usePathname().split("/stoke/")[1]);
  return <div>{pathname}</div>;
};

export default Stoke;
