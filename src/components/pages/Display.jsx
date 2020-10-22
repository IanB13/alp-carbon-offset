import React from "react"
import {Button} from 'semantic-ui-react'

const Display = ({setPage,data}) =>{
    const previous = () =>{
        setPage("Brics")
    }

    const co2 ={ 
        driving: 109, //g/km
        flying: 113, //g /km
        tree: 22000 // per year
    }
    console.log(co2)
    const CO2 = data.CO2Peak - data.CO2Trough
    const lifetime = 7500 
    console.log(data)
    return(
        <>
        <h1>
            Total Carbon offset: { Math.round(data.bric*CO2*lifetime/1000)}kg of CO2
        </h1>
        This is equivalent to 
        <ul>
            <li>Driving: {Math.round(data.bric*CO2*lifetime/co2.driving)} km</li>
            <li>Flying: {Math.round(data.bric*CO2*lifetime/co2.flying)} km </li>
            <li>{Math.round(data.bric*CO2*lifetime/co2.tree)} Trees</li>
        </ul>
        <Button onClick = {previous}>previous </Button>
        </>
    )
}

export default Display