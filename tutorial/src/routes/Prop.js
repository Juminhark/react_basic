import React from 'react';
import PropTypes from 'prop-types';

// const Prop = ({ name }) => {
// 	console.log(name);
// 	return <div>prop = {name}</div>;
// };

// export default Prop;

class Prop extends React.Component {
	render() {
		return (
			<div>
				<h4>Hello, {this.props.name} </h4>
				<h5>{this.props.children}</h5>
			</div>
		);
	}
}

export default Prop;

//? prop control
//? 1. 검증
Prop.propType = { name: PropTypes.string.isRequired };

//? 2. default
Prop.defaultProps = { name: 'zillda' };
