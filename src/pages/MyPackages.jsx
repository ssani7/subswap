import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { MyPacks } from '../utils/dummyData';

const MyPackages = () => {
	return (
		<div>
			<h2 className="text-3xl font-bold text-center py-5">My Subscription Packages</h2>
			<div className="grid grid-cols-4 items-center justify-center mx-auto mt-6">
				{MyPacks.map((d, i) => (
					<Link key={d.name} to={`/my-packages/${i}`}>
						<Card subs={d} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default MyPackages;
