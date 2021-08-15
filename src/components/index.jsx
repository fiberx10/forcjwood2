
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from "./Main"
import Home from "./home"
import AboutMe from "./aboutme"
import Projects from "./projects"
import Contact from "./contact"
 const IndexApp = () => {
    return (
        <div>
          <Main></Main>
          <Router>
            <Switch>
                <Route path="/" exact >
                    <Home></Home>
                    <Projects></Projects>
                    <AboutMe></AboutMe>
                    <Contact></Contact>
                </Route>
            </Switch>
        </Router>  
        </div>
    );
}
export default IndexApp ;





