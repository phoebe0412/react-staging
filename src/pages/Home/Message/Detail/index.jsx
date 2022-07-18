import React, { Component } from 'react';

const detailData = [
	{id:'01', content:'Hello, Taiwan'},
	{id:'02', content:'Hello, Phoebe'},
	{id:'03', content:'Hello, Siva'}
]

export default class Detail extends Component {
	render() {
		console.log(this.props)
		// 接收params參數
		const {id,title} = this.props.match.params
		const findResult = detailData.find((detailObj)=>{
			return detailObj.id === id
		})
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTNET:{findResult.content}</li>
			</ul>
		);
	}
}

