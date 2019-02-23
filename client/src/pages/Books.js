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

class Books extends Component {
  state = {
    books: [],
    keyword: "",
  };

  googleAPI = keyword => {
    const apikey = process.env.APIKEY || "AIzaSyBKXCtV0DMfY3yCBkqQ_z16KkVqoviMNig";
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apikey}`
      )
      .then(msg => {
        console.log(msg.data);
        let books = msg.data.items;
        for (let i = 0; i < books.length; i++) {
          let authors = books[i].volumeInfo.authors;
          let title = books[i].volumeInfo.title;
          let description = books[i].volumeInfo.description;
          let image = books[i].volumeInfo.imageLinks.thumbnail;
          let link = books[i].volumeInfo.infoLink;
          console.log(authors, title, image, link);
          let tempBook = {
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link,
          };
          let newBooks = this.state.books;
          newBooks.push(tempBook);
          this.setState({
            books: newBooks,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  saveBook = props => {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
      saved: true,
    });
  };
  clickHandler = event => {
    this.googleAPI(this.state.keyword);
    console.log(this.state.books);
  };

  handleInputChange = event => {
    const keyword = event.target.value;
    this.setState({
      keyword: keyword,
    });
  };
  render() {
    return (
      <div>
        <Search
          icon="search"
          text="Search For A Book"
          onClick={this.clickHandler}
          handleInputChange={this.handleInputChange}
          keyword={this.state.keyword}
        />
        <WrapperDiv>
          {this.state.books ? (
            this.state.books.map((books, index) => {
              return (
                <Card
                  title={books.title}
                  authors={books.authors}
                  description={books.description}
                  image={books.image}
                  link={books.link}
                  key={index}
                  id={index}
                  saved={false}
                  saveBook={this.saveBook}
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

export default Books;
