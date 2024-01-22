import React, { Component } from 'react'
import './index.css'

export default class Card extends Component {
  render() {
    let { title, description, url, urlToImage, author, publishedAt } = this.props;
    return (
      <div>
        <div className="card round">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">{author}</small></p>
            <a href={url} className="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
    )
  }
}
