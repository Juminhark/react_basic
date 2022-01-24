import { Link, Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Link to="/">
				<h1>Home</h1>
			</Link>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<Link to="/state">useState</Link> | <Link to="/effect">useEffect</Link>{' '}
				| <Link to="/hook">useHook</Link> | <Link to="/invoices">invoices</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Home;
