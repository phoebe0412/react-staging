import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  // 滑鼠移入與移出
  handleMouse = (flag) =>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾選與取消勾選一個todo的回調
  handleCheck = (id) =>{
    return (event)=>{
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 刪除一個todo的回調
  handleDelete = (id) =>{
    if(window.confirm('確定刪除？')){
      this.props.deleteTodo(id)
    }
  }
  
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'#FFF'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=> this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? 'block':'none'}}>
          删除
        </button>
      </li>
    )
  }
}
