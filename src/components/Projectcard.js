import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom'

import { Card, Image } from 'semantic-ui-react'

import Tags from './projects/Tags';

class Projectcard extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }
    handleClick (e){
        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to={`/${this.props.name}`}/>
        }
        return (
            <Card onClick={this.handleClick.bind(this)} className={this.props.name}>
                <Image src={this.props.img} size={"big"}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Tags tags={this.props.tags}/>
                </Card.Content>
            </Card>
        );
    }
}

export default Projectcard;
