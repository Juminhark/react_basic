# React Basic

## [Init React App](https://ko.reactjs.org/docs/create-a-new-react-app.html)

```sh
> npx create-react-app [name]

> cd [name]

> npm start
```

## [react-router-dom](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)

- Connect the URL : <BrowserRouter>로 browser`s url을 app에 연결.

```js
// index.js
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
```

- Add Some Links

```js
// Home
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>hello world</h1>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<Link to="/state">useState</Link> | <Link to="/effect">useEffect</Link>{' '}
				| <Link to="/hook">useHook</Link> | <Link to="/data">data</Link>
			</nav>
		</div>
	);
};

export default Home;
```

- Add Some Routes

```js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Effect from './routes/Effect';
import State from './routes/State';
import Hook from './routes/Hook';
import Data from './routes/Data';

function App() {
	return (
		<Routes>
			// "/" 중복된 url 최소화 가능
			<Route path="/" element={<Home />}>
				<Route path="state" element={<State />} />
				<Route path="effect" element={<Effect />} />
				<Route path="hook" element={<Hook />} />
				<Route path="data" element={<Data />} />
			</Route>
		</Routes>
	);
}

export default App;
```

- Adding d 'No Match' Route

```js
// App.js
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="state" element={<State />} />
			<Route path="effect" element={<Effect />} />
			<Route path="hook" element={<Hook />} />
			<Route path="invoices" element={<Invoices />} />
			{/* No Match */}
			<Route
				path="*"
				element={
					<main style={{ padding: '1rem' }}>
						<p>There's nothing here!</p>
					</main>
				}
			/>
		</Routes>
	);
}
```

- data

```js
// data.js
let invoices = [
	{
		name: 'Santa Monica',
		number: 1995,
		amount: '$10,800',
		due: '12/05/1995',
	},
	{
		name: 'Stankonia',
		number: 2000,
		amount: '$8,000',
		due: '10/31/2000',
	},
	{
		name: 'Ocean Avenue',
		number: 2003,
		amount: '$9,500',
		due: '07/22/2003',
	},
	{
		name: 'Tubthumper',
		number: 1997,
		amount: '$14,000',
		due: '09/01/1997',
	},
	{
		name: 'Wide Open Spaces',
		number: 1998,
		amount: '$4,600',
		due: '01/27/2998',
	},
];

export function getInvoices() {
	return invoices;
}

// Invoices.js
import { Link } from 'react-router-dom';
import { getInvoices } from '../data';

const Invoices = () => {
	let invoices = getInvoices();
	return (
		<div style={{ display: 'flex' }}>
			<nav
				style={{
					borderRight: 'solid 1px',
					padding: '1rem',
				}}
			>
				{invoices.map((invoice) => (
					<Link
						style={{ display: 'block', margin: '1rem 0' }}
						to={`/invoices/${invoice.number}`}
						key={invoice.number}
					>
						{invoice.name}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Invoices;
```

## [useState](https://www.youtube.com/watch?v=kkuq0gTGRFQ)

## [useEffect](https://www.youtube.com/watch?v=UVhIMwHDS7k)

## [useHooks](https://usehooks.com/)

- useToggle
- useFirestoreQuery
- useMemoCompare
- useAsync
- useRequireAuth
- useRouter
- useAuth
- useEventListener
- useWhyDidYouUpdate
- useDarkMode
