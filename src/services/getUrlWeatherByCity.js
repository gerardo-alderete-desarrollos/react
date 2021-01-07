const getUrlWeatherByCity = city => {
    return `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`
}

export default getUrlWeatherByCity;