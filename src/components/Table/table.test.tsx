import React from "react";
import { render } from "@testing-library/react";
import { Table } from ".";

describe("Table Component", () => {
  test("renders Table component", async () => {
    const { getByText } = render(
      <Table
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

    const ayudaText = getByText("Transacción");
    expect(ayudaText).toBeInTheDocument();
  });
});
