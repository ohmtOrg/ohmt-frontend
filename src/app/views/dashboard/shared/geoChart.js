import * as React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Country", 1],
  ["Rwanda", 1],
  ["Botswana", 1],
  ["Nigeria", "Uncompleted"],
  ["CD", 1],
  ["DRC", "Uncompleted"],
  ["Burundi", "Uncompleted"]
];
const  MapChart=()=>{

    return (
      <div className="App">
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[
    ['Country', 'Cmpleted assesment'],
    ['Algeria',1],
    // ['Angola', null],
    // ['Benin', null],
    // ['Botswana', null],
    // ['Burkina Faso', null],
    // ['Burundi', null],
    // ['Cameroon', null],
    ['Canary Islands', 1],
    ['Cape Verde', 1],
    ['Central African Republic', 1],
    ['Ceuta', 1],
    ['Chad', 1],
    ['Comoros', 1],
    ["Cote d'Ivoire", 1],
    ['Democratic Republic of the Congo', 1],
    ['Djibouti', 1],
    ['Egypt',1],
    ['Equatorial Guinea', 1],
    ['Eritrea', 1],
    ['Ethiopia', 1],
    ['Gabon', 1],
    ['Gambia', 1],
    ['Ghana', 1],
    ['Guinea', 1],
    ['Guinea-Bissau', 1],
    ['Kenya', 1],
    ['Lesotho', 1],
    ['Liberia', 1],
    ['Libya', 1],
    ['Madagascar', 1],
    ['Madeira', 1],
    ['Malawi', 1],
    ['Mali', 1],
    ['Mauritania', 1],
    ['Mauritius', 1],
    ['Mayotte', 1],
    // ['Melilla',null],
    ['Morocco', 1],
    ['Mozambique', 1],
    ['Namibia', 1],
    ['Niger', 1],
    ['Nigeria', 1],
    ['Republic of the Congo', 1],
    ['Réunion', 1],
    // ['Rwanda', null],
    // ['Saint Helena', null],
    // ['São Tomé and Principe',null],
    // ['Senegal', null],
    // ['Seychelles', null],
    // ['Sierra Leone', null],
    // ['Somalia', null],
    // ['Sudan', null],
    ['South Africa', 1],
    ['South Sudan', 1],
    ['Swaziland',1],
    ['Tanzania', 1],
    ['Togo',1],
    ['Tunisia', 1],
    ['Uganda', 1],
    ['Western Sahara', 1],
    ['Zambia', 1],
    ['Zimbabwe', 1],
  ]}
  options={{
    region: '002', // Africa
    colorAxis: { colors: [ 'black','#00853f', '#f8bbd0'] },
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#e31b23',
    defaultColor: '#f5f5f5',
  }}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '4' }}
/>
      </div>
    );
  
}

export default  MapChart