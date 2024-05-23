import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socials = [
	{ name: 'linkedin', icon: <FaLinkedinIn /> },
	{ name: 'facebook', icon: <FaFacebook /> },
	{ name: 'instagram', icon: <FaInstagram /> },
	{ name: 'twitter', icon: <FaTwitter /> },
];

const Footer = () => {
	return (
		<div className="flex flex-col items-center mx-auto py-5 bg-black text-sm">
			<img className="size-20" src="/logo.jpg" alt="" />
			<p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti libero neque dolorum est dolore</p>
			<p className="text-center">Copyright © Subswap 2024</p>

			<div className="flex items-center gap-5 mt-5">
				{socials.map((social, index) => (
					<div key={index}>{social.icon}</div>
				))}
			</div>
		</div>
	);
};

export default Footer;
