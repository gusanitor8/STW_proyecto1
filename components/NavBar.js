import React from "react";
import usFlag from "../images/usFlag.png";
import logo from "../images/logo.png";
import heartIcon from "../images/heart-icon.png";
import profileIcon from "../images/profile-icon.png";
import searchIcon from "../images/search-icon.png";
import shopIcon from "../images/shop-icon.png";
const logoPath = "M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z";

const NavBar = () => {
    return(
        <>
            <div className="navBarContainer">                
                <ul className="helpSection">
                    <li>help</li>
                    <li>exchanges & returns</li>
                    <li>order tracker</li>
                    <li>join adiClub</li>
                    <li>
                        <img src = {usFlag}></img>
                    </li>
                </ul>
                

                <div className="mainMenu">
                <svg className= "logo" viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fill="black" d={logoPath} clip-rule="evenodd" fill-rule="evenodd"></path></svg>

                    <ul className="menuItems">                        
                        <li className="bold">MEN</li>
                        <li className="bold">WOMEN</li>
                        <li className="bold">KIDS</li>
                        <li className="light">SALE</li>
                        <li className="light">3 STRIPE LIFE</li>
                    </ul>

                    <div className="auxMenu">                        
                        <div className="inputWraper">
                            <input placeholder="Search"></input>  
                            <img className = "search-icon" src = {searchIcon}></img>                          
                        </div>
                        <img src={profileIcon}></img>
                        <img src={heartIcon}></img>
                        <img src={shopIcon}></img>
                    </div>
                </div>


            </div>
        </>
    );
};

export default NavBar;