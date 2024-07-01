import { StockItemType } from "@/types/stock/stock.type";

export const CLUB_ATTRIBUTES_ITEMS = [
  "순위",
  "동아리",
  "현재가",
  "고가",
  "저가",
] as const;

export const CLUB_TUBLE_ITEMS: Omit<
  StockItemType,
  "clubImage" | "variationRate"
>[] = [
  {
    clubName: "B1ND",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "CNS",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "DUCAMI",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "ALT",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "DLC",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "모디",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "inD",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "Connect",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "8bit",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "삼디",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
] as const;

export const INQUIRED_CLUB_STOCK_ITEMS: Omit<
  StockItemType,
  "clubImage" | "variationRate"
>[] = [
  {
    clubName: "B1ND",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "CNS",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "DUCAMI",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "ALT",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "DLC",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
] as const;

export const INCREASE_CLUB_STOCK_ITMES: Omit<
  StockItemType,
  "clubImage" | "variationRate"
>[] = [
  {
    clubName: "B1ND",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "CNS",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "DUCAMI",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "ALT",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
  {
    clubName: "DLC",
    coin: {
      present: "87,849,000",
      high: "88,249,000",
      low: "87,630,000",
    },
  },
] as const;

export const USER_ATTRIBUTES_ITEMS = [
  "순위",
  "이름",
  "깃허브",
  "총 커밋",
] as const;

export const USER_TUBLE_ITEMS = [
  {
    name: "박상현",
    githubId: "Sanghyun0505",
    commits: 1786,
  },
  { name: "이민규", githubId: "Mingyuuu0108", commits: 1367 },
  { name: "구자현", githubId: "levhyun", commits: 891 },
  { name: "도현욱", githubId: "wsi1212", commits: 827 },
  { name: "김종윤", githubId: "rlawhddbs", commits: 279 },
  { name: "김종윤", githubId: "PARAOOO", commits: 268 },
  { name: "김종윤", githubId: "aprnald74", commits: 266 },
] as const;
