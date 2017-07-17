import React, { Component } from 'react';
import {
    Link,
    Redirect
} from 'react-router-dom'

import { Card, Image, Label } from 'semantic-ui-react'

import Tags from './projects/Tags';

class Projectcard extends Component {
    toggleBackBtn(e) {
        this.props.toggleBackBtn(e);
    }
    render() {
        return (
            <div className="Project">
                <h2 className="title project-title">{this.props.name}</h2>
                <Image src={img}/>
                <i>{img-description}</i>
                <div className="content">
                    <br/>
                    <Message src={}/>
                </div>
            </div>
        );
    }
}

export default Projectcard;
