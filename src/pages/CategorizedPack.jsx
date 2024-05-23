import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { featuredPacks, moviesAndTV, aiTools } from '../utils/dummyData';

const CategorizedPack = () => {
	return (
		<div>
			<section className="xl:px-32 pb-20">
				<h2 className="title my-10 text-center">Popular Subscriptions</h2>

				<div className="grid grid-cols-4 2xl:grid-cols-6 justify-evenly xl:justify-center">
					{featuredPacks.map((sub, i) => (
						<div key={sub.name} className="flex flex-col gap-2 items-center font-bold rounded-xl pb-4 px-2 w-fit mx-auto">
							<Card subs={sub} />
							<div className="w-full px-4">
								<p className="text-md mb-3">
									<span className="text-gray-500">Owned By: </span>
									Zahid Hassan
								</p>
								<p className="text-sm mb-2">
									Subs:
									{sub.subs.map((sub) => (
										<span key={sub.name} className="ml-1">
											{sub.name},
										</span>
									))}
									...
								</p>
							</div>
							<div className="flex justify-start w-full px-4">
								<Link to={`/featured/${i}`}>
									<button className="btn btn-md btn-outline">
										<MdOutlineShoppingCart />
										Buy now
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="xl:px-32 pb-20">
				<h2 className="title my-10 text-center">AI Bundles</h2>

				<div className="grid grid-cols-4 2xl:grid-cols-6 justify-evenly xl:justify-center">
					{aiTools.map((sub, i) => (
						<div key={sub.name} className="flex flex-col gap-2 items-center font-bold rounded-xl pb-4 px-2 w-fit mx-auto">
							<Card subs={sub} />
							<div className="w-full px-4">
								<p className="text-md mb-3">
									<span className="text-gray-500">Owned By: </span>
									Zahid Hassan
								</p>
								<p className="text-sm mb-2">
									Subs:
									{sub.subs.map((sub) => (
										<span key={sub.name} className="ml-1">
											{sub.name},
										</span>
									))}
									...
								</p>
							</div>
							<div className="flex justify-start w-full px-4">
								<Link to={`/ai/${i}`}>
									<button className="btn btn-md btn-outline">
										<MdOutlineShoppingCart />
										Buy now
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="xl:px-32 pb-20">
				<h2 className="title my-10 text-center">Entertainment Bundles</h2>

				<div className="grid grid-cols-4 2xl:grid-cols-6 justify-evenly xl:justify-center">
					{moviesAndTV.map((sub, i) => (
						<div key={sub.name} className="flex flex-col gap-2 items-center font-bold rounded-xl pb-4 px-2 w-fit mx-auto">
							<Card subs={sub} />
							<div className="w-full px-4">
								<p className="text-md mb-3">
									<span className="text-gray-500">Owned By: </span>
									Zahid Hassan
								</p>
								<p className="text-sm mb-2">
									Subs:
									{sub.subs.map((sub) => (
										<span key={sub.name} className="ml-1">
											{sub.name},
										</span>
									))}
									...
								</p>
							</div>
							<div className="flex justify-start w-full px-4">
								<Link to={`/ott/${i}`}>
									<button className="btn btn-md btn-outline">
										<MdOutlineShoppingCart />
										Buy now
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default CategorizedPack;
