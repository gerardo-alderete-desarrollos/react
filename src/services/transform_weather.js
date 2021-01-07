import convert from 'convert-units';
import {
    SUN,
    CLOUD,
    DRIZZLE,
    RAIN,
    SNOW,
    THUNDER,
} from '../constants/weathers';

const getTemp = kelvin => {
    return convert(kelvin).from('K').to('C').toFixed(2);
}
const getWeatherState = weather => {
    debugger
    const { id } = weather;

    if ( id < 300 ) {
        return THUNDER;
    }else if( id < 400 ) {
        return DRIZZLE;
    }else if( id < 500 ) {
        return SUN
    }else if( id < 600 ) {
        return RAIN;
    }else if( id < 700 ) {
        return SNOW;
    }else if( id === 800 ){
        return SUN;
    }else {
        return CLOUD;
    }
}
const transformWeather = weather_data => {
    debugger
    if( weather_data.main ) {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = getWeatherState(weather_data.weather[0]);
        const temperature = getTemp(temp);
        const data = {
            humidity,
            temperature: Number(temperature),
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    }
    
    return null;
}

export default transformWeather;