import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Action from "./components/Action";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Shop from "./components/Shop";
import ProductItem from "./components/ProductItem";
import Undercarry from "./components/Undercarry";
import Electrical from "./components/Electrical";
import Ground from "./components/Ground";
import Construction from "./components/Construction";
import Filters from "./components/Filters";
import Spares from "./components/Spares";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<ProductItem />} />
        <Route path="undercarry" element={<Undercarry />} />
        <Route path="electrical" element={<Electrical />} />
        <Route path="ground" element={<Ground />} />
        <Route path="construction" element={<Construction />} />
        <Route path="filters" element={<Filters />} />
        <Route path="spares" element={<Spares />} />
      </Routes>
      <Action />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
