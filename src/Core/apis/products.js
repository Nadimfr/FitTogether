import { api } from "./main";

export const getAllProducts = () => {
  return api.get("products").then((res) => {
    return res.data;
  });
};

export const getGymTools = () => {
  return api.get("products/gymtools").then((res) => {
    return res.data;
  });
};

export const getDrinks = () => {
  return api.get("products/drinks").then((res) => {
    return res.data;
  });
};

export const getPackages = () => {
  return api.get("products/packages").then((res) => {
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
