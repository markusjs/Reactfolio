import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import RightMenu from './../components/RightMenu'

import { Grid, Menu, Button, Icon } from 'semantic-ui-react'



class Topmenu extends Component {
    constructor() {
        super();
        this.state = {
            navmenuVisible: false,
            redirect: false
        }
    }
    toggleVisibility(e) {
        this.props.toggleBackBtn(e);
        // this.setState({redirect: true});
    }
    toggleMenu(e) {
        this.props.toggleMenu();
    }
    render() {
        return (
            <div className="Topmenu">
                <Grid.Column>
                    <Grid.Column className="mobile-toggle">
                        <Menu fixed="top">
                            <Link to="/projects" size="big" icon className={this.props.backBtnVisible ? "back-btn" : "back-btn hide"} onClick={this.toggleVisibility.bind(this, false)}>
                                <Button secondary={true} icon>
                                    <Icon name='arrow left'/>
                                </Button>
                            </Link>
                            <RightMenu toggleMenu={this.toggleMenu.bind(this)} visible={this.props.navmenuVisible}/>
                            {/*<Menu.Header textAlign="center" as="h1">Markus Sørem</Menu.Header>*/}
                        </Menu>
                    </Grid.Column>
                </Grid.Column>
            </div>
        );
    }
}

export default Topmenu;
