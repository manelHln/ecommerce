import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./theme";
import {
  Home,
  About,
  ContactUs,
  Shop,
  CartPage,
  Dashboard,
  LoginPage,
  BlogPage,
  UserPage,
  ProductsPage,
  DashboardAppPage,
  ProductPage,
} from "../src/pages";
import { Navbar, Footer, BackToTop, ScrollToTop, Checkout } from "./components";
import { ShopProvider } from "./context/ShopContext";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import { useShop } from "./context/ShopContext";

function App() {

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <ShopProvider>
            <div className="App" id="backToTop">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:category" element={<Shop />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="app" element={<DashboardAppPage />} />
                  <Route path="users" element={<UserPage />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route path="blog" element={<BlogPage />} />
                </Route>
              </Routes>
              <BackToTop />
              <ScrollToTop />
              <Footer />
            </div>
          </ShopProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
