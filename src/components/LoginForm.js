const LoginForm = () => {
    return (
        <form className="login-data">
            <label for="login">Email</label>
            <input 
                id="login" 
                name="login" 
                type="email"
                autoComplete="off"
            />
            <label>Password</label>
            <input 
                id="password" 
                name="password" 
                type="password" 
            />
        </form>
    );
}

export default LoginForm;