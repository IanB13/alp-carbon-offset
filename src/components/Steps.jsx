import React from 'react'
import { Step } from 'semantic-ui-react'

const Steps = ({page}) => {
    const CO2 = {}
    const bric = {}
    const results = {}
    switch (page){
        case "CarbonPerKwh":
            CO2.active = true
        break
        case "Brics":
            CO2.completed = true
            bric.active = true
        break
        case "Display":
            CO2.completed = true
            bric.completed = true
            results.active = true
        break
        default:
    }

    if(page) return (

        <Step.Group ordered id = "steps">
            <Step {...CO2} >
                <Step.Content>
                    <Step.Title>CO<sub>2</sub> Intensity</Step.Title>
                    <Step.Description>CO<sub>2</sub> per kWh </Step.Description>
                </Step.Content>
            </Step>

            <Step {...bric}>
                <Step.Content>
                    <Step.Title>Power Bric</Step.Title>
                    <Step.Description>Number of Units</Step.Description>
                </Step.Content>
            </Step>

            <Step {...results}>
                <Step.Content>
                    <Step.Title>Results</Step.Title>
                    <Step.Description>Carbon Offset</Step.Description>
                </Step.Content>
            </Step>
        </Step.Group>
    )
    else return null
}
export default Steps