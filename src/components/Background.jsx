import React from 'react'
import BrickWall from '../resources/BrickWall.jpg'
import Earth from '../resources/Earth.jpg'
import Forest from '../resources/Forest.jpg'
import PowerStation from '../resources/PowerStation.jpg'

const Background = ({page})=>{
    let backgroudImg = null
    switch (page){
        case "Start":
            backgroudImg = Earth
        break
        case "CarbonPerKwh":
            backgroudImg = PowerStation
        break
        case "Brics":
            backgroudImg = BrickWall
        break
        case "Display":
            backgroudImg = Forest
        break
        default:
            console.error("Unknown Page")
    }
    return (
        <div id="bg">
            <img src={backgroudImg} alt="" />
        </div>
    )
}

export default Background