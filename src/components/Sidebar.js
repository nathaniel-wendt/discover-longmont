import React, { Component } from 'react';
import List from './List';

class Sidebar extends Component {

    toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }

  render() {
    return (
        <div id="sidebar">
            <input type={"search"} id={"search"} placeholder={"Search Locations"} />
            <div id="toggle-btn" onClick={this.toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="location-list">
                {this.props.locations && this.props.locations
                    .map((location, index) => 
                        <List 
                            key={index}
                            {...location}
                            handleListClick={this.props.handleListClick}
                        />
                )}  
            </ul>
        </div>
    );
  }
}

export default Sidebar;