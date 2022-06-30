export const setLocationObject = (locationObj, coordsObj) => {
    const { name, lat, lon, unit } = coordsObj;
    locationObj.setLat(lat);
    locationObj.setLon(lon);
    locationObj.setName(name);
    locationObj.setUnit(unit);

}