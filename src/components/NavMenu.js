import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom'
class RightMenu extends Component {
    handleClick(e) {
        this.props.toggleMenu(false);
        console.log(e);
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        return (
            <div className={this.props.visible ? 'active navmenu' : 'navmenu'}>
                <div className="navmenu-wrap">
                    <div className="intro-splash">
                        <div>
                            <h1>Markus Sørem</h1>
                        </div>
                        <p>Jeg designer og utvikler
                        <br/> digitale opplevelser
                        </p>
                        <p>Ta kontakt! <br/>
                            <a className="contact" href="mailto:name@email.com">markus@sorem.no</a>
                            <a className="contact" href="tel:40554504">40554504</a>
                        </p>
                    </div>
                    <nav>
                        <NavLink onClick={this.handleClick.bind(this, true)} to="/projects">Prosjekter</NavLink>
                        <NavLink onClick={this.handleClick.bind(this, true)} to="/about">Om Meg</NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}

export default RightMenu;
