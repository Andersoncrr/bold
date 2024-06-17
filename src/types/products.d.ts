export type Products = Array<{
  id: number;
  status: "unrealized" | "success";
  paymentType: "dataphoneCharge" | "linkCharge";
  datetime: string;
  paymentMethod: string;
  transactionId: string;
  amount: number;
  deduction: boolean;
  deductionAmount: number;
  date: string;
}>;
