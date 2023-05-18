import './Login.css'
import img from '../../images/img.svg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='body container'>
            <section className="side">
        <img src={img} alt=""/>
    </section>
    <section className="main relative left-12">
        <div className="login-container">
            <p className="title">Welcome back</p>
            <div className="separator"></div>
            <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

            <form className="login-form">
                <div className="form-control">
                    <input type="text" placeholder="Username" required/>
                    <i className="fas fa-user"></i>
                </div>
                <div className="form-control">
                    <input type="password" placeholder="Password" required/>
                    <i className="fas fa-lock"></i>
                </div>
                <input className="submit bg-[#FCE2AD]" type="submit" value="Login" />
            </form>
            <p className='relative lg:right-24 lg:top-2 top-3'>New in Giraffe Toys? <Link to='/register' className='[color:#FCE2AD]'>Register</Link></p>
        </div>
    </section>
        </div>
    );
};

export default Login;