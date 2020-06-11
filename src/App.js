import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "style.css";
import "tailwindcss/dist/base.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import About from "pages/About";
import Clients from "pages/Clients";
import Contact from "pages/Contact";
import Midia from "pages/Midia";
import Home from "pages/Home";

// makes the Route scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <main>
      <Helmet>
        <meta
          name="description"
          content="Pesquisa e consultoria para partidos, candidatos, órgãos públicos, entidades de classe e empresas."
        />
        {/*Google / Search Engine Tags*/}
        <meta itemprop="name" content="Instituto Methodus" />
        <meta
          itemprop="description"
          content="Pesquisa e consultoria para partidos, candidatos, órgãos públicos, entidades de classe e empresas."
        />
        <meta
          itemprop="image"
          content="http://www.institutomethodus.com.br/upload/config/788ac3b9c7c4620f1f21ff6fcafb262a.png"
        />
        {/*Facebook Meta Tags*/}
        <meta property="og:url" content="http://www.institutomethodus.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Instituto Methodus" />
        <meta
          property="og:description"
          content="Pesquisa e consultoria para partidos, candidatos, órgãos públicos, entidades de classe e empresas."
        />
        <meta
          property="og:image"
          content="http://www.institutomethodus.com.br/upload/config/788ac3b9c7c4620f1f21ff6fcafb262a.png"
        />
        <title>Instituto Methodus</title>
      </Helmet>
      <div>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/sobre" component={About} />
            <Route exact path="/clientes" component={Clients} />
            <Route exact path="/faleconosco" component={Contact} />
            <Route exact path="/midia" component={Midia} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export default App;
