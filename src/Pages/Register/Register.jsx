import { Link } from 'react-router-dom';
import img from '../../images/img.svg'
import { BsGoogle } from 'react-icons/bs';
const Register = () => {
    return (
        <div className='body container'>
            <section className="side">
                <img src={img} alt="" />
            </section>
            <section className="main relative left-10 bottom-10 lg:bottom-32">
                <div className="login-container">
                    <p className="title">Register!!!</p>
                    <div className="separator"></div>
                    <p className="welcome-message">Please, provide Register credential to proceed and have access to all our services</p>

                    <form className="login-form">
                        <div className="form-control">
                            <input type="text" placeholder="Username" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Photo URL" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" required />
                            <i className="fas fa-lock"></i>
                        </div>
                        <input className="submit bg-[#FCE2AD]" type="submit" value="Register" />
                    </form>
                    <p className='relative lg:right-20 lg:top-2 top-3'>Already Have Account? <Link to='/login' className='[color:#FCE2AD]'>Login</Link></p>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                    </div>
                    <button>
                    <BsGoogle className='w-12'/>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Register;