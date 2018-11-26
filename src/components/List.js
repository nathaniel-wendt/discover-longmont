import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <li className="location-item" onClick={() => this.props.listClick(this.props)}>
                {this.props.name}
            </li>
        )
    }
}

export default List;