import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <form className="register-data">
            <div className="inputs">
                <label htmlFor="register-login">Email</label>
                <input 
                    id="register-login" 
                    name="register-login" 
                    type="email"
                    autoComplete="off"
                />
                <label htmlFor="register-password">Password</label>
                <input 
                    id="register-password" 
                    name="register-password" 
                    type="password" 
                />
                <label htmlFor="repeat-password">Repeat password</label>
                <input 
                    id="repeat-password" 
                    name="repeat-password" 
                    type="password" 
                />
            </div>
            <div className="buttons">
                <Link to="/login">Login</Link>
                <input id="register-submit" type="submit" value="Register" />
            </div>
        </form>
    );
}

export default RegisterForm;