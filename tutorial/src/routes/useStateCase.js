import React, { useState } from 'react';

const State = () => {
	const [count, setCount] = useState(0);
	const [isRed, setIsRed] = useState(false);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const changeColor = () => setIsRed(!isRed);

	return (
		<div>
			<div>
				<button onClick={decrement}> - </button>{' '}
				<h3 style={isRed ? { color: 'red' } : { color: '' }}>{count}</h3>
				<button onClick={increment}> + </button>
			</div>
			<button onClick={changeColor}> changeColor </button>
		</div>
	);
};

export default State;

//? Class Based Component
// import React, { Component } from 'react';

// export default class State extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			count: 0,
// 		};
// 	}

// 기존 class component는 state를 가져오기 위해 this.state.count 를 사용
// 	increment = () => {
// 		this.setState({
// 			count: this.state.count + 1,
// 		});
// 	};

// 	decrement = () => {
// 		this.setState({
// 			count: this.state.count - 1,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.decrement}> - </button>
// 				{this.state.count} <button onClick={this.increment}> + </button>{' '}
// 			</div>
// 		);
// 	}
// }
