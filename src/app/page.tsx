import { Filters, Table, TotalSales } from "@/components";
import "./page.scss";
import { getProducts } from "@/actions";

interface Props {
  searchParams: {
    dataphoneCharge?: string;
    linkCharge?: string;
    all?: string;
    day?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const { products } = await getProducts(searchParams);
  return (
    <article className="home">
      <div className="home__container">
        <TotalSales products={products} day={searchParams.day} />
        <Filters />
      </div>
      <Table products={products} day={searchParams.day} />
    </article>
  );
}
