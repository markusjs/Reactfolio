import React, { Component } from 'react';

import { Image, Message } from 'semantic-ui-react'
import Tags from './Tags';

// import touristIntro from '../../img/tourist/app1.png'
import etnography from '../../img/tourist/etnography.png'
import etnography2 from '../../img/tourist/etnography2.png'

// Future workshop
import critic from '../../img/tourist/critic.png'
import futurepilot from '../../img/tourist/pilot-workshop.png'
import future1 from '../../img/tourist/future1.png'
import hologram from '../../img/tourist/hologram.png'

import magic from '../../img/tourist/magic.png'
import app1 from '../../img/tourist/app1.png'
import app2 from '../../img/tourist/app2.png'
import app3 from '../../img/tourist/app3.png'

class Turistopplevelse extends Component {
    componentDidMount() {
        this.props.toggleBackBtn(true);
        window.scrollTo(0, 0);
    }
    render() {
        console.log(this.props.tags);
        return (
            <div className="Turistopplevelse project">
                <h2 className="title project-title">Forbedre turistopplevelsen av Oslo</h2>
                <p>Dette prosjektet gikk ut på å forbedre opplevelsen av å være turist i Oslo, enten det gjelder transport eller sightseeing, mat eller musikkopplevelser. Det var en del av faget "Eksperimentell design av IT"</p>
                <Message size="small">
                    <Message.Header as="h3">Oppsummering</Message.Header>
                    <p>Prosjektet gikk ut på å starte med et tema og et åpent sinn, og lage noe sammen med målgruppen. Resultatet ble en applikasjon for turister som besøker Oslo.</p>
                    <Tags tags={this.props.tags}></Tags>
                    {/*<Link to="/projects:design" color="orange" className="ui label green">#hobby</Link>*/}
                </Message>
                <p>I starten av prosjektet fokuserte vi på reiseopplevelsen i Oslo. Vi gikk tidlig ut med å gjøre det vi kalte for "rapid etnography", som er en rask og enkel måte å drive med etnografi-studie på (Norman, 1999). Etter å ha bestemt oss om målgruppe (turister i Oslo)
                    dro vi til turistkontoret på Oslo S og på Ruter sitt hovedkontor. Der møtte vi turister som vi spurte om vi kunne observere når de brukte kollektiv transport. Vi brukte både passiv og deltakende observasjon.</p>
                <Image src={etnography} id="etnography"></Image>
                <p>En gruppe vi observerte hadde litt problemer med å finne ut hvilken buss de skulle ta til Bygdøy.</p>
                <Image src={etnography2} id="etnography2"></Image>
                <p>Samme gruppe slet med å bruke Oslo-passet de hadde. Skulle de registrere dem på maskinen på bussen? Hva hvis de gikk tom for batteri?</p>
                <br/>
                <p>Etter en debriefing fant vi ut at vi skulle åpne temaet for å inkludere museer og restauranter i prosjektet vårt.</p>
                <br/>
                <p>Vi planla en Future Workshop, som er en metode i deltagende design-metodologien og går ut på at brukerne selv kommer opp med ideer og løsninger.</p>
                <p>I forkant av workshopen hadde vi en pilot-workshop for å se om vi hadde planlagt godt med tanke på tid og temaer.</p>
                <Image src={futurepilot}/>
                <br/>
                <p>Future Workshop består av følgende faser:</p>
                <h3>Kritikk</h3>
                <Image src={critic}/>
                <p>I denne fasen skal alle problemer man har med et gitt tema utforskes, og alle deltakerne skriver på post-it-lapper sine bidrag.</p>
                <h3>Fantasi</h3>
                <Image src={future1}/>
                <p>I denne fasen utforskes mulige løsninger på problemene, men man skal ikke ta høyde for realisme. Alle ideer, inkludert de som er på tvers av tid og rom, er velkomne. Bidragene stemmes over av alle deltakerne.</p>
                <Image src={hologram}/>
                <p>Denne personen designet et hologram som skulle vise deg veien til ulike plasser i byen.</p>
                <h3>Implementasjon</h3>
                <p>I denne fasen tar man ideene som fikk flest stemmer med videre og prøvder å være realistske med hvordan de kan fungere i virkeligheten.</p>
                <Image src={magic}/>
                <p>Til slutt designet vi et forslag til implementasjon av en realistisk reiseapp, basert på innsikten vi fikk i workshoppen.</p>
                <div className="appscreens">
                    <Image src={app1} className="app"/>
                    <Image src={app2} className="app"/>
                    <Image src={app3} className="app"/>
                </div>
            </div>
        )
    }
}
export default Turistopplevelse;