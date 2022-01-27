import React, { useState, useEffect } from 'react';

const Effect = () => {
	const [count, setCount] = useState(0);

	// componentDidMount, componentDidUpdate와 같은 방식으로
	useEffect(() => {
		// 브라우저 API를 이용하여 문서 타이틀을 업데이트
		document.title = `${count} times`;
	}, [count]); // count의 변화때마다

	return (
		<div>
			<button onClick={() => setCount(count + 1)}> - </button>
			{count} <button onClick={() => setCount(count - 1)}> + </button>
			<br />
			<input
				value={count}
				onChange={(e) => setCount(e.target)}
				placeholder="count"
				type="number"
			/>
		</div>
	);
};

export default Effect;
