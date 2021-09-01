import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import OurCompany from "./pages/OurCompany";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/projects/:category">
            <Projects />
          </Route>
          <Route path="/our-company">
            <OurCompany />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
