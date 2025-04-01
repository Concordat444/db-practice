import { useState } from "react";

function InputLine(props) {
  const [value, setValue] = useState(props.initial.toString());
  function handleChange(e)
  {
    setValue(e.target.value);
    props.changeHandler(e.target.value);
  }

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor={props.subject} className="col-form-label" >
            {props.subject}:
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleChange(e)}
            defaultValue={props.initial}
          />
        </div>
        <div className="col-auto">
            <span className="form-text text-danger">{value}</span>
        </div>
      </div>
    </>
  );
}

export default InputLine;
