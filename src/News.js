import React, { Component } from 'react'
import Card from './Card'
import Hacker from './hacker.jpg'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

// this.state is used to fetch the data inside a component
// this.props is used to fetch the data outside the component

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  // async await function can't be used in the front of an arrow function

  // Prev = async () => {
  //   console.log("Prev Done");
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=6`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  // }

  // {{ state is an undefined variable }} this error was coming due to not using of an arrow function as onClick can only be used perfectly with arrow functions. As arrow function act as an event handler

  // Next = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 12))) {
  //     console.log("Next Done");
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=6`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false
  //     })
  //   }
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=6`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
  };

  componentDidMount = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    this.props.setProgress(100);
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "38px" }}>NewSniper: {this.props.title}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row container">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <Card title={element.title ? element.title.slice(0, 40) : ""} target="_blank" description={element.description ? element.description.slice(0, 60) : ""} urlToImage={element.urlToImage ? element.urlToImage : Hacker} url={element.url} author={element.author ? element.author : "Unknown"} />
              </div>
            })}
          </div>
          {/* {this.state.loading && <Spinner/>} */}
        </InfiniteScroll>
      </div>
    )
  }
}

//Use var if you want function-scoped variables that can be hoisted. Use let if you want block-scoped variables that can be reassigned. Use const if you want block-scoped variables that are constant and cannot be reassigned.