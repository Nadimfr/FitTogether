import Home from "../src/Screens/Home/home";
import Quiz from "./Screens/Quiz/quiz";
import Shop from "./Screens/Shop/shop";

export const normalRoutes = [
  {
    exact: true,
    path: "/",
    component: <Home />,
    header: true,
  },
  {
    exact: false,
    path: "/quiz",
    component: <Quiz />,
    header: false,
  },
  {
    exact: false,
    path: "/store",
    component: <Shop />,
    header: false,
  },
];
