import React from "react"

const Display = ({data}) =>{
    const co2 ={ 
        driving: 109, //g/km
        flying: 113, //g /km
        tree: 22000 // per year
    }
    console.log(co2)
    const lifetime = 7500 
    console.log(data)
    return(
        <>
        <h1>
            Total Carbon offset: { Math.round(data.bric*data.CO2*lifetime/1000)}kg of CO2
        </h1>
        This is equivalent to 
        <ul>
            <li>Driving {Math.round(data.bric*data.CO2*lifetime/co2.driving)} km</li>
            <li>Flying {Math.round(data.bric*data.CO2*lifetime/co2.flying)} km </li>
            <li>{Math.round(data.bric*data.CO2*lifetime/co2.tree)} Trees</li>
        </ul>
        </>
    )
}

export default Display