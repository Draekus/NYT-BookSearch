import React from "react";


const Button = props => {
  return (
    <button className="btn waves-effect waves-light blue darken-1" onClick={props.onClick}>
      {props.text}
      <i className="material-icons right">{props.icon}</i>
    </button>
  );
};

export default Button;
