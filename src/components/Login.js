import HeaderDecoration from "./atoms/HeaderDecoration";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <section id="login-section">
                <HeaderDecoration text1="Login" />
                <LoginForm />
        </section>
    );
}

export default Login;