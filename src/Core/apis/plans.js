import { api } from "./main";

export const getAllPlans = () => {
  return api.get("plans").then((res) => {
    return res.data;
  });
};
