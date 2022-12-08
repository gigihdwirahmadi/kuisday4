import React from "react";
import "./index.css";
const Form = ({ action, type,name }) => {
  return (
    <form className="form-container" onSubmit={(e) => action(e)}>
    <div class="form">
    
        {type === "UPDATE" && (
          <input className="input" type={"number"} placeholder={"id"} />
        )}

        <input className="input" type={"text"} placeholder="name" />

        <input className="input" type={"number"} placeholder="number" />

        <input className="input" type={"email"} placeholder="email" /><br></br>
        <button className="btn btn-dark" type="submit">
          
          {name}
        </button>
     
    </div>
    </form>
  );
};
export default Form;
