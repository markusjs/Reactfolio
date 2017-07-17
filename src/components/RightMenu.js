import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


class RightMenu extends Component {
    constructor() {
        super();
    }
    toggleVisibility(e) {
        this.props.toggleMenu();
        console.log(this.props.visible);
    }
    render() {
        return (
            <div className={this.props.visible ? 'active menu right' : 'menu right'}>
                <span className={this.props.visible ? 'active button inverted massive circle' : 'button circle'}></span>
                <Button className={this.props.visible ? 'active burger-btn' : 'burger-btn'} onClick={this.toggleVisibility.bind(this)}>
                    <span className="menu-icon">
                        <span className="menu-line menu-line-1"></span>
                        <span className="menu-line menu-line-2"></span>
                        <span className="menu-line menu-line-3"></span>
                    </span>
                </Button>
            </div>
        );
    }
}

export default RightMenu;
