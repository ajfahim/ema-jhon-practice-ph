import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';


const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const { logIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))

    }
    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleLogin}>
                    <div className="form-title">Login</div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    {error && <p className='error-msg'>{error}</p>}
                    <input className="btn-submit" type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <Link className='link' to="/signup">Create New Account</Link></p>
                <div className='or'>
                    <hr /> <p>or</p> <hr />
                </div>
            </div>

        </div>
    );
};

export default Login;