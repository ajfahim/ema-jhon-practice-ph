import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import "./Signup.css";
const Signup = () => {
    const [error, setError] = useState(null)
    const { signUp } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            setError("Password did not match!!");
            return;
        }
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => setError(error.message))

    }
    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleSignup}>
                    <div className="form-title">Sign Up</div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    {error && <p className='error-msg'>{error}</p>}
                    <input className="btn-submit" type="submit" value="Sign Up" />
                </form>

                <p>Already have an account? <Link className='link' to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Signup;