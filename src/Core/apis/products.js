import { api } from "./main";

export const getAllProducts = () => {
  return api.get("products").then((res) => {
    return res.data;
  });
};
