import { Link } from "@material-ui/core";
import React from "react";
import "./Home.css";
import shop from './images/shopping.jpg';
import travel from './images/travels.avif';
import vehicle from './images/vehicles.avif';
import house from './images/house.avif';
import help from './images/help.avif';
import cover from './images/cover.avif'
import Services from "./Services";
import {useHistory } from "react-router-dom";

function Home() {
  
  return (
    <div className="home">
      <div className="home__container">
        
        <img
          className="home__image"
          src={cover}
          alt=""
        />
        
        <h1 className="home__cover">Click Picks</h1>
        <div className="home__row">
        
          <Services
            id="12321341"
            title="Shop Exclusive Items from Popular Brands"
            image={shop}
            link='/shopping'
            
          />
      
          <Services
            id="49538094"
            title="Travel Around the Globe with Us"
            image={travel}
            link='/travels'
           
          />
        </div>

        <div className="home__row">
          <Services
            id="4903850"
            title="Checkout our Garage"           
            image={vehicle}
            link='/vehicles'
          />

          <Services
            id="23445930"
            title="Looking for any Good Properties?"           
            image={house}
            link='/properties'
          />

          <Services
            id="3254354345"
            title="Want any Helping Hand"            
            image={help}
            link='/shopping'
          />
        </div>
      </div>
    
    </div>
  );
}

export default Home;
