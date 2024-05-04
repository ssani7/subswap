import { motion } from 'framer-motion';
import netflix from '../assets/brands/netflix.png';
import prime from '../assets/brands/prime.png';
import chatgpt from '../assets/brands/ChatGPT_logo.svg.png';
import spotify from '../assets/brands/spotify.png';

const CreatePack = () => {
	return (
		<div className="overflow-hidden h-[87vh]">
			<motion.p className="text-center title mt-5">Congratulations, Your new subsciption package is ready</motion.p>

			<motion.div
				className="flex items-center justify-center mt-32 px-3 py-12 rounded-xl bg-black relative w-fit mx-auto"
				initial={{ scale: 0.1, rotate: 0, x: 0 }}
				animate={{ scale: 1.5, rotate: 0, x: 0 }}
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
		</div>
	);
};

export default CreatePack;
