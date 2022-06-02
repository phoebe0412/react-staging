import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('成功',response.data)},
      error => {console.log('失敗',error)}
    )
  }

  getCarsData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('成功',response.data)},
      error => {console.log('失敗',error)}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>點我去的學生數據</button>
        <button onClick={this.getCarsData}>點我去的學生數據</button>
      </div>
    )
  }
}
