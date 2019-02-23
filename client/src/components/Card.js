import React from "react";
import Styled from "styled-components";
import API from "../utils/API";

const Button = Styled.button`
  float: right;
`;

const Card = props => {
  return (
    <div>
      <div className="col s12 m7">
        <h2 className="header">{props.title}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src={props.image} alt="Sorry no image found." />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5>Authors: {props.authors}</h5>
              <p>{props.description}</p>
            </div>
            <div className="card-action">
              <a href={props.link}>Preview Book</a>
              {props.saved ? (
                <Button
                  className="btn waves-effect waves-light light-blue darken-4 card-button"
                  onClick={() => {
                    props.deleteBook(props.id);
                  }}>
                  Delete
                  <i class="material-icons right">send</i>
                </Button>
              ) : (
                <Button
                  className="btn waves-effect waves-light light-blue darken-4 card-button"
                  onClick={() => {
                    props.saveBook(props);
                  }}>
                  Save
                  <i class="material-icons right">send</i>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
