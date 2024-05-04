import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import Register from '../pages/Reginster';
import CreateSub from '../pages/CreateSub';
import CreatePack from '../pages/CreatePack';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: '/create-sub',
				element: <CreateSub />,
			},
			{
				path: '/create-package',
				element: <CreatePack />,
			},
		],
	},
	{
		path: '/auth',
		// element: <App />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
]);

export default router;
