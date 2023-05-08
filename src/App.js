import React from "react";
import NavBar from "../components/NavBar";
import Cover from "../components/Cover";
import SneakerCarrousel from "../components/SneakerCarrousel";
import NewArrivalsCarrousel from "../components/NewArrivalsCarrousel";
import girl from "../images/newArrivals/girl.png"

const App = () => {
  return (
    <>
      <NavBar/>
      <Cover/>
      <SneakerCarrousel/>
      <NewArrivalsCarrousel/>
    </>
    );
};

export default App;