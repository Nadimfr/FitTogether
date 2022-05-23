import { api } from "./main";

export const sendMail = (data) => {
  return api.post(`tickets/create`, data).then((res) => {
    return res;
  });
};
