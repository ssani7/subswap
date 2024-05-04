import { IoCreateOutline } from 'react-icons/io5';
import netflix from '../src/assets/brands/netflix.png';
import prime from '../src/assets/brands/prime.png';
import chatgpt from '../src/assets/brands/ChatGPT_logo.svg.png';
import spotify from '../src/assets/brands/spotify.png';
import heroBg from '../src/assets/hero-bg-bottom.svg';
import { motion } from 'framer-motion';
import Card from './components/Card';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="">
			<div className="py-32 flex items-center justify-around relative overflow-hidden">
				<motion.div initial={{ x: -600 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
					<div className="text-lg text-primary font-bold mb-4 flex items-center uppercase gap-2">
						SubSwap <div className="border border-primary w-10"></div>
					</div>
					<h2 className="text-4xl font-bold titleFont leading-snug max-w-[700px]">Buy, Sell & Share your favorite subscriptions with ease</h2>
					<p className="mb-4 mt-2 font-semibold text-gray-400">Customize your subscription in your own way</p>
					<Link className="btn btn-outline z-50" to="create-sub">
						<IoCreateOutline />
						Create Subscription
					</Link>
				</motion.div>

				<motion.div
					className="flex items-center justify-center px-3 py-12 rounded-xl bg-black relative"
					initial={{ scale: 1, rotate: -15, x: 600 }}
					animate={{ scale: 1.15, rotate: -15, x: 0 }}
					transition={{ duration: 1 }}>
					<p className="absolute top-3 left-3">SuperSub</p>
					<p className="absolute bottom-3 left-3">#27A65B</p>
					<p className="absolute bottom-3 right-3">$25.65</p>
					<div className="h-[250px] grid grid-cols-2 gap-5 p-5 rounded-xl items-center justify-center gradientCard">
						<img className="w-20 col-span-1" src={netflix} alt="" />
						<img className="w-20 col-span-1" src={prime} alt="" />
						<img className="w-20 col-span-1" src={chatgpt} alt="" />
						<img className="w-20 col-span-1" src={spotify} alt="" />
					</div>
				</motion.div>

				<img className="absolute -bottom-32 -z-10" src={heroBg} alt="" />
			</div>

			<section className="px-32 pb-32">
				<h2 className="title my-10 ">Popular Subscriptions</h2>
				<div className="grid grid-cols-6 gap-5">
					{[1, 2, 3, 4, 5, 6].map((sub) => (
						<div key={sub} className="flex flex-col gap-2 items-center bg-black rounded-xl pb-4">
							<Card subs={sub} />
							<div className="w-full px-4">
								<p className="text-md mb-3">
									<span className="text-gray-500">Owned By: </span>
									Zahid Hassan
								</p>
								<p className="text-md mb-2">Subs: Netflix, Prime, Spotify...</p>
							</div>
							<div className="flex justify-center w-full px-4">
								<button className="btn btn-md btn-outline">
									<MdOutlineShoppingCart />
									Buy now
								</button>
								{/* <button className="btn ">
									<MdOutlineMoreHoriz />
								</button> */}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
