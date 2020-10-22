import React from "react"
import {Grid} from 'semantic-ui-react'

const ResultsView = ({duration, co2}) => {

    const co2Rates ={ 
        driving: 109, //g/km
        flying: 113, //g /km
    }

    return (
        <Grid.Column>
            <Grid.Row>
            {Math.round(co2/co2Rates.driving)} km
            </Grid.Row>
            <Grid.Row>
            {Math.round(co2/co2Rates.flying)} km
            </Grid.Row>
            <Grid.Row>
                per {duration}
            </Grid.Row>
        </Grid.Column>

    )
}

export default ResultsView