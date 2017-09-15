import React, { Component } from 'react';
import Projects from './../components/Projects'
import { Container } from 'semantic-ui-react'
import About from './About'



class Home extends Component {
    constructor() {
        super();
        this.state = {
            // visible: false,
            backBtnVisible: false
        }
    }
    toggleBackBtn(e) {
        this.props.toggleBackBtn(e);
    }
    render() {
        return (
            <div className="Home">
                    <Projects toggleBackBtn={this.props.toggleBackBtn}/>
                    <br/><br/>
                    <About toggleBackBtn={this.props.toggleBackBtn}/>
            </div>
        );
    }
}

export default Home;
