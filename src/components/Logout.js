import { Link } from 'react-router-dom';

import HeaderDecoration from "./atoms/HeaderDecoration";

const Logout = () => {
    return (
        <section id="logout">
            <HeaderDecoration text1="Successful logout!" />
            <Link to="/">Homepage</Link>
        </section>
    );
}

export default Logout;