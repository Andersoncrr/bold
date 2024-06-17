export const getProducts = async (searchParams: {
  dataphoneCharge?: string;
  linkCharge?: string;
  all?: string;
}) => {
  try {
    const queryString = new URLSearchParams(searchParams).toString();
    const url = `${process.env.NEXT_API_URL}/api/products?${queryString}`;

    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.log(error);
    return { products: [] };
  }
};
