import "./App.css";
import Banner from "./components/Banner";
import FeaturedArea from "./components/FeaturedArea";
import Hero from "./components/Hero";
import Insert from "./components/Insert";
import ProductArea from "./components/ProductArea";
import SmallProdArea from "./components/SmallProdArea";
import SpecialArea from "./components/SpecialArea";
import Brands from "./components/Brands";
import CustomArea from "./components/CustomArea";

function App() {
  return (
    <div className="App">
      <Hero />
      <Insert />
      <ProductArea />
      <FeaturedArea />
      <SmallProdArea />
      <Banner />
      <SpecialArea />
      <Brands />
      <CustomArea />
    </div>
  );
}

export default App;
