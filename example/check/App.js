import React from 'react';
import './App.css';

import StateCase from './views/useStateCase';
import EffectCase from './views/useEffectCase';
import EffectCleanup from './views/EffectCleanup';
import ContextCase from './views/useContextCase';
import ReducerCounter from './views/ReducerCounter';
import CallbackCase from './views/useCallbackCase';
import DataFetchCase from './views/dataFetch';
import useFetch from './components/useFetch';

function App() {
	const { users, isLoading, isError } = useFetch(
		'https://jsonplaceholder.typicode.com/users'
	);
	return (
		<div>
			<h1>기본 hook</h1>
			<StateCase />
			<EffectCase />
			<EffectCleanup />
			<ContextCase />

			<h1>추가 Hooks</h1>
			<ReducerCounter />
			<CallbackCase />
			<h3>useMemo</h3>
			<h3>useRef</h3>
			<h3>useImperativeHandle</h3>
			<h3>useLayoutEffect</h3>
			<h3>useDebugValue</h3>

			<h1>Data Fetch</h1>
			<DataFetchCase users={users} isLoading={isLoading} isError={isError} />
		</div>
	);
}

export default App;

// {...name} => const name에 값이 할당되고 UseInput('입력된값') => UseInput은 value , onChanege를 반환
// value={name.value} onChange={name.onChange}
