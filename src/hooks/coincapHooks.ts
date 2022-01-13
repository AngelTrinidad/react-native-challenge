import React from "react";
import { getCoinList, getCoinDetail } from "../api/coincap";
import { Coin } from "../models";
import { RequestHook } from "./types";

const useCoinList = () => {
  const [data, setData] = React.useState<Coin[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleRequest = (): void => {
    setLoading(true);
    getCoinList()
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError("Something wrong happened to get the coin list");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleRequest();
  }, []);

  return { data, loading, error, reload: handleRequest };
};

const useCoinDetail = (coinId: string): RequestHook<Coin> => {
  const [data, setData] = React.useState<Coin | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleRequest = () => {
    setLoading(true);
    getCoinDetail(coinId)
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError("Something wrong happened to get the coin detail");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleRequest();
  }, [coinId]);

  return { data, loading, error, reload: handleRequest };
};

export { useCoinList, useCoinDetail };
