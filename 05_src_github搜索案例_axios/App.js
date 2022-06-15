import React, { Component } from 'react'
import Search from './components/Search';
import List from './components/List'

export default class App extends Component {
 // 初始化狀態
  state = {
    users:[], //users初始值為數組
    isFirst: true, //是否為第一次打開頁面
    isLoading: false, //標示是否處於加載中
    err: false //存儲請求相關的錯誤訊息
  }

  // 更新狀態
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
