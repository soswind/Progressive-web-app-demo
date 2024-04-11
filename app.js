document 
.querySelector("#btn-geolocation")
.addEventListener("click", getGeolocation);

async function getGeolocation() {
    const geolocation = document.querySelector("#geolocation");
    const map = document.querySelector("#map");

    geolocation.textContent = "Getting your location...";

    if (!("geolocation" in navigator)) {
        geolocation.textContent = "Geolocation is not available";
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        geolocation.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`; // Set the text content to the latitude and longitude

        map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude}&marker=${latitude},${longitude}`; // Set the src attribute of the map to the OpenStreetMap URL
    });
}