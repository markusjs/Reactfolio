import React, { Component } from 'react';

import { Label } from 'semantic-ui-react'

class Tags extends Component {
    render() {
        if(this.props.tags) {
            return (
                <div>
                    {this.props.tags.map((tag, index) => {
                        return <Label key={index}>{tag}</Label>
                    })}
                </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default Tags;
