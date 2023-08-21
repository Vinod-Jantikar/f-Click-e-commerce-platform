import { Navbar } from "../header/Navbar";
import { MainCarousel } from "../sliders/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BigCard } from "./BigCard";
import { WomenSlider } from "../sliders/WomenSlider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getProductsData} from "../../redux/products/actions"
import { Footer } from "../footer/Footer";

export const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductsData())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <MainCarousel />
      <BigCard />
      <div className="section">
        <div className="section_title">
          <h3>Exclusive collections to explore now</h3>
        </div>
        <WomenSlider products={products} />
      </div>
      <Footer/>
    </div>
  );
};
