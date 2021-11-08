import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
	// firstName, lastName 변화할때 마다 change를 어떻게 할것인가?
	//

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);

	const [firstName, setFirstName] = useState('Billie');
	const [lastName, setLastName] = useState('Ju');

	const joke = useRandomJoke(firstName, lastName);

	const generateJoke = (e) => {
		e.preventDefault();
		setFirstName(firstNameRef.current.value);
		setLastName(lastNameRef.current.value);
	};

	return (
		<div className="app">
			<center>
				<h1>The Joke Generator</h1>

				<h2>{joke}</h2>

				<form>
					<input placeholder="first name" ref={firstNameRef} />
					<input placeholder="last name" ref={lastNameRef} />

					<button onClick={generateJoke}>Generate Joke</button>
				</form>
			</center>
		</div>
	);
}

export default App;

//* Custom Hook
// const joke = useRandomJoke('Billie', 'Ju');

// const [joke, setJoke] = useState('');

// useEffect(() => {
// 	const fetchJoke = async () => {
// 		await fetch(
// 			`https://api.icndb.com/jokes/random?firstName=Billie&lastName=Ju`
// 		)
// 			.then((res) => res.json())
// 			.then((data) => setJoke(data.value.joke));
// 	};

// 	fetchJoke();
// }, []);
