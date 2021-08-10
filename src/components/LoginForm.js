import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className="login-data">
            <div className="inputs">
                <label htmlFor="login">Email</label>
                <input 
                    id="login" 
                    name="login" 
                    type="email"
                    autoComplete="off"
                />
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                />
            </div>
            <div className="buttons">
                <Link to="/register">Register</Link>
                <input id="login-submit" type="submit" value="Login" />
            </div>
        </form>
    );
}

export default LoginForm;