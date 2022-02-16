import React, { useState } from 'react';
// material-ui
import Card from '../components/Card/Card.js';

export default function useStateCase() {
	const [count, setCount] = useState(0);
	const [isRed, setRed] = useState(false);

	const Increment = () => {
		setCount(count + 1);
	};

	const ChangeColor = () => {
		setRed(!isRed);
	};

	return (
		<Card title="useState">
			<h3>state 가져오기</h3>
			<h3 className={isRed ? 'red' : ''}>{count}</h3>

			<h3>state 갱신하기</h3>
			<button onClick={Increment}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={ChangeColor}>ChangeColor</button>
		</Card>
	);
}

// class state 갱신하기
// 기존 class component는 state를 가져오기 위해 this.state.count 를 사용
// <button onClick={() => this.setState({ count: this.state.count + 1 })}>
