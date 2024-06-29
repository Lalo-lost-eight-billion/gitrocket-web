"use client";

import { GlobalStyles } from "@/styles/GlobalStyles";
import StyledRegistry from "@/styles/StyledRegistry";
import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@/styles/fonts.css";
import Header from "@/components/Header";
import styled from "styled-components";

const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <StyledRegistry>
          <GlobalStyles />

          <Header />
          <Container>{children}</Container>
        </StyledRegistry>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px 0 50px;
`;
