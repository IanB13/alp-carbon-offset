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
            <div>
                Select Number of units
            </div>
            <Input type='number' onChange = {setBric} value = {data.bric} />
            this is where the number of bricks will be selected
            <div>
                <Button onClick={previous}>previous </Button>
                <Button onClick={next}> next </Button>
            </div>
        </>
    )
}

export default Brics