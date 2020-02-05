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
import Admin from "./pages/Admin";
import authorisedClient from "../src/common/authorised-axios";

function App() {
  async function getEvent() {
    const response = await authorisedClient.get(
      `getevent/94afe0a5-5f18-4ee8-8b99-cebff51c05a3`
    );
  }

  getEvent();

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/addevent" component={AddEvent} />
        <Route path="/viewevents" component={ViewEvents} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
