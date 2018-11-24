import React, { Component } from 'react';
import LocItem from './LocItem';

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
                        <LocItem 
                            key={index}
                            {...location}
                        />
                )}  
            </ul>
        </div>
    );
  }
}

export default Sidebar;