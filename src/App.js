import React from "react";
import NavBar from "../components/NavBar";
import Cover from "../components/Cover";
import SneakerCarrousel from "../components/SneakerCarrousel";
import NewArrivalsCarrousel from "../components/NewArrivalsCarrousel";
import CardCarrousel from "../components/CardCarrousel";
import SportCardCarrousel from "../components/SportCardCarrousel";
import Popular from "../components/Popular";
import Story from "../components/Story";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

const App = () => {
  return (
    <>
      <NavBar/>
      <Cover/>
      <SneakerCarrousel/>
      <NewArrivalsCarrousel/>
      <CardCarrousel/>
      <SportCardCarrousel/>
      <Popular/>
      <Story/>
      <Promo/>
      <Footer/>
      <Footer2/>
    </>
    );
};

export default App;