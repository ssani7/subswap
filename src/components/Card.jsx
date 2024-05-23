/* eslint-disable react/prop-types */
import chatgpt from '../assets/brands/ChatGPT_logo.svg.png';
import midjourny from '../assets/brands/midjourny.png.png';
import dalle from '../assets/brands/dalle.png';
import bard from '../assets/brands/Google_Bard_logo.svg';

const Card = ({ subs }) => {
	console.log('🚀 ~ Card ~ subs:', subs?.subs);
	return (
		<div className="flex items-center justify-center px-3 py-12 rounded-xl bg-black relative w-fit m-auto cursor-pointer">
			<p className="absolute top-3 left-3">{subs?.name || 'SuperSub'}</p>
			<p className="absolute bottom-3 left-3">#27A65B</p>
			<p className="absolute bottom-3 right-3">{subs?.price || '$24.50'}</p>

			<div className="h-[250px] grid grid-cols-2 gap-5 p-5 rounded-xl items-center justify-center gradientCard">
				{/* {[1, 2, 3, 4].map((sub, i) => (
					<img key={i} className="w-20 col-span-1" src={sub.image} alt="" />
				))} */}

				{!subs?.subs?.length ? (
					<>
						<img className="w-20 col-span-1" src={chatgpt} alt="" />
						<img className="w-20 col-span-1" src={midjourny} alt="" />
						<img className="w-20 col-span-1" src={dalle} alt="" />
						<img className="w-20 col-span-1" src={bard} alt="" />
					</>
				) : (
					<>
						{subs?.subs?.map(({ img }, i) => (
							<img key={i} className="w-20 col-span-1" src={img} alt="" />
						))}
						{/* <img className="w-20 col-span-1" src={'https://ibb.co/w67BgtJ'} alt="" /> */}
					</>
				)}

				{/* <img className="w-20 col-span-1" src={chatgpt} alt="" />
				<img className="w-20 col-span-1" src={spotify} alt="" /> */}
			</div>
		</div>
	);
};

export default Card;
