import { Coin } from "../../models";
import { DataResponse } from "../../types";

export type CoinListParams = {
  limit?: number
}

export type CoinListResponse = DataResponse<Coin[]>;

export type CoinDetailResponse = DataResponse<Coin>;
