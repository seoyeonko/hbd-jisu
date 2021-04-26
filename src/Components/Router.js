import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Routes/Home";
import Cake from "../Routes/Cake";
import Letter from "../Routes/Letter";
import Photo from "../Routes/Photo";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cake" component={Cake} />
        <Route path="/letter" component={Letter} />
        <Route path="/photo" component={Photo} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
