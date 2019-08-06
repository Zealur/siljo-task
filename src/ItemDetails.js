import React from "react";
import items from "./Items";

const item = items[0];

const ItemDetails = () => (
  <form className="details">
    <button type="button">&lt; back</button>
    <h1>{item.name} details: </h1>
    <p>Description: {item.description}</p>
    <p>Price: {item.basePrice}$</p>

    <div>
      <h5>Brakes</h5>
      <label>
        <input type="radio" name="brakes" value="a" />a
      </label>
      <label>
        <input type="radio" name="brakes" value="b" />b
      </label>
      <label>
        <input type="radio" name="brakes" value="c" />c
      </label>

      <h5>Wheels</h5>
      <label>
        <input type="radio" name="wheels" value="a" />a
      </label>
      <label>
        <input type="radio" name="wheels" value="b" />b
      </label>
      <label>
        <input type="radio" name="wheels" value="c" />c
      </label>
    </div>
    <button>buy</button>
  </form>
);

export default ItemDetails;
