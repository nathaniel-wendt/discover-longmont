import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {
  
  state = {
    locations: [],
    markers: [],
  }
 
  componentDidMount() {
    this.fetchLocationData()
  }

  fetchLocationData = () => {
    fetch('https://api.myjson.com/bins/f948q')
    .then(response => response.json())
    .then(data =>
      this.setState({
        locations: data
      },  this.renderMap())
    )
    .catch(err => {
      console.log(err);
    })
  }

  renderMap = () => {
    const API_KEY = 'AIzaSyAp2UAcZ8h6HlJ_J3Ha9qZcbt6ohSR9yFs';
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  // Initialize Map by setting Map Center and adding Map Markers using Lat Lng
  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.1672, lng: -105.1019},
      zoom: 13,
      mapTypeControl: false
    });

    let infowindow = new window.google.maps.InfoWindow();
    let allMarkers = [];

    // Create Map Markers Dynamically using locations array
    this.state.locations.map(location => {
      let marker = new window.google.maps.Marker({
        position: {lat: location.pos.lat, lng: location.pos.lng},
        map: map,
        title: location.name,
        animation: window.google.maps.Animation.DROP
      })

      marker.addListener('click', () => {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(marker.setAnimation(false), 100);
        infowindow.setContent(`<h4>${location.name}</h4><p>${location.street}</p>`);
        infowindow.open(map, marker);
      })
      allMarkers[allMarkers.length] = marker;
      return location;
    });
    this.setState({ markers: allMarkers });
  }




  listClick = (location) => {
    console.log(location);
  }

  render() {
    console.log(this.state.markers);
    return (
      <div className="App">
        <Sidebar {...this.state} listClick={this.listClick} />
        <Map {...this.state} />      
      </div>
    );
  }
}

/* learned from Yahya Elharony's YouTube Video: http://www.youtube.com/watch?v=W5LhLZqj76s */
function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;