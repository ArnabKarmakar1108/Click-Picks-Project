import React from "react";
import "./Services.css";
import { useStateValue } from "./StateProvider";

function Services({ id, title, image, link}) {
  const [{ basket }, dispatch] = useStateValue();
 

  return (
    <div className="services">
      <div className="home__info">
        <p>{title}</p>
      </div>
      <a href={link}>
      <img src={image} alt="" />
      </a>
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default Services;
