import React, { useState, useContext, createContext } from 'react';
// material-ui
import Card from '../components/Card/Card.js';

const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
};

const ThemeContext = createContext(themes.light);

function ThemedButton() {
	const theme = useContext(ThemeContext);
	return (
		<button style={{ background: theme.background, color: theme.foreground }}>
			I am styled by theme context!
		</button>
	);
}

const UserContext = createContext(null);

const UserButton = () => {
	const { value, setValue } = useContext(UserContext);

	return (
		<div>
			<p>{value}</p>
			<button onClick={() => setValue('change Value')}>change value</button>
		</div>
	);
};

export default function ContextExample() {
	const [value, setValue] = useState('hello from context');

	return (
		<Card
			title="useContext"
			content="useContext : Global State를 관리하는 hooks API"
		>
			<ThemeContext.Provider value={themes.dark}>
				<ThemedButton />
			</ThemeContext.Provider>

			<UserContext.Provider value={{ value, setValue }}>
				<UserButton />
			</UserContext.Provider>
		</Card>
	);
}
