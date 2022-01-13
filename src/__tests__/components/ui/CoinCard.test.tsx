import React from "react";
import renderer from "react-test-renderer";
import CoinCard from "../../../components/common/CoinCard/CoinCard";

const mockCoin = {
  id: "bitcoin",
  rank: 1,
  symbol: "BTC",
  name: "Bitcoin",
  supply: 18699443.0,
  maxSupply: 21000000.0,
  marketCapUsd: 1015247880827.1353075029297279,
  priceUsd: 54292.9477004815227653,
  changePercent24Hr: -6.511687012348302,
};

describe("Test CoinCard component", () => {
  it("should render CoinCard", () => {
    const { toJSON } = renderer.create(<CoinCard coin={mockCoin} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render CoinCard with details", () => {
    const { toJSON } = renderer.create(<CoinCard coin={mockCoin} withDetail  />);
    expect(toJSON()).toMatchSnapshot();
  });
});
