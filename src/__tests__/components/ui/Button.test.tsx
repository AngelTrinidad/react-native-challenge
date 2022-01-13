import React from "react";
import renderer from "react-test-renderer";
import Button from "../../../components/ui/Button";

describe("Test Button component", () => {
  it("should render Button", () => {
    const { toJSON } = renderer.create(
      <Button title="Test button" onPress={jest.fn} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
