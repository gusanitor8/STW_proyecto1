import React from "react";
import NavBar from "../components/NavBar";
import Cover from "../components/Cover";
import SneakerCarrousel from "../components/SneakerCarrousel";
import NewArrivalsCarrousel from "../components/NewArrivalsCarrousel";
import CardCarrousel from "../components/CardCarrousel";
import SportCardCarrousel from "../components/SportCardCarrousel";
import Popular from "../components/Popular";
import Story from "../components/Story";

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
    </>
    );
};

export default App;