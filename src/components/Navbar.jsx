import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import logo from '../assets/logo.jpg';
// import { MdLogin } from 'react-icons/md';

const navOptions = [
	{ title: 'Collections', link: '' },
	{ title: 'Categories', link: '' },
];

const Navbar = () => {
	const [user] = useAuthState(auth);

	const handleSignOut = async () => {
		await signOut(auth);
		toast.success('Logged out successfully');
	};

	return (
		<div className="w-full  flex items-center justify-between bg-black z-20 px-20 sticky top-0">
			<div className="navbar bg-black">
				<div className="flex-1">
					<Link to="/">
						<img className="size-20 object-cover" src={logo} alt="" />
					</Link>
				</div>
				<div className="flex-none">
					{/* <div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">8</span>
							</div>
						</div>
						<div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
							<div className="card-body">
								<span className="font-bold text-lg">8 Items</span>
								<span className="text-info">Subtotal: $999</span>
								<div className="card-actions">
									<button className="btn btn-primary btn-block">View cart</button>
								</div>
							</div>
						</div>
					</div> */}
					<div className="flex items-center gap-6 mr-8 font-semibold">
						{navOptions.map((option) => (
							<Link key={option.title} to={option.link} className="hover:underline">
								{option.title}
							</Link>
						))}
					</div>
					<div className="dropdown dropdown-end">
						{user?.email ? (
							<div>
								<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
									</div>
								</div>
								<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32 bg-nav">
									{/* <li>
										<a className="justify-between">Profile</a>
									</li> */}
									<li>
										<Link to="/my-packages">My Packages</Link>
									</li>
									<li>
										<p onClick={handleSignOut}>Logout</p>
									</li>
								</ul>
							</div>
						) : (
							<Link to={`/auth/login`} className="btn btn-outline !px-3 !py-3 !flex !gap-2 !min-h-0 !h-auto">
								Sign In
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
