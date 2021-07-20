import React, {useState, useEffect} from 'react'
import {Map, GeoJSON, SVGOverlay} from 'react-leaflet'
import countries from './data/countries.json';
import { useDispatch, useSelector } from "react-redux";
import {getReports} from '../../redux/actions/ReportAction'
import 'leaflet/dist/leaflet.css';
import './map.css'

const data = [
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Rwanda",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Rwanda",
        },
        gov: [
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
        ],
        impl: [
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
        ],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Burundi",
        },
        gov: [
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
        ],
        impl: [
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
            {
                _id: "jbbsjbjb",
                score: {
                    dov: 1,
                    dhf: 3
                }
            },
        ],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Uganda",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Zimbabwe",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Zambia",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Morocco",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Nigeria",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Niger",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Algerie",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Libya",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Togo",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Ethiopia",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    },
    {
        createdAt: "2021-07-21T10:54:20.823Z",
        createdBy: {
            country: "Egypt",
        },
        gov: [],
        impl: [],
        id: "60f7fcdcb5bbc20a461ecaad"
    }
]

const MyMap = (props) => {
    const reportsReducer = useSelector(state=> state.reports)
    const dispatch = useDispatch()
    const [itsColor, setItsColor] = useState('red')
    const [status, setStatus] = useState("Not completed")
    // const data = reportsReducer.reports

    useEffect(()=> {
        dispatch(getReports())
    },[])

    const countryStyle = {
        fillColor: itsColor,
        fillOpacity: 1,
        color: 'white',
        weight: 1,
        height: "80vh",
        width: "100vw",
    }
    let countryName;

    const onCountryClick = async(e) => {
        countryName = e.target.feature.properties.ADMIN
        let i;
        setStatus("Completed")
        for(i=0; i < data.length; i++){
            if(data[i].createdBy.country === countryName) {
                e.target.setStyle({
                    fillColor: "blue",
                    fillOpacity: 0.5
                })
            }
        }
    }
    const onCountry =(feature, layer) => {
        const countryName = feature.properties.ADMIN
        layer.bindPopup(`<b>${countryName}</b></br>${feature.properties.ISO_A3}<br>Assessment : ${status}`)

        layer.options.fillOpacity = 0.2
        
        layer.on({
            mouseover: onCountryClick
        })
    }
    
    return (
        <div>
            {data && <Map style={{height: "50vh"}} zoom={3} center={[-1.940278,29.873888]}>
                <GeoJSON style={countryStyle} data={countries.features} onEachFeature={onCountry}/>
            </Map>}
        </div>
    )
}

export default MyMap