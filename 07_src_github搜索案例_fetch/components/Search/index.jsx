import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async () => {
    // 獲取用戶的輸入(連續解構賦值+重新命名)
    const {keyWordElement:{value:keyWord}} = this
    // 發送請求前通知List更新狀態
    Pubsub.publish('phoebe',{isFirst:false,isLoading:true})
    // 發送網路請求

    //#region 網路發送請求---使用axios發送
    // axios.get(`/api1/search/users?q=${keyWord}`).then(
    //   response => {
    //     // 請求成功後通知List更新狀態
    //     Pubsub.publish('phoebe',{isLoading:false,users:response.data.items})
    //   },
    //   error => {
    //     // 請求失敗後通知List更新狀態
    //     Pubsub.publish('phoebe',{isLoading:false,err: error.message})
    //   }
    // )
    //#endregion
    
    //#region 網路發送請求---使用fetch發送(未優化)
    /*fetch(`/api1/search/users2?q=${keyWord}`).then(
      response => {
        console.log('聯繫服務器成功了');
        return response.json()
      },
      error => {
        console.log('聯繫服務器失敗了',error);
        return new Promise(()=>{})
      }
    ).then(
      response => {console.log('獲取數據成功了',response)},
      error => {console.log('獲取數據失敗了',error)}
    )*/
    // #endregion

    // 網路發送請求---使用fetch發送(優化)
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      Pubsub.publish('phoebe',{isLoading:false,users:data.items})
    } catch (error) {
      Pubsub.publish('phoebe',{isLoading:false,err: error.message})
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜尋github用戶</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="輸入關鍵詞點擊搜尋"/>&nbsp;
          <button onClick={this.search}>搜尋</button>
        </div>
      </section>
    )
  }
}
