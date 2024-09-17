// Initialize the socket connection to the backend request to the backend
const socket = io()

// Check if the browser supports geolocation.
if (navigator.geolocation) {
    // Request the user's current location.
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude })
    }, (error) => {
        console.error('Error getting location:', error);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge : 0  // no caching
    })
}

// Initialize a mao centered at coordinates(0,0) with a zoom level using leafLet.
const map = L.map("map").setView([0,0] , 20)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"OpenStreetMap"
}).addTo(map)

// create an empty object marker
const markers = {}

// using the receive-location
socket.on("receive-location" , (data)=>{
    // update the marker position
    const {id , latitude, longitude} = data
    map.setView([latitude , longitude])
    if(markers[id]){
        markers[id].setLatLng([latitude , longitude])
    }else{
        markers[id] = L.marker([latitude , longitude]).addTo(map)
    }
})