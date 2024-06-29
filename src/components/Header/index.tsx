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

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isActieModal, setIsActiveModal] = useState(false);

  const handleHeaderItemClick = (link: string | null) => {
    if (link === null) {
      setIsActiveModal(true);
    } else {
      router.push(link);
    }
  };

  return (
    <>
      <S.Container>
        <Row $alignItems={"center"}>
          <Img
            src={"icons/logo.svg"}
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

        <S.Profile
          $isSelect={pathname === "/mypage"}
          onClick={() => router.push("/mypage")}
        >
          <Img
            src={"icons/user.svg"}
            width={24}
            height={24}
            alt="user"
            cursor={"pointer"}
          />
        </S.Profile>
      </S.Container>

      {isActieModal && (
        <Portal>
          <Modal setIsActiveModal={setIsActiveModal}>
            <RegistStock />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default Header;
