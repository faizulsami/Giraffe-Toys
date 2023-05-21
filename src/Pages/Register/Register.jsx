import { Link } from 'react-router-dom';
import img from '../../images/img.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        createUser(email,password)
        .then(result=>{
            updateUserProfile(name,photo)
            const createUser = result.user;
            setSuccess('Registration Successful');
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })

    }
    return (
        <div className='body container'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <section className="side">
                <img src={img} alt="" />
            </section>
            <section className="main relative left-10 bottom-10 lg:bottom-24">
                <div className="login-container">
                    <p className="title">Register!!!</p>
                    <div className="separator"></div>
                    <p className="welcome-message">Please, provide Register credential to proceed and have access to all our services</p>
                    <form onSubmit={handleRegister} className="login-form">
                        <div className="form-control">
                            <input type="text" name='name' placeholder="Username" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="text" name='photo' placeholder="Photo URL" required />
                            <i className="fas fa-user"></i>
                        </div>
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
                        <input className="submit bg-[#FCE2AD]" type="submit" value="Register" />
                    </form>
                    <p className='relative lg:right-20 lg:top-2 top-3'>Already Have Account? <Link to='/login' className='[color:#FCE2AD]'>Login</Link></p>
                </div>
            </section>
        </div>
    );
};

export default Register;