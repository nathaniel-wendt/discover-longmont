import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {

  state = {
    locations: [],
    markers: []
  }

  componentDidMount() {
    this.fetchLocationData()
  }

  // Initialize Map by setting Map Center and adding Map Markers using Lat Lng
  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.1672, lng: -105.1019},
      zoom: 13,
      mapTypeControl: false
    });

    let infowindow = new window.google.maps.InfoWindow()

    // Create Map Markers Dynamically using locations array
    this.state.locations.forEach(location => {
      const marker = new window.google.maps.Marker({
        position: {lat: location.pos.lat, lng: location.pos.lng},
        map: map,
        title: location.name
      })

      marker.addListener('click', function() {
        infowindow.setContent(`<h4>${location.name}</h4><p>${location.street}</p>`);
        infowindow.open(map, marker)
      })

      this.setState((state) => ({
        markers: [...state.markers, marker]
      }))
    });
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAp2UAcZ8h6HlJ_J3Ha9qZcbt6ohSR9yFs&callback=initMap")
    window.initMap = this.initMap
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

  render() {
    return (
      <div className="App">
        <Sidebar {...this.state} />
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