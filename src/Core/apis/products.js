import { api } from "./main";

export const getAllProducts = () => {
  return api.get("products").then((res) => {
    return res.data;
  });
};

export const getProductDetails = (id) => {
  return api
    .get(`products/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
