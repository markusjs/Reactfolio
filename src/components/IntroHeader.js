import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class IntroHeader extends Component {
    render() {
        return(
            <div className="IntroHeader">
                <div className="intro-header">
                    <Header className={"markusheader"} as="h1" textAlign='center' content="Markus Sørem" subheader="Jeg designer og utvikler digitale opplevelser">
                    </Header>
                </div>
            </div>
        )
    }

}

export default IntroHeader;