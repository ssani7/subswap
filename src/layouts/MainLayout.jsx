import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLayoutEffect } from 'react';

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

const MainLayout = () => {
	return (
		<div className="relative">
			<Navbar />
			<div className="min-h-[90vh]">
				<Wrapper>
					<Outlet />
				</Wrapper>
			</div>
			<Toaster />
			<Footer />
		</div>
	);
};

export default MainLayout;
