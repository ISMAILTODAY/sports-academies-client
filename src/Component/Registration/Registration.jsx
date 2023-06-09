import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Registration = () => {
    const { createUser, profileUpdate, signInWithGoogle } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {

        const { email, password, name, photo } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                profileUpdate(user, name, photo)
                    .then(() => {
                        const userData = { name: data.name, email: data.email, photo: data.photo }
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
            })
            .catch(() => { })

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
                    .then(() => { })

            })
    }
    return (
        <div className="mt-32 mb-10 flex justify-center ">
            <div className="  shadow-lg p-5 rounded-lg w-[25%]">

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <h1 className="text-center text-3xl font-semibold">Ragistration</h1>

                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                    {errors.name && <span className='text-red-500'>Name is required</span>}

                    <input {...register("email", { required: true })} type="text" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                    {errors.email && <span className='text-red-500'>Email is required</span>}

                    <input {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/ })} type="password"
                        placeholder="Password" className="input input-bordered input-secondary w-full max-w-xs" />
                    {errors.password?.type === 'required' && <span className='text-red-500'>Password must be 6 character</span>}
                    {errors.password?.type === 'minLength' && <span className='text-red-500'>Password is required</span>}
                    {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one Uppercase, one Lowercase and one Special character</span>}

                    <input {...register("photo", { required: true })} type="photo" placeholder="Photo url" className="input input-bordered input-secondary w-full max-w-xs" />
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Registration</button>
                    </div>
                </form>
                <div className='flex justify-center mt-2'>
                    <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mx-auto">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
                <p className='text-center py-3'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;