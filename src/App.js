import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {
  
  state = {
    locations: [],
    allLocations: [],
    markers: [],
    query: ''
  }
 
  // Added window.gm_authFailure to catch any errors on Map Load
  componentDidMount() {
    this.fetchLocationData()
    window.gm_authFailure = () => {
      alert('Sorry, the Map failed to load.')
    }
  }

  /* Fetching myjson.com API data and pushing it into (2) arrays locations & allLocations
     this gives the onQueryChange function a fallback array if something is typed and erased */
  fetchLocationData = () => {
    fetch('https://api.myjson.com/bins/f948q')
    .then(response => response.json())
    .then(data =>
      this.setState({
        locations: data,
        allLocations: data
      },  this.renderMap())
    )
    .catch(err => {
      alert('Sorry the following error occurred:' + err);
    })
  }

  renderMap = () => {
    const API_KEY = '';
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
    let renderMarkers = [];

    // Create Map Markers Dynamically using locations array
    this.state.locations.forEach(location => {
      let marker = new window.google.maps.Marker({
        position: {lat: location.pos.lat, lng: location.pos.lng},
        map: map,
        title: location.name,
        animation: window.google.maps.Animation.DROP
      })
      // adds a click event that opens the info window and bounces the marker
      marker.addListener('click', () => {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(marker.setAnimation(false), 100);
        infowindow.setContent(`<h4>${location.name}</h4><p>${location.street}</p>`);
        infowindow.open(map, marker);
      })
      renderMarkers[renderMarkers.length] = marker;
    });
    this.setState({ markers: renderMarkers });
  }

  listClick = (location) => {
    let winEvent = window.google.maps.event;
    let selected = this.state.markers.find(marker => marker.title === location.name);
    
    winEvent.trigger(selected, 'click');
  }

  /* function to update location and marker results based on query
     Inspired by kenjournal's YouTube Video: https://www.youtube.com/watch?v=kadSBAsjDXI */
  onQueryChange = (query) => {
    this.setState({ query });
    if (query) {
      this.setState({locations: this.filterLocations(query, this.state.locations)});
    } else {
      this.setState({locations: this.state.allLocations});
    }
    this.state.markers.forEach(marker => {
      marker.title.toLowerCase().includes(query.toLowerCase()) === true ?
      marker.setVisible(true) :
      marker.setVisible(false);
    })
  }

  filterLocations = (query, locations) => {
    return locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase()));
  };

  render() {
    return (
      <div className="App">
        <Sidebar 
          {...this.state} 
          listClick={this.listClick}
          queryString = {this.state.query}
          onQueryChange = {this.onQueryChange} 
        />
        <Map 
        {...this.state} />      
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