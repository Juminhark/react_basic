import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import usingComstomHook from './routes/useCostomHook';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/costomHook" exact={true} component={usingComstomHook} />
		</Routes>
	);
}

export default App;
