import React, { useState, useEffect } from 'react';

const ForClean = () => {
	const [name, setName] = useState('');
	const [second, setSecond] = useState(10);

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

	//! setInterval / setTimeout
	//? second가 바뀔때마다 or unmount 될떄
	useEffect(() => {
		if (second === 0) return;

		const timeout = setTimeout(() => setSecond(second - 1), 1000);

		return () => setTimeout(timeout);
	}, [second]);

	return (
		<div>
			<input value={name} onChange={handleName} placeholder="name" />
			<span> {name} </span>
			<p>{second}초후에 사라집니다</p>
		</div>
	);
};

const EffectClean = () => {
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShouldRender(false);
		}, 10000);
	}, []);

	return (
		<div>
			{shouldRender ? <ForClean /> : <p>사라졌습니다 새로고침(f5)하세요</p>}
		</div>
	);
};

export default EffectClean;
