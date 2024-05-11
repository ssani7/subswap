import Card from '../components/Card';
import chatgpt from '../assets/brands/ChatGPT_logo.svg.png';
import midjourny from '../assets/brands/midjourny.png.png';
import dalle from '../assets/brands/dalle.png';
import bard from '../assets/brands/Google_Bard_logo.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';

const selectedSub = [
	{ name: 'ChatGPT 4', img: chatgpt, validity: 'Lifetime' },
	{ name: 'Mid-Journey', img: midjourny, validity: '1 Year' },
	{ name: 'Google Bard AI', img: bard, validity: '1 Month' },
	{ name: 'Dall-E-3', img: dalle, validity: '1 Month' },
];

const PackDetails = () => {
	const [showPassword, setShowPassword] = useState('');

	const handleClickShowPassword = (name) => setShowPassword(showPassword == name ? '' : name);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="flex items-center">
			<div className="w-1/2">
				<Card />
			</div>

			<table className="w-full">
				<tr>
					<th>Subscription Name</th>
					<th>Credentials</th>
					<th>Validity</th>
					<th></th>
				</tr>
				{selectedSub.map((sub) => (
					<tr key={sub.name} className="border-y border-gray-500">
						<td>
							<div className="flex items-center gap-5">
								<div className="flex flex-col items-center gap-2 bg-nav rounded-lg size-">
									<img className="size-10 object-contain" src={sub.img} alt="" />
								</div>
								<p className="text-center">{sub.name}</p>
							</div>
						</td>
						<td>
							<div className="flex items-center justify-between w-40 mt-2">
								<p>john@doe.com</p>
								<IconButton onClick={() => toast.success('Copied Email/Username')}>
									<FileCopyIcon fontSize="small" htmlColor="lightgray" />
								</IconButton>
							</div>
							<div className="flex items-center justify-between w-40 mt-2">
								<p>{showPassword === sub.name ? 'aiisawesome' : '*********'}</p>
								<IconButton onClick={() => handleClickShowPassword(sub.name)} onMouseDown={handleMouseDownPassword}>
									{showPassword == sub.name ? <VisibilityOff fontSize="small" htmlColor="lightgray" /> : <Visibility fontSize="small" htmlColor="lightgray" />}
								</IconButton>
							</div>
						</td>
						<td>
							<p>{sub.validity}</p>
						</td>
						<td>
							<a href="https://auth.openai.com/authorize?client_id=TdJIcbe16WoTHtN95nyywh5E4yOo6ItG&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Fchatgpt.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fapi.openai.com%2Fv1&device_id=779aeff6-2ede-448e-8639-0766bbd34590&prompt=login&state=fXoeI6Oe0JBS9QgRZ6x6PifA1tWaP51NsDeV9ZrXf6Y&code_challenge=O4Vnvmx1NoyeqaGiOjI6WA0ziSdzA2N07BAWoIToXmQ&code_challenge_method=S256" target="_blank" rel="noopener noreferrer">
								<Button sx={{ textTransform: 'capitalize' }} variant="outlined">
									Go to Site
								</Button>
							</a>
						</td>
					</tr>
				))}
			</table>
		</div>
	);
};

export default PackDetails;
