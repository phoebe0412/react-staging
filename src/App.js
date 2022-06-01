import React, { Component } from "react";
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

export default class App extends Component {
  // 狀態在哪裡,操作狀態的方法就在哪裡

  // 初始化狀態
  state = {
    todos:[
      {id:'001',name:'吃飯',done:true},
      {id:'002',name:'睡覺',done:false},
      {id:'003',name:'聽音樂',done:true},
      {id:'004',name:'去海邊',done:false}
    ],
  }

  // 添加一個todo,接收的參數是todo對象
  addTodo = (todoObj) =>{
    // 獲取原todo
    const {todos} = this.state
    // 追加一個todo
    const newTodos = [todoObj,...todos]
    // 更新狀態
    this.setState({todos:newTodos})
  }
  
  // 用於更新一個todo對象
  updateTodo = (id, done) =>{
    // 獲取狀態中的todos
    const {todos} = this.state
    // 匹配處理數據
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // 用於刪除一個todo對象
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    }) 
    this.setState({todos:newTodos})
  }

  // 用於全選
  checkAllTodo = (done) =>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:done}
    })
    this.setState({todos:newTodos})
  }

  // 用於清除已完成的
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
};