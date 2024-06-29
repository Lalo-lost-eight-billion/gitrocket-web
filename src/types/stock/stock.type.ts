export interface StockItemType {
  clubName: string;
  clubImage: string;
  variationRate: string;
  price: PriceType;
}

export interface PriceType {
  present: string;
  high: string;
  low: string;
}
