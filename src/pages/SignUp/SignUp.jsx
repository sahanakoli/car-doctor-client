import img from '../../assets/images/login/login.svg'
import {FaFacebook} from 'react-icons/fa';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';



const SignUp = () => {
    const handleSignUp = e =>{
        e.preventDefault();
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='Name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-3">
                                <input className="btn btn-error" type="submit" value="Sign Up" />
                            </div>
                            <div>
                            <p className='ml-24'>Or Sign Up with</p>
                            <div className='flex gap-6 mt-3 mb-3 ml-24'>
                              <FaFacebook className=' text-xl'></FaFacebook>
                              <TiSocialLinkedinCircular className=' text-2xl'></TiSocialLinkedinCircular>
                              <FcGoogle className=' text-xl'></FcGoogle>
                            </div>
                            <p className='ml-16'>Already have an account? <Link to='/login' className=' text-red-600'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SignUp;