import { NextRequest, NextResponse } from "next/server";
import PRODUCTS from "@/data.json";
import { Products } from "@/types/products";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const day = searchParams.get("day");

  const allSearch = searchParams.get("all");
  const all = allSearch === "true";

  const dataphoneChargeSearch = searchParams.get("dataphoneCharge");
  const dataphoneCharge = dataphoneChargeSearch === "true";

  const linkChargeSearch = searchParams.get("linkCharge");
  const linkCharge = linkChargeSearch === "true";

  let products: Products = PRODUCTS as Products;

  if (day) {
    const newProducts = products.filter((product) => product.datetime === day);
    products = newProducts;
  }

  if (!all) {
    if (dataphoneCharge && !linkCharge) {
      const newProducts = products.filter(
        (product) => product.paymentType === "dataphoneCharge"
      );
      products = newProducts;
    }

    if (linkCharge && !dataphoneCharge) {
      const newProducts = products.filter(
        (product) => product.paymentType === "linkCharge"
      );
      products = newProducts;
    }
  }

  return NextResponse.json({
    products,
  });
}
