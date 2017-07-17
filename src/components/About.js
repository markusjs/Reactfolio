import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Container, Header, Image, Progress, Button, Accordion, List } from 'semantic-ui-react'

import Markus from './../img/markus_balkong.jpg'
let d = new Date();
let month = d.getMonth();
let date = d.getDate();
let age = d.getFullYear() - 1991;

if(month < 11 || date < 28) {
    age--;
}

class About extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }
    toggleBackBtn(e) {
        this.props.toggleBackBtn(e);
        // console.log("Toggle back btn");
        // this.context.router.goBack();
    }
    render() {
        console.log(this.context.router);
        return (
            <div className="About">
                <Container text textAlign="left">
                    <Header as="h2" textAlign='center'>
                        <h2>Om Meg</h2>
                    </Header>
                    <div className="textwrap">
                        <h3>Personlig</h3>
                        <p>Jeg er {String(age)} år gammel og kommer fra Tromsø. Jeg bor for tiden i Oslo og tar en master i <a href="www.uio.no/studier/program/inf-design-master/">Informatikk: design, bruk, interaksjon </a>. </p>
                        <p>På fritiden bruker jeg mye tid på <Link to="/hobby">hobbyprosjekter</Link>. Jeg er også interessert i kultur og er ofte på teater og konserter.</p>
                        <Image src={Markus} size='small' shape="circular"></Image>
                        <div className="social-icons">
                            <Button as="a" href="https://www.linkedin.com/in/markusjs" target="_blank" circular icon='linkedin' />
                            <Button as="a" href="https://twitter.com/markusjs" target="_blank" circular icon='twitter' />
                            <Button as="a" href="https://github.com/markusjs" target="_blank" circular icon='github' />
                        </div>
                        <h3>Ferdigheter</h3>
                        <p>Jeg har gjennom diverse <Link to="/projects"> prosjekter</Link> fått erfaring i <b>konseptutvikling</b> og forskjellige metoder for <b>innsikt</b>, inkludert intervju, spørreundersøkelser og deltagende- og passiv observasjon.</p>
                        <p>Jeg kan effektivt skape <b>prototyper</b> for å teste ut konsepter og ideer på målgruppen.</p>
                        <p>Jeg har også god forståelse for kode, og kan produsere prototyper i HTML/CSS og JavaScript, samt at jeg kan lage Android-apper med Java og desktop-apper i ElectronJS.</p>
                        <p>Jeg er nysgjerrig, og synes det er veldig gøy å teste ut ny teknologi!</p>
                        <h3>Teknologier (basert på erfaring)</h3>
                        <Accordion styled>
                            <Accordion.Title className="">
                                <div className="dropdown icon"></div>
                                Utvikling
                            </Accordion.Title>
                            <Accordion.Content>
                                <List.Item>
                                    ReactJS
                                    <Progress percent={35} progress/>
                                </List.Item>
                                <List.Item>
                                    Java
                                    <Progress percent={60} progress/>
                                </List.Item>
                                <List.Item>
                                    Javascript / Jquery
                                    <Progress percent={90} progress/>
                                </List.Item>
                                <List.Item>
                                    Python
                                    <Progress percent={20} progress/>
                                </List.Item>
                                <List.Item>
                                    HTML / CSS
                                    <Progress percent={90} progress/>
                                </List.Item>
                                <List.Item>
                                    Angular
                                    <Progress percent={35} progress/>
                                </List.Item>
                            </Accordion.Content>
                        </Accordion>
                        <br/>
                        <Accordion styled>
                            <Accordion.Title className="">
                                <div className="dropdown icon"></div>
                                Prototyping / Design
                            </Accordion.Title>
                            <Accordion.Content>
                                <List.Item>
                                    Sketch
                                    <Progress percent={90} progress/>
                                </List.Item>
                                <List.Item>
                                    Photoshop
                                    <Progress percent={75} progress/>
                                </List.Item>
                                <List.Item>
                                    Illustrator
                                    <Progress percent={50} progress/>
                                </List.Item>
                                <List.Item>
                                    Axure
                                    <Progress percent={80} progress/>
                                </List.Item>
                                <List.Item>
                                    Balsamic
                                    <Progress percent={50} progress/>
                                </List.Item>
                                <List.Item>
                                    IvisionApp
                                    <Progress percent={60} progress/>
                                </List.Item>
                            </Accordion.Content>
                        </Accordion>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;
