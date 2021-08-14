import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';

import ValidationMessageLogin from './atoms/ValidationMessageLogin';

const RegisterForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {signup} = useAuth();

    const validateLogin = login => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(login).toLowerCase()))
        return re.test(String(login).toLowerCase());
    }

    const validatePassword = password => {
        const length = password.length;
        console.log(length >= 6 ? true : false);
        return length >= 6 ? true : false;
    }

    const validateRepeatPassword = repeatPassword => {
        const length = repeatPassword.length;
        console.log(length >= 6 && repeatPassword === password ? true : false);
        return (length >= 6 && repeatPassword === password) ? true : false;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLogin("");
        setPassword("");
        setRepeatPassword("");
        if (!validateLogin(login) && !validatePassword(password) && !validateRepeatPassword(repeatPassword)) {
            setError(true);
            console.log("nie poszło");
            return
        }
        try {
            setLoading(true);
            await signup(login, password)
            history.push("/")
        }
        catch {
            setError(true)
            console.log("błąd")
        }
        setLoading(false)
    }

    return (
        <form className="register-data" onSubmit={handleSubmit}>
            <div className="inputs">
                <label htmlFor="register-login">Email</label>
                <input 
                    id="register-login" 
                    name="register-login" 
                    type="email"
                    autoComplete="off"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    style={!error ? null : {borderBottom: "1px solid red"}}
                />
                <ValidationMessageLogin 
                    validationEl={error}
                    text={"The given email is incorrect"}
                />
                <label htmlFor="register-password">Password</label>
                <input 
                    id="register-password" 
                    name="register-password" 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={!error ? null : {borderBottom: "1px solid red"}}
                />
                <ValidationMessageLogin 
                    validationEl={error}
                    text={"Password is too short"}
                />
                <label htmlFor="repeat-password">Repeat password</label>
                <input 
                    id="repeat-password" 
                    name="repeat-password" 
                    type="password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                    style={!error ? null : {borderBottom: "1px solid red"}}
                />
                <ValidationMessageLogin 
                    validationEl={error}
                    text={"Passwords have to be the same"}
                />
            </div>
            <div className="buttons">
                <Link to="/login">Login</Link>
                <input disabled={loading} id="register-submit" type="submit" value="Register"/>
            </div>
        </form>
    );
}

export default RegisterForm;