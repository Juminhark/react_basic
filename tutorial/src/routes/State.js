import React, { useState } from 'react';

const State = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	return (
		<div>
			<button onClick={decrement}> - </button>
			{count} <button onClick={increment}> + </button>
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
