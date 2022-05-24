import { api } from "./main";

export const Login = async (data) => {
  console.log(data);
  return await api.post("/users/login", data).then((res) => {
    // console.log(res);
    if (res.status === 200) {
      sessionStorage.setItem("SESSION", res.data.token);
      sessionStorage.setItem("EMAIL", res.data.email);
    }
    return res;
  });
};
