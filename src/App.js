import React from "react";
import NavBar from "../components/NavBar";
import Cover from "../components/Cover";
import SneakerCarrousel from "../components/SneakerCarrousel";
import NewArrivalsCarrousel from "../components/NewArrivalsCarrousel";
import CardCarrousel from "../components/CardCarrousel";
import SportCard from "../components/SportCard";
import sportImage from "../images/sportCard/football.png"
import SportCardCarrousel from "../components/SportCardCarrousel";

const App = () => {
  return (
    <>
      <NavBar/>
      <Cover/>
      <SneakerCarrousel/>
      <NewArrivalsCarrousel/>
      <CardCarrousel/>
      <SportCardCarrousel/>
        
    </>
    );
};

export default App;