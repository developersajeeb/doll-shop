import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';
import useTitle from "../hooks/useTitle";

const Register = () => {
    useTitle(Register)
    const [regError, setRegError] = useState('');
    const [emailError, setEmailError] = useState('');
    const { createUser, googleSingIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setRegError('Please add at least one uppercase');
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setRegError('Password must contain at least one Digit.');
            return;
        } else if (password.length < 6) {
            setRegError('Password must be 6 Characters Long.');
            return;
        } else {
            setRegError('');
            createUser(email, password)
                .then(result => {
                    setEmailError('')
                    navigate(from);
                    Swal.fire(
                        'Register Successful!',
                        'You have successfully Registered.',
                        'success'
                    )
                    updateProfile(result.user, {
                        displayName: name, photoURL: photo
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        setEmailError('Invalid Email');
                    }
                })
        }
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
                        <h5 className="text-xl font-bold text-center text-gray-900">Register to Doll Box</h5>
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-2 font-medium text-gray-900">Your Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="Name" required></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@mail.com" required></input>
                        {
                            emailError && <p className="text-red-500 text-sm">{emailError}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 font-medium text-gray-900">Your Photo</label>
                        <input type="url" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="Your photo url" required></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required></input>
                        {
                            regError && <p className="text-red-500 text-sm">{regError}</p>
                        }
                    </div>
                    <button type="submit" className="w-full text-white bg-[#987654] duration-300 hover:bg-[#C19A6B] font-medium rounded-md px-5 py-2.5 text-center">SingUp to your account</button>
                    <h4 className='text-center text-lg font-semibold text-gray-700'>Or SingUp With</h4>
                    <img onClick={handleGoogle} className='w-8 cursor-pointer mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    <Link to='/login'>
                        <div className="font-medium text-gray-500 dark:text-gray-300 mt-4 text-center">
                            Already have an account? <span className="text-[#987654] hover:underline">Login</span>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Register;