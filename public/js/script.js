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

