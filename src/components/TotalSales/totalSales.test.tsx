import React from "react";
import { render } from "@testing-library/react";
import { TotalSales } from ".";

describe("TotalSales Component", () => {
  test("renders TotalSales component", async () => {
    const { getByText } = render(
      <TotalSales
        day="today"
        products={[
          {
            id: 11,
            status: "success",
            paymentType: "dataphoneCharge",
            datetime: "september",
            date: "2023-09-18T18:40:00Z",
            paymentMethod: "**** **** **** 1111",
            transactionId: "BCD123EFG",
            amount: 470000000,
            deduction: false,
            deductionAmount: 0,
          },
        ]}
      />
    );

    const ayudaText = getByText("Total de ventas de Hoy");
    expect(ayudaText).toBeInTheDocument();
  });
});
