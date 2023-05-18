import './Login.css'
import img from '../../images/img.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {googlePopup,signIn} = useContext(AuthContext);
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLogin = event =>{
        setError('');
        setSuccess('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            setSuccess('Login successful');
            setError('');
            navigate(from,{replace: true});
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const handleGoogleLogin = () =>{
        googlePopup()
        .then((result) => {
            const LoggedUser = result.user;
            navigate(from,{replace: true})
            console.log(LoggedUser);
        })
        .catch((error) => {
            console.log("error", error.message);
        });
    }
    
    return (
        <div className='body container'>
            <section className="side">
                <img src={img} alt="" />
            </section>
            <section className="main relative left-12 bottom-10 lg:bottom-32">
                <div className="login-container">
                    <p className="title">Welcome back</p>
                    <div className="separator"></div>
                    <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Email" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" required />
                            <i className="fas fa-lock"></i>
                        </div>
                        <p className='relative bottom-3 left-3 text-green-500'>{success}</p>
                        <p className='relative bottom-3 left-3 text-red-500'>{error}</p>
                        <input className="submit bg-[#FCE2AD]" type="submit" value="Login" />
                    </form>
                    <p className='relative lg:right-20 lg:top-2 top-3'>New in Giraffe Toys? <Link to='/register' className='[color:#FCE2AD]'>Register</Link></p>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                    </div>
                    <button onClick={handleGoogleLogin}>
                    <BsGoogle className='w-12'/>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Login;