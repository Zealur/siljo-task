import React from "react";
import ListItem from "./ListItem";
import items from "./Items";

const Dashboard = () => (
  <div>
    {items.map(item => (
      <ListItem {...item} />
    ))}
  </div>
);

export default Dashboard;
