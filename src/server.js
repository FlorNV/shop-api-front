const URL_API = "http://localhost:4000/api/v1/products";

export const getProducts = async () => {
  try {
    const res = await fetch(URL_API);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("could not fetch products");
  }
};
