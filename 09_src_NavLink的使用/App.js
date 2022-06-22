import React, { Component } from 'react'
import { NavLink, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home是路由組件
import About from "./pages/About"; // About是路由組件
import Header from './components/Header'; // Header是一般組件
export default class App extends Component { 
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 原生html中, 靠<a>跳轉不同的頁面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在React中靠路由連結實現切換組件 --- 編寫路由連結 */}
              <NavLink activeClassName="activeColor" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="activeColor" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
