import React, {Component} from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navigation from '../navigation';
import Portfolio from "../Portfolio";
import Contact from '../contact';
import About from '../about';
import Resume from '../Resume';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                {/* <a href="https://jpd61.github.io/jpd-react-portfolio/"><img src="https://img.icons8.com/color/48/000000/astronaut.png" alt="Joseph DeWoody" class="icon" id="astro"/></a> */}
                <Navigation/>
            </div>
    

    <div className="content">

          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;