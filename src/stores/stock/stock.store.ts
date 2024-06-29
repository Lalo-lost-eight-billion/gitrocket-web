import { StockItemType } from "@/types/stock/stock.type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const StockItemAtom = atom<StockItemType | null>({
  key: "StockItemKey",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
