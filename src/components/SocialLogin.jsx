import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import google from '../assets/icons/google.png';
import facebook from '../assets/icons/facebook.png';

const SocialLogin = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

	return (
		<>
			{loading ? (
				<button className="btn btn-primary hover:bg-gray-300 bg-gray-100 text-black w-full">
					<span className="loading loading-dots loading-md"></span>
				</button>
			) : (
				<button onClick={() => signInWithGoogle()} className="btn btn-primary hover:bg-gray-300 bg-gray-100 text-black w-full normal-case">
					<img src={google} alt="" className="h-6 w-6 mr-3" />
					Continue With Google
				</button>
			)}

			{fbLoading ? (
				<button className="btn bg-blue-500 w-full">
					<span className="loading loading-dots loading-md"></span>
				</button>
			) : (
				<button onClick={() => signInWithFacebook()} className="btn bg-blue-500 w-full normal-case text-white">
					<img src={facebook} alt="" className="h-6 w-6 mr-3" />
					Continue With Facebook
				</button>
			)}

			{(error || fbError) && <small className="text-error">{error?.message || fbError?.message}</small>}
		</>
	);
};

export default SocialLogin;
