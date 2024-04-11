document 
.querySelector('button-geolocation')
.addEventListener('click', getGeolocation);

async function getGeolocation() {
    const geolocation = document.querySelector('#geolocation');
    const map = document.querySelector('#map');

    geolocation.textContent = 'Getting your location...';

    if (!("geolocation" in navigator)) {
        geolocation.textContent = 'Geolocation is not available';
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        geolocation.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

        map.src = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    });
}