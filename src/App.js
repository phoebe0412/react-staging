import React, { Component } from "react";
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

export default class App extends Component {

  state = {
    todos:[
      {id:'001',name:'吃飯',done:true},
      {id:'002',name:'睡覺',done:false},
      {id:'003',name:'聽音樂',done:true},
      {id:'004',name:'去海邊',done:false}
    ],
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    );
  }
};