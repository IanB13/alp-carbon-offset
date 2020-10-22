import React from "react"
import {Button,Input} from 'semantic-ui-react'

const Brics = ({setPage, setData, data}) =>{
    const next = () =>{
        setPage("Display")
    }
    const previous = () =>{
        setPage("CarbonPerKwh")
    }
    const setBric = (e) =>{
        const bric = e.target.value
        const newData = {...data,bric}
        setData(newData)
    }
    return(
        <>
            <h1>
                Number of Bric Units
            </h1>
            <p>
                This is the number of Power Bric units you would utilize
            </p>
            <div>
            <Input type='number' onChange = {setBric} value = {data.bric} />
            <br/>
            </div>
            <div className = "spreadButtons">
                <Button onClick={previous}>previous </Button>
                {(() => {
                    if(data.bric > 0){
                        return <Button color = "blue" onClick={next}>next </Button>
                    }
                        return <Button> next </Button>
                })()}
            </div>
        </>
    )
}

export default Brics