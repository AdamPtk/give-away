import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom';

const HomeHeaderNav = () => {
    return (
        <nav className="nav-home">
            <NavLink 
                exact
                activeClassName="active"
                to="/"
            >
                Start
            </NavLink>
            <Link 
                activeClass="active"
                to="home-instruction"
                spy={true}
                smooth="easeInQuint"
                duration={500}
            >
                What is it about?
            </Link>
            <Link 
                activeClass="active"
                to="home-about"
                spy={true}
                smooth={true}
                duration={500}
            >
                About us
            </Link>
            <Link 
                activeClass="active"
                to="home-cooperation"
                spy={true}
                smooth={true}
                duration={500}
            >
                Charity and organizations
            </Link>
            <Link 
                activeClass="active"
                to="home-contact"
                spy={true}
                smooth={true}
                duration={500}
            >
                Contact
            </Link>
        </nav>
    );
}

export default HomeHeaderNav;