export const getProducts = async (searchParams: {
  dataphoneCharge?: string;
  linkCharge?: string;
  all?: string;
}) => {
  try {
    const queryString = new URLSearchParams(searchParams).toString();
    const url = `http://localhost:3000/api/products?${queryString}`;

    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.log(error);
    return { products: [] };
  }
};
