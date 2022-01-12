export interface Coin {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
  supply: number;
  maxSupply: number;
  marketCapUsd: number
}
