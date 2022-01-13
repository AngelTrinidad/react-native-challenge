import React from "react";
import renderer from "react-test-renderer";
import Heading from "../../../components/ui/Heading";

describe("Test Heading component", () => {
  it("should render Heading", () => {
    const { toJSON } = renderer.create(<Heading>Testing</Heading>);
    expect(toJSON()).toMatchSnapshot();
  });
});
