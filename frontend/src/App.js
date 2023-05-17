import { Routes, Route } from "react-router-dom";
import { Home, About, ContactUs, Shop, Checkout, SingleProductPage } from "../src/pages";
import Dashboard from "./Admin/Dashboard";
import { Navbar, Footer, BackToTop } from "./components";
import {ShopProvider} from "./context/ShopContext";
import "./App.css"

function App() {

  return (
    <ShopProvider>
    <div className="App" id="backToTop">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="product/:id" element={<SingleProductPage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
    </ShopProvider>
  );
}

export default App;