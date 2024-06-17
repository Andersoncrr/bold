import React from "react";
import "./styles/table.scss";
import dayjs from "dayjs";
import { formatToColombianPesos } from "@/helpers";
import { FILTERS_DAYS } from "@/const/filters";
import Image from "next/image";
import { Products } from "@/types/products";

type Props = {
  products: Products;
  day?: string;
};

export const Table = ({ products, day }: Props) => {
  const statusSelect = {
    success: {
      name: "Cobro exitoso",
      img: "/dataphone.svg",
    },
    unrealized: {
      name: "Cobro no realizado",
      img: "/link.svg",
    },
  };

  const paymentSelect = {
    linkCharge: {
      img: "/link.svg",
    },
    dataphoneCharge: {
      img: "/dataphone.svg",
    },
  };
  return (
    <div className="table">
      <h2 className="table__title">
        Tus ventas de{" "}
        {FILTERS_DAYS.find((filterDay) => filterDay.id === day)?.name}
      </h2>
      <div className="table__container">
        <table className="table__table">
          <thead className="table__thead">
            <tr className="table__tr">
              <th className="table__th">Transacción</th>
              <th className="table__th">Fecha y hora</th>
              <th className="table__th">Método de pago</th>
              <th className="table__th">ID transacción Bold</th>
              <th className="table__th">Monto</th>
            </tr>
          </thead>
          <tbody className="table__tbody">
            {products.map((product) => (
              <tr key={product.id} className="table__tr">
                <td className="table__td" data-label="Transacción">
                  <div className="table__td-first">
                    <Image
                      src={paymentSelect[product.paymentType].img}
                      width={20}
                      height={20}
                      alt="dataphne"
                    />
                    <div> {statusSelect[product.status].name}</div>
                  </div>
                </td>
                <td className="table__td" data-label="Fecha y hora">
                  {dayjs(product.date).format("DD/MM/YYYY - HH:mm:ss")}
                </td>
                <td className="table__td" data-label="Método de pago">
                  <div className="table__td-first">
                    <Image
                      src="/master-card.svg"
                      width={40}
                      height={40}
                      alt="master-card"
                    />
                    <div>{product.paymentMethod}</div>
                  </div>
                </td>
                <td className="table__td" data-label="ID transacción Bold">
                  {product.transactionId}
                </td>
                <td className="table__td" data-label="Monto">
                  <div className="table__amounts">
                    <div>{formatToColombianPesos(product.amount)}</div>
                    {product.deduction && (
                      <>
                        <div>Deducción de Bold</div>
                        <div className="table__amounts-delete">
                          -{formatToColombianPesos(product.deductionAmount)}
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
