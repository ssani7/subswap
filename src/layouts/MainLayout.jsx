import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div>
			{/* <CustomAppBar /> */}
			<div className="pt-20">
				<Outlet />
			</div>
			<Toaster />
		</div>
	);
};

export default MainLayout;
