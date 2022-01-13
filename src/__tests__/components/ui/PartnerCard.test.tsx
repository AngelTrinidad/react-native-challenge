import React from "react";
import renderer from "react-test-renderer";
import PartnerCard from "../../../components/common/PartnerCard/PartnerCard";

const mockPartner = {
  id: "partner-id",
  name: "partner-name",
  description: "Test description",
  roles: "React/RN developer",
  status: "Published",
};

describe("Test PartnerCard component", () => {
  it("should render PartnerCard", () => {
    const { toJSON } = renderer.create(<PartnerCard partner={mockPartner} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
