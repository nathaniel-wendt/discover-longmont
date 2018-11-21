import React, { Component } from 'react';

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
            <ul>
                <li>1st Result</li>
                <li>2nd Result</li>
                <li>3rd Result</li>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
