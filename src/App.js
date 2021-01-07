import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { MuiThemeProvider } from '@material-ui/core';
const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mex',
  'Madrid,es',
  'Lima,pe',
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation , ${city}`)
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities} onSelectedLocation={ this.handleSelectedLocation}></LocationList>
        </div>
      </MuiThemeProvider>
   
    );
  }
}

export default App;
