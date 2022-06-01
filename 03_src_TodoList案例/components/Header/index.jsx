import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {

  //對接收的props進行：類型,必要性的限制
  static defaultProps = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp =(event)=>{
    // 解構賦值取keyCode,target
    const {keyCode,target} = event
    // 判斷是否回車按鍵
    if(keyCode !== 13) return
    // 添加todo名字不能為空
    if(target.value.trim() === ''){
      alert('輸入不能為空')
      return
    }
    // 準備好一個todo對象
    const todoObj = {id:nanoid(), name:target.value, done:false}
    // 將todoObj傳給App
    this.props.addTodo(todoObj)
    // 清空輸入
    target.value=''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
