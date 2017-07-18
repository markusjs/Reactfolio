import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import { Grid, Button, Icon } from 'semantic-ui-react'



class Backbtn extends Component {
    constructor() {
        super();
        this.state = {
            navmenuVisible: true,
            redirect: false
        }
    }
    toggleVisibility(e) {
        this.props.toggleBackBtn(false);
    }
    render() {
        if (this.state.redirect) {
            // return <Redirect push to="/projects" />;
        }
        return (
            <div className="Backbtn">
                <Grid.Column className="mobile-only">
                    <Grid.Column className="mobile-toggle">
                        {/*<Menu fixed="top">*/}
                            <Link to="/" size="big" icon className={this.props.backBtnVisible ? "back-btn" : "back-btn hide"} onClick={this.toggleVisibility.bind(this, false)}>
                                <Button secondary={true} icon>
                                    <Icon name='arrow left'/>
                                </Button>
                            </Link>
                        {/*</Menu>*/}
                    </Grid.Column>
                </Grid.Column>
            </div>
        );
    }
}

export default Backbtn;
