import React, { Component } from 'react';

import { Image, Message, Divider } from 'semantic-ui-react'

import SrcElement from './SrcElement';
import Tags from './Tags';

import wiki from '../../img/icons/wiki.png'
import imdb from './../../img/icons/imdb.png'
import google from './../../img/icons/google.png'
import srcbtn from './../../img/icons/128x128.png'
import infoGif from '../../img/infofinder/infofinder.gif'


class InfoFinder extends Component {
    componentDidMount() {
        this.props.toggleBackBtn(true);
        window.scrollTo(0, 0);
    }
    render() {
        console.log(this.props.tags);
        return (
            <div className="InfoFinder project">
                <h2 className="title project-title">InfoFinder</h2>
                <Image src={infoGif} id="infoGif"></Image>
                <label htmlFor="infoGif"><i>Demonstrasjon av applikasjonen.</i></label>
                <div className="content">
                    <br/>
                    <Message size="small">
                        <Message.Header as="h3">Oppsummering</Message.Header>
                        <p>InfoFinder er en desktop-applikasjon som lar deg søke i Google, IMDB og Wikipedia med få tastetrykk.</p>
                        <Tags tags={this.props.tags}></Tags>
                        {/*<Link to="/projects:design" color="orange" className="ui label green">#hobby</Link>*/}
                    </Message>
                    <Divider hidden/>
                    <h3>Formål</h3>
                    <p>De fleste bruker Google når de skal finne noe på nettet. Søker man etter en film eller en skuespiller, ligger gjerne IMDB (Internet Movie Database) øverst på lista. Hvorfor ikke gå direkte til kilden? Denne applikasjonen gjør det raskt og enkelt å søke på spesifikke nettsider (for øyeblikket kun Google, IMDB, og Wikipedia.</p>
                    <h3>Teknisk</h3>
                    <p>InfoFinder er skrevet i <a className="link" href="https://electron.atom.io/">Electron JS</a> og kan derfor fungere på både OSX (Mac), Windows og Linux. </p>
                    <h3>Interaksjoner</h3>
                    <p>Ved bruk av hurtigtasten <code>ctrl + s</code> åpnes et grensesnitt der musepekeren er. Applikasjonen kan også åpnes ved å trykke på ikonet i docken.</p>
                    <p><code>ctrl + h</code> skjuler applikasjonen.</p>
                    <h3 className="subtitle">Demo</h3>
                    <div className="demo">
                        <p tabIndex="-1" className="title">InfoFinder</p>
                        <div className="base">
                            <SrcElement source="google" img={google} srcbtn={srcbtn}/>
                            <SrcElement source="imdb" img={imdb} srcbtn={srcbtn}/>
                            <SrcElement source="wiki" img={wiki} srcbtn={srcbtn}/>
                        </div>
                    </div>
                    <h3 className="subtitle">Test selv</h3>
                    <p>Hvis du har Mac, kan du teste programmet på: <a className="link" href="https://drive.google.com/file/d/0B8ax3e1ZAh7LQkVkSFZsMlZNaDg/view?usp=sharing">https://drive.google.com/file/d/0B8ax3e1ZAh7LQkVkSFZsMlZNaDg/view?usp=sharing</a></p>
                </div>
            </div>
        )
    }
}
export default InfoFinder;