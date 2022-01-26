import React from 'react';

//? component를 정의하는 방법 2가지

//? 1. JavaScript 함수로 작성
const Component = (props) => {
	console.log(props);
	return <div>props.name = {props.name}</div>;
};

export default Component;

//? 2. ES6 class를 사용
// class Component extends React.Component {
//   render() {
//     return <div>{this.props.name}</div>;
//   }
// };

// export default Component;
