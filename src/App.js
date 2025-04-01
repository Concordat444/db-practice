import logo from './logo.svg';
import './App.css';
import './components/InputLine'
import DbDefinitionForm from "./components/DbDefinitionForm"
import { useState } from 'react';

function App() {
  const [dbConnectionObject, setDbConnectionObject] =useState( 
  {
    user: "",
    host: "",
    database: "",
    password: process.env.REACT_APP_DB_PASSWORD,
    port: 5432
  });


  return (
    <div className="App">
      <header className="App-header">
{/*         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <DbDefinitionForm handleSubmit={setDbConnectionObject}/>
      </header>
      <h2>{JSON.stringify(dbConnectionObject)}</h2>
    </div>
  );
}

export default App;
