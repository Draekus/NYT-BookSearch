import React, { Component } from "react";
import axios from "axios";
import Search from "../components/Search";
import Styled from "styled-components";
import Card from "../components/Card";
import API from "../utils/API";

const WrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 30px auto;
`;

class SavedBooks extends Component {
  state = {
    savedBooks: [],
  };

  async componentDidMount() {
    // When this component loads hit the books api and populate the state with books
    const msg = await API.getBooks();
    console.log(msg.data);
    this.setState({savedBooks: msg.data});
    
  }

  deleteBook = props => {
    API.deleteBook(props.id);
  }
  render() {
    return (
      <div>
        <WrapperDiv>
          {this.state.savedBooks ? (
            this.state.savedBooks.map((books, index) => {
              return (
                <Card
                  title={books.title}
                  authors={books.authors}
                  description={books.description}
                  image={books.image}
                  link={books.link}
                  key={index}
                  id={books.id}
                  saved={true}
                  deleteBook={this.deleteBook}
                  target="_blank"
                />
              );
            })
          ) : (
            <h3>No Results to Display</h3>
          )}
        </WrapperDiv>
      </div>
    );
  }
}

export default SavedBooks;