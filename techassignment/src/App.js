import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NoFound";
import AddEvent from "./pages/AddEvent";
import ViewEvents from "./pages/ViewEvents";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/addevent" component={AddEvent} />
        <Route path="/viewevents" component={ViewEvents} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
