import React from "react";
import "./form-input.style.scss";
// destructring the props into {handeleChange , label and otherprops }
const FormInput = ({ handleChange, label, ...otherProps }) =>  (
    <div className="group">
      <input className="form-input" onChange={handleChange}  />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "skrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );

export default FormInput;
