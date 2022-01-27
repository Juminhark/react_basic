import React from 'react';
import User from '../components/User';
// material-ui
import Card from '../components/Card/Card.js';

const dataFetch = (props) => {
	const { users, isLoading, isError } = props;
	return (
		<Card title="data Fetch">
			{isLoading && <h3>loading</h3>}
			{!isLoading && isError && <h3>{isError}</h3>}
			{!isLoading && users && (
				<div>
					{users.map((user) => (
						<User
							key={user.id}
							name={user.name}
							username={user.username}
							email={user.email}
							phone={user.phone}
						/>
					))}
				</div>
			)}
		</Card>
	);
};

export default dataFetch;
