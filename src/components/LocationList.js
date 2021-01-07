import React from 'react';
import WeatherLocation from './WheatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({cities, onSelectedLocation}) => {
    const handleOnWeatherLocationClick = (city) => {
        console.log(`handleOnWeatherLocationClick  - ${city}`);
        onSelectedLocation(city);
    }
    const strToComponents = cities => (
        cities.map( ( city ) => <WeatherLocation 
                                    key={city} 
                                    city={city}
                                    onWeatherLocationClick={ () => handleOnWeatherLocationClick(city)}
                                />)
        
    );

    return (
    <div>
        {strToComponents(cities)}
    </div>);
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;