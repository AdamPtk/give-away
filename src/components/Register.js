import HeaderDecoration from "./atoms/HeaderDecoration";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
        <section id="register-section">
                <HeaderDecoration text1="Register" />
                <RegisterForm />
        </section>
    );
}

export default Register;