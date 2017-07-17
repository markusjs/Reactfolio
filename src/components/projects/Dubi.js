import React, { Component } from 'react';
import { Header, Image, Message, Divider, List } from 'semantic-ui-react'
import Tags from './Tags';

import dubiImg from './../../img/dubi_ipad.png'
import dubiLogin from './../../img/dubi/dubi-login.png'
import dubiNewQuiz from './../../img/dubi/dubi-new-quiz.png'
import dubiNewQuizMark from './../../img/dubi/dubi-new-quiz-mark.png'
class Dubi extends Component {
    constructor() {
        super();
        this.state = {
            zoom: ["medium", "medium", "medium"]
        }
        this.handleZoom = this.handleZoom.bind(this);
    }
    componentDidMount() {
        this.props.toggleBackBtn(true);
    }
    handleZoom(e) {
        if(e.target.className.match('login')) {
            this.setState({zoom: ["huge", "medium", "medium"]})
        }
        if(e.target.className.match('new')) {
            this.setState({zoom: ["medium", "huge", "medium"]})
        }
        if(e.target.className.match('mark')) {
            this.setState({zoom: ["medium", "medium", "huge"]})
        }
        for(let i = 0; i < this.state.zoom.length; i++) {
            if(this.state.zoom[i] === "huge") {
                this.setState({zoom: ["medium", "medium", "medium"]})
            }
        }

    }
    render() {
        return (
            <div className="Dubi project">
                <h2 className="title project-title">Dubi</h2>
                <Image src={dubiImg} id="dubi-img"></Image>
                <label htmlFor="dubi-img"><i>Forsiden</i></label>
                <div className="content">
                    <br/>
                    <Message size="small">
                        <Message.Header as="h3">Oppsummering</Message.Header>
                        <p>Dubi er en quizapplikasjon for klasserommet.</p>
                        <Tags tags={this.props.tags}></Tags>
                    </Message>
                    <Divider hidden/>
                    <h3>Navn</h3>
                    <p>Dubi kommer av “dubious” som er latinsk og betyr “å sette spørsmålstegn ved noe”.</p>
                    <h3>Målgruppe</h3>
                    <p>Dubi er designet for elever i ungdomstrinnene (8-10-klasse).</p>
                    <h3>Formål</h3>
                    <p>
                        Dubi er tiltenkt å bli brukt i klasserommet etter en klassetime som en oppsummering / gjennomgang av hva elevene har vært igjennom i løpet av en klassetime.
                        Det er også tenkt at Dubi kan bli brukt hjemmefra for å øve på temaer som ble gått igjennom i en klassetime.</p>
                    <h3>Funksjoner - implementerte og tiltenkte</h3>
                    <List bulleted={false} verticalAlign='middle'>
                        <List.Item><List.Icon name="checkmark"/>Opprette Quiz</List.Item>
                        <List.Item><List.Icon name="checkmark"/>Opprette brukere</List.Item>
                        <List.Item><List.Icon name="checkmark"/>Starte en quiz i sanntid</List.Item>
                    </List>
                    <List>
                        <List.Item><List.Icon name="remove"/>Quiz i ettertid</List.Item>
                        <List.Item><List.Icon name="remove"/>Quizdatabase så lærere kan dele quizer på tvers av klasser og skoler</List.Item>
                        <List.Item><List.Icon name="remove"/>Statistikk</List.Item>
                    </List>
                    <br/>
                    <div className="images">
                        <Header textAlign='center'>
                            <h3>Skjermbilder (klikk for å forstørre)</h3>
                        </Header>
                        {/*<h3 textAlign="center"></h3>*/}
                        <Image centered src={dubiLogin} onClick={this.handleZoom.bind(this)} className={`login ${this.state.zoom[0]}`} data-id="0"/>
                        <Image centered src={dubiNewQuiz} onClick={this.handleZoom.bind(this)} className={`new ${this.state.zoom[1]}`} data-id="1"/>
                        <Image centered src={dubiNewQuizMark} onClick={this.handleZoom.bind(this)} className={`mark ${this.state.zoom[2]}`} data-id="1"/>
                    </div>
                    <h3>Min rolle</h3>
                    <p>Jeg hadde hovedansvar for det visuelle designet og interaksjonsdesignet, samtidig som jeg utviklet mye av koden på front-end.</p>
                    <p>Jeg organiserte og utførte (med hjelp av andre gruppemedlemmer) bruketester underveis i designprosessen, og itererte designet etter funn vi gjorde.</p>
                    <p>Vi intervjuet og brukertestet på én voksen lærer og flere lærerstudenter. Alle testene ble pilottestet på venner før vi utførte dem for å sørge for at vi hadde gode oppgaver og scenarioer.</p>
                </div>
            </div>
        )
    }
}
export default Dubi;