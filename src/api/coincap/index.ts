import axios from "./axiosInstance";
import { CoinListResponse, CoinDetailResponse, CoinListParams } from "./types";

export const getCoinList = async (params: CoinListParams = { limit: 10 }) => {
  return axios
    .request<CoinListResponse>({
      method: "GET",
      url: "assets",
      params: {
        limit: params.limit,
      },
    })
    .then(({ data }) => data.data);
};

export const getCoinDetail = async (assetId: string) => {
  return axios
    .request<CoinDetailResponse>({
      method: "GET",
      url: `assets/${assetId}`,
    })
    .then(({ data }) => data.data);
};
