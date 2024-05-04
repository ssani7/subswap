import { useState } from 'react';
import './App.css';
import { signOut } from 'firebase/auth';
import auth from './firebase.init';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">
				<button className="btn btn-primary" onClick={() => signOut(auth)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
