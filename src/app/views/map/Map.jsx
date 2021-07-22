import React, { useState, useEffect } from "react";
import { Map, GeoJSON, SVGOverlay } from "react-leaflet";
import countries from "./data/countries.json";
import "leaflet/dist/leaflet.css";
import "./map.css";

const MyMap = (props) => {
  const { data } = props;
  const [country, setCountry] = useState("");
  const [itsColor, setItsColor] = useState("red");
  const [ass, setAss] = useState(0);
  data.forEach((count) => {
    console.log(country);
    if (country === count) {
      setItsColor("blue");
    }
  });
  const countryStyle = {
    fillColor: itsColor,
    fillOpacity: 1,
    color: "white",
    weight: 1,
    height: "80vh",
    width: "100vw",
  };

  const onCountryClick = (e) => {
    const countryName = e.target.feature.properties.ADMIN;
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i][0] === countryName) {
        if (data[i][1] === 1) {
          setAss(data[i][1]);
          e.target.setStyle({
            fillColor: "blue",
            fillOpacity: 0.5,
          });
        } else if (data[i][1] === 2) {
          setAss(data[i][1]);
          e.target.setStyle({
            fillColor: "green",
            fillOpacity: 0.5,
          });
        } else {
          setAss(0);
        }
      }
    }
  };
  const onCountry = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
    layer.bindPopup(
      `<b>${countryName}</b></br>${feature.properties.ISO_A3}<br>Completed Assessment : ${ass}/2`
    );

    layer.options.fillOpacity = 0.2;

    layer.on({
      mouseover: onCountryClick,
    });
  };

  return (
    <div>
      <Map style={{ height: "50vh" }} zoom={2} center={[-1.940278, 29.873888]}>
        <GeoJSON
          style={countryStyle}
          data={countries.features}
          onEachFeature={onCountry}
        />
      </Map>
    </div>
  );
};

export default MyMap;
