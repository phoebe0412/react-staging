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

  // 勾選與取消勾選
  handleCheck = (id) =>{
    return (event)=>{
      this.props.updateTodo(id, event.target.checked)
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
        <button className="btn btn-danger" style={{display:mouse? 'block':'none'}}>
          删除
        </button>
      </li>
    )
  }
}
