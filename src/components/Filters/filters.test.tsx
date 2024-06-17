import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Filters } from ".";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => {
      const params = new URLSearchParams();
      params.set("day", "today");

      return {
        get: (key: string) => params.get(key),
      };
    },
    usePathname: () => null,
  };
});

describe("Filters Component", () => {
  test("renders Filters component and click filters", async () => {
    const { getByText, getByTestId } = render(<Filters />);
    fireEvent.click(getByText("Hoy"));
    fireEvent.click(getByText("FILTRAR"));
    fireEvent.click(getByText("Aplicar"));

    const input: any = getByTestId("linkCharge");

    expect(input).toBeInTheDocument();

    userEvent.click(input);
    userEvent.keyboard("test");

    expect(input.checked).toBe(true);
  });
});
