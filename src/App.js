import React from "react";
import NavBar from "../components/NavBar";
import Cover from "../components/Cover";
import SneakerCarrousel from "../components/SneakerCarrousel";
import NewArrivalsCarrousel from "../components/NewArrivalsCarrousel";
import CardCarrousel from "../components/CardCarrousel";

const App = () => {
  return (
    <>
      <NavBar/>
      <Cover/>
      <SneakerCarrousel/>
      <NewArrivalsCarrousel/>
      <CardCarrousel/>
    </>
    );
};

export default App;