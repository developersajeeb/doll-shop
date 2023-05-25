import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';
import useTitle from "../hooks/useTitle";

const Login = () => {
    useTitle('Login')
    const [logError, setLogError] = useState('');
    const { singIn, googleSingIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                Swal.fire(
                    'Login Successful!',
                    'You have successfully logged in.',
                    'success'
                )
                navigate(from);
                setLogError('')
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    setLogError('Wrong password');
                } else if (error.code === 'auth/user-not-found') {
                    setLogError('User not found');
                }
            })
    }

    const handleGoogle = () => {
        googleSingIn()
            .then(result => {
                console.log('done');
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <main className='py-20 px-4 md:px-0' data-aos="fade-up">
            <div className="w-full max-w-sm p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
                <form className="space-y-6" onSubmit={handleLoginUser}>
                    <div>
                        <h5 className="text-xl font-bold text-center text-gray-900">LogIn to Doll Box</h5>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@mail.com" required></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required></input>
                    </div>
                    {
                        logError && <p className="text-red-500 text-center text-sm">{logError}</p>
                    }
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 text-orange-500"></input>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-[#987654] hover:underline">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-[#987654] duration-300 hover:bg-[#C19A6B] font-medium rounded-md px-5 py-2.5 text-center">Login to your account</button>
                    <h4 className='text-center text-lg font-semibold text-gray-700'>Or sing In with</h4>
                    <img onClick={handleGoogle} className='w-8 cursor-pointer mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    <Link to='/register'>
                        <div className="font-medium text-gray-500 dark:text-gray-300 mt-4 text-center">
                            Not registered? <span className="text-[#987654] hover:underline">Create account</span>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Login;