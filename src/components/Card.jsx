import chatgpt from '../assets/brands/ChatGPT_logo.svg.png';
import spotify from '../assets/brands/spotify.png';
import prime from '../assets/brands/prime.png';

const Card = ({ subs }) => {
	return (
		<div className="flex items-center justify-center px-3 py-12 rounded-xl bg-black relative w-fit">
			<p className="absolute top-3 left-3">SuperSub</p>
			<p className="absolute bottom-3 left-3">#27A65B</p>
			<p className="absolute bottom-3 right-3">$25.65</p>
			<div className="h-[250px] grid grid-cols-2 gap-5 p-5 rounded-xl items-center justify-center gradientCard">
				{/* {[1, 2, 3, 4].map((sub, i) => (
					<img key={i} className="w-20 col-span-1" src={sub.image} alt="" />
				))} */}

				<img className="w-20 col-span-1" src={prime} alt="" />
				<img className="w-20 col-span-1" src={chatgpt} alt="" />
				<img className="w-20 col-span-1" src={spotify} alt="" />
			</div>
		</div>
	);
};

export default Card;
