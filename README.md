# realtime_device_tracker_socket.io

This project is a real-time device tracking system using **Socket.io** for bi-directional communication between the server and the client, and **EJS** as the templating engine to render dynamic HTML content.

## run command
- `npm install`
- `node app.js`

## Features
- Real-time device tracking
- Socket-based communication
- EJS as the view engine
- Easy setup and configuration

 
### adding the leaflet cdn for css(index.ejs)
    <!-- https://cdnjs.com/libraries/leaflet -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" integrity="sha512-h9FcoyWjHcOcmEVkxOfTLnmZFWIH0iZhZT1H2TbOq55xssQGEJHEaIm+PgoUaZbRvQTNTluNOEfb1ZRy6D3BOw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

### adding the leaflet js(index.ejs)
       <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js" integrity="sha512-BwHfrr4c9kmRkLw6iXFdzcdWV/PGkVgiIyIWLLlTSXzWQzxuSg4DiQUCpauz/EWjgk5TYQqX/kvn9pG1NpYfqg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

### adding the socket.io cdn(index.ejs)
   <!-- https://socket.io/docs/v4/client-installation/ -->
    <script src="https://cdn.socket.io/4.7.5/socket.io.min.js" integrity="sha384-2huaZvOR9iDzHqslqwpR87isEmrfxqyWOF7hr7BY6KG0+hVKLoEXMPUJw3ynWuhO" crossorigin="anonymous"></script>
    <script src="/js/script.js"></script>


## Key Functionality
- Check if the browser supports geolocation.
- Set options for high accuracy, a 5-second timeout, and no caching.
- use watchPosition to track the users location contineosly
- Emit the latitude and longitude via a socket with **send-location**, Log any errors to the console
- Initialize a mao centered at coordinates(0,0) with a zoom level using **leafLet**.
- Add **openStreetMap** tiles to the map
- create an empty object marker
- When receiving location data via the socket, extract id, latitude, and longitude, and center the map on the new coordinates.
- If a marker for the id exists, update its position, otherwise, create a new marker at the given coordinates and add it to the map. When a user disconnects, remove their marker from the map and delete it from markers

