import React from 'react'
import {Map, GeoJSON, SVGOverlay} from 'react-leaflet'
import countries from './data/countries.json';
import 'leaflet/dist/leaflet.css';
import './map.css'

class MyMap extends React.Component {
    state = { color: "white" };
    componentDidMount() {
    }
    countryStyle = {
        fillColor: 'red',
        fillOpacity: 1,
        color: 'white',
        weight: 1,
        dashArray: 2,
        height: "80vh",
        width: "100vw"
    }
    colorChange = (e) => {
        this.setState({color: e.target.value})
    }

    onCountryClick = (e) => {
        e.target.setStyle({
            fillColor: this.state.color,
            fillOpacity: 1
        })
    }
    onCountry =(feature, layer) => {
        const countryName = feature.properties.ADMIN
        layer.bindPopup(countryName + " ("+feature.properties.ISO_A3+")")

        layer.options.fillOpacity = 0.2

        layer.on({
            // click: this.onCountryClick,
            mouseOver: layer.bindPopup(`${countryName}</br>${feature.properties.ISO_A3}<br>Completed Assessment : ${Math.random()*2}`)
        })
    }
    
    render(){
        return (
            <div>
                <Map style={{height: "50vh"}} zoom={2} center={[-1.940278,29.873888]}>
                    <GeoJSON style={this.countryStyle} data={countries.features} onEachFeature={this.onCountry}/>
                </Map>
                <input type="color" value={this.state.color} onChange={this.colorChange} />
            </div>
        )
    }
}

export default MyMap
