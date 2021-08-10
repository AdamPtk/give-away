import { Link } from 'react-scroll';
import { NavHashLink } from 'react-router-hash-link';

const HomeHeaderNav = () => {
    return (
        <nav className="nav-home">
            <NavHashLink 
                activeClass="active"
                to="/#home-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                Start
            </NavHashLink>
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