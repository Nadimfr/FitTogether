import "./App.scss";
import Header from "../src/Components/Header/header";
import Home from "./Screens/Home/home";
import Footer from "./Components/Footer/footer";
import Pricing from "./Components/Pricing/pricing";
<<<<<<< HEAD
import Contact from "./Components/ContactUs/contactus";
import Login from "./Components/Login/login";
import Faq from "./Components/Frequentlyasked/faq";
=======
import Quiz from "./Screens/Quiz/quiz";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { normalRoutes } from "./Routes";
>>>>>>> 46c8db56e2b1cfc07c73b820f9f5c3e533868875

function App() {
  const returnNormalRoutes = () => {
    return normalRoutes.map((item, index) => {
      // let component = <><Header type=""/>{item.component}</>
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          element={item.component}
        />
      );
    });
  };
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            {returnNormalRoutes()}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
