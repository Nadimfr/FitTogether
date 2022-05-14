import Home from "../src/Screens/Home/home";
import Quiz from "./Screens/Quiz/quiz";
import Shop from "./Screens/Shop/shop";
import Login from "./Components/Login/login";
import Faq from "./Components/Frequentlyasked/faq";

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
  {
    exact: false,
    path: "/faq",
    component: <Faq />,
    header: false,
  },
  {
    exact: false,
    path: "/login",
    component: <Login />,
    header: false,
  },
];
