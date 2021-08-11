import {useState} from 'react';
import {Link} from 'react-router-dom';

import ValidationMessageLogin from './atoms/ValidationMessageLogin';

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

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

    const handleOnClick = e => {
        e.preventDefault();
        setLogin("");
        setPassword("");
        if (validateLogin(login) && validatePassword(password)) {
            setError(false);
            console.log("poszło");
        } else {
            setError(true);
            console.log("nie poszło");
        }
    }

    return (
        // onSubmit={e => handleOnSubmit(e)}
        <form className="login-data">
            <div className="inputs">
                <label htmlFor="login">Email</label>
                <input
                    id="login" 
                    name="login" 
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
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={!error ? null : {borderBottom: "1px solid red"}}
                />
                <ValidationMessageLogin 
                    validationEl={error}
                    text={"Password is too short"}
                />
            </div>
            <div className="buttons">
                <Link to="/register">Register</Link>
                <input id="login-submit" type="submit" value="Login" onClick={handleOnClick} />
            </div>
        </form>
    );
}

export default LoginForm;