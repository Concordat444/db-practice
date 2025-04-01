import { useState } from "react";
import InputLine from "./InputLine";

function DbDefinitionForm(props)
{
    const [user, setUser] = useState("postgres");
    const [host, setHost] = useState("localhost");
    const [database, setDatabase] = useState("Finances");
    const [port, setPort] = useState("5432");
    function handleSubmit(e)
    {
        const updatedDbObject = 
        {
            user: user,
            host: host,
            database: database,
            password: process.env.REACT_APP_DB_PASSWORD,
            port: parseInt(port)
        };
        props.handleSubmit(updatedDbObject);
        e.preventDefault();
    }
    return(
        <>
        <form>
            <InputLine subject="User" changeHandler={setUser} initial={user} />
            <InputLine subject="Host" changeHandler={setHost} initial={host} />
            <InputLine subject="Database" changeHandler={setDatabase} initial={database} />
            <InputLine subject="Port" changeHandler={setPort} initial={port} />
            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Connect</button>
        </form>
        </>
    )
}

export default DbDefinitionForm;