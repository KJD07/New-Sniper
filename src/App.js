import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import {
  Route,
  Link,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// by providing a key value in the <News/> component the system will remound and re-render as by knowing that keys ar unique

export default class App extends Component {

  apikey = process.env.REACT_APP_API_KEY

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route path='/' element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" category="general" title="Top Headlines" />} />
            <Route path='/business' element={<News apikey={this.apikey} setProgress={this.setProgress} key="business" category="business" title="Top Business News" />} />
            <Route path='/entertainment' element={<News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" category="entertainment" title="Top Entertainment News" />} />
            <Route path='/health' element={<News apikey={this.apikey} setProgress={this.setProgress} key="health" category="health" title="Top Health News" />} />
            <Route path='/science' element={<News apikey={this.apikey} setProgress={this.setProgress} key="science" category="science" title="Top Science News" />} />
            <Route path='/sports' element={<News apikey={this.apikey} setProgress={this.setProgress} key="sports" category="sports" title="Top Sports News" />} />
            <Route path='/technology' element={<News apikey={this.apikey} setProgress={this.setProgress} key="technology" category="technology" title="Top Technology News" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
