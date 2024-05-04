import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialLogin from '../components/SocialLogin';
import { useAuthState } from 'react-firebase-hooks/auth';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [displayName, setDisplayName] = useState('');
	const [password, setPassword] = useState('');
	const [updating, setUpdating] = useState('');
	const [updateError, setUpdateError] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user?.email) {
			navigate(from, { replace: true });
			// createNewProfile(displayName)
		}
	}, [user?.email]);

	// const [loading, setLoading] = useState('');
	// const [error, setError] = useState('');

	// const token = useToken();

	const onSubmit = async (data) => {
		const email = data.email;
		// const displayName = data.name;

		setUpdating(true);
		try {
			setUpdateError('');
			await createUserWithEmailAndPassword(auth, email, password);
			// await updateProfile(auth.currentUser, { displayName, photoURL: 'https://i.ibb.co/pzpVdPV/no-user-image-icon-3.jpg' })
		} catch (err) {
			console.log(err);
			setUpdateError(err);
			setUpdating(false);
		}
	};

	return (
		<div className="pt-20 bg-base-100">
			<div className="card mx-6 bg-base-200 shadow-xl md:max-w-lg md:mx-auto">
				<div className="card-body items-center text-center">
					<h2 className="card-title font-bold">Sign Up</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="form-control w-full mx-auto max-w-lg">
						<label className="label mt-3">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							placeholder="Your Name"
							className="input input-bordered w-full focus:outline-none focus:ring-2"
							{...register('name', {
								required: 'Name is required',
								onChange: (e) => setDisplayName(e.target.value),
							})}
						/>
						{errors?.name && <small className="text-error">{errors.name.message}</small>}

						<label className="label mt-3">
							<span className="label-text">Email Address</span>
						</label>
						<input
							type="email"
							placeholder="Your Email Address"
							className="input input-bordered w-full focus:outline-none focus:ring-2"
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
									message: 'Provide a valid email address',
								},
							})}
						/>
						{errors?.email && <small className="text-error">{errors.email.message}</small>}

						<label className="label mt-3">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Your Password"
							className="input input-bordered w-full focus:outline-none focus:ring-2"
							{...register('password', {
								required: 'Password is required',
								validate: {
									size: (p) => p.length >= 6 || 'minimum 6 chatacter password required',
									character: (p) => /[a-zA-Z]/.test(p) || 'Must contain a character',
									number: (p) => /\d/.test(p) || 'Must contain a number',
									special: (p) => /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(p) || 'Must contain a special character',
								},
								onBlur: (e) => setPassword(e.target.value),
							})}
						/>
						{errors?.password && <small className="text-error">{errors.password.message}</small>}

						<label className="label mt-3">
							<span className="label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Your Password"
							className="input input-bordered w-full focus:outline-none focus:ring-2"
							{...register('confirmPass', {
								required: 'Password Confirmation is required',
								validate: {
									match: (c) => c === password || 'Passwords do not match',
								},
							})}
						/>
						{errors?.confirmPass && <small className="text-error">{errors.confirmPass.message}</small>}

						<p className="text-sm mt-3">
							Already have an account?{' '}
							<Link to="/auth/login" className="text-sky-600 link link-hover">
								Log in here
							</Link>
						</p>

						{updating ? (
							<button className="btn btn-primary hover:bg-gray-300 bg-gray-100 text-black w-full">
								<span className="loading loading-dots loading-md"></span>
							</button>
						) : (
							<input className="btn btn-outline mt-6 normal-case" type="submit" value="Sign Up" />
						)}

						{updateError && <small className="text-error">{updateError?.message}</small>}
					</form>

					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
	);
};

export default Register;
