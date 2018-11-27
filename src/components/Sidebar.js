import React, { Component } from 'react';
import List from './List';

class Sidebar extends Component {

    toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }

  render() {
    return (
        <div id="sidebar" className="active">
        <h1>Discover Longmont</h1>
            <input type={"search"} id={"search"} placeholder={"Search Locations"} 
                value={this.props.queryString} 
                onChange={e => this.props.onQueryChange(e.target.value)}
            />
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
                            listClick={this.props.listClick}
                        />
                )}  
            </ul>
            <div className="footer">
                <p>Built using Google Maps API & MyJSON API</p>
            </div>
        </div>
    );
  }
}

export default Sidebar;