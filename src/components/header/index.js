import React from "react";
import About from '../about'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from '../navigation'

function header(){
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
            </Switch>
        </Router>
    )
}

export default header;