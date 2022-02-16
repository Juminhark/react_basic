import React, { useReducer } from 'react';
// material-ui
import Card from '../components/Card/Card.js';

const initialState = { count: 0 };

// (state, action) => newState 의형태로 reducer를 받고
// dispath 메소드와 짝의 형태로 현재 state를 반환
function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export default function ReducerCounter() {
	// useReducer(reducer, initialArg, init);
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Card
			title="useReducer"
			content="useSate의 대체 함수. (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환"
		>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
		</Card>
	);
}

// useReducer 선호 경우
// 다수의 하윗값을 포한하는 복잡한 정적 로직을 만드는경우
// 다음 state가 이전 state에 의존적인 경우

// 콜백 대신 dispath를 전달 :
// 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게한다

// 초기 state의 구체화 **
