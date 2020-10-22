import React from "react"
import { Header, Button } from 'semantic-ui-react'

const Start = ({setPage}) =>{
    const next = () =>{
            setPage("CarbonPerKwh")
    }

    return(
        <div>
            <Header as='h1'>Bric Carbon Offset</Header>
            <p>Are you concered about your carbon footprint and would like to offset the
            carbon footprint created by your energy use?
        </p>
            <p>
            The Power Bric, produced by ALP Technologies, is the worlds lowest cost modular battery system.
            Using the Power Bric you can store energy when the carbon intensity is low and use it when the 
            carbon intensity is high. 
        </p>
        <p>
            This web app calculates the carbon offset that using a Power Bric system would have. 

        </p>
        <div className = "centerButton">
            <Button color = "blue" onClick = {next}> Start </Button>
        </div>
        
        </div>
        
    )
}

export default Start
