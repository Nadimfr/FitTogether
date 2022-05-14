import "./App.scss";
import Header from "./Components/Header/header";
import Home from "./Screens/Home/home";
import Footer from "./Components/Footer/footer";
import Pricing from "./Components/Pricing/pricing";
import Contact from "./Components/ContactUs/contactus";
import Login from "./Components/Login/login";
import Faq from "./Components/Frequentlyasked/faq";

function App() {
  return (
    <div className="App">
      {/* <div className="header">
        <Header />
        <Home />
      </div>
      <Pricing />
      <Footer /> */}
      {/* <Contact /> */}
      {/* <Login /> */}
      <Faq />
    </div>
  );
}

export default App;
