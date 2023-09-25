import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact
            path="/"
            element={
                <Home/>
            }></Route>
          <Route
            exact
            path="/general"
            element={
              <News
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
              <News
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
              <News
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
              <News
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
              <News
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
              <News
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
              <News
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
