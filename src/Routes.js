import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import ItemDetails from "./ItemDetails";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/item/:id" component={ItemDetails} />
  </Router>
);

export default Routes;
