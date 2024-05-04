import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { MdLogin } from 'react-icons/md';

const Navbar = () => {
	const [user, loading] = useAuthState(auth);

	const handleSignOut = async () => {
		await signOut(auth);
		toast.success('Logged out successfully');
	};

	return (
		<div className="w-full p-5 flex items-center justify-between bg-black">
			Navbar
			<div>
				{user?.email ? (
					<button onClick={handleSignOut} className="btn btn-md btn-outline">
						Sign Out
					</button>
				) : (
					<Link to={`/auth/login`} className="btn btn-outline btn-md">
						<MdLogin />
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
