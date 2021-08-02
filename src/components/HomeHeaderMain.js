import { Link } from 'react-router-dom';
import decoration from '../assets/Decoration.svg';
import headerImage from '../assets/Home-Hero-Image.jpg';

const HomeHeaderMain = () => {
    return (
        <main>
            <h1>Start helping!</h1>
            <h1>Give your unwanted things for charity</h1>
            <img src={decoration} alt='decoration'/>
            <div className="header-links">
                <Link to="/login">Give<br/> away</Link>
                <Link to="/login">Organize<br/> donation</Link>
            </div>
            <img src={headerImage} alt='decoration'/>
        </main>
    );
}

export default HomeHeaderMain;