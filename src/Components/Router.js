import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Cake from "../Routes/Cake";
import Letter from "../Routes/Letter";
import Photo from "../Routes/Photo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cake" component={Cake} />
        <Route path="/letter" component={Letter} />
        <Route path="/photo" component={Photo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
