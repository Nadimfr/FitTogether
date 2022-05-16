import "./App.scss";
import Header from "../src/Components/Header/header";
import Footer from "./Components/Footer/footer";

import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { normalRoutes } from "./Routes";

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
