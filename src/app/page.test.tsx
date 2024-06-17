import React from "react";
import { render } from "@testing-library/react";
import Home from "./page";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
    usePathname: () => null,
  };
});

jest.mock("@/actions", () => ({
  getProducts: () => ({
    products: [
      {
        id: 14,
        status: "unrealized",
        paymentType: "linkCharge",
        datetime: "september",
        date: "2023-09-23T07:30:00Z",
        paymentMethod: "**** **** **** 6789",
        transactionId: "STU901VWX",
        amount: 110000000,
        deduction: true,
        deductionAmount: 16500000,
      },
    ],
  }),
}));

describe("Home Component", () => {
  test("renders Home component with correct data", async () => {
    window.fetch = jest.fn();
    const searchParams = {
      dataphoneCharge: "true",
      linkCharge: "false",
      all: "false",
      day: "today",
    };
    const jsx = await Home({ searchParams: searchParams });
    render(jsx);
  });
});
