"use client";

import Img from "@/components/Img";
import * as S from "./style";
import { Token } from "@/libs/token";
import { ACCESS_KEY, REFRESH_KEY } from "@/constants/auth.constant";

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Token.setToken(ACCESS_KEY, "액세스 토큰");
    Token.setToken(REFRESH_KEY, "리프레쉬 토큰");

    window.location.href = "/";
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.GithubButton type="submit">
        <Img src={"icons/github.svg"} width={24} height={24} alt="github" />
        <p>Github 로그인하기</p>
      </S.GithubButton>
    </S.Form>
  );
};

export default SignIn;
