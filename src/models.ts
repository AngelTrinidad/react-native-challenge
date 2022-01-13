export interface Coin {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
  supply: number;
  maxSupply: number | null;
  marketCapUsd: number;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  roles: string;
  status: string;
}
