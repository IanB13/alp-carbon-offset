import React,{useState} from 'react';
import './App.css';
import Background from './components/Background';
import Container from './components/Container'

const App = () => {
  const [page, setPage] = useState("Start")

  return (
    <>
    <Background page = {page}/>

    <div className="App">
      <Container page = {page} setPage = {setPage}/>
    </div>
  </>
  );
}

export default App;
