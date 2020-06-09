import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "style.css";
import "tailwindcss/dist/base.css";

import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Clients from "pages/Clients";
import ContactUs from "pages/ContactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sobre" component={AboutUs} />
        <Route exact path="/clientes" component={Clients} />
        <Route exact path="/faleconosco" component={ContactUs} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
