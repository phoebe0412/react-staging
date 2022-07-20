import React, { Component } from 'react';
// import qs from 'query-string'

const detailData = [
	{id:'01', content:'Hello, Taiwan'},
	{id:'02', content:'Hello, Phoebe'},
	{id:'03', content:'Hello, Siva'}
]

export default class Detail extends Component {
	render() {
		console.log(this.props)
		// 接收params參數
		// const {id,title} = this.props.match.params

		// 接收search參數
		// const {search} = this.props.location
		// const {id, title} = qs.parse(search.slice(1))

		// 接收state參數
		const {id, title} = this.props.location.state || {}

		const findResult = detailData.find((detailObj)=>{
			return detailObj.id === id
		}) || {}
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTNET:{findResult.content}</li>
			</ul>
		);
	}
}

