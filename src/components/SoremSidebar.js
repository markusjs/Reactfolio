import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom'
import { Header } from 'semantic-ui-react'

class SoremSidebar extends Component {
    render() {
        return(
            <div className="SoremSidebar">
                {/*<div className="intro-header">*/}
                    {/*<Header as="h1" textAlign='center' content="Markus Sørem" subheader="Jeg designer og utvikler digitale opplevelser">*/}
                    {/*</Header>*/}
                {/*</div>*/}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Om meg</NavLink>
            </div>
        )
    }

}

export default SoremSidebar;
