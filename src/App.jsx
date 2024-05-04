import { IoCreateOutline } from 'react-icons/io5';

function App() {
	return (
		<div className="py-10">
			<div className="text-lg text-primary font-bold mb-4 flex items-center uppercase gap-2">
				SubSwap <div className="border border-primary w-10"></div>
			</div>
			<h2 className="text-4xl font-bold titleFont w-1/2 leading-snug">Buy, Sell & Share your favorite subscriptions with ease</h2>
			<p className="mb-4 mt-2 font-semibold text-gray-400">Customize your subscription in your own way</p>
			<button className="btn btn-outline">
				<IoCreateOutline /> Create Subscription
			</button>
		</div>
	);
}

export default App;
