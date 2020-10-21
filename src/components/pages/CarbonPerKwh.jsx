import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const CarbonPerKwh = ({ setPage, setData, data }) => {
    const next = () => {
        setPage(2)
    }
    const setCO2 = (e) =>{
        const CO2 = e.target.value
        const newData = {...data,CO2}
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
                Carbon intensity is a measurment of grams of carbon dixoide emited per Kilowatt 
                hour.
            </p>
            <p>
                If you are unsure of the carbon intensity in your area you can check this map.
                <a href="https://www.electricitymap.org/map"> link </a>
            </p>
            <div>
                <Input type='number' onChange={setCO2} value={data.CO2} />
            </div>
            <div>
                <Button onClick={next}> next </Button>
            </div>
        </div>

    )
}
export default CarbonPerKwh