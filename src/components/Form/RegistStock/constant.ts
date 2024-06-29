import { Input, LogoBox } from "./style";

export const REGIST_STOCK_STEPS = [
  {
    guideText: "1. 먼저 이미지가 필요해요, 1:1 비율의 이미지가 가장 이쁘답니다",
    component: LogoBox,
  },
  {
    guideText: "2. 그 다음, 주식(동아리)의 이름을 알려주세요",
    component: Input,
    placeholder: "ex) B1ND",
  },
  {
    guideText: "3. 마지막으로, Oraganization 링크가 필요해요",
    component: Input,
    placeholder: "ex) https://~~~",
  },
];
