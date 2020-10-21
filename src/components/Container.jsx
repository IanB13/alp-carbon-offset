import React,{useState} from 'react';
import {Button} from 'semantic-ui-react'
import Start from './pages/Start'
import CarbonPerKwh from './pages/CarbonPerKwh'
import Brics from './pages/Brics'
import Display from './pages/Display'
import Steps from './Steps'

const Container = () =>{
    const [page, setPage] = useState(0)
    const [data, setData] = useState({CO2:0, bric: 0})

    const next = () =>{
        setPage(page+1)
    }
    const previous = () =>{
        setPage(page -1)
    }
    
    return(
        <>
        <div id ={"widboi"}>
          <Steps page = {page}/>
        </div>
        
        <div>
        {(() => {
        switch (page) {
          case 0:
            return <Start />;
          case 1:
            return <CarbonPerKwh setPage ={setPage} data = {data} setData = {setData}/>;
          case 2:
            return <Brics setPage ={setPage} data = {data} setData = {setData}/>;
        case 3:
            return <Display setPage ={setPage} data = {data} setData = {setData}/>;
          default:
            return null;
        }
        })()}
        </div>
        {(() => {
        switch (page) {
          case 0:
            return  <Button onClick = {next}> start </Button>
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

