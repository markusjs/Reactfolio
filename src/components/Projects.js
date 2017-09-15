import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Projectcard from './../components/Projectcard'
import IntroHeader from './../components/IntroHeader'

import TouristImg from './../img/tourist/critic.png'
import InfoFinderImg from './../img/infofinder/infofinder.png'
import dubiImg from './../img/dubi/dubi_ipad.png'

import { Card, Container, Header } from 'semantic-ui-react'



class Projects extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/projects" />;
        }
        console.log(this.props);
        return (
            <Container text className="Projects">
                <IntroHeader/>
                {/*<Backbtn backBtnVisible="true"/>*/}
                {/*<Container text>*/}
                <Header size="huge" textAlign='center'>
                    <h2>Prosjekter</h2>
                </Header>
                <br/>
                <Card.Group itemsPerRow={2} stackable>
                    <Projectcard name="Turistopplevelse" img={TouristImg} tags={["skoleprosjekt", "metode", "innsikt", "grafisk"]}/>
                    <Projectcard name="InfoFinder" img={InfoFinderImg} tags={["design", "hobby", "utvikling"]}/>
                    <Projectcard name="Dubi" img={dubiImg} tags={["konsept", "design", "front-end"]}/>
                </Card.Group>
                {/*</Container>*/}
            </Container>
        );
    }
}

export default Projects;
