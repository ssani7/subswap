import Card from '../components/Card';
import netflix from '../assets/brands/netflix.png';
import prime from '../assets/brands/prime.png';
import spotify from '../assets/brands/spotify.png';
import chatgpt from '../assets/brands/ChatGPT_logo.svg.png';
import midjourny from '../assets/brands/midjourny.png.png';
import dalle from '../assets/brands/dalle.png';
import bard from '../assets/brands/Google_Bard_logo.svg';
import drive from '../assets/brands/drive.png';
import office from '../assets/brands/Microsoft_Office.svg.png';
import icloud from '../assets/brands/ICloud_logo.svg.png';
import { Link } from 'react-router-dom';

const dummyPacks = [
	{ name: 'Super OTT', images: [netflix, prime, spotify], price: 23.43 },
	{ name: 'Big AI', images: [chatgpt, midjourny, bard, dalle], price: 13.0 },
	{ name: 'Productive Amigo', images: [office, icloud, drive], price: 53.3 },
];

const MyPackages = () => {
	return (
		<div>
			<h2 className="text-3xl font-bold text-center py-5">My Subscription Packages</h2>
			<div className="grid grid-cols-4 items-center justify-center mx-auto mt-6">
				{dummyPacks.map((d) => (
					<Link key={d.name} to="/my-packages/1">
						<Card subs={d} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default MyPackages;
