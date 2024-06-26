import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { allsubs } from '../utils/dummyData';
import CreditCard from '../components/CreditCard';

const categories = [
	{ name: 'AI Tools', key: 'ai' },
	{ name: 'Movies & TV', key: 'ott' },
	{ name: 'Professional Tools', key: 'office' },
	{ name: 'Video Editing Tools', key: 'video-editor' },
	{ name: 'Photo Editing Tools', key: 'photo-editor' },
];

const CreateSub = () => {
	const [selectedCat, setSeleectedCat] = useState([]);
	const [selectedSub, setSeleectedSub] = useState([]);
	const subNames = selectedSub.map((s) => s.name);

	const navigate = useNavigate();

	const handleSelectCat = (category) => {
		if (selectedCat.includes(category)) {
			const newSelected = selectedCat.filter((cat) => cat != category);
			setSeleectedCat(newSelected);
		} else {
			setSeleectedCat((prev) => [...prev, category]);
		}
	};

	const handleSelectSub = (sub) => {
		if (subNames.includes(sub.name)) {
			const newSelected = selectedSub.filter((sel) => sel.name != sub.name);
			setSeleectedSub(newSelected);
		} else {
			setSeleectedSub((prev) => [...prev, sub]);
		}
	};

	const featured = allsubs.filter((sub) => sub?.featured);
	const filteredSubs = allsubs.filter((sub) => selectedCat.some((category) => category.key === sub.category));

	return (
		<div className="px-32 py-7">
			<div className="w-full">
				<p className="title">Choose a Category</p>
				<div className="flex gap-2 mt-5">
					{categories.map((category) => (
						<button key={category} onClick={() => handleSelectCat(category)} className={`btn btn-outline ${selectedCat.includes(category) ? 'bg-white text-black' : ''}`}>
							{category.name}
						</button>
					))}
				</div>
			</div>
			{selectedCat.length ? (
				<div className="mt-8">
					<p className="title">Based On Your Selection</p>
					<div className="grid grid-cols-8 gap-5 mt-5">
						{filteredSubs.map((sub) => (
							<div
								onClick={() => handleSelectSub(sub)}
								key={sub.name}
								className={`flex flex-col items-center gap-2 bg-nav w-fit max-w-48 p-5 rounded-lg border ${subNames.includes(sub.name) ? 'border-white' : 'border-transparent'}`}>
								<img className="size-20 object-contain" src={sub.img} alt="" />
								<p className="text-center">{sub.name}</p>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="mt-8">
					<p className="title">Popular Choices</p>
					<div className="flex flex-wrap gap-5 mt-5">
						{featured.map((sub) => (
							<div key={sub.name} className="flex flex-col items-center gap-2 bg-nav w-fit p-5 rounded-lg max-w-48">
								<img className="size-20 object-contain" src={sub.img} alt="" />
								<p>{sub.name}</p>
							</div>
						))}
					</div>
				</div>
			)}

			{selectedSub.length ? (
				<div className="py-10 flex flex-col gap-10">
					<table className="w-full">
						<tr>
							<th>Subscription Name</th>
							<th>Validity</th>
							<th>Price</th>
							<th></th>
						</tr>
						{selectedSub.map((sub) => (
							<tr key={sub.name} className="border-y border-gray-500">
								<td className="flex items-center gap-5">
									<div className="flex flex-col items-center gap-2 bg-nav rounded-lg size-">
										<img className="size-10 object-contain" src={sub?.img || ''} alt="" />
									</div>
									<p className="text-center">{sub.name}</p>
								</td>
								<td>
									<select className="select select-bordered w-full max-w-xs">
										<option selected>30 Days</option>
										<option>1 Year</option>
										<option>Lifetime</option>
									</select>
								</td>
								<td>$20.56</td>
								<td>
									<button onClick={() => handleSelectSub(sub)} className="btn btn-sm btn-error btn-outline">
										Remove
									</button>
								</td>
							</tr>
						))}
					</table>

					<CreditCard />

					<button onClick={() => navigate('/create-package')} className="btn btn-primary mx-auto">
						Create My Subscription
					</button>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default CreateSub;
