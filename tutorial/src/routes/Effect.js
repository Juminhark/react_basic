import React, { useState, useEffect } from 'react';

const Effect = () => {
	const [count, setCount] = useState(0);

	// componentDidMount, componentDidUpdate와 같은 방식으로
	useEffect(() => {
		// 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
		document.title = `${count} times`;
	});

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return (
		<div>
			<button onClick={decrement}> - </button>
			{count} <button onClick={increment}> + </button>
		</div>
	);
};

export default Effect;
