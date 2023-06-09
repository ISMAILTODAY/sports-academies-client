import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthProvider } from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInWithGoogle, signUp } = useContext(AuthProvider)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {

        const { email, password } = data;

        signUp(email, password)
            .then(() => {
                navigate(from)
                Swal.fire('Login successfull')
            })


    };
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const userData = { name: user.displayName, email: user.email, photo: user.photoURL }
                fetch('https://sports-academies-server.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from)
                        Swal.fire('Login successfull')
                    })

            })




    }

    return (
        <div className="hero min-h-screen  mt-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/ })} type="password" placeholder="Password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-red-500'>Password must be 6 character</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>Password is required</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one Uppercase, one Lowercase and one Special character</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mx-auto">
                        <FaGoogle></FaGoogle>
                    </button>
                    <p className='text-center py-3'>New here? <Link to='/registration' className='text-blue-600'>Registration</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;