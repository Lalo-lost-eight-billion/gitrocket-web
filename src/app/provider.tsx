"use client";

import { GlobalStyles } from "@/styles/GlobalStyles";
import StyledRegistry from "@/styles/StyledRegistry";
import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <StyledRegistry>
          <GlobalStyles />
          {children}
        </StyledRegistry>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
