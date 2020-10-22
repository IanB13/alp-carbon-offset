import React from "react"
import {Grid, Button} from 'semantic-ui-react'
import ResultsView from './ResultsView'

const Display = ({setPage,data}) =>{
    const previous = () =>{
        setPage("Brics")
    }
  
    const co2PerCycle = (data.CO2Peak - data.CO2Trough)*1.5

    const co2Total ={
        day: co2PerCycle * data.bric,
        year: co2PerCycle * 365 * data.bric,
        lifetime: co2PerCycle * 5000 * data.bric
    }
    // cycle = 1.5kwH
    // cycles per year = 365
    // cycles per lifetime = 5000

    console.log(data)
    return(
        <>
        <h1>
            Total Carbon offset:
        </h1>
        <h1 id = "carbonOffset">
            { Math.round(co2Total.lifetime/1000)} kg of CO2
        </h1>
        This is equivalent to:
        <br/>
        <div>
            <Grid columns={4} divided>
                <Grid.Column>

                    <Grid.Row>
                        Driving:
                    </Grid.Row>
                    <Grid.Row>
                        Flying:
            </Grid.Row>
                </Grid.Column>
                <ResultsView duration ={"day"} co2 = {co2Total.day}/>
                <ResultsView duration ={"year"} co2 = {co2Total.year}/>
                <ResultsView duration ={"battery lifetime"} co2 = {co2Total.lifetime}/>
            </Grid>
        <br/>
        </div>
        <div>
        <Button onClick = {previous}>previous </Button>
        </div>
        </>
    )
}

export default Display