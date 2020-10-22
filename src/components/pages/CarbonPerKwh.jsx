import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const CarbonPerKwh = ({ setPage, setData, data }) => {
    const next = () => {
        setPage("Brics")
    }
    const setCO2Peak = (e) =>{
        const CO2Peak = e.target.value
        const newData = {...data,CO2Peak}
        setData(newData)
    }
    const setCO2Trough = (e) =>{
        const CO2Trough = e.target.value
        const newData = {...data,CO2Trough}
        setData(newData)
    }

    return (
        <div>

            <h1>
                Carbon Intensity
            </h1>
            <p>
                In order to find out how much carbon is offset we must
                first determine the carbon intensity of the energy used at the location you are in.
                Carbon intensity is a measurment of grams of carbon dixoide emited per kilowatt 
                hour.
            </p>
            <p>
                If you are unsure of the carbon intensity in your area you can check this map.
                <a href="https://www.electricitymap.org/map"> link to map</a>
            </p>
            <h2>
                Peak Carbon Intensity
            </h2>
            <p>
                This is when energy produced by the grid has the most enviromental impact. At 
                this time your battery would be supplying power to the grid. 
            </p>
            <p>
                A typical value for Britan would be 280 gCO<sub>2</sub>/kWh
            </p>
            <div>
                <Input type='number' onChange={setCO2Peak} value={data.CO2Peak} /> gCO<sub>2</sub>/kWh
            </div>
            <h2>
                Trough Carbon Intensity 
            </h2>
            <p>
                This is when energy produced by the grid has the leat enviromental impact. At 
                this time your battery would be charging. 
            </p>
            <p>
                A typical value for Britan would be 120 gCO<sub>2</sub>/kWh
            </p>

            <div>
                <Input type='number' onChange={setCO2Trough} value={data.CO2Trough} />gCO<sub>2</sub>/kWh
            </div>
            <div className = "rightButton">
            {(() => {
                    if(data.CO2Peak > 0 && data.CO2Trough >0){
                        return <Button color = "blue" onClick={next}>next </Button>
                    }
                        return <Button> next </Button>
                })()}
            </div>
        </div>

    )
}
export default CarbonPerKwh