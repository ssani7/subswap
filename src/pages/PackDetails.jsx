import Card from '../components/Card';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { MyPacks } from '../utils/dummyData';

// const selectedSub = [
// 	{ name: 'ChatGPT 4', img: chatgpt, validity: 'Lifetime' },
// 	{ name: 'Mid-Journey', img: midjourny, validity: '1 Year' },
// 	{ name: 'Google Bard AI', img: bard, validity: '1 Month' },
// 	{ name: 'Dall-E-3', img: dalle, validity: '1 Month' },
// ];

const PackDetails = () => {
	const [showPassword, setShowPassword] = useState('');
	const { id } = useParams();
	const selectedSub = MyPacks[id];

	const handleClickShowPassword = (name) => setShowPassword(showPassword == name ? '' : name);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="flex items-center">
			<div className="w-1/2">
				<Card subs={selectedSub} />
			</div>

			<table className="w-full">
				<tr>
					<th>Subscription Name</th>
					<th>Credentials</th>
					<th>Validity</th>
					<th></th>
				</tr>
				{selectedSub?.subs?.map((sub) => (
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
							<a href={sub.link} target="_blank" rel="noopener noreferrer">
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
