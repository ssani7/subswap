/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [updating, setUpdating] = useState('');

	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [signInWithEmailAndPassword, emailUser, credLoading, error] = useSignInWithEmailAndPassword(auth);

	const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

	const [user, loading] = useAuthState(auth);
	// const token = useToken();

	useEffect(() => {
		if (user?.email) {
			setUpdating(false);
			navigate(from, { replace: true });
		}
		if (error) setUpdating(false);
	}, [error, from, navigate, user?.email]);

	const handleReset = async () => {
		if (email) {
			try {
				await sendPasswordResetEmail(email);
				toast.success(`Sent reset email to ${email}`);
			} catch (error) {
				console.log(error);
				toast.error(error.message);
			}
		} else {
			toast.error('Please provide email for sending reset email');
		}
	};

	const onSubmit = async (data) => {
		const password = data.password;
		setUpdating(true);
		signInWithEmailAndPassword(email, password);
	};

	if (sending) return <h2>Loading...</h2>;
	return (
		<div className="pt-28 bg-base-100">
			<div className="card mx-6 bg-base-200 shadow-xl md:max-w-lg md:mx-auto">
				<div className="card-body items-center text-center py-10">
					<h2 className="card-title font-bold">Log In</h2>

					<form onSubmit={handleSubmit(onSubmit)} className="form-control w-full mx-auto max-w-lg">
						<label className="label mt-3">
							<span className="label-text">Email Address</span>
						</label>
						<input
							type="email"
							placeholder="Your Email Address"
							className="input input-bordered w-full focus:outline-none focus:ring-2"
							{...register('email', {
								required: 'Email is required',
								onChange: (e) => setEmail(e.target.value),
							})}
						/>
						{/* {errors?.email && <small className="text-error">{errors.email.message}</small>} */}

						<label className="label mt-3">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Your Password"
							className="input input-bordered w-full focus:outline-none focus:ring-2"
							{...register('password', {
								required: 'Password is required',
							})}
						/>
						{/* {errors?.password && <small className="text-error">{errors.password.message}</small>} */}

						<p className="text-sm mt-3 font-semibold">
							Forgot Password?{' '}
							<span className="text-sky-600 link link-hover" onClick={handleReset}>
								Reset Password
							</span>
						</p>

						{/* {resetError && <small className="text-error mt-2">{resetError.message}</small>} */}

						<p className="text-sm mt-3 font-semibold">
							Don't have an account?{' '}
							<Link to="/auth/register" className="text-sky-600 link link-hover">
								Create an account
							</Link>
						</p>

						{loading || updating ? (
							<button className="btn btn-primary hover:bg-gray-300 bg-gray-100 text-black w-full">
								<span className="loading loading-dots loading-md"></span>
							</button>
						) : (
							<input className="btn btn-outline mt-6 normal-case" type="submit" value="Log In" />
						)}

						{error && <small className="text-error">{error.message}</small>}
					</form>

					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
	);
};

export default Login;
