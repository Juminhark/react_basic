import React, { useState, useEffect, useCallback } from 'react';
// material-ui
import Card from '../components/Card/Card.js';

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems(5));
		console.log('getItems change');
	}, [getItems]);

	return items.map((item) => <div key={item}>{item}</div>);
};

const useCallbackCase = () => {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	const getIitems = useCallback(
		(incrementer) => {
			return [
				number + incrementer,
				number + 1 + incrementer,
				number + 2 + incrementer,
			];
		},
		[number]
	);

	const theme = {
		backgroundColor: dark ? '#333' : '#FFF',
		color: dark ? '#FFF' : '#333',
	};

	return (
		<Card
			title="useCallback"
			content="useCallback : callback 의존성이 변경될때만 랜더링. 불필요한 렌더링 방지."
		>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<button
				style={{ background: theme.backgroundColor, color: theme.color }}
				onClick={() => setDark((prevDark) => !prevDark)}
			>
				Toggle theme
			</button>
			<List getItems={getIitems} />
		</Card>
	);
};

export default useCallbackCase;
