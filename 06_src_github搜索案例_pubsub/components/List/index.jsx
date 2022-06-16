import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class index extends Component {

  // 初始化狀態
  state = {
    users:[], //users初始值為數組
    isFirst: true, //是否為第一次打開頁面
    isLoading: false, //標示是否處於加載中
    err: false //存儲請求相關的錯誤訊息
  }

  componentDidMount(){
    this.token = Pubsub.subscribe('phoebe',(_,stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    Pubsub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>請輸入關鍵字,點擊搜尋</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=>{
            return(
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
