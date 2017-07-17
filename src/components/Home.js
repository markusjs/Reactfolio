import React, { Component } from 'react';
import Projects from './../components/Projects'
import { Container, Header} from 'semantic-ui-react'



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
                <Container text>
                    <Projects toggleBackBtn={this.props.toggleBackBtn}/>
                </Container>
            </div>
        );
    }
}

export default Home;
