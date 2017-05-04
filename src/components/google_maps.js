import React, { Component } from 'react';

class GoogleMaps extends Component {
    
    componentDidMount() {        
        new google.maps.Map(this.refs.map, {
            zoom: this.props.zoom,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMaps