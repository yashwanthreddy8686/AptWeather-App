import {
    addSpinner,
    displayError
} from './domFunctions.js'
import CurrentLocation from "./CurrentLocation.js"
import { setLocationObject, getHomeLocation } from './dataFunctions.js';
const currentLoc = new CurrentLocation();

const initApp = () => {
    // add listeners
    const geoButton = document.querySelector('#getLocation');
    geoButton.addEventListener('click', getGeoWeather);
    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', loadWeather);
    loadWeather();
}

document.addEventListener('DOMContentLoaded', initApp);

const getGeoWeather = (event) => {
    if (event) {
        if (event.type === 'click') {
            // add spinner
            const mapIcon = document.querySelector('.fa-map-marker-alt');
            addSpinner(mapIcon);
        }
    }
    if (!navigator.geolocation) {
        return geoError()
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
}

const geoSuccess = (position) => {
    const myCoordsObj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`
    };
    // set location object
    setLocationObject(currentLoc, myCoordsObj);
    // update data and display 
    updateDataAndDisplay(currentLoc);
}

const loadWeather = (e) => {
    const savedLocation = getHomeLocation();
    if (!savedLocation && !e) return getGeoWeather();
    if (!savedLocation && e.type === 'click') {
        displayError(
            'No Home Location Saved.',
            'Sorry. Please save your home location first.'
        )
    } else if (savedLocation && !e) {
        displayHomeLocationWeather(savedLocation)
    } else {
        const homeIcon = document.querySelector('.fa-home');
        addSpinner(homeIcon);
        displayHomeLocationWeather(savedLocation);
    }
}

const displayHomeLocationWeather = (home) => {
    if (typeof home === 'string') {
        //const locationJson = 
    }
}

const updateDataAndDisplay = async (locationObj) => {
    // const weatherJson = await getWeatherFromCoords(locationObj);
    // if (weatherJson) updateDisplay(weatherJson, locationObj);
}

