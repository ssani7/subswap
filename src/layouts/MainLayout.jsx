import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div className="pt-20">
				<Outlet />
			</div>
			<Toaster />
		</div>
	);
};

export default MainLayout;
