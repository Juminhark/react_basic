import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

ReactDOM.render(
	<React.Fragment>
		<CssBaseline />
		<Container maxWidth="sm">
			<App />
		</Container>
	</React.Fragment>,
	document.getElementById('root')
);
