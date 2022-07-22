import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

  back = () =>{
    this.props.history.goBack()
  }

	forward = () => {
		this.props.history.goForward()
	}

	go = () =>{
		this.props.history.go(-2)
	}

  render() {
    // console.log('Header組件收到的props是', this.props)
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>前進</button>&nbsp;
				<button onClick={this.forward}>後退</button>&nbsp;
				<button onClick={this.go}>go</button>
      </div>
    )
  }
}

export default withRouter(Header)

// withRouter可以加工一搬組件,讓一般組件具備路由組件所特有的API
// withRouter的返回值是一個新組件