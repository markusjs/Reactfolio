import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Projectcard from './../components/Projectcard'

import InfoFinderImg from './../img/infofinder.png'
import dubiImg from './../img/dubi_ipad.png'

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
                <div className="intro-header">
                    <Header as="h1" textAlign='center' content="Markus Sørem" subheader="Jeg designer og utvikler digitale opplevelser">
                    </Header>
                </div>
                {/*<Backbtn backBtnVisible="true"/>*/}
                {/*<Container text>*/}
                <Header size="huge" textAlign='center'>
                    <h2>Prosjekter</h2>
                </Header>
                <Card.Group itemsPerRow={2} stackable>
                    <Projectcard name="InfoFinder" img={InfoFinderImg} tags={["design", "hobby", "utvikling"]}/>
                    <Projectcard name="Dubi" img={dubiImg} tags={["konsept", "design", "front-end"]}/>
                </Card.Group>
                {/*</Container>*/}
            </Container>
        );
    }
}

export default Projects;
