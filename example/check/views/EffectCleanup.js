import React, { useState, useEffect } from 'react';
// material-ui
import Card from '../components/Card/Card.js';

function ForHook() {
	const [name, setName] = useState('');

	// useEffect(() => console.log('mount될 때'), []);
	// useEffect(() => console.log('변화가 있으면 언제나'));

	// useEffect(() => {
	// 	console.log('name 이 바뀌면 적용');
	// }, [name]);

	// // cleanup
	// useEffect(() => {
	// 	return function cleanup() {
	// 		console.log('unmount될때 적용');
	// 	};
	// }, []);

	// useEffect(() => () => console.log('name이 바뀌거나 unmount 될때'), [name]);

	const handleName = (e) => {
		const { value } = e.target;
		setName(value);
	};

	return (
		<div>
			<p>10초후에 사라집니다</p>
			<input value={name} onChange={handleName} placeholder="name" />
			<span> {name} </span>
		</div>
	);
}

export default function CleanupHook() {
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShouldRender(false);
		}, 10000);
	}, []);

	return (
		<Card title="useEffect-Clenup">
			{shouldRender ? <ForHook /> : <p>사라졌습니다 새로고침(f5)하세요</p>}
		</Card>
	);
}
