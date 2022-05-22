import Home from "../src/Screens/Home/home";
import Quiz from "./Screens/Quiz/quiz";
import Shop from "./Screens/Shop/shop";
import Login from "./Screens/Login/login";
import Product from "./Screens/Product/product";
import Cart from "./Screens/Cart/cart";
import Faq from "./Screens/Frequentlyasked/faq";
import Contactus from "./Components/ContactUs/contactus";

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
    path: "/product-details/:id",
    component: <Product />,
    header: false,
  },
  {
    exact: false,
    path: "/cart",
    component: <Cart />,
    header: false,
  },
  {
    exact: false,
    path: "/contact-us",
    component: <Contactus />,
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
