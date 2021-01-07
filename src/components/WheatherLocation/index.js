import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WheatherData';

import './styles.css';

import transformWheater from '../../services/transform_weather'
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

class WeatherLocation extends  Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        }

        console.log('constructor')
    }
   
    componentDidMount() {
        console.log('componentDidMount')
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    
     handleUpdateClick = async () => {
        const result = await fetch(getUrlWeatherByCity(this.state.city), {
            method: "GET",
            headers: {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "503db5056cmsh4d9ff2fe35f7c08p185a47jsnc66174436418",
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch( err => err );

        console.log( result );
        
        const newWeather = transformWheater(result);
        console.log(newWeather);
        this.setState({
            data: newWeather
        })
        debugger
    }
    render() {
        console.log('render')
        const {onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={100}/>}
            </div>
        );
    }
    
};
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;