import React from "react"
import {Button,Input} from 'semantic-ui-react'

const Brics = ({setPage, setData, data}) =>{
    const next = () =>{
        setPage(3)
    }
    const previous = () =>{
        setPage(1)
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
                Select Number of units
            </p>
            <div>
            <Input type='number' onChange = {setBric} value = {data.bric} />
            </div>
            <div>
                <Button onClick={previous}>previous </Button>
                <Button onClick={next}> next </Button>
            </div>
        </>
    )
}

export default Brics