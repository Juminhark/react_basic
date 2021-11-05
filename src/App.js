import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
	//* Custom Hook
	const joke = useRandomJoke('Billie', 'Ju');

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

	return (
		<div className="app">
			<center>
				<h1>The Joke Generator</h1>

				<h2>{joke}</h2>

				<button>Generate Joke</button>
			</center>
		</div>
	);
}

export default App;
