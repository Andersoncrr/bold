import React from "react";
import "./styles/totalSales.scss";
import { FILTERS_DAYS } from "@/const/filters";
import Image from "next/image";
import dayjs from "dayjs";
import { Products } from "@/types/products";
import { formatToColombianPesos } from "@/helpers";

type Props = {
  day?: string;
  products: Products;
};

export const TotalSales = ({ day, products }: Props) => {
  const total = products.reduce(
    (accum, product) => (accum = accum + product.amount),
    0
  );

  return (
    <article className="card">
      <header className="card__header">
        <div>
          Total de ventas de{" "}
          {FILTERS_DAYS.find((filterDay) => filterDay.id === day)?.name}
        </div>
        <Image src="/info.svg" width={20} height={20} alt="info" />
      </header>
      <div className="card__content">
        <p className="card__content-price">{formatToColombianPesos(total)}</p>
        <p className="card__content-date">Septiembre, {dayjs().year()}</p>
      </div>
    </article>
  );
};
