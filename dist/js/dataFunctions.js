export const setLocationObject = (locationObj, coordsObj) => {
    const { name, lat, lon, unit } = coordsObj;
    locationObj.setLat(lat);
    locationObj.setLon(lon);
    locationObj.setName(name);
    if (unit) {
        locationObj.setUnit(unit);
    }
}

export const getHomeLocation = () => {
    return localStorage.getItem('defaultWeatherLocation')
}