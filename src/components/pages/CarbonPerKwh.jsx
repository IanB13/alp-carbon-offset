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
            <div>
                carbon per KWH is inputed here,
                link to or embed the map website
                <a href ="https://www.electricitymap.org/map"> link </a>
            </div>
            <Input type='number' onChange = {setCO2} value = {data.CO2} />

            <Button onClick={next}> next </Button>
        </div>

    )
}
export default CarbonPerKwh