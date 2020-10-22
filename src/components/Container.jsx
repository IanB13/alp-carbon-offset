import React,{useState} from 'react';
import Start from './pages/Start'
import CarbonPerKwh from './pages/CarbonPerKwh'
import Brics from './pages/Brics'
import Display from './pages/Display'
import Steps from './Steps'

const Container = () =>{
    const [page, setPage] = useState("Start")
    const [data, setData] = useState({CO2Peak:0,CO2Trough:0, bric: 0})
  
    return(
        <>
        <div>
          <Steps page = {page}/>
        </div>
        <div>
        {(() => {
        switch (page) {
          case "Start":
            return <Start setPage ={setPage}/>;
          case "CarbonPerKwh":
            return <CarbonPerKwh setPage ={setPage} data = {data} setData = {setData}/>;
          case "Brics":
            return <Brics setPage ={setPage} data = {data} setData = {setData}/>;
         case "Display":
            return <Display setPage ={setPage} data = {data} setData = {setData}/>;
          default:
            return null;
        }
        })()}
        </div>
        </>
    )

}

export default Container

