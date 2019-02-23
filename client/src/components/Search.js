import React from "react";
import Styled from "styled-components";
import Button from "./Button";

const SearchWrapper = Styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 3px;
`;

const Card = Styled.div`
  width: 750px;
  margin: 0 auto;
`;

const ButtonWrapper = Styled.div`
  margin: 20px;
`;
const Search = props => {
  return (
    <Card>
      <div className="card grey lighten-5">
        <SearchWrapper>
          <div className="input-field col s6">
            <i className="material-icons prefix">{props.icon}</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              value={props.keyword}
              onChange={props.handleInputChange}
            />
            <label htmlFor="icon_prefix">{props.text}</label>
          </div>
          <ButtonWrapper>
            <Button text="Search" icon="send" onClick={props.onClick} />
          </ButtonWrapper>
        </SearchWrapper>
      </div>
    </Card>
  );
};

export default Search;
