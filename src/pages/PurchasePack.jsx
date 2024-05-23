import { Link, useLocation, useParams } from 'react-router-dom';
import Card from '../components/Card';
import { aiTools, featuredPacks, moviesAndTV } from '../utils/dummyData';
import CreditCard from '../components/CreditCard';

const PurchasePack = () => {
	const { id } = useParams();
	const location = useLocation();
	const currentURL = location.pathname;

	let pack = {};

	if (currentURL.includes('featured')) {
		pack = featuredPacks[id];
	} else if (currentURL.includes('/ai')) {
		pack = aiTools[id];
	} else if (currentURL.includes('/ott')) {
		pack = moviesAndTV[id];
	}
	const selectedSub = pack;
	console.log('🚀 ~ PurchasePack ~ selectedSub:', selectedSub);

	return (
		<div>
			<div className="flex items-center justify-center flex-row-reverse m-10">
				<div className="w-1/2">
					<Card subs={selectedSub} />
				</div>

				<table className="w-full">
					<tr>
						<th>Subscription Name</th>
						<th>Validity</th>
						<th></th>
					</tr>
					{selectedSub?.subs?.map((sub) => (
						<tr key={sub.name} className=" border-gray-500">
							<td>
								<div className="flex items-center gap-5">
									<div className="flex flex-col items-center gap-2 bg-nav rounded-lg size-">
										<img className="size-10 object-contain" src={sub.img} alt="" />
									</div>
									<p className="text-center">{sub.name}</p>
								</div>
							</td>
							<td>
								<p>{sub.validity}</p>
							</td>
						</tr>
					))}
				</table>
			</div>
			<div>
				<CreditCard />
				<div className="flex justify-center pb-10">
					<Link to="/create-package">
						<button className="btn btn-primary mx-auto">Create My Subscription</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PurchasePack;
