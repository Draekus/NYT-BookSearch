import React from "react";
// import Styled from "styled-components";
import Card from "./Card";
import Styled from "styled-components";

const WrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 30px auto;
`;

const CardWrapper = props => {
  return <WrapperDiv>{props.renderCards}</WrapperDiv>;
};

export default CardWrapper;
