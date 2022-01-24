import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Effect from './routes/Effect';
import State from './routes/State';
import Hook from './routes/Hook';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="state" element={<State />} />
				<Route path="effect" element={<Effect />} />
				<Route path="hook" element={<Hook />} />
				<Route path="invoices" element={<Invoices />}>
					<Route
						index
						element={
							<main style={{ padding: '1rem' }}>
								<p>Select an invoice</p>
							</main>
						}
					/>
					<Route path=":invoiceId" element={<Invoice />} />
				</Route>

				{/* No Match */}
				<Route
					path="*"
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
