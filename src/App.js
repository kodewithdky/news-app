import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home  />}></Route>
          <Route
            exact
            path="/general"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey} 
                key="general"
                pazeSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>

          <Route
            exact
            path="/business"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}  
                key="business"
                pazeSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}  
                key="entertainment"
                pazeSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}  
                key="health"
                pazeSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}  
                key="sports"
                pazeSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}  
                key="science"
                pazeSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}  
                key="technology"
                pazeSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
