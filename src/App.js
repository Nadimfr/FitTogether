import "./App.scss";
import Header from "./Components/Header/header";
import Home from "./Screens/Home/home";
import Footer from "./Components/Footer/footer";
import Pricing from "./Components/Pricing/pricing";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
        <Home />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
