# Discover Longmont
My final project for Udacity's Front End Nanodegree Program.  Below you will find a detailed description as well as instructions to run this App on your Machine.

## Description
A Single-Page React App utilizing Google Maps API as well as myJSON API to display some of my favorite locations in Longmont Colorado.  The markers are rendered on page load and bounce when clicked or when the corresponding location is selected in the Sidebar.  There is also a search field in the Sidebar that filters results in both the Map and Sidebar.



## Dependencies

* install all project dependencies with `npm install`

* Start the Development Server with `npm start`

If it doesn't open automatically you can view the project in your browser by navigating to [http://localhost:3000](http://localhost:3000).  See this [documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information.

* You will also need a Google Maps API Key, instructions can be found at [developers.google.com](https://developers.google.com/maps/documentation/android-sdk/signup).  Once you have your API Key you can add and save it to line 37 in `src/App.js` to render the Map.

This project uses a service worker for offline use, however this will only work with the production build of the application.

## Sources Used
1. [taniarascia.com - javascript fetch API](https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/)
2. [developers.google.com - Javascript Markers](https://developers.google.com/maps/documentation/javascript/markers)
3. [developer.google.com - infowindows](https://developers.google.com/maps/documentation/javascript/infowindows)
4. [logrocket.com - react onclick events](https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd)
5. [Yahya Elharony's YouTube Video](http://www.youtube.com/watch?v=W5LhLZqj76s)
6. [kenjournal's YouTube Video](https://www.youtube.com/watch?v=kadSBAsjDXI)
7. [Forrest Walker's YouTube Videos](https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)
8. [Ryan White's YouTube Videos](https://www.youtube.com/watch?v=LvQe7xrUh7I&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&t=0s)