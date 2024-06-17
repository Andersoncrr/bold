import React from "react";
import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
  test("renders Header component", async () => {
    const { getByText } = render(<Header />);

    const ayudaText = getByText("Ayuda");
    expect(ayudaText).toBeInTheDocument();
  });
});
