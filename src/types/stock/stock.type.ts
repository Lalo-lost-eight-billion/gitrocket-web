export interface StockItemType {
  clubName: string;
  clubImage: string;
  variationRate: string;
  coin: StockCoinType;
}

export interface StockCoinType {
  present: string;
  high: string;
  low: string;
}
