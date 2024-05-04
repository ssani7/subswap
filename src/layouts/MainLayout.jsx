import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div className="">
				<Outlet />
			</div>
			<Toaster />
		</div>
	);
};

export default MainLayout;
