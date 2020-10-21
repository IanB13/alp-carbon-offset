import React,{useState} from 'react';
import {Button} from 'semantic-ui-react'
import Start from './Start'
import CarbonPerKwh from './CarbonPerKwh'
import Brics from './Brics'
import Display from './Display'

const Container = () =>{
    const [page, setPage] = useState(0)
    const next = () =>{
        setPage(page+1)
    }
    const previous = () =>{
        setPage(page -1)
    }
    
    return(
        <>
        <header>
        </header>
        <div>Header</div>
        <div>
        {(() => {
        switch (page) {
          case 0:
            return <Start />;
          case 1:
            return <CarbonPerKwh />;
          case 2:
            return <Brics />;
        case 3:
            return <Display />;
          default:
            return null;
        }
        })()}
        </div>
        {(() => {
        switch (page) {
          case 0:
            return  <Button onClick = {next}> next </Button>;
          case 1:
          case 2:
            return <> <Button onClick = {previous}>previous </Button> <Button onClick = {next}> next </Button> </>;
          case 3:
            return  <Button onClick = {previous}>previous </Button>;
          default:
            return null;
        }
        })()}
        </>
    )

}

export default Container

