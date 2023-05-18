import { Link } from 'react-router-dom';
import img from '../../images/img.svg'
const Register = () => {
    return (
        <div className='body container'>
            <section className="side">
        <img src={img} alt=""/>
    </section>
    <section className="main relative left-10 bottom-10">
        <div className="login-container">
            <p className="title">Register!!!</p>
            <div className="separator"></div>
            <p className="welcome-message">Please, provide Register credential to proceed and have access to all our services</p>

            <form className="login-form">
                <div className="form-control">
                    <input type="text" placeholder="Username" required/>
                    <i className="fas fa-user"></i>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Photo URL" required/>
                    <i className="fas fa-user"></i>
                </div>
                <div className="form-control">
                    <input type="email" placeholder="Email" required/>
                    <i className="fas fa-user"></i>
                </div>
                <div className="form-control">
                    <input type="password" placeholder="Password" required/>
                    <i className="fas fa-lock"></i>
                </div>
                <input className="submit bg-[#FCE2AD]" type="submit" value="Register" />
            </form>
            <p className='relative lg:right-24 lg:top-2 top-3'>Already Have Account? <Link to='/login' className='[color:#FCE2AD]'>Login</Link></p>
        </div>
    </section>
        </div>
    );
};

export default Register;