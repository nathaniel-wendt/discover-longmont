import React, { Component } from 'react';

class LocItem extends Component {
    render() {
        return (
            <li className="location-item">
                {this.props.name}
            </li>
        )
    }
}

export default LocItem;