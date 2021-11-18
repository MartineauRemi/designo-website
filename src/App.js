import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import OurCompany from "./pages/OurCompany";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  @media screen and (max-width: 1439px){
      text-align: center;
  }
`

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <GlobalStyle />
        <Header />

        <Switch>
          <Route exact path="/designo-website">
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
      </AppContainer>
    </Router>
  );
}

export default App;
