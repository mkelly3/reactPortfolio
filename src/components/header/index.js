import React  from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import About from '../about';
import Portfolio from '../Portfolio';
import Contact from '../contact';
import Resume from '../Resume';
import NavBar from '../navigation';

function Header() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/Portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;