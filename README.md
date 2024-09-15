# realtime_device_tracker_socket.io

This project is a real-time device tracking system using **Socket.io** for bi-directional communication between the server and the client, and **EJS** as the templating engine to render dynamic HTML content.

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


## chek