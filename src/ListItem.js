import React from "react";
import { Link } from "react-router-dom";

const ListItem = props => (
  <Link className="list-item" to={`/item/${props.id}`}>
    <div>{props.name}</div>
    <div>price: {props.basePrice}$</div>
  </Link>
);

export default ListItem;
