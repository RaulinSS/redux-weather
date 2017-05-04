import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';

class WeatherList extends Component {

    _renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);    
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;


        return  (
            <tr key={name}>
                <td><GoogleMaps lon={lon} lat={lat} zoom={12}/></td>
                <td><Chart data={temps} color="blue" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                { this.props.weather.length > 0 && 
                <table className = "table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this._renderWeather)}
                    </tbody>
                </table>    
                }
            </div>            
        )
    }
}

function mapStateToProps({weather}) {
    return { weather };
};

export default connect(mapStateToProps)(WeatherList)