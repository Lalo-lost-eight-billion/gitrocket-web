"use client";

import React, { useState } from "react";
import * as S from "./style";
import Img from "../Img";
import { Row } from "@/styles/Flex";
import { HEADER_ITEMS } from "./constant";
import { usePathname, useRouter } from "next/navigation";
import Portal from "../Portal";
import Modal from "../Modal";
import RegistStock from "../Form/RegistStock";
import { Token } from "@/libs/token";
import { ACCESS_KEY } from "@/constants/auth.constant";
import SignIn from "../Form/SignIn";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isActiveRegistStockModal, setIsActiveRegistStockModal] =
    useState(false);
  const [isActiveSignInMoal, setIsActiveSignInMoal] = useState(false);

  const haveToken = Token.getToken(ACCESS_KEY) !== null;

  const handleHeaderItemClick = (link: string | null) => {
    if (link === null) {
      haveToken
        ? setIsActiveRegistStockModal(true)
        : window.alert("로그인 필요한 서비스입니다!");
    } else {
      router.push(link);
    }
  };

  return (
    <>
      <S.Container>
        <Row $alignItems={"center"}>
          <Img
            src={"/icons/logo.svg"}
            width={140}
            height={36}
            onClick={() => (window.location.href = "/")}
            cursor={"pointer"}
            customStyle={S.StyledLogo}
            alt="logo"
          />
          <S.Ul>
            {HEADER_ITEMS.map((item, idx) => (
              <S.Li key={idx} onClick={() => handleHeaderItemClick(item.link)}>
                <>{item.title}</>
                {item.link === pathname && <S.SelectBottomLine />}
              </S.Li>
            ))}
          </S.Ul>
        </Row>

        {haveToken ? (
          <S.Profile
            $isSelect={pathname === "/mypage"}
            onClick={() => router.push("/mypage")}
          >
            <Img
              src={"/icons/user.svg"}
              width={24}
              height={24}
              alt="user"
              cursor={"pointer"}
            />
          </S.Profile>
        ) : (
          <S.SignInText onClick={() => setIsActiveSignInMoal(true)}>
            로그인
          </S.SignInText>
        )}
      </S.Container>

      <Portal>
        {isActiveRegistStockModal && (
          <Modal setIsActiveModal={setIsActiveRegistStockModal}>
            <Modal.Header
              setIsActiveModal={setIsActiveRegistStockModal}
              title="주식을 등록해보세요"
            />
            <RegistStock />
          </Modal>
        )}

        {isActiveSignInMoal && (
          <Modal setIsActiveModal={setIsActiveSignInMoal}>
            <Modal.Header
              setIsActiveModal={setIsActiveRegistStockModal}
              title="Github로 간편하게 로그인하기"
            />
            <SignIn />
          </Modal>
        )}
      </Portal>
    </>
  );
};

export default Header;
